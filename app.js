var config = {
    apiKey: "AIzaSyBuaCPUz5s3Iw_hIdhyMG9GmHczwSBefY8",
    authDomain: "zventus-6cbba.firebaseapp.com",
    databaseURL: "https://zventus-6cbba.firebaseio.com",
    projectId: "zventus-6cbba",
    storageBucket: "zventus-6cbba.appspot.com",
    messagingSenderId: "68550919770"
  };
  firebase.initializeApp(config);
  //******************************** GLOBAL VARIABLES ******************************************/
     var db = firebase.firestore();
     var user = firebase.auth().currentUser;
     var active  = false;
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
          Data: {registerTime: (resultDate + ' ' + resultTime),
                 password: password }
        })
        DocRef.set({  
            User: { login: resultTime, email: email
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
      var options2 = { hour: 'numeric', minute: 'numeric'};
      var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
      var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
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
              User: { 
              email: email2,
              login: (resultTime),
              inAvai: (resultTime) 
            }
          }, {merge: true})
                }
            } ) ;        
  }
  //--------------------------------------------------------------------------/
  function logout() {
      var date = new Date();
      var options  = { month: 'short', day: '2-digit'};
      var options2 = { hour: 'numeric', minute: 'numeric'};
      var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
      var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
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
      var test6 = document.getElementById("my_timer6");
      var act6 = test6.textContent;
      var DocRef = db.collection(resultDate).doc(email);
        DocRef.set({  
            User2: { logout: resultTime,
            totalTime: act,
            available: act6,
            lunch: act2,
            break: act3, 
            train: act4,
            project: act5, 
            email: email }
        }, {merge: true});
    setTimeout(out, 500);        
   setTimeout(resetTest, 500);
  }
  
   
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
              changeState();
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
  
  // Three function for six timers. Each status has its own count timer
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
  function changeState() {
       if (active == false) {
          active = true;
          start_timer();
          console.log("Timer 1 has been started");
      } else {
       console.log("timmer is on pause");
      }
  }

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


          captAvai = true;
          captLunch = false;
          captBreak = false;
          captTrain = false;
          captProy  = false;



  function captureAvai() {
                    captAvai = true;
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric'};
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
        User: { inAvai: (resultTime) }
}, {merge: true})
        //IF STATEMENTS
      if (captLunch) {
        var user = firebase.auth().currentUser;
        var email = user.email;
        var DocRef2 = db.collection(resultDate).doc(email); 
        DocRef2.get().then(function(doc) {
          var inLunch =  doc.data().User.inLunch;
          DocRef2.set({
            User: { 
            outLunch: (resultTime + ' - ' + inLunch),
        }
      },{merge: true})
    })
                      captLunch = false;
  } //END IF


  if (captProy) {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var DocRef2 = db.collection(resultDate).doc(email); 
    DocRef2.get().then(function(doc) {
      var inProy =  doc.data().User.inProy;
      DocRef2.set({
        User: { 
        outProy: (resultTime + ' - ' + inProy),
    }
  },{merge: true})
  })
                  captProy = false;
  } //END IF



  if (captTrain) {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var DocRef2 = db.collection(resultDate).doc(email); 
    DocRef2.get().then(function(doc) {
      var inTrain =  doc.data().User.inTrain;
      DocRef2.set({
        User: { 
        outTrain: (resultTime + ' - ' + inTrain),
    }
  },{merge: true})
  })
                  captTrain = false;
  } //END IF


  if (captBreak) {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var DocRef2 = db.collection(resultDate).doc(email); 
    DocRef2.get().then(function(doc) {
      var inBreak =  doc.data().User.inBreak;
      DocRef2.set({
        User: { 
        outBreak: (resultTime + ' - ' + inBreak),
    }
  },{merge: true})
  })
                  captBreak = false;
  } //end if
   
  } //END FUNCTION
  //***********************************************************************************************************/
 
  

  function captureLunch () { 
                      captLunch = true;
                      // captAvai = true;
    //user clicks 'At Lunch'... 
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric'};
    var resultDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    var resultTime = new Intl.DateTimeFormat('en-GB', options2).format(date);
   
      changeState3();     // active3 = true;
    active2 = false;        
    active4 = false;
    active5 = false;
    active6 = false;
    var user = firebase.auth().currentUser;
    var email = user.email; 
    var DocRef2 = db.collection(resultDate).doc(email);
        DocRef2.set({
          User: { inLunch: (resultTime) }
    }, {merge: true}) 
    
    // Validation statements
    if (captAvai) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var DocRef2 = db.collection(resultDate).doc(email); 
      DocRef2.get().then(function(doc) {
        var inAvai =  doc.data().User.inAvai;
        DocRef2.set({
          User: { 
          outAvai: (resultTime + ' - ' + inAvai),
      }
    },{merge: true})
  })
                    captAvai = false;
}
          if (captProy) {
            var user = firebase.auth().currentUser;
            var email = user.email;
            var DocRef2 = db.collection(resultDate).doc(email); 
            DocRef2.get().then(function(doc) {
              var inProy =  doc.data().User.inProy;
              DocRef2.set({
                User: { 
                outProy: (resultTime + ' - ' + inProy),
            }
          },{merge: true})
          })
                          captProy = false;
          } //END IF


          if (captTrain) {
            var user = firebase.auth().currentUser;
            var email = user.email;
            var DocRef2 = db.collection(resultDate).doc(email); 
            DocRef2.get().then(function(doc) {
              var inTrain =  doc.data().User.inTrain;
              DocRef2.set({
                User: { 
                outTrain: (resultTime + ' - ' + inTrain),
            }
          },{merge: true})
          })
                          captTrain = false;
          } //END IF

          if (captBreak) {
            var user = firebase.auth().currentUser;
            var email = user.email;
            var DocRef2 = db.collection(resultDate).doc(email); 
            DocRef2.get().then(function(doc) {
              var inBreak =  doc.data().User.inBreak;
              DocRef2.set({
                User: { 
                outBreak: (resultTime + ' - ' + inBreak),
            }
          },{merge: true})
          })
                          captBreak = false;
          } //end if
      
} //End function




