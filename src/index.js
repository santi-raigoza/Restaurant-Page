import "./styles/styles.css";
import header from './pages/header.js';


const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");
const reservationButton = document.getElementById("reserve-btn");

document.addEventListener("DOMContentLoaded", function() {
    header();
});

homeButton.addEventListener("click", function() {
    // code
    // home()  import home from home.js
});

menuButton.addEventListener("click", function() {
    // code
});

contactButton.addEventListener("click", function() {
    // code  
});

reservationButton.addEventListener("click", function() {
    // code
});