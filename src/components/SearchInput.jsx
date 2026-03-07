import { useState } from 'react'
import Arrow from '../assets/icon-arrow.svg';

export default function SearchInput ({setQuery}) {

    const [input, setInput] = useState('');

    function handle (e) {
        e.preventDefault();
        setQuery(input)
    }
    
    return (
            <form className="flex flex-row justify-center min-w-[70vw] md:min-w-[30vw] h-[3.5rem] m-4" onSubmit={handle}>
                <input
                className="bg-white flex-grow text-gray-800 px-4 rounded-l-xl"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for any IP address or domain"
                />
                <button className="h-[100%] right-0 rounded-r-xl"type="submit">
                    <img src={Arrow}/>
                </button>
            </form>
    )
}