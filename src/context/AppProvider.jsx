import { createContext, useState, useEffect } from "react"
import ErrorHandler from '../utils/ErrorHandler'
import ValidateIP from '../utils/ValidateIP'
import FormatAPIData from '../utils/FormatAPIData'

export const IPContext = createContext('')
export const ResponseContext = createContext({})

function AppProviders({ children }) {

    const [input, setInput] = useState('')

    //probably don't need this state
    const [apiResponse, setAPIResponse] = useState({
        ip: '', //ip address
        location: {
            country: '',
            region: '', //state
            city: '', //city
            lat: 0,
            lng: 0,
            postalcode: '', //zip
            timezone: '', //timezone
            geonameId: 0, //necessary?
        },
        as: {
            as: 0,
            name: '',
            route: '',
            domain: '',
            type: ''
        },
        isp: '' //isp
        }
    )

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


    // runs at first and sets input state
    useEffect(() => {
        //get user IP address
        let url = 'https://api.ipify.org?format=json'
        const { data, loading, error } = useFetchData(url);
        if (loading) {
            // what to do?
            }
        if (error) {
            // also what to do?
            }
        const formattedUserIP = data.ip;
        setInput(formattedUserIP);
    }, [])

    // runs after input updated (initially on mount, then when user updates)
    useEffect(() => {
        //load new image every time input changes
        if (!input) {
            throw error("Please input a valid IP address")
        }
        if (!ValidateIP(input)) {
            // is this the right way to do that?
            throw error("Not a valid IP format")
        }
        let url = 'https://geo.ipify.org/api/v2/country?apiKey='+API_KEY+'&ipAddress='+input
        const { data, loading, error } = useFetchData(url);
        if (loading) {
            // what to do?
            }
        if (error) {
            // also what to do?
            }
        // obvi needs to be re-formatted without types, add state
        FormatAPIData(data);
    },[input])

        return (
            // Step 2: Provide the context (add a value prop)
                        <ResponseContext.Provider value ={{setAPIData, apiData}}>
                            <IPContext.Provider value={{input, handleSearch}}>
                                {children}
                            </IPContext.Provider>
                        </ResponseContext.Provider>
    
        )
    }
    
    export default AppProviders