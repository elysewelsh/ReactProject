import { useRef, useEffect } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import blackMarker from '../assets/icon-location.svg'

const UpdateMap = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        if (lat !== 0) {
            map.setView([lat,lng]);
        }
    }, [lat,lng, map]);
    return;
};

const customMarker = L.icon({
    iconUrl: blackMarker,
    iconSize: [40,50],
    iconAnchor: [20,50],
    popupAnchor: [0,-50]
});

const Map = ({mapData}) => {
    const mapRef = useRef(null);
    if (!mapData) return;
        if (mapData.latitude !== 0) {
            console.log(mapData);
    const latitude = mapData.latitude;
    const longitude = mapData.longitude;
    const position = [mapData.latitude, mapData.longitude]
        
  return ( 
      <MapContainer center={[latitude, longitude]} zoom={16} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap lat={latitude} lng={longitude}/>
        <Marker
            position={position} icon={customMarker}
        />
      </MapContainer>
  );
}
};

export default Map;