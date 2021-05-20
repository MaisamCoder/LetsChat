
//ADD YOUR FIREBASE LINKS
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
  function adduser()
  {
  username = document.getElementById("user_name").value;
  firebase.database().ref("/").child(username).update({purpose:"adding user"});     
  }