import { useState, useEffect } from 'react'
import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'
import ValidateIP from './utils/ValidateIP'
import FormatAPIData from './utils/FormatAPIData'

import './App.css'
import AppProviders from './context/AppProvider'

function App() {
// //set to user's IP address initally
// const [input, setInput] = useState('')

// useEffect(() => {
// //get user IP address
// let url = 'https://api.ipify.org?format=json'
// const { data, loading, error } = useFetchData(url);
// if (loading) {
//     // what to do?
//     }
// if (error) {
//     // also what to do?
//     }
// const formattedUserIP = data.ip;
// setInput(formattedUserIP);
// return formattedUserIP;
// }, [])

// useEffect(() => {
// //load new image every time input changes
// if (!input) {
//     throw error("Please input a valid IP address")
// }
// if (!ValidateIP(input)) {
//     // is this the right way to do that?
//     throw error("Not a valid IP format")
// }
// let url = 'https://geo.ipify.org/api/v2/country?apiKey='+API_KEY+'&ipAddress='+input
// const { data, loading, error } = useFetchData(url);
// if (loading) {
//     // what to do?
//     }
// if (error) {
//     // also what to do?
//     }
// // obvi needs to be re-formatted without types, add state
// return FormatAPIData(data);

// },[input])

  return (
    <AppProviders>
        <Header />
        <InfoBar />
        <Map />
    </AppProviders>
  )
}

export default App
