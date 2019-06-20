let config = {
    apiKey: "AIzaSyBuaCPUz5s3Iw_hIdhyMG9GmHczwSBefY8",
    authDomain: "zventus-6cbba.firebaseapp.com",
    databaseURL: "https://zventus-6cbba.firebaseio.com",
    projectId: "zventus-6cbba",
    storageBucket: "zventus-6cbba.appspot.com",
    messagingSenderId: "68550919770"
};
firebase.initializeApp(config);
// let db = firebase.firestore();
const firestore = firebase.firestore();
let user = firebase.auth().currentUser;
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
let active = 1
let activeTwo = 0
let activeThree = 0
let activeFour = 0
let activeFive = 0 
let avai = 0 // false
let bre = 0
let lun = 0
let proy = 0
let trai = 0
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
    console.log('moment:', m);
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
     resetTest()
} //End logout

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        console.log('user:', email);
        document.getElementById("user_div").style.display = "block";
        document.getElementById("test").style.display = "none";
        start_timer()
    } else {
        console.log('No user signed in')
        document.getElementById("user_div").style.display = "none";
        document.getElementById("test").style.display = "block";
    }
});

let status = document.querySelectorAll('a.col').length;
let timers = document.querySelectorAll('span.timers').length;
let date = moment().format('DD MMM');
let time = moment().format('HH:mm:ss');
// console.log(status, timers);
for (let i = 0; i < status; i++) {
    document.querySelectorAll("a.col")[i].addEventListener(
        "click", () => {
            let user = firebase.auth().currentUser;
            let email = user.email;
            let DocRef = firestore.collection(date).doc(email);
            if (i == 0) { // available
                substract()
                  avai = 0 // has to be false              
                  active = 1
                  activeTwo = 0
                  activeThree = 0
                  activeFour = 0
                  activeFive = 0 
                start_timer()
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inAvai: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 1) { // lunch
                 substract();
                activeTwo = 1;
                active = 0;
                activeThree = 0
                activeFour = 0
                activeFive = 0 
                start_timer2();
                lun = 1 // lunch is active
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inLunch: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 2) { // break
                substract()
                bre = 1
                activeTwo = 0
                active = 0
                activeFour = 0
                activeFive = 0
                activeThree = 1
                start_timer3();
                
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inBreak: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 3) { // trai
                substract()
                trai = 1
                activeThree = 0 
                activeFour = 1
                active = 0;
                activeThree = 0
                activeFive = 0
                start_timer4();
                
                let newTime = moment().clone().format('HH:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inTrain: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 4) { // project
                substract()
                activeFour = 0
                active = 0;
                activeThree = 0
                activeTwo = 0
                activeFour = 0
                activeFive = 1
                start_timer5();
                proy = 1
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
        if(!avai) {
            DocRef.get().then((doc) => {
    let login = doc.data().Timestamps.inAvai; // string
    let a = moment(login, 'HH:mm:ss').clone().get('minute'); // login convertion to momentjs
    let b = moment(login, 'HH:mm:ss').clone().get('hours');
    let sec = moment(login, 'HH:mm:ss').clone().get('seconds')
    let c = moment().clone().get('minutes'); //actual time
    let d = moment().clone().get('hours');
    let e = moment().clone().get('seconds');
    let out = moment().clone().format('HH:mm:ss').toString() // this goes to fb
    console.log('outAvai:', out)
    
    //**** ARITHMETIC */
    console.log('login', ' ', 'min:', a, 'hours:', b, 'sec:',sec)

    let x = a + (b*60) + (sec/60)
    let y = c + (d*60) + (e/60)
    let z = (y - x).toPrecision(2);
                console.log('loginMinutes:',x)
                console.log('outMinutes:',y)
        console.log('Available:', z);
     DocRef.set({
        Total: {Available: z},
        Timestamps: {outAvai: out}
    }, {
        merge: !0
    })
    avai = 1 // true
        })
    } // end if
    else if (lun) {
        DocRef.get().then((doc) => {
            let Lunch = doc.data().Timestamps.inLunch; // string
            let a = moment(Lunch, 'HH:mm:ss').clone().get('minute');
            let b = moment(Lunch, 'HH:mm:ss').clone().get('hours');
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
        console.log('Lunch:', z);
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
            lun = 0
        })
    } // end if
    else if (bre) {
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
            DocRef.set({
                Total: {Break: z},
                Timestamps: {outBre: out} },{
                merge: !0
            })
            bre = 0  
        })
    }
    else if (trai) {
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
            DocRef.set({
                Total: {Training: z},
                Timestamps: {outTrain: out} },{
                merge: !0
            })
            trai = 0 
        })
    } // end if  
    else if (proy) {
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
        DocRef.set({
            Total: {Project: z},
            Timestamps: {outBre: out} },{
            merge: !0
        })
        proy = 0
    }     
}

function resetTest() {
    document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer2").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer3").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer4").innerHTML = "00" + ":" + "00" + ":" + "00";
    document.getElementById("my_timer5").innerHTML = "00" + ":" + "00" + ":" + "00";
    console.log('Reset done');
}