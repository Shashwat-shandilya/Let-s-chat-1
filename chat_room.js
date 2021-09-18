const firebaseConfig = {
    apiKey: "AIzaSyAL7ZC4lO0QKiqgCTzIBjP5WMVfZmtJVE0",
    authDomain: "kwitter-hehehehehe.firebaseapp.com",
    databaseURL: "https://kwitter-hehehehehe-default-rtdb.firebaseio.com",
    projectId: "kwitter-hehehehehe",
    storageBucket: "kwitter-hehehehehe.appspot.com",
    messagingSenderId: "697949764743",
    appId: "1:697949764743:web:3957ae6ca43caabfedcc22"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          
    //End code
    });});}
getData();
