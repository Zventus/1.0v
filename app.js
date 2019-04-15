  var config = {
    apiKey: "AIzaSyDiH9td2gSnL2gKgtpqA8UyGZH9t5sHDE0",
    authDomain: "zventuslogin.firebaseapp.com",
    databaseURL: "https://zventuslogin.firebaseio.com",
    projectId: "zventuslogin",
    storageBucket: "zventuslogin.appspot.com",
    messagingSenderId: "712831760132"
};
  firebase.initializeApp(config);
//***************s***************** GLOBAL VARIABLES ******************************************/
   var db = firebase.firestore();
   var user = firebase.auth().currentUser;
   var date = new Date();
   var active  = false;
   var active2 = false;
   var active3 = false;
   var active4 = false;
   var active5 = false; 
   var DocRef = db.collection('users'); 
//******************************************************************************************/
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
        console.log("****************");
        console.log("changstate:",active);
        console.log("****************");
        start_timer();
        console.log("Timer has been started");
    } else {
     console.log("timmer is on pause");
    }
}

function changeState2() {
    if (active2 == false) {
       active2 = true;
       start_timer2();
       console.log("Timer has been started");
   } else {
    console.log("timmer is on pause");
   }
}

function changeState3() {
  if (active3 == false) {
     active3 = true;
     start_timer3();
     console.log("Timer has been started");
 } else {
  console.log("timmer is on pause");
 }
}

function changeState4() {
  if (active4 == false) {
     active4 = true;
     start_timer4();
     console.log("Timer has been started");
 } else {
  console.log("timmer is on pause");
 }
}

function changeState5() {
  if (active5 == false) {
     active5 = true;
     start_timer5();
     console.log("Timer has been started");
 } else {
  console.log("timmer is on pause");
 }
}
//*********************************Dropdown control *****************************************************/
function captureAct() {
  active2 = false; 
  active3 = false;
  active4 = false;
  active5 = false;  
}
function captureLunch () { 
    changeState2(); 
    console.log("After changeState2 function:", active2);
  // active = false;
  active3 = false;
  active4 = false;
  active5 = false;
}
function captureBreak () { 
   changeState3();
  active2 = false;
  active4 = false;
  active5 = false;
}

function captureTrain () { 
  changeState4(); 
  active2 = false;
  active3 = false;
  active5 = false;
    
}
function test3() {
   changeState5(); 
  active2 = false;
  active3 = false;
  active4 = false;
}
//************************log in****************************************/
function login() {
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;  
  firebase.auth().signInWithEmailAndPassword(email2, password2)
}
        observer();
//*************************************************************************************************/
function observer() {
  firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // User is signed in.
      var email = user.email;
      console.log(email); 
      console.log('************************');
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
  DocRef.doc(email).update({
            active: (act +' ' +date),
            lunch: (act2 +' ' +date),
            break: (act3 +' ' +date),
            train: (act4 +' ' +date),
            project: (act5 +' ' +date),
          })       
        }
        else {        
          console.log('nothing to do here')

          // DocRef.doc(email).update({
          //   active: (act +' ' +date),
          //   lunch: (act2 +' ' +date),
          //   break: (act3 +' ' +date),
          //   train: (act4 +' ' +date),
          //   project: (act5 +' ' +date),
          // })
        }
      });  
     }
//**************************************************************** */
function verify() {
    user.sendEmailVerification().then(function() {
  // Email sent.
        console.log('sending email...');
      }).catch(function(error) {
  // An error happened.
        console.log(error);
 });   
}
//*****************************************log out****************************************/
 function logout(){
  // Works now, though should say => .doc(email)

        // var test = document.getElementById("my_timer");
        // var act = test.textContent;
        // var test2 = document.getElementById("my_timer2");
        // var act2 = test2.textContent;
        // var test3 = document.getElementById("my_timer3");
        // var act3 = test3.textContent;
        // var test4 = document.getElementById("my_timer4");
        // var act4 = test4.textContent;
        // var test5 = document.getElementById("my_timer5");
        // var act5 = test5.textContent;
        // firebase.auth().signOut();
        pray ();
//  taste();

          // LOGOUT function
   setTimeout(out, 500);        
   setTimeout(resetTest, 500);
}
//*************************************************************************************/
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
console.log('Reset done');
}
//**********************************************************************/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, then Welcome! and time starts running
    document.getElementById("user_div").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("test10").innerHTML = "Welcome" + " " + name + "!";
    document.getElementById("my_timer5").innerHTML =  '00:00:00' ;

    
       changeState();
    } else {
      // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("test").style.display = "block";
  }
});
//----------------------------------------------------------------------------------------------
  function register() {
      console.log("register");
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let name = document.getElementById('name').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
// setTimeout(verify, 5000);
register2(email, password, name);
}
//-------------------------------------------------------------------------------------
function register2(email, password, name) {
    console.log("register2");    
    DocRef.doc(email).set({
        name: name,
        email: email,
        password: password,
        Date: date
      })  
      .then(function() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('name').value = '';
    document.getElementById("testAgain").style.display = "none";
    })
      .catch(function(error) {
  // console.error("Error adding document: ", error);
  alert("The email address is already in use by another account.");
  });
  setTimeout(changeState, 1000);
}
//**************************************************************Brand New Tests*****************************/
  /* Every time the user refresh the browser tha data must be save it to firestore,
  so the timers must add up. */
// Convert the user var into a boolean
  function pray () {
    firebase.auth().onAuthStateChanged(function(user) {
      var email = user.email; 
        console.log('hey dude');
        console.log(email);
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
       DocRef.doc(email).update({
            active: (act +' ' +date),
            lunch: (act2 +' ' +date),
            break: (act3 +' ' +date),
            train: (act4 +' ' +date),
            project: (act5 +' ' +date),
          })
      // setTimeout(out, 500)
      // function out () {
      // firebase.auth().signOut();
      // }
      })
    } 


    function out () {
      firebase.auth().signOut();
      }
          
        
     
  



  
  