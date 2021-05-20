
//ADD YOUR FIREBASE LINKS HERE 
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD5JWZdRhuMthgHbP7maKjEf-3nbdZUxA4",
      authDomain: "kwitter-8bf50.firebaseapp.com",
      databaseURL: "https://kwitter-8bf50-default-rtdb.firebaseio.com",
      projectId: "kwitter-8bf50",
      storageBucket: "kwitter-8bf50.appspot.com",
      messagingSenderId: "48993962134",
      appId: "1:48993962134:web:53dbd4f797e6a557df9ab7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    document.getElementById("usernameid").innerHTML = "Welcome "+username+"!";
    function addroom(){
          roomname = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({
                purpose: "Adding room name"
          });
          localStorage.setItem("room_name", roomname); 
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
//onclick='redirectToRoomName(this.id)': ○ onclick - we already know. ○ redirectToRoomName - is the function name, this function we will define later in the class. ○ this.id - it means whenever the redirectToRoomName function is called, it will pass the value of the current id of the element inside the redirectToRoomName function. And the appropriate id is already set as id="+Room_names+". ○ Let's see some examples for understanding this better.
//For example: ● So when the code runs. If the id=’KingRoom’ ○ Then redirectToRoomName(this.id) will be - redirectToRoomName(‘KingRoom’) ● And when the code runs with id=’QueenRoom’ ○ Then redirectToRoomName(this.id) will be - redirectToRoomName(’QueenRoom’)

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

