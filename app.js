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

//************First of all we need a boolean to keep track of our timer state- global variables  -------- &&&&&&&&&&&&
 var active = false;
 var active2 = false;
 var active3 = false;
 var active4 = false;
 var active5 = false;
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

function start_timer3() {
  if (active3) {
      var timer = document.getElementById("my_timer3").innerHTML;
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
   document.getElementById("my_timer3").innerHTML = hour + ":" + min + ":"+ sec;
   setTimeout(start_timer3, 1000); // keep repeating with the speed of 1 sec
  }
}

function start_timer4() {
  // This function will go if active is true
  if (active4) {
    var timer = document.getElementById("my_timer4").innerHTML;
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
     document.getElementById("my_timer4").innerHTML = hour + ":" + min + ":"+ sec;
     setTimeout(start_timer4, 1000); // keep repeating with the speed of 1 sec
    }
}

function start_timer5() {
  // This function will go if active is true
  if (active5) {
    var timer = document.getElementById("my_timer5").innerHTML;
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
     document.getElementById("my_timer5").innerHTML = hour + ":" + min + ":"+ sec;
     setTimeout(start_timer5, 1000); // keep repeating with the speed of 1 sec
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

function changeState3() {
  if (active3 == false) {
     active3 = true;
     start_timer3();
     console.log("Timer has been started");
 } else {
 active = false;
  console.log("timmer is on pause");
 }
}

function changeState4() {
  if (active4 == false) {
     active4 = true;
     start_timer4();
     console.log("Timer has been started");
 } else {
 active4 = false;
  console.log("timmer is on pause");
 }
}

function changeState5() {
  if (active5 == false) {
     active5 = true;
     start_timer5();
     console.log("Timer has been started");
 } else {
 active = false;
  console.log("timmer is on pause");
 }
}

//***************************EXPERIMENT *****************************************************/
function captureAct() {
  // changeState();
  active2 = false; 
  active3 = false;
  active4 = false;
  active5 = false;  
}
//---------------------------------------------------------------------
function captureLunch () { 
    changeState2(); 
    console.log("After changeState2 function:", active2);
  // active = false;
  active3 = false;
  active4 = false;
  active5 = false;
}

function captureBreak () {
  console.log(active3);
  // active3 = true; 
   changeState3(); 
  // console.log(active2);
  active2 = false;
  // active3 = false;
  active4 = false;
  active5 = false;
   active = false;  
}

function captureTrain () {

  // active3 = true; 
   changeState4(); 
  // console.log(active2);
  active2 = false;
  active3 = false;
  // active4 = false;
  active5 = false;
   active = false;  
}

function test3() {
  console.log(active3);
  // active3 = true; 
   changeState5(); 
  // console.log(active2);
  active2 = false;
  active3 = false;
  active4 = false;
  active = false;  
}
//************************log in****************************************/
function login() {
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
  // changeState();
  setTimeout(changeState, 1000);
}
    observer();

function observer() {
    firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // User is signed in.
    //   appear(user);
    var displayName = user.displayName;
    var email = user.email;
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
// TIMER VARIABLES
    var test = document.getElementById("my_timer");
    var act = test.textContent;
    var test2 = document.getElementById("my_timer2");
    var act2 = test2.textContent;
    var test3 = document.getElementById("my_timer3");
    var act3 = test3.textContent;
    var test4 = document.getElementById("my_timer4");
    var act4 = test4.textContent;
    var test5 = document.getElementById("my_timer5");
    var act5 = test5.textContent;
      console.log(act,act2,act3,act4,act5)
    var name2 = document.getElementById("email2").value;
    var washingtonRef2 = db.collection("users").doc(name2);

// Update time 
  return washingtonRef2.update({
// name: name,
    active: act,
    lunch: act2,
    break: act3,
    train: act4,
    project: act5
  })
.then(function() {
// continuee(act);
      console.log("Document successfully updated!");
resetTest();
 firebase.auth().signOut();
})
.catch(function(error) {
// The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}

function resetTest() {
  document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
document.getElementById("my_timer2").innerHTML = "00" + ":" + "00" + ":" + "00";
document.getElementById("my_timer3").innerHTML = "00" + ":" + "00" + ":" + "00";
document.getElementById("my_timer4").innerHTML = "00" + ":" + "00" + ":" + "00";
document.getElementById("my_timer5").innerHTML = "00" + ":" + "00" + ":" + "00";
active = false;
active2 = false;
active3 = false;
active4 = false;
active5 = false;
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
//----------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------
function register2() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
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
  console.log(name);
}


