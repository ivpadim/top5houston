var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyDH5V8zwarkgRtVIBLGQfy5GL7nbLl8TDQ",
    authDomain: "top5houston.firebaseapp.com",
    databaseURL: "https://top5houston.firebaseio.com",
    projectId: "top5houston",
    storageBucket: "top5houston.appspot.com",
    messagingSenderId: "957961763408"
});

var ref = firebase.app().database().ref();
var locations = ref.child("locations");


function random (low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

function updateLocations(){
    locations.once('value', function (snapshot) {
        var i = 0;
        var n = random(0, 4);
        snapshot.forEach(function (snapLocation) {
            var open = snapLocation.val().open;
            if(n == i)
                snapLocation.ref.update({open: !open});
            i++;
        });
    });
}

setInterval(function(){
    updateLocations();
}, 3000);

