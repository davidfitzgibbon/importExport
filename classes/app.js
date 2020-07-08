import "./ui.js";

let ui;
let state;
ui = new UI();
state = {
  donuts: [
    {
      id: "plain",
      status: "local",
      name: "Plain Donut",
    },
    {
      id: "sugarCoated",
      status: "foreign",
      name: "Sugar Coated",
    },
    {
      id: "withSprinkles",
      status: "foreign",
      name: "With Sprinkles",
    },
    {
      id: "horribleHealthy",
      status: "local",
      name: "Horrible & Helathy",
    },
    {
      id: "chocolate",
      status: "local",
      name: "Chocolate",
    },
    {
      id: "chocolateCenter",
      status: "foreign",
      name: "Chocolate Center",
    },
  ],
  el: document.getElementById("app"),
};
ui.init();

window.donuts = () => {
  console.log(state.donuts);
};
