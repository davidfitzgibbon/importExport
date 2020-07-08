export default function UI() {
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

  this.init = () => {
    this.render();
  };
  this.render = () => {
    state.el.append(template);
    this.renderDonuts();
  };
  this.renderDonuts = () => {
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
        this.renderDonuts();
      });

      listEl.append(donutEl);
    });
  };
}
