import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'
import './App.css'
import { useState, useEffect } from "react"
import BigBG from './assets/pattern-bg-desktop.png'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
    const [data, setData] = useState("undefined");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(null);


    const [mapData, setMapData] = useState({
            latitude: 0,
            longitude: 0,
            isp: '',
            ip: '',
            city: '',
            state: '',
            timezone: '',
            zip: ''
        }
    );

    const [apiData, setAPIData] = useState({
            latitude: 0,
            longitude: 0,
            isp: '',
            ip: '',
            city: '',
            state: '',
            timezone: '',
            zip: ''
        }
    );

    useEffect (() => {
        async function getFirstIP () {
        const response = await fetch('https://api.ipify.org?format=json');
        const firstIP = await response.json();
        console.log(firstIP.ip);
        setQuery(firstIP.ip);
        };
        getFirstIP();
    }, [])

    useEffect(() => {
        if (!url) return; // Don't fetch if URL is not provided
    
        const controller = new AbortController(); // For cleanup
        
        setError(null); // Reset error on new fetch
        setLoading(true);
    
        const fetchData = async () => {
            
            try {
                const response = await fetch(url, { signal: controller.signal });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (result.location.lat !== null || result.location.lat !== "undefined") {
                    setData(result);
                } else {
                    console.log(result);
                };
            } catch (err) {
                if (err.name !== 'AbortError') { // Don't set error if aborted
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();

    // Cleanup function
        return () => {
        controller.abort();
        };
    }, [url]);



// runs when data returns and sets state of returned data to use in Map
    useEffect(() => {
        if (!data) return;

        let apiDataT = {
            latitude: 0,
            longitude: 0,
            isp: '',
            ip: '',
            city: '',
            state: '',
            timezone: '',
            zip: ''
        };

        if (!data || data !== "undefined") {
            console.log(data);
            data.location.lat ? apiDataT.latitude = data.location.lat : apiDataT.latitude = 0;
            data.location.lng ? apiDataT.longitude = data.location.lng : apiDataT.longitude = 0;
            data.isp ? apiDataT.isp = data.isp : apiDataT.isp = '';
            data.ip ? apiDataT.ip = data.ip : apiDataT.ip = '';
            data.location.city ? apiDataT.city = data.location.city : apiDataT.city = '';
            data.location.region ? apiDataT.state = data.location.region : apiDataT.state = '';
            data.location.timezone ? apiDataT.timezone = data.location.timezone : apiDataT.timezone = '';
            data.location.postalcode ? apiDataT.zip = data.location.postalcode : apiDataT.zip = '';
            setAPIData({
                latitude: apiDataT.latitude,
                longitude: apiDataT.longitude,
                isp: apiDataT.isp,
                ip: apiDataT.ip,
                city: apiDataT.city,
                state: apiDataT.state,
                timezone: apiDataT.timezone,
                zip: apiDataT.zip
            });
        }
    }, [data])

    useEffect(() => {
        if (!apiData) return;
        if (apiData.latitude !== 0) {
            setMapData(apiData)
        } return;
    }, [apiData])

    function handleSubmit (input) {
        setQuery(input);
        console.log(input);
    };

// runs when input changes, returns data from useFetch
    useEffect(() => {
        if (!query) return;
        // function isValidIP (ip) {
        // const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        // return ipRegex.test(ip);
        // }
        //load new image every time input changes

        // if (isValidIP(query)) {
            console.log("valid query loading:"+ query);
            setError('');
            setLoading(true);
            setUrl('https://geo.ipify.org/api/v2/country,city?apiKey='+API_KEY+'&ipAddress='+query);
        // } else {
        //     setError("Not a valid IP format")
        //     console.log("there's a valid IP format errrrrrrror")
        // }   
    }, [query]);

  return (
    <>
        <header 
            className="absolute w-full h-[40%] bg-cover bg-center bg-no-repeat z-10"
            style={{backgroundImage: `url(${BigBG})`}}
        >
            <Header 
                handleSubmit={handleSubmit}
                apiData={apiData}
                error={error} 
                loading={loading}
            />
        </header>
        <div className="relative -z-10">
        <Map mapData={mapData}/>
        </div>
    </>
  )
}

export default App


// this is how the api response comes back from the api geo request{
    //     ip: '', //ip address
    //     location: {
    //         country: '',
    //         region: '', //state
    //         city: '', //city
    //         lat: 0,
    //         lng: 0,
    //         postalcode: '', //zip
    //         timezone: '', //timezone
    //         geonameId: 0
    //     },
    //     as: {
    //         as: 0,
    //         name: '',
    //         route: '',
    //         domain: '',
    //         type: ''
    //     },
    //     isp: '' //isp
    //     }
    // )
