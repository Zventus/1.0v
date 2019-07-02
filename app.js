let config = {
    apiKey: "AIzaSyBuaCPUz5s3Iw_hIdhyMG9GmHczwSBefY8",
    authDomain: "zventus-6cbba.firebaseapp.com",
    databaseURL: "https://zventus-6cbba.firebaseio.com",
    projectId: "zventus-6cbba",
    storageBucket: "zventus-6cbba.appspot.com",
    messagingSenderId: "68550919770"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
let user = firebase.auth().currentUser;
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

window.onload = function () {
    let content = document.getElementById('avai')
    let contentTwo = document.getElementById('lunc')
    let contentThree = document.getElementById('bre')
    let contentFour = document.getElementById('trai')
    let contentFive = document.getElementById('proy')
    let availableStored = localStorage.getItem("Available")
    let lunchStored = localStorage.getItem("Lunch")
    let breakStored = localStorage.getItem("Break")
    let trainingStored = localStorage.getItem('Training')
    let projectStored = localStorage.getItem('Project')
    content.innerHTML =  ` ${availableStored} min` 
    contentTwo.innerHTML =  ` ${lunchStored} min` 
    contentThree.innerHTML =  ` ${breakStored} min`
    contentFour.innerHTML =  ` ${trainingStored} min`
    contentFive.innerHTML =  ` ${projectStored} min`
    // let avai = localStorage.getItem('availableBool')
    // let lunch = localStorage.getItem('lunchBool ')
    console.log(avaiTest, lunTest)
    if (!avaiTest) {// if 0 then run
        current.innerHTML = 'Available'
    } 
    else if(lunTest) {
        current.innerHTML = 'Lunch'
    }
    else if(breTest) {
        current.innerHTML = 'Break'
    }
    else if(traiTest) {
        current.innerHTML = 'Training'
    }
    else if(proyTest) {
        current.innerHTML = 'Project'
    }
}

const clock = document.getElementById('clock');
                        setInterval(() => {
                            const now = moment();
                            const humanReadable = now.format('hh:mm:ss a');
                                clock.textContent = humanReadable;
                        }, 1000
                        )

function register() {
    let date = moment().format('DD MMM');
    let m = moment().format('hh:mm:ss');
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email.length < 8) {
        alert('Please enter an email address.');
        return
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        var DocRef = firestore.collection(date).doc(email);
        var DocRef2 = firestore.collection('userData').doc(email);
        DocRef2.set({
            Data: {
                email: email,
                registerTime: (date + ' ' + m),
                password: password
            }
        })
        DocRef.set({
            User: {
                login: (date + ' - ' + m),
                email: email
            },
            Timestamps: {
                inAvai: m,
                login: m,
                email: email2
            }
        }, {
            merge: !0
        })
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage)
    })
}

function login() {
    let date = moment().format('DD MMM');
    let m = moment().format('HH:mm:ss');
    console.log('logTime:', m);
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;
    if (email2.length < 4) {
        alert('Please enter an email address.');
        return
    }
    if (password2.length < 4) {
        alert('Please enter a password.');
        return
    }
    firebase.auth().signInWithEmailAndPassword(email2, password2).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.')
        } else {
            alert(errorMessage)
        }
    })
    
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var DocRef2 = firestore.collection(date).doc(email2);
            DocRef2.set({
                User: {
                    email: email2,
                    loginDate: (date + ' - ' + m),
                },
                Timestamps: {
                    inAvai: m,
                    login: m,
                    email: email2
                },
                Total: {
                    Available: 0,
                    Lunch: 0,
                    Break: 0,
                    Training: 0,
                    Project: 0,
                    totalTime: 0
                }
            }, {
                merge: !0
            })
        }
    })
    current.innerHTML = 'Available'
    initial()
}

