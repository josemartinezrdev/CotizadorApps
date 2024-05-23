import { LitElement, html } from "lit";
import "./twelve_component.js";

class ElevenComponent extends LitElement {
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
    if (id === "idea") {
      window.globalPrice.push(6000);
      window.globalSettings.optEstado = "Es una Idea";
    } else if (id === "boceto") {
      window.globalPrice.push(4500);
      window.globalSettings.optEstado = "Es un Boceto";
    } else if (id === "desarrollo") {
      window.globalPrice.push(3000);
      window.globalSettings.optEstado = "Esta en Desarrollo";
    } else if (id === "desarrollada") {
      window.globalPrice.push(500);
      window.globalSettings.optEstado = "Ya esta desarrollada";
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
            <section class="page10">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>10/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿En qué estado se encuentra tu proyecto?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("idea")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-app-idea.png"
                    alt=""
                  />
                  <p>Sólo es una idea</p>
                </div>
                <div @click="${() => this.btnClick("boceto")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-app-boceto.png"
                    alt=""
                  />
                  <p>Boseto ya preparado</p>
                </div>
                <div
                  @click="${() => this.btnClick("desarrollo")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-app-desarrollo.png"
                    alt=""
                  />
                  <p>App en desarrollo</p>
                </div>
                <div
                  @click="${() => this.btnClick("desarrollada")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-app-desarrollada.png"
                    alt=""
                  />
                  <p>App ya desarrollada</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<twelve-component></twelve-component>` : ""}
      ${this.back ? html`<ten-component></ten-component>` : ""}
    `;
  }
}

customElements.define("eleven-component", ElevenComponent);
