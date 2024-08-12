import { useEffect } from "react";
import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

export const RecenterMap: React.FC<{ lat: number; lng: number }> = ({
  lat,
  lng,
}) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng] as LatLngExpression, map.getZoom(), {
      animate: true,
    });
  }, [lat, lng, map]);

  return null;
};
