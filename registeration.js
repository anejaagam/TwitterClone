


//---------------------------------- REGISTER AND LOGIN CODE ------------------------------------------------------------//
// Import the functions you need from the SDKs you need
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
    import { getDatabase,ref, set,get } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDLUUA1F60yhRn_prxS-9CmJS5eFEYnvGM",
        authDomain: "cosc310twitter-3323a.firebaseapp.com",
        projectId: "cosc310twitter-3323a",
        storageBucket: "cosc310twitter-3323a.appspot.com",
        messagingSenderId: "705650666790",
        appId: "1:705650666790:web:6e1ef08cc135edddcb65e7",
        measurementId: "G-LGEL34JKBX"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const auth = getAuth(app)
      const analytics = getAnalytics(app);
      const signUp = document.getElementById("signUp");
      
      
  
       
  signUp.addEventListener('click', (e)=>{
      //Initializing DOM elements
      var name = document.getElementById("floatingName").value;
      var email = document.getElementById("floatingInput").value;
      var username = document.getElementById("floatingUsername").value;
      var password = document.getElementById("floatingPassword").value;
      var birthday = document.getElementById("floatingBirthday").value;
      var CreatingUser = true;
      
      
    
      //Check if Username already exists in DB
      get(ref(database, 'users/' + username)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("User exists"); //Alert user that user already exists
    } else{
  
      //Create User in DB
    set(ref(database, 'users/' + username), {
      name: name,
      username: username,
      email: email,
      birthday: birthday,
      bio: null,
      website: null
    }).then(function onSuccess(res) {
      //Create user in AUTH with email and password
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

})
  .catch((error) => { //Sending Auth Error Message to UI
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode) 
  });
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //Move on to next window
    }).catch(function onError(err) {
     
      alert("Error");
    });
  
   
  
  
    }
  }).catch((error) => {
    
  
  });
  
  })