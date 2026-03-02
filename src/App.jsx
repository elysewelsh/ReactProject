// import { useState, useEffect } from 'react'
import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'

import './App.css'
import AppProviders from './context/AppProvider'

function App() {

// do I import all the useEffects here or are they auto-inherited by way of the wrapper?

  return (
    <AppProviders>
        <Header />
        <InfoBar />
        <Map />
    </AppProviders>
  )
}

export default App
