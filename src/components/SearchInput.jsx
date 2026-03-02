import IPContext from '../context/AppProvider'

export default function SearchInput () {

    const { handleSearch, input } = useContext(IPContext);

    return (
            <form className="flex flex-col justify-start max-w-[30vw] m-4 p-4 gap-3 border-1 rounded-xl" onSubmit={handleSearch}>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search for any IP address or domain"
                />
                <button type="submit">img</button>
            </form>
    )
}