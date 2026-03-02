export default function Header() {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <SearchInput />
            {error ?
            <span>Error: {}</span> :
            <></>
            }
        </>
    )
}