//***********************************************************************************************************/
  
  function captureBreak () { 
                    captBreak =true;
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric'};
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
          User: { 
          inBreak: (resultTime)}
      }, {merge: true}) 
       // Validation statements
    if (captAvai) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var DocRef2 = db.collection(resultDate).doc(email); 
      DocRef2.get().then(function(doc) {
        var inAvai =  doc.data().User.inAvai;
          DocRef2.set({
            User: { 
            outAvai: (resultTime + ' - ' + inAvai),
          }
        },{merge: true})
      })
                      captAvai = false;
    } //END IF 

    if (captLunch) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var DocRef2 = db.collection(resultDate).doc(email); 
      DocRef2.get().then(function(doc) {
        var inLunch =  doc.data().User.inLunch;
        DocRef2.set({
          User: { 
          outLunch: (resultTime + ' - ' + inLunch),
      }
    },{merge: true})
  })
                    captLunch = false;
} //END IF

          if (captProy) {
        var user = firebase.auth().currentUser;
        var email = user.email;
        var DocRef2 = db.collection(resultDate).doc(email); 
        DocRef2.get().then(function(doc) {
          var inProy =  doc.data().User.inProy;
          DocRef2.set({
            User: { 
            outProy: (resultTime + ' - ' + inProy),
        }
      },{merge: true})
      })
                      captProy = false;
      } //END IF

      if (captTrain) {
        var user = firebase.auth().currentUser;
        var email = user.email;
        var DocRef2 = db.collection(resultDate).doc(email); 
        DocRef2.get().then(function(doc) {
          var inTrain =  doc.data().User.inTrain;
          DocRef2.set({
            User: { 
            outTrain: (resultTime + ' - ' + inTrain),
        }
      },{merge: true})
      })
                      captTrain = false;
      } //END IF

      
  }    // End Function
  //***********************************************************************************************************/

  function captureTrain () { 
                    captTrain =true;
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric'};
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
          User: { 
          inTrain: (resultTime)}
      }, {merge: true}) 
       // Validation statements
    if (captAvai) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var DocRef2 = db.collection(resultDate).doc(email); 
      DocRef2.get().then(function(doc) {
        var inAvai =  doc.data().User.inAvai;
        DocRef2.set({
          User: { 
          outAvai: (resultTime + ' - ' + inAvai),
      }
    },{merge: true})
  })
                    captAvai = false;
} //end if

