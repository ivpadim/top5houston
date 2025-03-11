import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp(process.env.REACT_APP_FIREBASE_CONFIG);

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const locationsRef = firebase.database().ref('locations');
    locationsRef.on('value', (snapshot) => {
      const locationsData = snapshot.val();
      const locationsArray = Object.keys(locationsData).map((key) => ({
        id: key,
        ...locationsData[key],
      }));
      setLocations(locationsArray);
    });
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_AGM_API_KEY}>
      <GoogleMap
        center={{ lat: 29.75, lng: -95.36 }}
        zoom={14}
        mapContainerStyle={{ height: '700px', width: '100%' }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedLocation(location)}
            icon={{
              url: location.open ? '/assets/images/open_marker.png' : '/assets/images/close_marker.png',
            }}
          />
        ))}
        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div>
              <h3>{selectedLocation.name}</h3>
              <p>{selectedLocation.open ? 'We are open' : 'Sorry this place is closed!'}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Houston top 5 places</h1>
      <Map />
    </div>
  );
};

export default App;
