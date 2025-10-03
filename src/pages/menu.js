const menu = function() {
  const content = document.getElementById("content");

  // Clear content
  content.textContent = "";

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  const special = document.createElement("div");
  special.className = "anti-corviknight-section";

  const specialTitle = document.createElement("h3");
  specialTitle.textContent = "Daily Special: Corviknight Crusher Combo!";

  const specialText = document.createElement("p");
  specialText.textContent = "In honor of our favorite hobby - keeping those oversized metal birds away from our territory!";

  special.appendChild(specialTitle);
  special.appendChild(specialText);
  menuContainer.appendChild(special);

  // Menu info
  const menuSections = [
    {
      title: "Hammer Smash Mains",
      items: [
        { name: "Gigaton Hammer Steak", desc: "Premium steel-grilled beef, tenderized with love and a giant hammer", price: "$24.99" },
        { name: "Anti-Corviknight Crush Burger", desc: "Juicy burger that hits harder than our hammer! (No birds allowed)", price: "$16.99" },
        { name: "Tinkaton's Fairy Pasta", desc: "Magical pink pasta with sparkles and steel-cut mushrooms", price: "$18.49" },
        { name: "Metal Sound Fish", desc: "Fresh salmon that makes Corviknight cry (if they could get in here)", price: "$21.99" }
      ]
    },
    {
      title: "Steel-Type Sides",
      items: [
        { name: "Iron Defense Fries", desc: "Crispy fries that are tougher than Corviknight's armor", price: "$7.99" },
        { name: "Steel Wing Cauliflower", desc: "Better wings than any Flying type could dream of!", price: "$8.49" },
        { name: "Magnet Rise Salad", desc: "Levitating greens with metallic dressing", price: "$9.99" }
      ]
    },
    {
      title: "Fairy-Type Treats",
      items: [
        { name: "Dazzling Gleam Cake", desc: "Sparkling pink cake that blinds Corviknight (hypothetically)", price: "$9.99" },
        { name: "Play Rough Ice Cream", desc: "Playfully rough on your taste buds, not on birds (we handle that)", price: "$6.99" },
        { name: "Moonblast Milkshake", desc: "Magical pink milkshake that's super effective against Dark types", price: "$8.49" }
      ]
    },
    {
      title: "Anti-Corviknight Specials",
      items: [
        { name: "Bird Basher Combo", desc: "Everything you need to keep annoying Flying types away", price: "$19.99" },
        { name: "\"No Fly Zone\" Soup", desc: "Hearty soup that creates an invisible barrier against metal birds", price: "$11.99" },
        { name: "Hammer Time Hot Wings", desc: "The only wings allowed in this establishment!", price: "$13.99" }
      ]
    }
  ];

  // MENU GRID
  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  menuSections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "menu-section";

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    section.items.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      const leftDiv = document.createElement("div");
      const itemName = document.createElement("div");
      itemName.className = "menu-item-name";
      itemName.textContent = item.name;

      const itemDesc = document.createElement("div");
      itemDesc.className = "menu-item-description";
      itemDesc.textContent = item.desc;

      leftDiv.appendChild(itemName);
      leftDiv.appendChild(itemDesc);

      const priceDiv = document.createElement("div");
      priceDiv.className = "menu-item-price";
      priceDiv.textContent = item.price;

      itemDiv.appendChild(leftDiv);
      itemDiv.appendChild(priceDiv);

      sectionDiv.appendChild(itemDiv);
    });

    menuGrid.appendChild(sectionDiv);
  });

  menuContainer.appendChild(menuGrid);

  content.appendChild(menuContainer);
};

export default menu;
