import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp(process.env.REACT_APP_FIREBASE_CONFIG);

const updateDatabase = () => {
  const locationsRef = firebase.database().ref('locations');
  locationsRef.once('value', (snapshot) => {
    const locations = snapshot.val();
    const updatedLocations = Object.keys(locations).map((key) => {
      const location = locations[key];
      location.open = Math.random() >= 0.5;
      return location;
    });
    locationsRef.set(updatedLocations);
  });
};

setInterval(updateDatabase, 4000);