if (captLunch) {
  var user = firebase.auth().currentUser;
  var email = user.email;
  var DocRef2 = db.collection(resultDate).doc(email); 
  DocRef2.get().then(function(doc) {
    var inLunch =  doc.data().User.inLunch;
    DocRef2.set({
      User: { 
      outLunch: (resultTime + ' - ' + inLunch),
  }
},{merge: true})
})
                captLunch = false;
} //END IF
if (captProy) {
  var user = firebase.auth().currentUser;
  var email = user.email;
  var DocRef2 = db.collection(resultDate).doc(email); 
  DocRef2.get().then(function(doc) {
    var inProy =  doc.data().User.inProy;
    DocRef2.set({
      User: { 
      outProy: (resultTime + ' - ' + inProy),
  }
},{merge: true})
})
                captProy = false;
} //END IF


if (captBreak) {
  var user = firebase.auth().currentUser;
  var email = user.email;
  var DocRef2 = db.collection(resultDate).doc(email); 
  DocRef2.get().then(function(doc) {
    var inBreak =  doc.data().User.inBreak;
    DocRef2.set({
      User: { 
      outBreak: (resultTime + ' - ' + inBreak),
  }
},{merge: true})
})
                captBreak = false;
} //end if

      
  } // End Function
//***********************************************************************************************************/

  function captureProyect() {
                    captProy =true;
    var date = new Date();
    var options  = { month: 'short', day: '2-digit' };
    var options2 = { hour: 'numeric', minute: 'numeric'};
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
          User: { 
          inProy: (resultTime)}
      }, {merge: true})
       // Validation statements
    if (captAvai) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      var DocRef2 = db.collection(resultDate).doc(email); 
        DocRef2.get().then(function(doc) {
          var inAvai =  doc.data().User.inAvai;
            DocRef2.set({
            User: { 
            outAvai: (resultTime + ' - ' + inAvai),
        }
      },{merge: true})
    })
                    captAvai = false;
  }   //End if

  if (captLunch) {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var DocRef2 = db.collection(resultDate).doc(email); 
    DocRef2.get().then(function(doc) {
      var inLunch =  doc.data().User.inLunch;
      DocRef2.set({
        User: { 
        outLunch: (resultTime + ' - ' + inLunch),
    }
  },{merge: true})
})
                  captLunch = false;
} //END IF




if (captTrain) {
  var user = firebase.auth().currentUser;
  var email = user.email;
  var DocRef2 = db.collection(resultDate).doc(email); 
  DocRef2.get().then(function(doc) {
    var inTrain =  doc.data().User.inTrain;
    DocRef2.set({
      User: { 
      outTrain: (resultTime + ' - ' + inTrain),
  }
},{merge: true})
})
                captTrain = false;
} //END IF

if (captBreak) {
  var user = firebase.auth().currentUser;
  var email = user.email;
  var DocRef2 = db.collection(resultDate).doc(email); 
  DocRef2.get().then(function(doc) {
    var inBreak =  doc.data().User.inBreak;
    DocRef2.set({
      User: { 
      outBreak: (resultTime + ' - ' + inBreak),
  }
},{merge: true})
})
                captBreak = false;
} //end if



} // End Function

  
   //*************************************************************************************/
  function resetTest() {
  document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
  document.getElementById("my_timer2").innerHTML = "00" + ":" + "00" + ":" + "00";
  document.getElementById("my_timer3").innerHTML = "00" + ":" + "00" + ":" + "00";
  document.getElementById("my_timer4").innerHTML = "00" + ":" + "00" + ":" + "00";
  document.getElementById("my_timer5").innerHTML = "00" + ":" + "00" + ":" + "00";
  document.getElementById("my_timer6").innerHTML = "00" + ":" + "00" + ":" + "00";
  active = false;
  active2 = false;
  active3 = false;
  active4 = false;
  active5 = false;
  active6 = false;
  console.log('Reset done');
  }
  
  
  
  
  
  
  
  
  
  