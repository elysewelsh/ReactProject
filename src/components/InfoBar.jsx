// import { useContext } from 'react'
// import { ResponseContext } from "../context/AppProvider"

export default function InfoBar (apiData) {

    // const { apiData } = useContext(ResponseContext);

    return (
        <>
        <div>
            <div>
                <h2>IP Address</h2>
                <p>{apiData.ip}</p>
            </div>
            <div>
                <h2>Location</h2>
                <p>{apiData.city}, {apiData.state}</p>
            </div>
            <div>
                <h2>Timezone</h2>
              <p> UTC -{apiData.timezone}</p>
            </div>
            <div>
                <h2>ISP</h2>
                <p>{apiData.isp}</p>
            </div>
        </div>
        </>
    )
}