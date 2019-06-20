
function start_timer() {
    if(active) {
        var timer = document.getElementById("my_timer").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1]; // minutes
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
            sec++;
            if (sec < 10) sec = "0" + sec;
        }
        // update our html
        document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer, 1000); // keep repeating with the speed of 1 sec 
    }
  }

  function start_timer2() {
      if(activeTwo) {
        var timer = document.getElementById("my_timer2").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1]; // minutes
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
            sec++;
            if (sec < 10) sec = "0" + sec;
        }
        // update our html
        document.getElementById("my_timer2").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer2, 1000); // keep repeating with the speed of 1 sec
        }
    }
  
  function start_timer3() {
        if(activeThree) {
        var timer = document.getElementById("my_timer3").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1]; // minutes
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
            sec++;
            if (sec < 10) sec = "0" + sec;
        }
        // update our html
        document.getElementById("my_timer3").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer3, 1000); // keep repeating with the speed of 1 sec
        }
    }
  
  function start_timer4() {
    // This function will go if active is true
    if(activeFour) {
        var timer = document.getElementById("my_timer4").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1]; // minutes
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
            sec++;
            if (sec < 10) sec = "0" + sec;
        }
        // update our html
        document.getElementById("my_timer4").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer4, 1000); // keep repeating with the speed of 1 sec
        }
    }
  
  function start_timer5() {
      if(activeFive) {
    // This function will go if active is true
        var timer = document.getElementById("my_timer5").innerHTML;
        var arr = timer.split(":");
        var hour = arr[0]; // getting hour
        var min = arr[1]; // minutes
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
            sec++;
            if (sec < 10) sec = "0" + sec;
        }
        // update our html
        document.getElementById("my_timer5").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer5, 1000); // keep repeating with the speed of 1 sec
        }
    }

