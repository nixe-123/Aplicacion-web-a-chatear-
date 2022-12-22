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
//AÑADE LOS ENLACES FIREBASE
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding  user"
    });
}