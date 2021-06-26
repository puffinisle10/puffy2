
 // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC1dOVd8S66YHT4aycqCBt4TNS0vy0RvpY",
      authDomain: "puffy-2b0c1.firebaseapp.com",
      projectId: "puffy-2b0c1",
      storageBucket: "puffy-2b0c1.appspot.com",
      messagingSenderId: "812987241099",
      appId: "1:812987241099:web:678cb61b050f3f2c763a8e",
      measurementId: "G-1FVYR9PDCL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
