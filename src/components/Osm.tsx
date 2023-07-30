import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Osm.css";
import "leaflet/dist/leaflet.css";

interface Props {
  coords: [number, number, string][];
}

const Map = ({ coords }: Props) => {
  return (
    <>
      <MapContainer
        center={[37.9411, 23.75249]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coords.map(([lat, lng, desc]) => (
          <Marker position={{ lat, lng }}>
            <Popup>{desc}</Popup>{" "}
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
