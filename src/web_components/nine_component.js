import { LitElement, html } from "lit";
import "./ten_component.js";

class NineComponent extends LitElement {
  static get properties() {
    return {
      first: { type: Boolean },
      second: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.first = true;
    this.second = false;
    this.back = false;
    window.price = globalPrice.reduce((acc, num) => acc + num, 0);
  }

  btnClick(id) {
    if (id === "panel-si") {
      window.globalPrice.push(3000);
      window.globalSettings.optPanel = "Con Panel Admin";
    } else if (id === "panel-no") {
      window.globalPrice.push(0);
      window.globalSettings.optPanel = "Sin Panel Admin";
    } else if (id === "panel-no-se") {
      window.globalPrice.push(800);
      window.globalSettings.optPanel = "No se";
    }

    this.first = !this.first;
    this.second = !this.second;
  }

  btnBack() {
    window.globalPrice.pop();
    this.first = false;
    this.second = false;
    this.back = true;
  }

  render() {
    return html`
      ${this.first
        ? html`
            <style>
              @import "../src/web_components/styles_components.css";
            </style>
            <section class="page8">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>8/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Tu App necesita un panel de administración?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("panel-si")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-si-panel.png"
                    alt=""
                  />
                  <p>Sí</p>
                </div>
                <div @click="${() => this.btnClick("panel-no")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-no-panel.png"
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div
                  @click="${() => this.btnClick("panel-no-se")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-panel-pregunta.png"
                    alt=""
                  />
                  <p>No lo sé</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<ten-component></ten-component>` : ""}
      ${this.back ? html`<eight-component></eight-component>` : ""}
    `;
  }
}

customElements.define("nine-component", NineComponent);
