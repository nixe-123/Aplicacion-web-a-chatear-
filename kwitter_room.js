
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDLyZU5BSErFxC1qfzlwGyzOeTSbQOs1aw",
      authDomain: "prueba-clase-cb82f.firebaseapp.com",
      projectId: "prueba-clase-cb82f",
      storageBucket: "prueba-clase-cb82f.appspot.com",
      messagingSenderId: "980005070050",
      appId: "1:980005070050:web:2eb459e759c246f1fa2abb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("roomname");
document.getElementById("user_name").innerHTML="Bienvenido"+user_name;
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location.replace("kwitter_page.html");
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
            childData = childSnapshot.val();
             if (childKey != "purpose") { firebase_message_id = childKey; message_data = childData; 
                  //Inicia código 
                  console.log(firebase_message_id); 
                  console.log(message_data); name = message_data['name']; 
                  message = message_data['message']; like = message_data['like'];
                   name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
                    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"; 
                    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"; 
                    row = name_with_tag + message_with_tag + like_button + span_with_tag;
                     document.getElementById("output").innerHTML += row; 
                  }
             });
            });
       }
getData();
function redirectToRoomName(Room_names){
      console.log(Room_names);
      localStorage.setItem("room_name",Room_names);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      
}