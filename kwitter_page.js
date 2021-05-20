//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD5JWZdRhuMthgHbP7maKjEf-3nbdZUxA4",
      authDomain: "kwitter-8bf50.firebaseapp.com",
      databaseURL: "https://kwitter-8bf50-default-rtdb.firebaseio.com",
      projectId: "kwitter-8bf50",
      storageBucket: "kwitter-8bf50.appspot.com",
      messagingSenderId: "48993962134",
      appId: "1:48993962134:web:53dbd4f797e6a557df9ab7"
    };
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    roomname = localStorage.getItem("room_name");
    //Space
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      names = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+names+"<img class = 'user_tick' src='tick.png'> </h4>";
      message_with_tag = "<h4 class='messageh4'"+message+"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(roomname).push({
      name: username,
      message: msg,
      like: 0
}); 
document.getElementById("msg").value = " ";
}

function updateLike(message_id){

      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedlikes = Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(roomname).child(message_id).update({
            like: updatedlikes
      });
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}