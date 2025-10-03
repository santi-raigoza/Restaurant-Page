import "./styles/styles.css"; // global CSS
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";

import header from "./pages/header.js";
import footer from "./pages/footer.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";

document.addEventListener("DOMContentLoaded", function() {
    header();
    home();
    footer();
    
    // get the button references after header is created
    const homeButton = document.getElementById("home-btn");
    const menuButton = document.getElementById("menu-btn");
    const contactButton = document.getElementById("contact-btn");
    const reservationButton = document.getElementById("reserve-btn");
    
    // Add event listeners
    homeButton.addEventListener("click", function() {
        home();
    });

    menuButton.addEventListener("click", function() {
        menu();
    });

    contactButton.addEventListener("click", function() {
        contact();
    });

    reservationButton.addEventListener("click", function() {
        // reservations();
    });
});