function logout() {
    console.log('logout');
    let date = moment().format('DD MMM');
    let m = moment().format('hh:mm:ss');
    let user = firebase.auth().currentUser;
    let email = user.email;
    let DocRef = firestore.collection(date).doc(email);
    DocRef.get().then((doc) => {
        DocRef.set({
            User: {
                email: email,
                logoutDate: (date + ' - ' + m),
            },
            Total: {
                totalTime: time
            },
            Timestamps: {
                logout: m
            }
        }, {
            merge: !0
        })
    })
    
     setTimeout(() => {firebase.auth().signOut()}, 500);
    // setTimeout(resetTest, 250); 
     erase()
     resetTest()
} //End logout

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        console.log('user:', email);
        document.getElementById("user_div").style.display = "block";
        document.getElementById("test").style.display = "none";            
    } else {
        console.log('No user signed in')
        document.getElementById("user_div").style.display = "none";
        document.getElementById("test").style.display = "block";
    }
});

function erase () {
    console.log('erase test')
    localStorage.removeItem("Available");
    localStorage.removeItem("Lunch");
    localStorage.removeItem("Break");
    localStorage.removeItem("Training");
    localStorage.removeItem("Project");
    localStorage.removeItem("availableBool");
    localStorage.removeItem("lunchBool");
    localStorage.removeItem("breakBool");
    localStorage.removeItem("trainingBool");
    localStorage.removeItem("projectBool");
}

function initial () {
      localStorage.setItem("Available", '0');
      localStorage.setItem("availableBool", '0');
      localStorage.setItem("Lunch", '0');
      localStorage.setItem("lunchBool", '0');
      localStorage.setItem("Break", '0');
      localStorage.setItem("breakBool", '0')
      localStorage.setItem("Training", '0');
      localStorage.setItem("trainingBool",'0')
      localStorage.setItem("Project", '0');
      localStorage.setItem('projectBool','0')
}

let avai = localStorage.getItem("availableBool")
let lun = localStorage.getItem("lunchBool")
let bre = localStorage.getItem('breakBool')
let trai = localStorage.getItem('trainingBool')
let proy = localStorage.getItem('projectBool')
let avaiTest = parseFloat(avai)
let lunTest = parseFloat(lun)
let breTest = parseFloat(bre)
let traiTest = parseFloat(trai)
let proyTest = parseFloat(proy)
// console.log(avaiTest, lunTest)
let current = document.getElementById('current') // status bar
let status = document.querySelectorAll('button.status').length;
let date = moment().format('DD MMM');
let time = moment().format('HH:mm:ss');
for (let i = 0; i < status; i++) {
    document.querySelectorAll("button.status")[i].addEventListener(
        "click", () => {
            let user = firebase.auth().currentUser;
            let email = user.email;
            let DocRef = firestore.collection(date).doc(email);
            if (i == 0) { // available
                current.innerHTML = 'Available'
                substract()// saves previous state
                   avaiTest = 0  // then activate current state
                   localStorage.setItem("availableBool", avaiTest)            
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inAvai: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 1) { // lunch
            current.innerHTML = 'Lunch'
                 substract();
                 lunTest = 1 // lunch is active
                 localStorage.setItem("lunchBool", lunTest)
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inLunch: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 2) { // break
                current.innerHTML = 'Break'
                substract()
                breTest = 1
                localStorage.setItem('breakBool', breTest)
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inBreak: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 3) { // trai
                current.innerHTML = 'Training'
                substract()
                traiTest = 1
                localStorage.setItem('trainingBool',traiTest)
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inTrain: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 4) { // project
                current.innerHTML = 'Project'
                substract()
                proyTest = 1
                localStorage.setItem('projectBool',proyTest)
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inProy: newTime
                    },
                }, {
                    merge: !0
                })
            }
        }
    )
}

