import SearchInput from './SearchInput';
// import ErrorHandler from './ErrorHandler';

export default function Header({handleSubmit}) {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <SearchInput setQuery={handleSubmit}/>
            {/* <ErrorHandler/> */}
        </>
    )
}