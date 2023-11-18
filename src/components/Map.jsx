import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./css/map.css"
const Maps = () => {
  return (
    <MapContainer center={[-2.1505096, -79.9746869]} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(markers => (
        <Marker position={markers.geocode} icon={modicon}></Marker>))}
    </MapContainer>
  );
}
// markers
const markers = [
  {
    geocode: [-2.1564436, -79.9689579],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [-2.1494536, -79.9774979],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [-2.1507406, -79.9817139],
    popUp: "Hello, I am pop up 3"
  },

  {geocode:[-2.1428796,-79.9656289],
    popUp: "Hello, I am pop up 4"
  }
];

const modicon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/5537/5537561.png",
  iconSize: [38, 38]
})
export default Maps;