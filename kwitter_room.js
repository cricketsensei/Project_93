var firebaseConfig = {
    apiKey: "AIzaSyANBuiCyJjk29w0bl9Qp3mFwM3mms4UreQ",
    authDomain: "kwitter-project-ba8d9.firebaseapp.com",
    projectId: "kwitter-project-ba8d9",
    storageBucket: "kwitter-project-ba8d9.appspot.com",
    messagingSenderId: "214192579971",
    appId: "1:214192579971:web:8860800b14d225bbff82b6",
    measurementId: "G-S7LP6WRM4X"
  };
  

  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  var username = localStorage.getItem("Username");
  console.log(username);
  document.getElementById("welcome_user").innerHTML = "Welcome"+username;

  function addroom(){
    var roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
      purpose: "addingroomname"
    });
    localStorage.setItem("roomname", roomname);
    window.location = "kwitter_page.html";
  }


  function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
  }

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}


getData();