var config={apiKey:"AIzaSyBuaCPUz5s3Iw_hIdhyMG9GmHczwSBefY8",authDomain:"zventus-6cbba.firebaseapp.com",databaseURL:"https://zventus-6cbba.firebaseio.com",projectId:"zventus-6cbba",storageBucket:"zventus-6cbba.appspot.com",messagingSenderId:"68550919770"};firebase.initializeApp(config);var db=firebase.firestore();var user=firebase.auth().currentUser;var active=!1;var active2=!1;var active3=!1;var active4=!1;var active5=!1;var active6=!1;function register(){var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);var email=document.getElementById("email").value;var password=document.getElementById("password").value;if(email.length<8){alert('Please enter an email address.');return}
if(password.length<4){alert('Please enter a password.');return}
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){var DocRef=db.collection(resultDate).doc(email);var DocRef2=db.collection('userData').doc(email);DocRef2.set({Data:{registerTime:(resultDate+' '+resultTime),password:password}})
DocRef.set({User:{login:resultTime,email:email}},{merge:!0})}).catch(function(error){var errorCode=error.code;var errorMessage=error.message;console.log(errorCode);console.log(errorMessage)})}
function out(){firebase.auth().signOut()}
function login(){var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);var email2=document.getElementById("email2").value;var password2=document.getElementById("password2").value;if(email2.length<4){alert('Please enter an email address.');return}
if(password2.length<4){alert('Please enter a password.');return}
firebase.auth().signInWithEmailAndPassword(email2,password2).catch(function(error){var errorCode=error.code;var errorMessage=error.message;if(errorCode==='auth/wrong-password'){alert('Wrong password.')}else{alert(errorMessage)}})
firebase.auth().onAuthStateChanged(function(user){if(user){var DocRef2=db.collection(resultDate).doc(email2);DocRef2.set({User:{email:email2,login:(resultTime),inAvai:(resultTime)}},{merge:!0})}})}
function logout(){var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);var user=firebase.auth().currentUser;var email=user.email;var test=document.getElementById("my_timer");var act=test.textContent;var test2=document.getElementById("my_timer2");var act2=test2.textContent;var test3=document.getElementById("my_timer3");var act3=test3.textContent;var test4=document.getElementById("my_timer4");var act4=test4.textContent;var test5=document.getElementById("my_timer5");var act5=test5.textContent;var test6=document.getElementById("my_timer6");var act6=test6.textContent;var DocRef=db.collection(resultDate).doc(email);DocRef.set({User2:{logout:resultTime,totalTime:act,available:act6,lunch:act2,break:act3,train:act4,project:act5,email:email}},{merge:!0});setTimeout(out,500);setTimeout(resetTest,500)}
firebase.auth().onAuthStateChanged(function(user){if(user){var email=user.email;console.log('user:',email);document.getElementById("color").style.display="none";document.getElementById("user_div").style.display="block";document.getElementById("test").style.display="none";document.getElementById("testAgain").style.display="none";document.getElementById("test10").innerHTML="Welcome"+"!"+" 👨‍💻 ";changeState();changeState2()}
else{console.log('No user signed in')
document.getElementById("user_div").style.display="none";document.getElementById("test").style.display="block";document.getElementById("color").style.display="block"}});function start_timer(){if(active){var timer=document.getElementById("my_timer").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
if(min<10)min="0"+min;sec=0}else{sec ++;if(sec<10)sec="0"+sec}
document.getElementById("my_timer").innerHTML=hour+":"+min+":"+sec;setTimeout(start_timer,1000)}}
function start_timer2(){if(active2){var timer=document.getElementById("my_timer2").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
if(min<10)min="0"+min;sec=0}else{sec ++;if(sec<10)sec="0"+sec}
document.getElementById("my_timer2").innerHTML=hour+":"+min+":"+sec;setTimeout(start_timer2,1000)}}
function start_timer3(){if(active3){var timer=document.getElementById("my_timer3").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
if(min<10)min="0"+min;sec=0}else{sec ++;if(sec<10)sec="0"+sec}
document.getElementById("my_timer3").innerHTML=hour+":"+min+":"+sec;setTimeout(start_timer3,1000)}}
function start_timer4(){if(active4){var timer=document.getElementById("my_timer4").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
if(min<10)min="0"+min;sec=0}else{sec ++;if(sec<10)sec="0"+sec}
document.getElementById("my_timer4").innerHTML=hour+":"+min+":"+sec;setTimeout(start_timer4,1000)}}
function start_timer5(){if(active5){var timer=document.getElementById("my_timer5").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
if(min<10)min="0"+min;sec=0}else{sec ++;if(sec<10)sec="0"+sec}
document.getElementById("my_timer5").innerHTML=hour+":"+min+":"+sec;setTimeout(start_timer5,1000)}}
function start_timer6(){if(active6){var timer=document.getElementById("my_timer6").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
if(min<10)min="0"+min;sec=0}else{sec ++;if(sec<10)sec="0"+sec}
document.getElementById("my_timer6").innerHTML=hour+":"+min+":"+sec;setTimeout(start_timer6,1000)}}
function changeState(){if(active==!1){active=!0;start_timer();console.log("Timer 1 has been started")}else{console.log("timmer is on pause")}}
function changeState2(){if(active2==!1){active2=!0;start_timer2();console.log("Timer 2 has been started")}else{console.log("timmer is on pause")}}
function changeState3(){if(active3==!1){active3=!0;start_timer3();console.log("Timer 3 has been started")}else{console.log("timmer is on pause")}}
function changeState4(){if(active4==!1){active4=!0;start_timer4();console.log("Timer 4 has been started")}else{console.log("timmer is on pause")}}
function changeState5(){if(active5==!1){active5=!0;start_timer5();console.log("Timer 5 has been started")}else{console.log("timmer is on pause")}}
function changeState6(){if(active6==!1){active6=!0;start_timer6();console.log("Timer 6 has been started")}else{console.log("timmer is on pause")}}
captAvai=!0;captLunch=!1;captBreak=!1;captTrain=!1;captProy=!1;function captureAvai(){captAvai=!0;var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);changeState2();active3=!1;active4=!1;active5=!1;active6=!1;var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.set({User:{inAvai:(resultTime)}},{merge:!0})
if(captLunch){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inLunch=doc.data().User.inLunch;DocRef2.set({User:{outLunch:(resultTime+' - '+inLunch),}},{merge:!0})})
captLunch=!1}
if(captProy){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inProy=doc.data().User.inProy;DocRef2.set({User:{outProy:(resultTime+' - '+inProy),}},{merge:!0})})
captProy=!1}
if(captTrain){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inTrain=doc.data().User.inTrain;DocRef2.set({User:{outTrain:(resultTime+' - '+inTrain),}},{merge:!0})})
captTrain=!1}
if(captBreak){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inBreak=doc.data().User.inBreak;DocRef2.set({User:{outBreak:(resultTime+' - '+inBreak),}},{merge:!0})})
captBreak=!1}}
function captureLunch(){captLunch=!0;var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);changeState3();active2=!1;active4=!1;active5=!1;active6=!1;var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.set({User:{inLunch:(resultTime)}},{merge:!0})
if(captAvai){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inAvai=doc.data().User.inAvai;DocRef2.set({User:{outAvai:(resultTime+' - '+inAvai),}},{merge:!0})})
captAvai=!1}
if(captProy){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inProy=doc.data().User.inProy;DocRef2.set({User:{outProy:(resultTime+' - '+inProy),}},{merge:!0})})
captProy=!1}
if(captTrain){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inTrain=doc.data().User.inTrain;DocRef2.set({User:{outTrain:(resultTime+' - '+inTrain),}},{merge:!0})})
captTrain=!1}
if(captBreak){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inBreak=doc.data().User.inBreak;DocRef2.set({User:{outBreak:(resultTime+' - '+inBreak),}},{merge:!0})})
captBreak=!1}}
function captureBreak(){captBreak=!0;var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);changeState4();active2=!1;active3=!1;active5=!1;active6=!1;var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.set({User:{inBreak:(resultTime)}},{merge:!0})
if(captAvai){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inAvai=doc.data().User.inAvai;DocRef2.set({User:{outAvai:(resultTime+' - '+inAvai),}},{merge:!0})})
captAvai=!1}
if(captLunch){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inLunch=doc.data().User.inLunch;DocRef2.set({User:{outLunch:(resultTime+' - '+inLunch),}},{merge:!0})})
captLunch=!1}
if(captProy){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inProy=doc.data().User.inProy;DocRef2.set({User:{outProy:(resultTime+' - '+inProy),}},{merge:!0})})
captProy=!1}
if(captTrain){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inTrain=doc.data().User.inTrain;DocRef2.set({User:{outTrain:(resultTime+' - '+inTrain),}},{merge:!0})})
captTrain=!1}}
function captureTrain(){captTrain=!0;var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);changeState5();active2=!1;active3=!1;active4=!1;active6=!1;var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.set({User:{inTrain:(resultTime)}},{merge:!0})
if(captAvai){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inAvai=doc.data().User.inAvai;DocRef2.set({User:{outAvai:(resultTime+' - '+inAvai),}},{merge:!0})})
captAvai=!1}
if(captLunch){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inLunch=doc.data().User.inLunch;DocRef2.set({User:{outLunch:(resultTime+' - '+inLunch),}},{merge:!0})})
captLunch=!1}
if(captProy){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inProy=doc.data().User.inProy;DocRef2.set({User:{outProy:(resultTime+' - '+inProy),}},{merge:!0})})
captProy=!1}
if(captBreak){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inBreak=doc.data().User.inBreak;DocRef2.set({User:{outBreak:(resultTime+' - '+inBreak),}},{merge:!0})})
captBreak=!1}}
function captureProyect(){captProy=!0;var date=new Date();var options={month:'short',day:'2-digit'};var options2={hour:'numeric',minute:'numeric'};var resultDate=new Intl.DateTimeFormat('en-GB',options).format(date);var resultTime=new Intl.DateTimeFormat('en-GB',options2).format(date);changeState6();active2=!1;active3=!1;active4=!1;active5=!1;var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.set({User:{inProy:(resultTime)}},{merge:!0})
if(captAvai){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inAvai=doc.data().User.inAvai;DocRef2.set({User:{outAvai:(resultTime+' - '+inAvai),}},{merge:!0})})
captAvai=!1}
if(captLunch){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inLunch=doc.data().User.inLunch;DocRef2.set({User:{outLunch:(resultTime+' - '+inLunch),}},{merge:!0})})
captLunch=!1}
if(captTrain){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inTrain=doc.data().User.inTrain;DocRef2.set({User:{outTrain:(resultTime+' - '+inTrain),}},{merge:!0})})
captTrain=!1}
if(captBreak){var user=firebase.auth().currentUser;var email=user.email;var DocRef2=db.collection(resultDate).doc(email);DocRef2.get().then(function(doc){var inBreak=doc.data().User.inBreak;DocRef2.set({User:{outBreak:(resultTime+' - '+inBreak),}},{merge:!0})})
captBreak=!1}}
function resetTest(){document.getElementById("my_timer").innerHTML="00"+":"+"00"+":"+"00";document.getElementById("my_timer2").innerHTML="00"+":"+"00"+":"+"00";document.getElementById("my_timer3").innerHTML="00"+":"+"00"+":"+"00";document.getElementById("my_timer4").innerHTML="00"+":"+"00"+":"+"00";document.getElementById("my_timer5").innerHTML="00"+":"+"00"+":"+"00";document.getElementById("my_timer6").innerHTML="00"+":"+"00"+":"+"00";active=!1;active2=!1;active3=!1;active4=!1;active5=!1;active6=!1;console.log('Reset done')}