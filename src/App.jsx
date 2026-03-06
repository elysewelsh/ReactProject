// import { useState, useEffect } from 'react'
import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'
// import { IPContext, ResponseContext } from './context/AppProvider'

import './App.css'
// import AppProviders from './context/AppProvider'

import { useState, useEffect } from "react"
import isValidIP from './utils/ValidateIP'
// import formatAPIData from '../utils/FormatAPIData'
// import useFetch from './hooks/useFetch'
// import useDebounce from './hooks/useDebounce'
const API_KEY = import.meta.env.VITE_API_KEY
const options = {};

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('');
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');


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
    )

    // const debouncedInput = useDebounce(query, 3000);

    // const { data, loading, setLoading, error, setError } = useFetch(url);
        // const { data } = useFetch(url);

useEffect (() => {
    setUrl('https://api.ipify.org?format=json');
}, [])

  useEffect(() => {
    if (!url) return; // Don't fetch if URL is not provided
 
    const controller = new AbortController(); // For cleanup
    setData(null); // Reset data on new fetch
    setError(null); // Reset error on new fetch
    setLoading(true);
 
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        // const stringData = JSON.stringify(result)
        // setData(stringData);
        setData(result);
        console.log(result);
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
  }, [url, options]);



// runs when data returns and sets state of returned data to use in Map
    useEffect(() => {
        // formatAPIData(data);
        // setAPIData({
        //         latitude: 0,
        //         longitude: 0,
        //         isp: '',
        //         ip: '',
        //         city: '',
        //         state: '',
        //         timezone: '',
        //         zip: ''
        //     });
        console.log("second useEffect:" + data)
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
        console.log(data);
        if (data && data.location) {
            console.log("insideif");
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
        if (apiData.latitude !== 0) {
            setMapData(apiData)
        } else {
            setQuery(apiData.ip)
        }
    }, [apiData])

    function handleSubmit (input) {
        setQuery(input);
        console.log(input);
    };

// runs when input changes, returns data from useFetch
        useEffect(() => {
        //load new image every time input changes
        if (!query) {
            setError("Please input a valid IP address")
            console.log("there's an error")
        }
        if (isValidIP(query)) {
            console.log("insideloading");
            setLoading(true);
            setUrl('https://geo.ipify.org/api/v2/country?apiKey='+API_KEY+'&ipAddress='+query);  
        } else {
            setError("Not a valid IP format")
            console.log("there's a valid IP format errrrrrrror")
        }   
    }, [query]);

  return (
    // <AppProviders>
    <>
        <Header handleSubmit={handleSubmit}/>
        <InfoBar apiData={apiData}/>
        <Map mapData={mapData}/>
    </>
    // </AppProviders>
  )
}

export default App


    //probably don't need this state
    // const [apiResponse, setAPIResponse] = useState({
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
