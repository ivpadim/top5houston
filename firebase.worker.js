//Helper utility to simulate database changes
var firebase = require('firebase');
var colors   = require('colors');

function random (low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

//Firebase connection string
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

function updateLocations(){
    locations.once('value', function (snapshot) {
        //Grab a random location and swap the open value
        var i = 0;
        var n = snapshot.numChildren() - 1;
        var r = random(0, n);

        snapshot.forEach(function (snapLocation) {
            if(r == i){
                var location = snapLocation.val();
                var open = location.open;
                snapLocation.ref.update({open: !open});
                console.log(('Updated location ' + location.name).yellow);
            }
            i++;
        });
    });
}

//Set a timer every 4s
setInterval(function(){
    updateLocations();
}, 4000);

