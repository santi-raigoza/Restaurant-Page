const contact = function() {
  const content = document.getElementById("content");
  content.textContent = "";

  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";

  const contactTitle = document.createElement("h2");
  contactTitle.className = "contact-title";
  contactTitle.textContent = "Contact Our Hammer Wielders";
  contactContainer.appendChild(contactTitle);

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  // Helper function to create cards
  function createCard(title, lines) {
    const card = document.createElement("div");
    card.className = "contact-card";

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardText = document.createElement("p");
    lines.forEach((line, index) => {
      cardText.appendChild(document.createTextNode(line));
      if (index < lines.length - 1) {
        cardText.appendChild(document.createElement("br"));
      }
    });
    card.appendChild(cardText);

    return card;
  }

  const locationCard = createCard("Location", [
    "123 Steel Fairy Lane",
    "Galar Region, Paldea 54321",
    "(Far from any Corviknight nests!)"
  ]);

  const phoneCard = createCard("Phone", [
    "(555) TINKATON",
    "(555) 846-5286",
    "No Corviknight calls accepted!"
  ]);

  const hoursCard = createCard("Hours", [
    "Monday - Thursday: 11am - 10pm",
    "Friday - Saturday: 11am - 11pm",
    "Sunday: 12pm - 9pm",
    "Closed during Corviknight migrations"
  ]);

  contactInfo.appendChild(locationCard);
  contactInfo.appendChild(phoneCard);
  contactInfo.appendChild(hoursCard);

  contactContainer.appendChild(contactInfo);

  // Form Container
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formTitle = document.createElement("h3");
  formTitle.className = "form-title";
  formTitle.textContent = "Send Us a Message!";
  formContainer.appendChild(formTitle);

  const form = document.createElement("form");
  form.id = "contact-form";

  // Name Field
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

  // Email Field
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

  // Pokemon Field
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

  // Message Field
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

  // Submit Button
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
  contactContainer.appendChild(formContainer);

  // Anti-Corviknight Notice
  const notice = document.createElement("div");
  notice.className = "anti-corviknight-section";
  
  const noticeTitle = document.createElement("h3");
  noticeTitle.textContent = "Important Notice";
  notice.appendChild(noticeTitle);
  
  const noticeText = document.createElement("p");
  noticeText.textContent = "Any inquiries from Corviknight trainers will be immediately bonked and deleted. No exceptions!";
  notice.appendChild(noticeText);
  
  contactContainer.appendChild(notice);

  content.appendChild(contactContainer);
};

export default contact;
