
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyA04i7jbQIA9smtvUTy2rOuZFF-gcMAHYY",
      authDomain: "kwitter-app-c8faa.firebaseapp.com",
      databaseURL: "https://kwitter-app-c8faa-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-c8faa",
      storageBucket: "kwitter-app-c8faa.appspot.com",
      messagingSenderId: "305712042018",
      appId: "1:305712042018:web:2030d66754839f9289ba7b",
      measurementId: "G-2GJ6Z3XKYK"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
      
          firebase.data().ref("/").child(room_name).update({
            purpose: "adding room name"
          });
    
          localStorage.setItem("room_name",room_name);

          window.location = "kwitter_room.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room name -" + Room_names);
       row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}