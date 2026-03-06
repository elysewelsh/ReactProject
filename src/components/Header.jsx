import SearchInput from './SearchInput';
import InfoBar from './InfoBar'
// import ErrorHandler from './ErrorHandler';

export default function Header({handleSubmit, apiData, error, loading}) {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <SearchInput setQuery={handleSubmit}/>
            <div className="w-[70%] justify-self-center">
            <InfoBar apiData={apiData}/>
            </div>
            {loading ? <span>{loading}</span> : <></>}
            {error ? <span>{error}</span> : <></>}
        </>
    )
}