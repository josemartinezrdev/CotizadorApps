import { LitElement, html } from "lit";
import "./eight_component.js";

class SevenComponent extends LitElement {
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
    if (id === "integrada-si") {
      window.globalPrice.push(3500);
      window.globalSettings.optIntegration = "Integrada";
    } else if (id === "integrada-no") {
      window.globalPrice.push(0);
      window.globalSettings.optIntegration = "No Integrada";
    } else if (id === "integrada-no-se") {
      window.globalPrice.push(800);
      window.globalSettings.optIntegration = "No se";
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
            <section class="page6">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>6/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Tu App tiene que estar integrada con un sitio web?</h1>
              <div class="container-option">
                <div
                  @click="${() => this.btnClick("integrada-si")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-si-integrada.png"
                    alt=""
                  />
                  <p>Sí</p>
                </div>
                <div
                  @click="${() => this.btnClick("integrada-no")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-no-integrada.png"
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div
                  @click="${() => this.btnClick("integrada-no-se")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-integrada-pregunta.png"
                    alt=""
                  />
                  <p>No lo sé</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<eight-component></eight-component>` : ""}
      ${this.back ? html`<six-component></six-component>` : ""}
    `;
  }
}

customElements.define("seven-component", SevenComponent);
