import { useRef, useEffect } from 'react'
// import { ResponseContext } from "../context/AppProvider";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const UpdateMap = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        if (lat !== 0) {
            map.setView([lat,lng]);
        }
    }, [lat,lng, map]);
    return;
};

const Map = ({mapData}) => {
    // const { mapData } = useContext(ResponseContext);
    const mapRef = useRef(null);
    if (!mapData) return;
        if (mapData.latitude !== 0) {
            console.log(mapData);
    const latitude = mapData.latitude;
    const longitude = mapData.longitude;
        
  return ( 
    // Make sure you set the height and width of the map container otherwise the map won't show
      <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap lat={latitude} lng={longitude}/>
      </MapContainer>
  );
}
};

export default Map;

// // just in case it's needed before re-rendering like in last project
// function removeMapContainer(){
//     var container = document.getElementById('map') as HTMLElement;
//     if (container) {
//         container.outerHTML = '<div id="map"></div';
//     }
// };