import { useState, useEffect } from 'react'

import './App.css'

function App() {
//set to user's IP address initally
const [input, setInput] = useState()

useEffect(() => {
//get user IP address
}, [])

useEffect(() => {
//load new image every time input changes
},[input])
  

  return (
    <>
    <Header />
    <Map />
    </>
  )
}

export default App
