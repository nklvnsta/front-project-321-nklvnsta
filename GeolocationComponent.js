import React, { useState } from 'react';

const GeolocationComponent = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location && (
        <div>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </div>
      )}
    </div>
  );
};

export default GeolocationComponent;
