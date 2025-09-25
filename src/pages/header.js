import tinkatonHammerLogo from "../assets/imgs/TinkatonsHammer.png";

// create the header
const header = function() {
    const header = document.querySelector(".header");

    const logoContainer = document.createElement("div");

    const logoIMG = document.createElement("img");
    logoIMG.className = "poke-cafe-logo";
    logoIMG.src = tinkatonHammerLogo;
    logoIMG.alt = "Tinkaton's Hammer Logo";
    logoContainer.appendChild(logoIMG);

    const logoName = document.createElement("h1");
    logoName.textContent = "The\u00A0Gigaton Hammer";
    logoContainer.appendChild(logoName);

    const navBar = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.className = "header-btn";
    homeButton.id = "home-btn";
    homeButton.textContent = "Home";
    navBar.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.className = "header-btn";
    menuButton.id = "menu-btn";
    menuButton.textContent = "Menu";
    navBar.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.className = "header-btn";
    contactButton.id = "contact-btn";
    contactButton.textContent = "Contact Us";
    navBar.appendChild(contactButton);

    const reservationButton = document.createElement("button");
    reservationButton.className = "header-btn";
    reservationButton.id = "reserve-btn";
    reservationButton.textContent = "Reservation";
    navBar.appendChild(reservationButton);

    header.appendChild(logoContainer);
    header.appendChild(navBar);

}

export default header;