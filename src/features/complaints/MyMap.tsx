import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { formatTime } from "../../helpers/formatTime";
import { CreateCustomIcon as createCustomIcon } from "./CreateCustomIcon";
import { haversineDistance } from "../../helpers/culculateDistance";
import { RecenterMap } from "./RecenterMap";

// Define types for props
interface MapComponentProps {
  destination: {
    lat: number;
    lng: number;
  };
}

const MyMap: React.FC<MapComponentProps> = ({ destination }) => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 0,
    lng: 0,
  });
  const [timeToDestination, setTimeToDestination] = useState<number | null>(
    null
  );

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = { lat: latitude, lng: longitude };

        setUserLocation(currentLocation);

        const distance = haversineDistance(currentLocation, destination); // Distance in km
        const speed = 0.7; // Assume a walking speed of 5 km/h

        setTimeToDestination(distance / speed); // Time in hours
      },
      (error) => console.error("Error getting location", error),
      { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [destination]);

  const positions: LatLngExpression[] = [
    [userLocation.lat, userLocation.lng],
    [destination.lat, destination.lng],
  ];

  const userIcon = createCustomIcon(
    <FaMapMarkerAlt color="blue" size="25px" />
  );
  const destinationIcon = createCustomIcon(
    <CgDanger color="red" size="25px" />
  );

  return (
    <div>
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <RecenterMap lat={userLocation.lat} lng={userLocation.lng} />
        <Marker
          position={[userLocation.lat, userLocation.lng] as LatLngExpression}
          icon={userIcon}
        />
        <Marker
          position={[destination.lat, destination.lng] as LatLngExpression}
          icon={destinationIcon}
        />
        <Polyline positions={positions} color="blue" />
      </MapContainer>
      {timeToDestination !== null && (
        <p>Estimated time to destination: {formatTime(timeToDestination)}</p>
      )}
    </div>
  );
};

export default MyMap;
