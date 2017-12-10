var firebase = require('firebase');

firebase.initializeApp({
    authDomain: "livetracking-d8327.firebaseapp.com",
    databaseURL: "https://livetracking-d8327.firebaseio.com",
    projectId: "livetracking-d8327",
    storageBucket: "livetracking-d8327.appspot.com",
    messagingSenderId: "584303601188"
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

