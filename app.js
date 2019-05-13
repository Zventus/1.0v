var firebaseConfig = {
    apiKey: "AIzaSyAENuNBvfE43PiHJi6NAeRh4VFPYv0WadI",
    authDomain: "sundaytest-cf6b9.firebaseapp.com",
    databaseURL: "https://sundaytest-cf6b9.firebaseio.com",
    projectId: "sundaytest-cf6b9",
    storageBucket: "sundaytest-cf6b9.appspot.com",
    messagingSenderId: "287005178350",
    appId: "1:287005178350:web:b3dd432537fb57b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //******************************** GLOBAL VARIABLES ******************************************/
     var db = firebase.firestore();
     var user = firebase.auth().currentUser;
     var active2 = false;
     var active3 = false;
     var active4 = false;
     var active5 = false;
     var active6 = false;     
  //*******************************************************************************************/
     function register () {
      var date = new Date();
      var options  = { month: 'short', day: '2-digit' };
      var options2 = { hour: 'numeric', minute: 'numeric'};
      var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
      var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
      var email    = document.getElementById("email").value;
      var password = document.getElementById("password").value;
        if (email.length < 8) {
          alert('Please enter an email address.');
        return;
      }
        if (password.length < 4) {
          alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){     
              var DocRef = db.collection(resultDate).doc(email);
              var DocRef2 = db.collection('userData').doc(email);
        DocRef2.set({
          Data: { email: email,
                  registerTime: (resultDate + ' ' + resultTime),
                  password: password }
        })
        DocRef.set({  
            User: { login: (resultTime + ' - ' + resultDate),
                    email: email
            },
            Timestamps: {
              inAvai: resultTime,
              login: resultTime,   
              email: email2             
            } 
        }, {merge: true});
            })
            .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
        // ...
      });   
  }
  //*******************************************************************************/
    function out () {
        firebase.auth().signOut();
   }
    //************************log in/log out****************************************/
    function login() {
      var date = new Date();
      var options  = { month: 'short', day: '2-digit'};
      var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
      var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
      var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
      console.log(resultTime);
      var email2    = document.getElementById("email2").value;
      var password2 = document.getElementById("password2").value;
      if (email2.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password2.length < 4) {
        alert('Please enter a password.');
        return;
      }
        firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
        })  
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  var DocRef2 = db.collection(resultDate).doc(email2);
                  
          DocRef2.set({  
              User: {  // User Object
                email: email2,
                loginDate: (resultDate + ' - ' + resultTime)
            },
              Timestamps: {  // Timestamps Object
                inAvai: resultTime,
                login: resultTime,   
                email: email2             
              },
              Total: {    // Total Object
                Available: 0,
                Lunch: 0,
                Break: 0,
                Training: 0,
                Project: 0,
                totalTime: 0
              }
          }, {merge: true})
                }
            });      //END   
  }
  //--------------------------------------------------------------------------/
  function logout() {
    alert('Are you sure you want to log out?');
      var date = new Date();
      var options  = { month: 'short', day: '2-digit'};
      var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
      var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
      var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
      var user = firebase.auth().currentUser;
      var email = user.email; 
      var DocRef = db.collection(resultDate).doc(email);
        DocRef.get().then(function(doc) {  //ANONYMOUS NESTED FUNCTION
        var login =  doc.data().Timestamps.login; 
        var a = login.split(':');
        var b = resultTime.split(':'); // THIS EQUALS THE 'LOGOUT TIMESTAMP'
  
      //*****************/ DO MATH HERE ************** +-=xyz :D
        var minutes = (+a[0]) * 60  + (+a[1])  ;
        var minutes2 = (+b[0]) * 60  + (+b[1])  ;
      //Arithmetics
        var math = minutes2 - minutes;

        DocRef.set({  
          User: {
            email: email,
            logoutDate:  (resultDate + ' - ' + resultTime),
          }, // ......END JSON
          Total: {
            totalTime: math 
          },
          Timestamps: {
            logout: resultTime
          }
        }, {merge: true});
  })  //END SET
    captureAll();
    setTimeout(out, 500);        
   setTimeout(resetTest, 500);
} //END LOGOUT FUNCTION
  
   
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
          var email = user.email;
              console.log('user:', email);
              //Navbar...HIDE
              document.getElementById("color").style.display = "none";
              //Timers & LogOut, Status Div...SHOW
              document.getElementById("user_div").style.display = "block";
              //Hello! Div...HIDE
              document.getElementById("test").style.display = "none";
              // Register Form...HIDE
              document.getElementById("testAgain").style.display = "none";
              //Welcome!...SHOWS
              document.getElementById("test10").innerHTML = "Welcome" +  "!" + " 👨‍💻 ";
              changeState2();  
            }
              else {        
                  console.log('No user signed in')
                  document.getElementById("user_div").style.display = "none";
                  document.getElementById("test").style.display = "block";
                  document.getElementById("color").style.display = "block";
             }
          });  
  //*************************************************************************************************/
  
  function start_timer2() {
      if (active2) {  //AVAILABLE
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
    if (active3) { //LUNCH
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
    if (active4) { //BREAK
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
    if (active5) {  //TRAINING
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
  
  function start_timer6() {
    // This function will go if active is true
    if (active6) {  //PROJECT
      var timer = document.getElementById("my_timer6").innerHTML;
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
       document.getElementById("my_timer6").innerHTML = hour + ":" + min + ":"+ sec;
       setTimeout(start_timer6, 1000); // keep repeating with the speed of 1 sec
      }
  }
  //*************************************************Change state functions************************** */
  // now we need function to change states - start or pause timer by clicking
  function changeState2() {
      if (active2 == false) {
         active2 = true;
         start_timer2(); 
         console.log("Timer 2 has been started");
     } else {
      console.log("timmer is on pause");
     }
  }
  
  function changeState3() {
    if (active3 == false) {
       active3 = true;
       start_timer3();
       console.log("Timer 3 has been started");
   } else {
    console.log("timmer is on pause");
   }
  }
  
  function changeState4() {
    if (active4 == false) {
       active4 = true;
       start_timer4();
       console.log("Timer 4 has been started");
   } else {
    console.log("timmer is on pause");
   }
  }
  
  function changeState5() {
    if (active5 == false) {
       active5 = true;
       start_timer5();
       console.log("Timer 5 has been started");
   } else {
    console.log("timmer is on pause");
   }
  }
  
  function changeState6() {
    if (active6 == false) {
       active6 = true;
       start_timer6();
       console.log("Timer 6 has been started");
   } else {
    console.log("timmer is on pause");
   }
  }
  //*********************************Dropdown control *****************************************************/

          captAvai = false;
          captLunch = false;
          captBreak = false;
          captTrain = false;
          captProj  = false;

          saveAvai = false;
          saveLunch = false;
          saveBreak = false;
          saveTrain = false;
          saveProj = false;
   
//*****************************CAPTURE AVAILABLES ***********************************/
  function captureAvai() {
              console.log('function captureAvai');
                    captureAll();
                    // test();
                    captAvai = false; //change of boolean
                    console.log(saveAvai);
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
      changeState2();
        active3 = false;
        active4 = false;
        active5 = false; 
        active6 = false;  
    var user = firebase.auth().currentUser;
    var email = user.email;
    var DocRef2 = db.collection(resultDate).doc(email); 
      DocRef2.set({
        Timestamps: { inAvai: resultTime }
    }, {merge: true})
} //END FUNCTION
  
//***********************************************************************************************************/
  function captureLunch () { 
            console.log('function captureLunch');
                        captureAll();
                    //   test();
                    //   oneAvai = true;
                    //   console.log('oneAvai:', oneAvai);
                      captLunch = true;                 
    //user clicks 'At Lunch'... 
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
      changeState3();     
    active2 = false;        
    active4 = false;
    active5 = false;
    active6 = false;
    var user = firebase.auth().currentUser;
    var email = user.email; 
    var DocRef2 = db.collection(resultDate).doc(email);
        DocRef2.set({
          Timestamps: { inLunch: resultTime}
    }, {merge: true}) 
} //End function
  
//***********************************************************************************************************/ 
  function captureBreak () { 
                    captureAll();
                    captBreak =true;
                    console.log('saveAvai:', saveAvai);
                    console.log('saveLunch:', saveLunch);
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
     changeState4();
    active2 = false;
    active3 = false;
    active5 = false;
    active6 = false;
    var user = firebase.auth().currentUser;
    var email = user.email; 
    var DocRef2 = db.collection(resultDate).doc(email);
      DocRef2.set({  
          Timestamps: { inBreak: resultTime}
      }, {merge: true}) 
  }    // End Function
  //***********************************************************************************************************/

  function captureTrain () { 
                    captureAll();
                    captTrain =true;
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
    changeState5(); 
    active2 = false;
    active3 = false;
    active4 = false;
    active6 = false;
    var user = firebase.auth().currentUser;
    var email = user.email; 
    var DocRef2 = db.collection(resultDate).doc(email);
      DocRef2.set({  
          Timestamps: {inTrain: resultTime}
      }, {merge: true})   
  } // End Function
//***********************************************************************************************************/
  function captureProject() {
                    captureAll();
                    captProj =true;
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
     changeState6(); 
    active2 = false;
    active3 = false;
    active4 = false;
    active5 = false;
    var user = firebase.auth().currentUser;
    var email = user.email; 
    var DocRef2 = db.collection(resultDate).doc(email);
      DocRef2.set({  
          Timestamps: { inProj: resultTime}
    }, {merge: true})
  }   
//****************************CAPTURE ALL********************************************************************/
function captureAll () {
        var user = firebase.auth().currentUser;
        var email = user.email;
        var date = new Date();
        var options  = { month: 'short', day: '2-digit' };
        var options2 = { hour: 'numeric', minute: 'numeric', second: 'numeric'};
        var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
        var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);

          if (!captAvai) {    // MUST BE FALSE 
            
            var DocRef2 = db.collection(resultDate).doc(email); 
             DocRef2.get().then( function(doc) {  // START FUNCTION
              var inAvai =  doc.data().Timestamps.inAvai; // extracting inAvai #1
              var a = inAvai.split(':');
              var b = resultTime.split(':');
          //*****************/ DO MATH HERE ************** +-=xyz :D
              var minutes = (+a[0]) * 60  + (+a[1])  + (+a[2])/60 ; // INITIAL TIME
              var minutes2 = (+b[0]) * 60  + (+b[1]) + (+b[2])/60 ; // FINAL TIME
          //Arithmetics
              var math = minutes2 - minutes; // first
                console.log(math);
                  DocRef2.set({
                    Total: {Available: math},
                    Timestamps: {outAvai: resultTime}
                  }, {merge: true})
                
                var math2 =  doc.data().Total.Available; //previous ... this is math
                var math3 = math + math2;
                    console.log(math2);
                    console.log(math3);
                    DocRef2.set({
                      Total: {Available: math3},
                      Timestamps: {outAvai: resultTime}
                    }, {merge: true})
                  }) // END FUNCTION
                  
                      console.log('captAvai:', captAvai);
                      console.log('saveAvai:', saveAvai);
                      captAvai = true
                      saveAvai = true  
  } //END IF

    if (captLunch) {
        var DocRef2 = db.collection(resultDate).doc(email); 
        DocRef2.get().then(function(doc) {
          var inLunch =  doc.data().Timestamps.inLunch; 
          var a = inLunch.split(':');
          var b = resultTime.split(':');
          //*****************/ DO MATH HERE ************** +-=xyz :D
          var minutes = (+a[0]) * 60  + (+a[1]) + (+a[2])/60;
          var minutes2 = (+b[0]) * 60  + (+b[1]) + (+b[2])/60 ;
          //Arithmetics
          var math = minutes2 - minutes; // first
                console.log(math);
                  DocRef2.set({
                    Total: {Lunch: math},
                    Timestamps: {outLunch: resultTime}
                  }, {merge: true})
                
                var math2 =  doc.data().Total.Lunch; //previous ... this is math
                var math3 = math + math2;
                    console.log(math2);
                    console.log(math3);
                    DocRef2.set({
                      Total: {Lunch: math3},
                      Timestamps: {outLunch: resultTime}
                    }, {merge: true}) 
          })
        
                      captLunch = false;
                      saveLunch = true;
                      console.log('saveAvai:', saveAvai);
                      console.log('saveLunch:', saveLunch);                           
  } //END IF

      if (captProj) {
        var DocRef2 = db.collection(resultDate).doc(email); 
          DocRef2.get().then(function(doc) {
            var inProj =  doc.data().Timestamps.inProj; //this will be in1
            var a = inProj.split(':');
            var b = resultTime.split(':');
      //*****************/ DO MATH HERE ************** +-=xyz :D
            var minutes = (+a[0]) * 60  + (+a[1]) + (+a[2])/60 ;
            var minutes2 = (+b[0]) * 60  + (+b[1]) + (+b[2])/60 ;
      //Arithmetics
      var math = minutes2 - minutes; // first
      console.log(math);
        DocRef2.set({
          Total: {Project: math},
          Timestamps: {outProj: resultTime}
        }, {merge: true})
      
      var math2 =  doc.data().Total.Project; //previous ... this is math
      var math3 = math + math2;
          console.log(math2);
          console.log(math3);
          DocRef2.set({
            Total: {Project: math3},
            Timestamps: {outProj: resultTime}
          }, {merge: true})
        })
                  captProj = false;
                  saveProj = true;
    } //END IF

  if (captTrain) {
    
    var DocRef2 = db.collection(resultDate).doc(email); 
    DocRef2.get().then(function(doc) {
      var inTrain =  doc.data().Timestamps.inTrain; //this will be in1
      var a = inTrain.split(':');
      var b = resultTime.split(':');

      //*****************/ DO MATH HERE ************** +-=xyz :D
      var minutes = (+a[0]) * 60  + (+a[1]) + (+a[2])/60 ;
      var minutes2 = (+b[0]) * 60  + (+b[1]) + (+b[2])/60 ;
      
      //Arithmetics
      var math = minutes2 - minutes; // first
      console.log(math);
        DocRef2.set({
          Total: {Training: math},
          Timestamps: {outTrain: resultTime}
        }, {merge: true})
      
      var math2 =  doc.data().Total.Training; //previous ... this is math
      var math3 = math + math2;
          console.log(math2);
          console.log(math3);
          DocRef2.set({
            Total: {Training: math3},
            Timestamps: {outTrain: resultTime}
          }, {merge: true})
  })
                  captTrain = false;
                  saveTrain = true;
                  

  } //END IF

      if (captBreak) {
        
        var DocRef2 = db.collection(resultDate).doc(email); 
          DocRef2.get().then(function(doc) {
            var inBreak =  doc.data().Timestamps.inBreak; //this will be in1
            var a = inBreak.split(':');
            var b = resultTime.split(':');
      //*****************/ DO MATH HERE ************** +-=xyz :D
      var minutes = (+a[0]) * 60  + (+a[1]) + (+a[2])/60 ;
      var minutes2 = (+b[0]) * 60  + (+b[1]) + (+b[2])/60 ;
      //Arithmetics
      var math = minutes2 - minutes; // first
      console.log(math);
        DocRef2.set({
          Total: {Break: math},
          Timestamps: {outBreak: resultTime}
        }, {merge: true})
      
      var math2 =  doc.data().Total.Break; //previous ... this is math
      var math3 = math + math2;
          console.log(math2);
          console.log(math3);
          DocRef2.set({
            Total: {Break: math3},
            Timestamps: {outBreak: resultTime}
          }, {merge: true})
   })
                  captBreak = false;
                  saveBreak = true;
                  
  } //end if
}

   //*************************************************************************************/
  function resetTest() {
    document.getElementById("my_timer2").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer3").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer4").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer5").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer6").innerHTML = "00" + ":" + "00" + ":" + "00";
    active2 = false;
    active3 = false;
    active4 = false;
    active5 = false;
    active6 = false;
    console.log('Reset done');
  }
  
 
  
  
  
  
  
  
  