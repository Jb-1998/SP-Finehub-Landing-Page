"use strict";

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

//grab a form
const form = document.querySelector(".form-inline");

//grab an input
const inputEmail = form.querySelector("#inputEmail");

const firebaseConfig = {
  apiKey: "AIzaSyBon8BHeDgc2deIggGhWVkYLqPbQTdny7k",
  authDomain: "fineweb-4ccc7.firebaseapp.com",
  databaseURL: "https://fineweb-4ccc7.firebaseio.com",
  projectId: "fineweb-4ccc7",
  storageBucket: "fineweb-4ccc7.appspot.com",
  messagingSenderId: "654330883724",
  appId: "1:654330883724:web:2827198e815c6f24e1d5a9",
  measurementId: "G-GQPH90KZ4F",
};

//create a functions to push
function firebasePush(input) {
  //prevents from braking
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  //push itself
  var mailsRef = firebase.database().ref("emails").push().set({
    mail: input.value,
  });
}

//push on form submit
if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    firebasePush(inputEmail);

    //shows alert if everything went well.
    return alert("Data Successfully Sent to Realtime Database");
  });
}
