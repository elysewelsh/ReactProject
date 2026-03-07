export default function InfoBar ({apiData}) {

    return (
        <>
        <div className="absolute max-h-[30vh] top-[80%] md:top-[80%] -mb-20 w-[70%] bg-white rounded-lg">
        <div className="flex flex-col max-h-[35vh] md:flex-row md:justify-apart m-8">
            <div className="flex flex-col w-full md:pl-8">
                <h2 className="text-gray-400">IP Address</h2>
                <p className="md:mt-8 text-gray-900 text-2xl md:text-4xl font-medium">{apiData.ip}</p>
            </div>
            <div className="flex flex-col w-full md:pl-8 md:border-l-2 md:border-gray-400">
                <h2 className="text-gray-400">Location</h2>
                <p className="md:mt-8 text-gray-900 text-2xl md:text-4xl font-medium">{apiData.city}, {apiData.state}</p>
            </div>
            <div className="flex flex-col w-full md:pl-8 md:border-l-2 md:border-gray-400">
                <h2 className="text-gray-400">Timezone</h2>
                <p className="md:mt-8 text-gray-900 text-2xl md:text-4xl font-medium"> UTC -{apiData.timezone}</p>
            </div>
            <div className="flex flex-col w-full md:pl-8 md:border-l-2 md:border-gray-400">
                <h2 className="text-gray-400">ISP</h2>
                <p className="md:mt-8 text-gray-900 text-2xl md:text-4xl font-medium">{apiData.isp}</p>
            </div>
        </div>
        </div>
        </>
    )
}