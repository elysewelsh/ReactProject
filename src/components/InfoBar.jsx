// import { useContext } from 'react'
// import { ResponseContext } from "../context/AppProvider"

export default function InfoBar ({apiData}) {

    // const { apiData } = useContext(ResponseContext);

    return (
        <>
        <div className="absolute top-[80%] flex flex-row justify-apart border-1 -mb-20 w-[70%] bg-white">
            <div className="flex flex-col w-full py-8 pl-8 border-1">
                <h2 className="text-gray-400">IP Address</h2>
                <p className="mt-8 text-gray-900">{apiData.ip}</p>
            </div>
            <div className="flex flex-col w-full p-8 border-1">
                <h2 className="text-gray-400">Location</h2>
                <p className="mt-8 text-gray-900">{apiData.city}, {apiData.state}</p>
            </div>
            <div className="flex flex-col w-full p-8 border-1">
                <h2 className="text-gray-400">Timezone</h2>
                <p className="mt-8 text-gray-900"> UTC -{apiData.timezone}</p>
            </div>
            <div className="flex flex-col w-full p-8 border-1">
                <h2 className="text-gray-400">ISP</h2>
                <p className="mt-8 text-gray-900">{apiData.isp}</p>
            </div>
        </div>
        </>
    )
}