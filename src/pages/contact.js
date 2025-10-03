const contact = function() {
  const content = document.getElementById("content");
  content.textContent = "";

  // Page-specific wrapper
  const contactWrapper = document.createElement("div");
  contactWrapper.className = "contact-container";

  // Page title
  const contactTitle = document.createElement("h2");
  contactTitle.className = "contact-title";
  contactTitle.textContent = "Contact Our Hammer Wielders";
  contactWrapper.appendChild(contactTitle);

  // Contact info grid
  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  // Location card
  const locationCard = document.createElement("div");
  locationCard.className = "contact-card";
  
  const locationIcon = document.createElement("h3");
  locationIcon.textContent = "Location";
  locationCard.appendChild(locationIcon);
  
  const locationText = document.createElement("p");
  locationText.innerHTML = "123 Steel Fairy Lane<br>Galar Region, Paldea 54321<br>(Far from any Corviknight nests!)";
  locationCard.appendChild(locationText);
  
  contactInfo.appendChild(locationCard);

  // Phone card
  const phoneCard = document.createElement("div");
  phoneCard.className = "contact-card";
  
  const phoneIcon = document.createElement("h3");
  phoneIcon.textContent = "Phone";
  phoneCard.appendChild(phoneIcon);
  
  const phoneText = document.createElement("p");
  phoneText.innerHTML = "(555) TINKATON<br>(555) 846-5286<br>No Corviknight calls accepted!";
  phoneCard.appendChild(phoneText);
  
  contactInfo.appendChild(phoneCard);

  // Hours card
  const hoursCard = document.createElement("div");
  hoursCard.className = "contact-card";
  
  const hoursIcon = document.createElement("h3");
  hoursIcon.textContent = "Hours";
  hoursCard.appendChild(hoursIcon);
  
  const hoursText = document.createElement("p");
  hoursText.innerHTML = "Monday - Thursday: 11am - 10pm<br>Friday - Saturday: 11am - 11pm<br>Sunday: 12pm - 9pm<br>Closed during Corviknight migrations";
  hoursCard.appendChild(hoursText);
  
  contactInfo.appendChild(hoursCard);

  contactWrapper.appendChild(contactInfo);

  // Contact form
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formTitle = document.createElement("h3");
  formTitle.textContent = "Send Us a Message!";
  formTitle.style.textAlign = "center";
  formTitle.style.marginBottom = "1.5rem";
  formTitle.style.color = "var(--deepPink)";
  formContainer.appendChild(formTitle);

  const form = document.createElement("form");
  form.id = "contact-form";

  // Name field
  const nameGroup = document.createElement("div");
  nameGroup.className = "form-group";
  
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Trainer Name:";
  nameLabel.setAttribute("for", "contact-name");
  nameGroup.appendChild(nameLabel);
  
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "contact-name";
  nameInput.name = "name";
  nameInput.required = true;
  nameGroup.appendChild(nameInput);
  
  form.appendChild(nameGroup);

  // Email field
  const emailGroup = document.createElement("div");
  emailGroup.className = "form-group";
  
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.setAttribute("for", "contact-email");
  emailGroup.appendChild(emailLabel);
  
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "contact-email";
  emailInput.name = "email";
  emailInput.required = true;
  emailGroup.appendChild(emailInput);
  
  form.appendChild(emailGroup);

  // Favorite Pokemon field
  const pokemonGroup = document.createElement("div");
  pokemonGroup.className = "form-group";
  
  const pokemonLabel = document.createElement("label");
  pokemonLabel.textContent = "Favorite Pokemon:";
  pokemonLabel.setAttribute("for", "contact-pokemon");
  pokemonGroup.appendChild(pokemonLabel);
  
  const pokemonInput = document.createElement("input");
  pokemonInput.type = "text";
  pokemonInput.id = "contact-pokemon";
  pokemonInput.name = "pokemon";
  pokemonInput.placeholder = "e.g., Tinkaton (NOT Corviknight!)";
  pokemonGroup.appendChild(pokemonInput);
  
  form.appendChild(pokemonGroup);

  // Message field
  const messageGroup = document.createElement("div");
  messageGroup.className = "form-group";
  
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  messageLabel.setAttribute("for", "contact-message");
  messageGroup.appendChild(messageLabel);
  
  const messageTextarea = document.createElement("textarea");
  messageTextarea.id = "contact-message";
  messageTextarea.name = "message";
  messageTextarea.rows = 5;
  messageTextarea.required = true;
  messageGroup.appendChild(messageTextarea);
  
  form.appendChild(messageGroup);

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "submit-btn";
  submitBtn.textContent = "Send Message";
  form.appendChild(submitBtn);

  // Form submit handler
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const pokemon = formData.get("pokemon");
    
    let message = `Thank you for your message, ${name}! `;
    if (pokemon && pokemon.toLowerCase().includes("corviknight")) {
      message = `Nice try, ${name}! But we don't accept messages from Corviknight fans!`;
    } else if (pokemon) {
      message += `We love ${pokemon} too! `;
    }
    message += `We'll get back to you soon!`;
    
    alert(message);
    form.reset();
  });

  formContainer.appendChild(form);
  contactWrapper.appendChild(formContainer);

  // Anti-Corviknight notice
  const notice = document.createElement("div");
  notice.className = "anti-corviknight-section";
  
  const noticeTitle = document.createElement("h3");
  noticeTitle.textContent = "Important Notice";
  notice.appendChild(noticeTitle);
  
  const noticeText = document.createElement("p");
  noticeText.textContent = "Any inquiries from Corviknight trainers will be immediately bonked and deleted. No exceptions!";
  notice.appendChild(noticeText);
  
  contactWrapper.appendChild(notice);

  content.appendChild(contactWrapper);
};

export default contact;
