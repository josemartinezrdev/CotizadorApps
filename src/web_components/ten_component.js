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
  }
  btnClick() {
    this.first = !this.first;
    this.second = !this.second;
  }

  render() {
    return html`
      ${this.first
        ? html`
            <style>
              @import "../src/web_components/styles_components.css";
            </style>
            <section class="page9">
              <h2>9/10</h2>
              <h1>¿Qué idiomas usará tu aplicación?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-unIdioma.png" alt="" />
                  <p>Un único idioma</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-bilingue.png" alt="" />
                  <p>Bilingüe</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="imgs/img-multilingue.png"
                    alt=""
                  />
                  <p>Multilingüe</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<eleven-component></eleven-component>` : ""}
    `;
  }
}

customElements.define("ten-component", TenComponent);
