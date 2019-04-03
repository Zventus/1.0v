var config = {
    apiKey: "AIzaSyBK5HGbqtakbi7PmuSvOjrfvkoQUPdQru0",
    authDomain: "test-62869.firebaseapp.com",
    databaseURL: "https://test-62869.firebaseio.com",
    projectId: "test-62869",
    storageBucket: "test-62869.appspot.com",
    messagingSenderId: "829416356472"
  };
  firebase.initializeApp(config);

//********************************GLOBAL VARiables ********************/
   var db = firebase.firestore();
//     var agentName = document.getElementById("password").value;
//***********Set the document********************************/


//*****************************&&&&&&&&&&&&&&&&&&&&&&&&Experiment section&&&&&&&&&&&&&***************************** */





//************First of all we need a boolean to keep track of our timer state- global variables  -------- &&&&&&&&&&&&
 var active = false;
 var active2 = false;
console.log("act", active);
console.log("lunch", active2);
//******************************************************************************************

// Three function for three timers. Each status has its own count timer
function start_timer() {
    // This function will go if active is true
    if (active) {
        var timer = document.getElementById("my_timer").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1];  // minutes
        var sec = arr[2]; // seconds

        if (sec == 59) {
            if (min == 59) {
             hour++;
             min = 0;
             if (hour < 10) hour = "0" + hour;
    } else { 
        min++;
        }
        if (min < 10) min = "0" + min;
        sec = 0;
       } else {
           sec ++;
           if (sec < 10) sec = "0" + sec;
     }
     // update our html
     document.getElementById("my_timer").innerHTML = hour + ":" + min + ":"+ sec;
     setTimeout(start_timer, 1000); // keep repeating with the speed of 1 sec
    }
}

function start_timer2() {
    if (active2) {
        var timer = document.getElementById("my_timer2").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1];  // minutes
        var sec = arr[2]; // seconds

        if (sec == 59) {
            if (min == 59) {
             hour++;
             min = 0;
             if (hour < 10) hour = "0" + hour;
    } else { 
        min++;
        }
        if (min < 10) min = "0" + min;
        sec = 0;
       } else {
           sec ++;
           if (sec < 10) sec = "0" + sec;
     }
     // update our html
     document.getElementById("my_timer2").innerHTML = hour + ":" + min + ":"+ sec;
     setTimeout(start_timer2, 1000); // keep repeating with the speed of 1 sec
    }
}
//*************************************************Change state functions************************** */
// now we need function to change states - start or pause timer by clicking
function changeState() {
     if (active == false) {
        active = true;
        start_timer();
        console.log("Timer has been started");
    } else {
    active = false;
     console.log("timmer is on pause");
    }
}
//********************************************************************************************************* */
function changeState2() {
    if (active2 == false) {
       active2 = true;
       start_timer2();
       console.log("Timer has been started");
   } else {
   active = false;
    console.log("timmer is on pause");
   }
}
//*************************************************************************************************** */
// finally our reset function 
function reset() {
    // captureAct();
    document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
    console.log("Timer has been reseted")
}
//***************************EXPERIMENT *****************************************************/
function captureAct() {
    changeState();
    active2 = false;   
    var test = document.getElementById("my_timer");
    var act = test.textContent;
    console.log(act);
    var name2 = document.getElementById("email2").value;
    console.log(name2);
// var agentName = document.getElementById("password").value;
    var washingtonRef2 = db.collection("users").doc(name2);
// Set the "capital" field of the city 'DC'
return washingtonRef2.update({
    // name: name,
    active: act
  })
.then(function() {
    // continuee(act);
    console.log("Document successfully updated!");
 })
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
 });
}

//---------------------------------------------------------------------
function captureLunch () {
    console.log(active2); 
    changeState2(); 
    console.log(active2);

     active = false;   
//     var test = document.getElementById("my_timer2");
//     var act = test.textContent;
//     console.log(act);
 
//     var agentName = document.getElementById("password").value;
//     var washingtonRef2 = db.collection("users").doc(agentName);

// // Set the "capital" field of the city 'DC'
// return washingtonRef2.update({
//     name: "edward",
//     lunch: act
//   })
// .then(function() {
//     // continuee(act);
//     console.log("Document successfully updated!");
//  })
// .catch(function(error) {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
//  });
}


//************************log in****************************************/

function login() {
    console.log("work")
 var email2 = document.getElementById("email2").value;
 var password2 = document.getElementById("password2").value;
    
    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function (error) {
// Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    console.log("active user");
// ...
    });
    changeState();
}
    observer();

function observer() {
    firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // User is signed in.
    //   appear(user);
    var displayName = user.displayName;
    var email = user.email;
    //   console.log(user.emailVerified)
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
        } else {
    // User is signed out.
    // ...
      console.log('no active user')
        }
    });  
}
//**********Looks like doesn't work******************************** */


//**************************************************************** */
function verify() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
    // Email sent.
        console.log('sending email...');
      }).catch(function(error) {
  // An error happened.
        console.log(error);
 });   
}
//************************log out*************************************** */
function logout(){
    // changeState();
    firebase.auth().signOut();
    reset();
  }
//********************************************************************* */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      // User is signed in.
        
      document.getElementById("user_div").style.display = "block";
      document.getElementById("test").style.display = "none";
      
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        // var email_id = user.email;
        // document.getElementById("main_div").innerHTML = "Welcome User : " + email_id;
      }
    } else {
      // No user is signed in.
        // console.log("no user")
      document.getElementById("user_div").style.display = "none";
      document.getElementById("test").style.display = "block";
     }
  });

  function register() {
      console.log("works")
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var name = document.getElementById("name").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
        verify();
    })
        .catch(function(error) {
  // Handle Errors here.
        verify();
  var errorCode = error.code;
  var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
  // ...
 });
register2();
}

function register2() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    // var timer1 = document.getElementById('my_timer');
  db.collection("users").doc(email).set({
    name: name,
    email: email,
    password: password
  })
 .then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('name').value = '';
 })
 .catch(function(error) {
  console.error("Error adding document: ", error);
    });
  }




var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid; 
console.log(name);
}

  