function substract () {
    let user = firebase.auth().currentUser;
    let email = user.email;
    let DocRef = firestore.collection(date).doc(email);
        if(!avaiTest) {// if avai=0 run this1
            DocRef.get().then((doc) => {
    let login = doc.data().Timestamps.inAvai; // string
    let a = moment(login, 'HH:mm:ss').clone().get('minute'); // login convertion to momentjs
    let b = moment(login, 'HH:mm:ss').clone().get('hours');
    let sec = moment(login, 'HH:mm:ss').clone().get('seconds')
    let c = moment().clone().get('minutes'); //actual time
    let d = moment().clone().get('hours');
    let e = moment().clone().get('seconds');
    let out = moment().clone().format('HH:mm:ss').toString() // this goes to fb
    //**** ARITHMETIC */
    console.log('logAvai =>', ' ', 'hours:', b, 'min:', a,  'sec:',sec) // this parses the inAvai
    console.log('inAvai:', login) // initial state
    console.log('outAvai:', out) // which is actual time
    let x = a + (b*60) + (sec/60)
    let y = c + (d*60) + (e/60)
    let z = (y - x);
                console.log('inMinutes:',x)
                console.log('outMinutes:',y)
        console.log('availableTotal:', z);
            let content = document.getElementById('avai')
            let availableStored = localStorage.getItem("Available");
            console.log(availableStored);
            let test = parseFloat(availableStored)
            let testDos = parseFloat(z);
            console.log(test, 'and', testDos);
            let availableNew = (test + testDos).toPrecision(3) 
            availableNew.toString()
            content.innerHTML =  ` ${availableNew} min`;
            localStorage.setItem("Available", availableNew);
            let Available = localStorage.getItem("Available");
            console.log(Available);
     DocRef.set({
        Total: {Available: z},
        Timestamps: {outAvai: out}
    }, {
        merge: !0
    })
    avaiTest = 1 // true
    localStorage.setItem("availableBool", avaiTest)
        })
    } // end if
    else if (lunTest) {
        DocRef.get().then((doc) => {
            let lunch = doc.data().Timestamps.inLunch; // string
            let a = moment(lunch, 'HH:mm:ss').clone().get('minute');
            let b = moment(lunch, 'HH:mm:ss').clone().get('hours');
            let sec = moment(login, 'HH:mm:ss').clone().get('seconds')
            let c = moment().clone().get('minutes'); //actual time
            let d = moment().clone().get('hours');
            let e = moment().clone().get('seconds');
            let out = moment().clone().format('HH:mm:ss').toString() // this goes to fb
            console.log('inLunch =>', ' ', 'hours:', b,  'min:', a, 'sec:',sec) // get methods
            console.log('inLunch:', lunch) // on hours format
            console.log('outLunch', out) // hours format
    let x = a + (b*60) + (sec/60) // lunch 
    let y = c + (d*60) + (e/60) // outLunch
    let z = (y - x);
                console.log('inLunch:',x) // number 
                console.log('outLunch:',y) // number
        console.log('totalLunch:', z); // number
        let content = document.getElementById('lunc')
        let availableStored = localStorage.getItem("Lunch");
        console.log(availableStored);
        let test = parseFloat(availableStored)
        let testDos = parseFloat(z);
        console.log(test, 'and', testDos);
        let availableNew =  (test + testDos).toPrecision(3)
        content.innerHTML =  ` ${availableNew} min` 
        localStorage.setItem("Lunch", availableNew);
        let Available = localStorage.getItem("Lunch");
        console.log(Available);
            DocRef.set({
                Total: {
                    Lunch: z
                },
                Timestamps: {
                    outLun: out
                }
            }, {
                merge: !0
            })
            lunTest = 0
            localStorage.setItem("lunchBool", lunTest)
        })
    } // end if
    else if (breTest) {
        DocRef.get().then((doc) => {
            let Break = doc.data().Timestamps.inBreak; // string
            let a = moment(Break, 'HH:mm:ss').get('minute');
            let b = moment(Break, 'HH:mm:ss').get('hours');
            let sec = moment(login, 'HH:mm:ss').clone().get('seconds')
            let c = moment().clone().get('minutes'); //actual time
            let d = moment().clone().get('hours');
            let e = moment().clone().get('seconds');
            let out = moment().clone().format('HH:mm:ss').toString() // this goes to fb
            console.log('login', ' ', 'min:', a, 'hours:', b, 'sec:',sec)
    let x = a + (b*60) + (sec/60) // lunch 
    let y = c + (d*60) + (e/60) // outLunch
    let z = (y - x).toPrecision(2);
                console.log('outHH:mm', out)
                console.log('loginMinutes:',x)
                console.log('outMinutes:',y)
        console.log('Break:', z);
        let content = document.getElementById('bre')
        let availableStored = localStorage.getItem("Break");
        console.log(availableStored);
        let test = parseFloat(availableStored)
        let testDos = parseFloat(z);
        console.log(test, 'and', testDos);
        let availableNew = test + testDos 
        content.innerHTML =  ` ${availableNew} min` ;
        localStorage.setItem("Break", availableNew);
        let Available = localStorage.getItem("Break");
        console.log(Available);
            DocRef.set({
                Total: {Break: z},
                Timestamps: {outBre: out} },{
                merge: !0
            })
            bre = 0  
        })
        breTest = 0
            localStorage.setItem("breakBool", breTest)
    }
    else if (traiTest) {
        DocRef.get().then((doc) => {
        let Training = doc.data().Timestamps.inTrain; // string
        let a = moment(Training, 'HH:mm:ss').get('minute');
        let b = moment(Training, 'HH:mm:ss').get('hours');
        let sec = moment(login, 'HH:mm:ss').clone().get('seconds')
        let c = moment().clone().get('minutes'); //actual time
        let d = moment().clone().get('hours');
        let e = moment().clone().get('seconds');
        let out = moment().clone().format('HH:mm:ss').toString() // this goes to fb
        console.log('login', ' ', 'min:', a, 'hours:', b, 'sec:',sec)
        let x = a + (b*60) + (sec/60) // lunch 
        let y = c + (d*60) + (e/60) // outLunch
        let z = (y - x).toPrecision(2);
                    console.log('outHH:mm', out)
                    console.log('loginMinutes:',x)
                    console.log('outMinutes:',y)
            console.log('Training:', z);
            let content = document.getElementById('trai')
            let availableStored = localStorage.getItem("Training");
            console.log(availableStored);
            let test = parseFloat(availableStored)
            let testDos = parseFloat(z);
            console.log(test, 'and', testDos);
            let availableNew = test + testDos 
            content.innerHTML =  ` ${availableNew} min` ;
            localStorage.setItem("Training", availableNew);
            let Available = localStorage.getItem("Training");
            console.log(Available);
            DocRef.set({
                Total: {Training: z},
                Timestamps: {outTrain: out} },{
                merge: !0
            })
            trai = 0 
        })
        traiTest = 0
        localStorage.setItem("trainingBool", traiTest)
    } // end if  
    else if (proyTest) {
        DocRef.get().then((doc) => {
        let Project = doc.data().Timestamps.inProy; // string
        let a = moment(Project, 'HH:mm:ss').get('minute');
        let b = moment(Project, 'HH:mm:ss').get('hours');
        let sec = moment(login, 'HH:mm:ss').clone().get('seconds')
        let c = moment().clone().get('minutes'); //actual time
        let d = moment().clone().get('hours');
        let e = moment().clone().get('seconds');
        let out = moment().clone().format('HH:mm:ss').toString() // this goes to fb
        console.log('login', ' ', 'hours:', b,'min:', a,  'sec:',sec)
        let x = a + (b*60) + (sec/60) // lunch 
        let y = c + (d*60) + (e/60) // outLunch
        let z = (y - x).toPrecision(2);
                    console.log('outHH:mm', out)
                    console.log('loginMinutes:',x)
                    console.log('outMinutes:',y)
            console.log('Project:', z);
            let content = document.getElementById('proy')
            let availableStored = localStorage.getItem("Project");
            console.log(availableStored);
            let test = parseFloat(availableStored)
            let testDos = parseFloat(z);
            console.log(test, 'and', testDos);
            let availableNew =  (test + testDos).toPrecision(2)
            content.innerHTML =  ` ${availableNew} min` ;
            localStorage.setItem("Project", availableNew);
            let Available = localStorage.getItem("Project");
            console.log(Available);
        DocRef.set({
            Total: {Project: z},
            Timestamps: {outBre: out} },{
            merge: !0
        })
        proyTest = 0
        localStorage.setItem("trainingBool", proyTest)
    })
    } //else if
    
}// end of the substract function..

function resetTest() {
    document.getElementById("proy").innerHTML = '0 min'
    document.getElementById("avai").innerHTML = '0 min'
    document.getElementById("lunc").innerHTML = '0 min'
    document.getElementById("bre").innerHTML = '0 min'
    document.getElementById("trai").innerHTML = '0 min'
    console.log('Reset done');
}

