import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

const configureDefaultIcon = () => {
  const defaultIcon = L.icon({
    iconUrl: markerIconUrl,
    iconRetinaUrl: markerIconRetinaUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  L.Marker.prototype.options.icon = defaultIcon;
};

interface TourMapInnerProps {
  position: { lat: number; lng: number };
  label: string;
}

const TourMapInner = ({ position, label }: TourMapInnerProps) => {
  useEffect(() => {
    configureDefaultIcon();
  }, []);

  return (
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-64 w-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.lat, position.lng]}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default TourMapInner;
