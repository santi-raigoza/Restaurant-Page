import tinkatonDinner from "../assets/imgs/TinkatonDinner.png";

const home = function() {
  const content = document.getElementById("content");

  // Clear content
  content.textContent = "";

  const homeContainer = document.createElement("div");
  homeContainer.className = "home-container";

  const restaurantContent = document.createElement("div");
  restaurantContent.className = "restaurant-content";

  const img = document.createElement("img");
  img.className = "Tinkaton-dinner-img";
  img.src = tinkatonDinner;
  img.alt = "Cobblemon Tinkaton plushes eating at a table";
  restaurantContent.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = "The Gigaton Hammer";
  restaurantContent.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = "Where Steel meets Fairy cuisine, and Corviknight fears to fly!";
  restaurantContent.appendChild(p);

  const button = document.createElement("button");
  button.textContent = "Smash Into Our Menu!";
  restaurantContent.appendChild(button);

  homeContainer.appendChild(restaurantContent);

  // Features
  const features = document.createElement("div");
  features.className = "features";

  const featureData = [
    {
      title: "Hammer-Crafted Dishes",
      text: "Every meal is personally prepared by our resident Tinkaton using only the finest ingredients!"
    },
    {
      title: "Anti-Flying Atmosphere",
      text: "Enjoy your meal in peace, knowing that pesky Flying types (especially Corviknight) are banned from our premises!"
    },
    {
      title: "Fairy Tale Dining",
      text: "Experience the magic of Fairy cuisine in our enchanted dining room, complete with sparkling pink decor!"
    }
  ];

  featureData.forEach(f => {
    const card = document.createElement("div");
    card.className = "feature-card";

    const h3 = document.createElement("h3");
    h3.textContent = f.title;

    const p = document.createElement("p");
    p.textContent = f.text;

    card.appendChild(h3);
    card.appendChild(p);

    features.appendChild(card);
  });

  homeContainer.appendChild(features);

  content.appendChild(homeContainer);
};

export default home;
