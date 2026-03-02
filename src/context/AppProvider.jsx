// maybe just API results data context? Necessary? 
// Example of how to update the context in all the ways from Lab10.3
// would move all states to here

import { createContext, useState, useEffect } from "react"

export const IPContext = createContext('')
export const ResponseContext = createContext({})


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
const responseAPI = FormatAPIData(data);
// this needs to be in the response format
setAPIData(responseAPI);
},[input])





function AppProviders({ children }) {

        const [toDos, setToDos] = useState(() => {
        const storedToDos = localStorage.getItem('todolist');
        if (storedToDos) {return JSON.parse(storedToDos)};
        return [];
    })

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDos));
    },
        [toDos]
    );

    const toggleToDo = (id) => {
    setToDos(prevToDos => prevToDos.map(toDo => toDo.id === id ? {...toDo, completed: !toDo.completed } : toDo));
}

    const addToDo = (text) => {
        const newToDo = {
            id: Date.now(),
            // id: ((Math.random()).toFixed(2)+(Math.random()).toFixed(3)+(Math.random()).toFixed(1)),
            text: text,
            completed: false
        }
        setToDos(prevToDos => [...prevToDos, newToDo])
    }

    const editToDo = (id, newText) => {
        setToDos((prevToDos) => prevToDos.map(toDo => toDo.id === id ? {...toDo, text: newText } : toDo))
    }

    const deleteToDo = (id) => {setToDos((prevToDos) => prevToDos.filter(todo => todo.id !== id)) }

        return (
            // Step 2: Provide the context (add a value prop)
                        <ResponseContext.Provider value ={{apiData}}>
                            <IPContext.Provider value={{input}}>
                    {children}
                                </IPContext.Provider>
                        </ResponseContext.Provider>
    
        )
    }
    
    export default AppProviders