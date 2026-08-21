
const container = document.querySelector(".container");


// ================= REGISTER BUTTON =================

const registerLinks = document.querySelectorAll(".register-link");

registerLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        container.classList.add("active");

    });

});


// ================= LOGIN BUTTON =================

const loginLinks = document.querySelectorAll(".login-link");

loginLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        container.classList.remove("active");

    });

});


// ================= SOCIAL LOGIN =================

// Google
const googleButtons = document.querySelectorAll(
    'a[href="https://accounts.google.com/"]'
);

googleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Google Login Opened");

    });

});


// GitHub
const githubButtons = document.querySelectorAll(
    'a[href="https://github.com/login"]'
);

githubButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("GitHub Login Opened");

    });

});


// Facebook
const facebookButtons = document.querySelectorAll(
    'a[href="https://www.facebook.com/login/"]'
);

facebookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Facebook Login Opened");

    });

});


// ================= EMAIL =================

const emailButtons = document.querySelectorAll(
    'a[href="mailto:"]'
);

emailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Email Login Selected");

    });

});


// ================= MOBILE =================

const mobileButtons = document.querySelectorAll(
    'a[href="tel:"]'
);

mobileButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Mobile Login Selected");

    });

});

