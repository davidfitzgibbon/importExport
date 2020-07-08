import { state } from "./app.js";
export default function UI() {
  let state = state;
  let template = document.createElement("section");
  template.innerHTML = /* html */ `
			<div>
				<h2>Local</h2>
				<div class=local></div>
			</div>
			<div>
				<h2>Foreign</h2>
				<div class=foreign></div>
			</div>
	`;

  let init = () => {
    render();
  };
  let render = () => {
    state.el.append(template);
    renderDonuts();
  };
  let renderDonuts = () => {
    document.querySelector(`.local`).innerHTML = "";
    document.querySelector(`.foreign`).innerHTML = "";

    state.donuts.map((donut) => {
      let listEl = document.querySelector(`.${donut.status}`);

      let donutEl = document.createElement("h5");
      donutEl.innerHTML = `${donut.status == "local" ? "🏝" : "🌍"} ${
        donut.name
      }`;

      donutEl.addEventListener("click", () => {
        donut.status = donut.status == "local" ? "foreign" : "local";
        renderDonuts();
      });

      listEl.append(donutEl);
    });
  };
  return {
    init: init,
    render: render,
    renderDonuts: renderDonuts,
  };
}
