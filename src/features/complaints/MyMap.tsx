// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
// import { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { CgDanger } from "react-icons/cg";
// // import { formatTime } from "../../helpers/formatTime";
// import { CreateCustomIcon as createCustomIcon } from "./CreateCustomIcon";
// import { haversineDistance } from "../../helpers/culculateDistance";
// import { RecenterMap } from "./RecenterMap";

// // Define types for props
// interface MapComponentProps {
//   destination: {
//     lat: number;
//     lng: number;
//   };
// }

// const MyMap: React.FC<MapComponentProps> = ({ destination }) => {
//   const [userLocation, setUserLocation] = useState<{
//     lat: number;
//     lng: number;
//   }>({
//     lat: 0,
//     lng: 0,
//   });
//   const [timeToDestination, setTimeToDestination] = useState<number | null>(
//     null
//   );

//   useEffect(() => {
//     const watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         const currentLocation = { lat: latitude, lng: longitude };

//         setUserLocation(currentLocation);

//         const distance = haversineDistance(currentLocation, destination); // Distance in km
//         const speed = 0.7; // Assume a walking speed of 5 km/h

//         setTimeToDestination(distance / speed); // Time in hours
//       },
//       (error) => console.error("Error getting location", error),
//       { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
//     );

//     return () => {
//       navigator.geolocation.clearWatch(watchId);
//     };
//   }, [destination]);

//   const positions: LatLngExpression[] = [
//     [userLocation.lat, userLocation.lng],
//     [destination.lat, destination.lng],
//   ];

//   const userIcon = createCustomIcon(
//     <FaMapMarkerAlt color="blue" size="25px" />
//   );
//   const destinationIcon = createCustomIcon(
//     <CgDanger color="red" size="25px" />
//   );

//   return (
//     <div>
//       <MapContainer
//         center={[userLocation.lat, userLocation.lng]}
//         zoom={13}
//         style={{ height: "500px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <RecenterMap lat={userLocation.lat} lng={userLocation.lng} />
//         <Marker
//           position={[userLocation.lat, userLocation.lng] as LatLngExpression}
//           icon={userIcon}
//         />
//         <Marker
//           position={[destination.lat, destination.lng] as LatLngExpression}
//           icon={destinationIcon}
//         />
//         <Polyline positions={positions} color="blue" />
//       </MapContainer>
//       {timeToDestination !== null && (
//         <p>
//           Estimated time to destination:
//           {/* {formatTime(timeToDestination)} */}
//         </p>
//       )}
//     </div>
//   );
// };

// export default MyMap;

import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { CreateCustomIcon as createCustomIcon } from "./CreateCustomIcon";
import { haversineDistance } from "../../helpers/culculateDistance";
import { RecenterMap } from "./RecenterMap";

// Define types for props
interface MapComponentProps {
  destination: {
    lat: number;
    lng: number;
  };
  speed?: number; // km/h, default to walking speed
}

const MyMap: React.FC<MapComponentProps> = ({ destination, speed = 0.7 }) => {
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
  const [error, setError] = useState<string | null>(null);

  // Function to update user location with debouncing
  const updateUserLocation = useCallback(
    (newLocation: { lat: number; lng: number }) => {
      const distanceMoved = haversineDistance(userLocation, newLocation);

      // Only update if user has moved more than 50 meters
      if (distanceMoved > 0.05) {
        setUserLocation(newLocation);

        const distance = haversineDistance(newLocation, destination);
        setTimeToDestination(distance / speed); // Calculate time to destination in hours
      }
    },
    [userLocation, destination, speed]
  );

  // Use effect to request geolocation and handle errors
  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = { lat: latitude, lng: longitude };
          updateUserLocation(currentLocation);
        },
        (error) => {
          console.error("Error getting location:", error.message);
          if (error.code === error.PERMISSION_DENIED) {
            setError("Permission denied. Please allow location access.");
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            setError("Location unavailable. Please try again.");
          } else if (error.code === error.TIMEOUT) {
            setError("Location request timed out. Please try again.");
          } else {
            setError("Unable to fetch location. Please try again.");
          }
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, [updateUserLocation]);

  const positions: LatLngExpression[] = [
    // [userLocation.lat, userLocation.lng],
    [7.3501398, -2.3399661],
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
      {error ? (
        <p>{error}</p> // Display error message if geolocation fails
      ) : (
        <>
          <MapContainer
            center={[7.3501398, -2.3399661]}
            // center={[userLocation.lat, userLocation.lng]}
            zoom={13}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <RecenterMap lat={userLocation.lat} lng={userLocation.lng} /> */}
            <RecenterMap lat={7.3501398} lng={-2.3399661} />
            <Marker
              // position={[userLocation.lat, userLocation.lng]}
              position={[7.3501398, -2.3399661]}
              icon={userIcon}
            />
            <Marker
              position={[destination.lat, destination.lng]}
              icon={destinationIcon}
            />
            <Polyline positions={positions} color="blue" />
          </MapContainer>
          {timeToDestination !== null && (
            <p>
              Estimated time to destination:{" "}
              {Math.floor(timeToDestination * 60)} minutes
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default MyMap;
