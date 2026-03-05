import { ResponseContext } from "../context/AppProvider";
import { useContext } from 'react';

export default function formatAPIdata (data) {

    const { setAPIData } = useContext(ResponseContext)

    if (data  !== "undefined") {
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
        data.location.lat &&
            setAPIData({
                ...prevAPIData, 
                latitude: data.location.lat
            });
        data.location.lng &&
            setAPIData({
                ...prevAPIData, 
                longitude: data.location.lng
            });
        data.location.city &&
            setAPIData({
                ...prevAPIData, 
                city: data.location.city
            });
        data.location.region &&
            setAPIData({
                ...prevAPIData, 
                state: data.location.region
            });
        data.location.country &&
            setAPIData({
                ...prevAPIData, 
                country: data.location.country
            });
        data.location.postalcode &&
            setAPIData({
                ...prevAPIData, 
                zip: data.location.postalcode
            });
        data.location.timezone &&
            setAPIData({
                ...prevAPIData, 
                timezone: data.location.timezone
            });
        data.ip &&
            setAPIData({
                ...prevAPIData, 
                ip: data.ip
            });
        data.isp &&
            setAPIData({
                ...prevAPIData, 
                isp: data.isp
            });
        } else {
            setError("API data is undefined");
        }
};
