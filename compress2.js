function start_timer(){if(active){var timer=document.getElementById("my_timer").innerHTML;var arr=timer.split(":");var hour=arr[0];var min=arr[1];var sec=arr[2];if(sec==59){if(min==59){hour++;min=0;if(hour<10)hour="0"+hour}else{min++}
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