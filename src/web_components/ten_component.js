import { LitElement, html } from "lit";
import "./eleven_component.js";

class TenComponent extends LitElement {
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
    if (id === "unico") {
      window.globalPrice.push(500);
      window.globalSettings.optIdioma = "Idioma Único";
    } else if (id === "doble") {
      window.globalPrice.push(2500);
      window.globalSettings.optIdioma = "Bilingüe";
    } else if (id === "triple") {
      window.globalPrice.push(5000);
      window.globalSettings.optIdioma = "Multilingüe";
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
              @import "./styles_components.css";
            </style>
            <section class="page9">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>9/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Qué idiomas usará tu aplicación?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("unico")}" class="option">
                  <img
                    class="img-option"
                    src="./img-nativo.png"
                    alt=""
                  />
                  <p>Un único idioma</p>
                </div>
                <div @click="${() => this.btnClick("doble")}" class="option">
                  <img
                    class="img-option"
                    src="./img-billingue.png"
                    alt=""
                  />
                  <p>Bilingüe</p>
                </div>
                <div @click="${() => this.btnClick("triple")}" class="option">
                  <img
                    class="img-option"
                    src="./img-trilingüe.png"
                    alt=""
                  />
                  <p>Multilingüe</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<eleven-component></eleven-component>` : ""}
      ${this.back ? html`<nine-component></nine-component>` : ""}
    `;
  }
}

customElements.define("ten-component", TenComponent);
