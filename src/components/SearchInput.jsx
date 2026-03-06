import  { IPContext } from '../context/AppProvider'
import { useState } from 'react'



export default function SearchInput ({setQuery}) {

    const [input, setInput] = useState('');
    // const {setQuery} = useContext(IPContext);
function handle (e) {
e.preventDefault();
setQuery(input)
}
    return (
            <form className="flex flex-col justify-start max-w-[30vw] m-4 p-4 gap-3 border-1 rounded-xl" onSubmit={handle}>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for any IP address or domain"
                />
                <button type="submit">img</button>
            </form>
    )
}