var user = "";
function addUser(){
    user = document.getElementById("user_name").value;
    localStorage.setItem("Username", user);
    window.location = "kwitter_room.html";
}