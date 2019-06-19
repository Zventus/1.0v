let config = {
    apiKey: "AIzaSyBuaCPUz5s3Iw_hIdhyMG9GmHczwSBefY8",
    authDomain: "zventus-6cbba.firebaseapp.com",
    databaseURL: "https://zventus-6cbba.firebaseio.com",
    projectId: "zventus-6cbba",
    storageBucket: "zventus-6cbba.appspot.com",
    messagingSenderId: "68550919770"
};
firebase.initializeApp(config);
let db = firebase.firestore();
let user = firebase.auth().currentUser;
console.log(user);

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
        var DocRef = db.collection(date).doc(email);
        var DocRef2 = db.collection('userData').doc(email);
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
    let m = moment().format('hh:mm:ss');
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
            var DocRef2 = db.collection(date).doc(email2);
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
    let DocRef = db.collection(date).doc(email);
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
    setTimeout(() => {
        firebase.auth().signOut()
    }, 550);
    setTimeout(resetTest, 250);
} //End logout

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        console.log('user:', email);
        document.getElementById("user_div").style.display = "block";
        document.getElementById("test").style.display = "none";
        // document.getElementById("test10").innerHTML = "Welcome" + "!" + " 👨‍💻 ";
        // start_timer();
    } else {
        console.log('No user signed in')
        document.getElementById("user_div").style.display = "none";
        document.getElementById("test").style.display = "block";
    }
});


let active = 1
let activeTwo = 0
let activeThree = 0
let activeFour = 0
let activeFive = 0 
let status = document.querySelectorAll('a.col').length;
let timers = document.querySelectorAll('span.timers').length;
let date = moment().format('DD MMM');
let time = moment().format('hh:mm:ss');
console.log(status, timers);
for (let i = 0; i < status; i++) {
    document.querySelectorAll("a.col")[i].addEventListener(
        "click", () => {
            let user = firebase.auth().currentUser;
            let email = user.email;
            let DocRef = db.collection(date).doc(email);
            if (i == 0) {
                start_timer()
                let newTime = moment().clone().format('hh:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inAvai: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 1) {
                console.log('else')
                active = 0;
                activeTwo = 1;
                start_timer2();
                substract();
                let newTime = moment().clone().format('hh:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inLunch: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 2) {
                activeTwo = 0
                activeThree = 1
                start_timer3();
                let newTime = moment().clone().format('hh:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inBreak: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 3) {
                activeThree = 0 
                activeFour = 1
                start_timer4();
                let newTime = moment().clone().format('hh:mm:ss');
                DocRef.set({
                    Timestamps: {
                        inTrain: newTime
                    },
                }, {
                    merge: !0
                })
            } else if (i == 4) {
                activeFour = 0
                activeFive = 1
                start_timer5();
                let newTime = moment().clone().format('hh:mm:ss');
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

// let substract = () => {
//     let user = firebase.auth().currentUser;
//     let email = user.email;
//     let DocRef = db.collection(date).doc(email);
//         DocRef.get().then((doc) => {
//             let login = doc.data().Timestamps.login;
//             // let newMoment = moment.duration(login, 'hh:mm:ss');
//             let newMoment = moment.duration();
//             // let newMoment = moment.duration(login, 'hh:mm:ss').toString();
//             // let test = moment(login, 'hh:mm:ss').format('hh:mm:ss'); 
//             let newTest = moment(test, "hh:mm:ss").fromNow();
//             // console.log('test', test)
//              console.log('login:', login);
//              console.log('newTest:', newTest);
//              console.log('newMoment:', newMoment);



//          let mSub = moment().subtract(test).format('hh:mm:ss');
//          console.log(mSub);
//         // DocRef.set({
//         //     test3: {
//         //         test: mSub
//         //     },
//         // }, {
//         //     merge: !0
//         // })
// })
            
// }

let substract = () => {
    let user = firebase.auth().currentUser;
    let email = user.email;
    let DocRef = db.collection(date).doc(email);
        DocRef.get().then((doc) => {
            let login = doc.data().Timestamps.login;
            let test = moment.duration(login)   
            // let convertLogin = moment(login, 'hh:mm:ss').clone()
            // let resta = moment().subtract(convertLogin)
            // let partition = convertLogin.split(':')
            // let hour = partition[0] // 03
            // let min = partition[1] // 25
            // let sec = partition[2]  // 29
            // let date = moment().clone()
            //  let test = moment().subtract(convertLogin, "hh:mm:ss")
            // let test = date.subtract({hours: hour, minutes: min, seconds:sec})

             console.log('login:', login);
            //  console.log('convertLogin:', convertLogin);
             console.log('test:', test);
            //  console.log('test:', test);
            //  console.log(date.toString())
                // var a = moment(2343);
                // var b = moment(2345);
                // let c = a.diff(b);
                // console.log(c);
            
        })
    }
        


function resetTest() {
    document.getElementsByClassName("timers").innerHTML = "00" + ":" + "00" + ":" + "00";
    console.log('Reset done');
}