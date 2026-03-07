import SearchInput from './SearchInput';
import InfoBar from './InfoBar'

export default function Header({handleSubmit, apiData, error, loading}) {
    return (
        <>
            <p className="absolute top-[5%] md:top-[20%] justify-self-center text-3xl md:text-4xl">IP Address Tracker</p>
            <div className="absolute top-[20%] md:top-[40%] justify-self-center">
            <SearchInput setQuery={handleSubmit}/>
            </div>
            <div className="w-[70%] justify-self-center">
            <InfoBar apiData={apiData}/>
            </div>
            <div className="w-full text-center absolute top-[60%] md:top-[65%]">
            {loading ? <span className="text-md text-red-800">{loading}</span> : <></>}
            {error ? <span className="text-md text-red-800">{error}</span> : <></>}
            </div>
        </>
    )
}