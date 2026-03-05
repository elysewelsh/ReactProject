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
import useFetch from './hooks/useFetch'
import useDebounce from './hooks/useDebounce'
const API_KEY = import.meta.env.VITE_API_KEY

function App() {

    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('https://api.ipify.org?format=json');
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');

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

    const debouncedInput = useDebounce(query, 3000);

    // const { data, loading, setLoading, error, setError } = useFetch(url);
        const { data } = useFetch(url);


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
        if (data  !== "undefined") {
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

// runs when input changes, returns data from useFetch
        useEffect(() => {
        //load new image every time input changes
        if (!debouncedInput) {
            setError("Please input a valid IP address")
        }
        if (isValidIP(debouncedInput)) {
            setLoading(true);
            setUrl('https://geo.ipify.org/api/v2/country?apiKey='+API_KEY+'&ipAddress='+debouncedInput);  
        } else {
            setError("Not a valid IP format")
        }   
    }, [debouncedInput]);

  return (
    // <AppProviders>
    <>
        <Header/>
        <InfoBar apiData={apiData}/>
        <Map mapData={mapData}/>
    </>
    // </AppProviders>
  )
}

export default App
