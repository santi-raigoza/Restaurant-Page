const reservation = function() {
  const content = document.getElementById("content");
  content.textContent = "";

  const reservationContainer = document.createElement("div");
  reservationContainer.className = "reservation-container";

  const reservationTitle = document.createElement("h2");
  reservationTitle.className = "reservation-title";
  reservationTitle.textContent = "Reserve Your Table";
  reservationContainer.appendChild(reservationTitle);

  const infoGrid = document.createElement("div");
  infoGrid.className = "contact-info";

  const cards = [
    { title: "Hammer Time", text: "Peak hours: 6pm-9pm\nBook early to avoid the wait!" },
    { title: "Seating Options", text: "Indoor dining, Outdoor patio,\nPrivate hammer room" },
    { title: "Special Events", text: "Birthday parties welcome!\nCorviknight-free guarantee" }
  ];

  cards.forEach(cardData => {
    const card = document.createElement("div");
    card.className = "contact-card";
    
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = cardData.title;
    card.appendChild(cardTitle);
    
    const cardText = document.createElement("p");
    cardText.style.whiteSpace = "pre-line";
    cardText.textContent = cardData.text;
    card.appendChild(cardText);
    
    infoGrid.appendChild(card);
  });

  reservationContainer.appendChild(infoGrid);

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formTitle = document.createElement("h3");
  formTitle.className = "form-title";
  formTitle.textContent = "Make a Reservation";
  formContainer.appendChild(formTitle);

  const form = document.createElement("form");
  form.id = "reservation-form";

  function createFormGroup(labelText, inputElement) {
    const group = document.createElement("div");
    group.className = "form-group";
    
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", inputElement.id);
    group.appendChild(label);
    
    group.appendChild(inputElement);
    return group;
  }

  // Name
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "res-name";
  nameInput.name = "name";
  nameInput.required = true;
  form.appendChild(createFormGroup("Name:", nameInput));

  // Email
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "res-email";
  emailInput.name = "email";
  emailInput.required = true;
  form.appendChild(createFormGroup("Email:", emailInput));

  // Phone
  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.id = "res-phone";
  phoneInput.name = "phone";
  phoneInput.placeholder = "(555) 123-4567";
  phoneInput.required = true;
  form.appendChild(createFormGroup("Phone:", phoneInput));

  // Date
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "res-date";
  dateInput.name = "date";
  dateInput.required = true;
  dateInput.min = new Date().toISOString().split('T')[0];
  form.appendChild(createFormGroup("Date:", dateInput));

  // Time
  const timeSelect = document.createElement("select");
  timeSelect.id = "res-time";
  timeSelect.name = "time";
  timeSelect.required = true;
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a time";
  timeSelect.appendChild(defaultOption);
  [
    "11:00 AM","11:30 AM","12:00 PM","12:30 PM",
    "1:00 PM","1:30 PM","2:00 PM","2:30 PM",
    "3:00 PM","3:30 PM","4:00 PM","4:30 PM",
    "5:00 PM","5:30 PM","6:00 PM","6:30 PM",
    "7:00 PM","7:30 PM","8:00 PM","8:30 PM",
    "9:00 PM","9:30 PM","10:00 PM"
  ].forEach(time => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    timeSelect.appendChild(option);
  });
  form.appendChild(createFormGroup("Time:", timeSelect));

  // Guests
  const guestsSelect = document.createElement("select");
  guestsSelect.id = "res-guests";
  guestsSelect.name = "guests";
  guestsSelect.required = true;
  const defaultGuestOption = document.createElement("option");
  defaultGuestOption.value = "";
  defaultGuestOption.textContent = "Select number of guests";
  guestsSelect.appendChild(defaultGuestOption);
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i + (i === 1 ? " Guest" : " Guests");
    guestsSelect.appendChild(option);
  }
  const largeParty = document.createElement("option");
  largeParty.value = "13+";
  largeParty.textContent = "13+ Guests (Large Party)";
  guestsSelect.appendChild(largeParty);
  form.appendChild(createFormGroup("Number of Guests:", guestsSelect));

  // Seating
  const seatingSelect = document.createElement("select");
  seatingSelect.id = "res-seating";
  seatingSelect.name = "seating";
  [
    { value: "", text: "No preference" },
    { value: "indoor", text: "Indoor Dining" },
    { value: "outdoor", text: "Outdoor Patio" },
    { value: "private", text: "Private Hammer Room" },
    { value: "window", text: "Window Seat" },
    { value: "booth", text: "Booth" }
  ].forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    seatingSelect.appendChild(option);
  });
  form.appendChild(createFormGroup("Seating Preference:", seatingSelect));

  // Special Requests
  const requestsTextarea = document.createElement("textarea");
  requestsTextarea.id = "res-requests";
  requestsTextarea.name = "requests";
  requestsTextarea.rows = 3;
  requestsTextarea.placeholder = "Dietary restrictions, celebrations, or special needs...";
  form.appendChild(createFormGroup("Special Requests:", requestsTextarea));

  // Anti-Corviknight Checkbox
  const corviknightGroup = document.createElement("div");
  corviknightGroup.className = "form-group corviknight-group";
  const corviknightCheckbox = document.createElement("input");
  corviknightCheckbox.type = "checkbox";
  corviknightCheckbox.id = "no-corviknight";
  corviknightCheckbox.name = "noCorviknight";
  corviknightCheckbox.required = true;

  const corviknightLabel = document.createElement("label");
  corviknightLabel.textContent = "I confirm that I am NOT a Corviknight trainer and will not bring any Corviknight to the premises. (Required)";
  corviknightLabel.setAttribute("for", "no-corviknight");

  corviknightGroup.appendChild(corviknightCheckbox);
  corviknightGroup.appendChild(corviknightLabel);
  form.appendChild(corviknightGroup);

  // Submit Button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "submit-btn";
  submitBtn.textContent = "Confirm Reservation";
  form.appendChild(submitBtn);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const date = formData.get("date");
    const time = formData.get("time");
    const guests = formData.get("guests");
    const seating = formData.get("seating");
    
    let seatingText = seating ? `\nSeating: ${seating}` : "";
    
    alert(`Reservation Confirmed! \n\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}${seatingText}\n\nWe look forward to serving you at The Gigaton Hammer! \n\n(Don't forget to leave your Corviknight at home!)`);
    form.reset();
  });

  formContainer.appendChild(form);
  reservationContainer.appendChild(formContainer);

  // Policy Section
  const policy = document.createElement("div");
  policy.className = "anti-corviknight-section reservation-policy";
  
  const policyTitle = document.createElement("h3");
  policyTitle.textContent = "Reservation Policy";
  policy.appendChild(policyTitle);
  
  const policyText = document.createElement("p");
  policyText.textContent = "All reservations are subject to our strict No Corviknight Policy. Any guests arriving with Corviknight will be promptly bonked and escorted off the premises. We reserve the right to refuse service to Flying-type enthusiasts.";
  policy.appendChild(policyText);
  
  reservationContainer.appendChild(policy);
  content.appendChild(reservationContainer);
};

export default reservation;
