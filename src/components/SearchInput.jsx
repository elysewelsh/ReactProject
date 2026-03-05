import  { IPContext } from '../context/AppProvider'
import { useState, useContext } from 'react'



export default function SearchInput () {

    const [input, setInput] = useState('');
    const {setQuery} = useContext(IPContext);

    return (
            <form className="flex flex-col justify-start max-w-[30vw] m-4 p-4 gap-3 border-1 rounded-xl" onSubmit={() => setQuery(input)}>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for any IP address or domain"
                />
                <button type="submit">img</button>
            </form>
    )
}