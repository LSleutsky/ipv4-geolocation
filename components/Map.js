import { useEffect, useState } from 'react';
import { Circle, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import appSettings from 'config';

const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function Map({ lat, lng, zoom }) {
  // So the Google map can rerender without error upon new data retrieval
  const [center, setCenter] = useState({ lat: '', lng: '' });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: appSettings.mapsApiKey,
    id: 'google-map-script'
  });

  const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FAA0A0',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1
  };

  useEffect(() => {
    setCenter({ lat, lng });
  }, [lat, lng]);

  return (
    <main className="w-11/12 md:w-8/12 my-4 m-auto pb-6 h-96">
      {isLoaded && (
        <GoogleMap
          center={center}
          mapContainerStyle={containerStyle}
          zoom={zoom}
        >
          <Circle center={center} options={circleOptions} radius={125} />
        </GoogleMap>
      )}
    </main>
  );
}
