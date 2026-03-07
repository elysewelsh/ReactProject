import SearchInput from './SearchInput';
import InfoBar from './InfoBar'
// import ErrorHandler from './ErrorHandler';

export default function Header({handleSubmit, apiData, error, loading}) {
    return (
        <>
            <h1 className="absolute top-[20%] justify-self-center">IP Address Tracker</h1>
            <div className="absolute top-[40%] justify-self-center">
            <SearchInput setQuery={handleSubmit}/>
            </div>
            <div className="w-[70%] justify-self-center">
            <InfoBar apiData={apiData}/>
            </div>
            {loading ? <span>{loading}</span> : <></>}
            {error ? <span>{error}</span> : <></>}
        </>
    )
}