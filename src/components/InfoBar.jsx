import { ResponseContext } from "../context/AppProvider"

export default function InfoBar () {

    const { apiData } = useContext(ResponseContext);

    return (
        <>
        <div>
            <div>
                <h2>IP Address</h2>
                <p>{apiData.ipAddress}</p>
            </div>
            <div>
                <h2>Location</h2>
                <p>{apiData.City}, {apiData.region}</p>
            </div>
            <div>
                <h2>Timezone</h2>
              <p> UTC -{apiData.timezone}</p>
            </div>
            <div>
                <h2>ISP</h2>
                <p>{apiData.ISP}</p>
            </div>
        </div>
        </>
    )
}