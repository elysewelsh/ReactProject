// import { handleRequest } from "../api/api";
// import { DataError, handleError } from "../utils/errorHandler";
// import { fillElements } from "../models/fillElements";

import { ResponseContext } from "../context/AppProvider";

export function formatAPIdata () {

    const { apiResponse, setAPIData } = useContext(ResponseContext)

    if (apiResponse  !== "undefined") {
        setAPIData({
                latitude: 0,
                longitude: 0,
                isp: '',
                ip: '',
                city: '',
                state: '',
                timezone: '',
                zip: ''
            });
        apiResponse.location.lat &&
            setAPIData({
                ...prevAPIData, 
                latitude: apiResponse.location.lat
            });
        apiResponse.location.lng &&
            setAPIData({
                ...prevAPIData, 
                longitude: apiResponse.location.lng
            });
        apiResponse.location.city &&
            setAPIData({
                ...prevAPIData, 
                city: apiResponse.location.city
            });
        apiResponse.location.region &&
            setAPIData({
                ...prevAPIData, 
                state: apiResponse.location.region
            });
        apiResponse.location.country &&
            setAPIData({
                ...prevAPIData, 
                country: apiResponse.location.country
            });
        apiResponse.location.postalcode &&
            setAPIData({
                ...prevAPIData, 
                zip: apiResponse.location.postalcode
            });
        apiResponse.location.timezone &&
            setAPIData({
                ...prevAPIData, 
                timezone: apiResponse.location.timezone
            });
        apiResponse.ip &&
            setAPIData({
                ...prevAPIData, 
                ip: apiResponse.ip
            });
        apiResponse.isp &&
            setAPIData({
                ...prevAPIData, 
                isp: apiResponse.isp
            });
        } else {
            throw error("API data is undefined");
        }
}

    // const handleAdd = (e) => {
    //     e.preventDefault();
    //     addToDo(input);
    //     setInput('');
    // }

    //     const handleChange = (newCount) => {
    //     setCounter(newCount);
    //     setHistory(prevHistory => [...prevHistory, newCount]);

    // };

                    // let coordinates = {
                    //     lat: reply.location.lat,
                    //     lng: reply.location.lng
                    //     };
                    // let pageFillInfo = (coordinates, reply.isp, reply.ip, reply.location.city, reply.location.region, reply.location.timezone, reply.location.postalcode);
                    // if (pageFillInfo !== "undefined") {
                    // return pageFillInfo;
