import UI from "./ui.js";
let state = {
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
let ui = new UI();
ui.init();

window.donuts = () => {
  console.log(state.donuts);
};

export { state };
