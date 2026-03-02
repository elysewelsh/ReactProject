import { ResponseContext } from "../context/MapContext";

const Map = () => {
    const { apiData } = useContext(ResponseContext);

    const mapRef = useRef(null);
    const latitude = apiData.latitude;
    const longitude = apiData.longitude;

  return ( 
    // Make sure you set the height and width of the map container otherwise the map won't show
      <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
      </MapContainer>
  );
};

export default Map;

// // just in case it's needed before re-rendering like in last project
// function removeMapContainer(){
//     var container = document.getElementById('map') as HTMLElement;
//     if (container) {
//         container.outerHTML = '<div id="map"></div';
//     }
// };