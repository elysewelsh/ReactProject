import { ResponseContext } from "../context/MapContext"

export default function InfoBar () {

    const { apiData } = useContext(ResponseContext);

    return (
        <>
        <div>
            <div>
                {apiData.ipAddress}
            </div>
            <div>
                {apiData.City}, {apiData.region}
            </div>
            <div>
               UTC -{apiData.timezone}
            </div>
            <div>
                {apiData.ISP}
            </div>
        </div>
        </>
    )
}