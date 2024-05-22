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
  }
  btnClick() {
    this.first = !this.first;
    this.second = !this.second;
  }
  btnBack() {
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
            <section class="page9">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>9/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿Qué idiomas usará tu aplicación?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-nativo.png"
                    alt=""
                  />
                  <p>Un único idioma</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-billingue.png"
                    alt=""
                  />
                  <p>Bilingüe</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-trilingüe.png"
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
