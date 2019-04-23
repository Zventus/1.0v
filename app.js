  var config = {
    apiKey: "AIzaSyDiH9td2gSnL2gKgtpqA8UyGZH9t5sHDE0",
    authDomain: "zventuslogin.firebaseapp.com",
    databaseURL: "https://zventuslogin.firebaseio.com",
    projectId: "zventuslogin",
    storageBucket: "zventuslogin.appspot.com",
    messagingSenderId: "712831760132"
};
  firebase.initializeApp(config);
//******************************** GLOBAL VARIABLES ******************************************/
   var db = firebase.firestore();
   var user = firebase.auth().currentUser;
   var date = new Date();
   var options  = { month: 'short', day: '2-digit', weekday: 'short'};
   var options2 = { hour: 'numeric', minute: 'numeric'};
   //*******************************************************
   var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
   var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
   var active  = false;
   var active2 = false;
   var active3 = false;
   var active4 = false;
   var active5 = false;  
      console.log(resultDate);
//*******************************************************************************************/
   function register () {
    var email    = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
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
      // saveData(); // This is the Anonymous function, which creates the registration data.
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
  function save () {     
    var user = firebase.auth().currentUser;
    var email = user.email; 
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
    var DocRef2 = db.collection(resultDate).doc(email);
      DocRef2.set({  
          Status: { total: act ,
          lunch: act2 ,
          break: act3 , 
          train: act4 ,
          project: act5 ,  
          login: resultTime }
   }, {merge: true});
  }
//*******************************************************************************/
  function out () {
      firebase.auth().signOut();
 }
  //************************log in/log out****************************************/
  function login() {
    var email2    = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;
    firebase.auth().signInWithEmailAndPassword(email2, password2);  
      setTimeout(function(){
        var DocRef2 = db.collection(resultDate).doc(email2);
        DocRef2.set({  
            User: { 
            login: (resultTime)}
        }, {merge: true});
    }, 500)   
}
//**********************************************************************/
function logout() {
  var user = firebase.auth().currentUser;
    var email = user.email; 
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
    var DocRef = db.collection(resultDate).doc(email);
      DocRef.set({  
          User: { logout: resultTime,
          total: act ,
          lunch: act2 ,
          break: act3 , 
          train: act4 ,
          project: act5 , 
          email: email }
      }, {merge: true});
  setTimeout(out, 500);        
 setTimeout(resetTest, 500);
}
      observer();
//*************************************************************************************************/


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

function observer() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  // User is signed in.
      var email = user.email;
      console.log('user:',email); 
      console.log('******************************');
             
     }
      else {        
          console.log('No user signed in')
     }
   });  
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

//**************************************************************Brand New Tests*****************************/
  /* Every time the user refresh the browser tha data must be save it to firestore,
  so the timers must add up. */

  
  
 
//**********************************************************************/








