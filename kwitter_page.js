//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCjGzXvCoe-ISnU6dzKPJgG9HW-4MhdQKI",
      authDomain: "kwitter2-99ad8.firebaseapp.com",
      databaseURL: "https://kwitter2-99ad8-default-rtdb.firebaseio.com",
      projectId: "kwitter2-99ad8",
      storageBucket: "kwitter2-99ad8.appspot.com",
      messagingSenderId: "909763723350",
      appId: "1:909763723350:web:7efdd94dd306d8e3e3bbf7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

function send()
{
        msg=document.getElementById("msg").value 
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        })
        document.getElementById("msg").value =""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
