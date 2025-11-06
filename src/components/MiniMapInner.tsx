import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

const center: [number, number] = [28.1903, -105.4711];

const configureDefaultIcon = () => {
  const defaultIcon = L.icon({
    iconUrl: markerIconUrl,
    iconRetinaUrl: markerIconRetinaUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = defaultIcon;
};

const MiniMapInner = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      configureDefaultIcon();
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-muted shadow-2xl">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/20 via-transparent to-primary/10" />
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        className="h-[360px] w-full rounded-3xl"
        style={{ zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={center}
          radius={8000}
          pathOptions={{ color: "#F97316", fillColor: "#F97316", fillOpacity: 0.12, weight: 1 }}
        />
        <Marker position={center}>
          <Popup>
            <div className="space-y-1">
              <p className="font-semibold text-primary">Delicias, Chihuahua</p>
              <p className="text-sm text-muted-foreground">Tu punto de partida para explorar la región.</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MiniMapInner;
