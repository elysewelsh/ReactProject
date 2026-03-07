// import { useContext } from 'react'
// import { ResponseContext } from "../context/AppProvider"

export default function InfoBar ({apiData}) {

    // const { apiData } = useContext(ResponseContext);

    return (
        <>
        <div className="absolute top-[80%]  border-1 -mb-20 w-[70%] bg-white rounded-lg">
        <div className="flex flex-row justify-apart m-8">
            <div className="flex flex-col w-full pl-8">
                <h2 className="text-gray-400">IP Address</h2>
                <p className="mt-8 text-gray-900 text-4xl font-medium">{apiData.ip}</p>
            </div>
            <div className="flex flex-col w-full pl-8 border-l-2 border-gray-400">
                <h2 className="text-gray-400">Location</h2>
                <p className="mt-8 text-gray-900 text-4xl font-medium">{apiData.city}, {apiData.state}</p>
            </div>
            <div className="flex flex-col w-full pl-8 border-l-2 border-gray-400">
                <h2 className="text-gray-400">Timezone</h2>
                <p className="mt-8 text-gray-900 text-4xl font-medium"> UTC -{apiData.timezone}</p>
            </div>
            <div className="flex flex-col w-full pl-8 border-l-2 border-gray-400">
                <h2 className="text-gray-400">ISP</h2>
                <p className="mt-8 text-gray-900 text-4xl font-medium">{apiData.isp}</p>
            </div>
        </div>
        </div>
        </>
    )
}