import { LitElement, css, html } from "lit";
import "./four_component.js";
import "./two_component.js";

class ThreeComponent extends LitElement {
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
            <section class="page2">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">← Anterior</button>
                <h2>2/10</h2>
              </div>
              <h1>¿Qué tipo de App necesitas?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-appIphone.png" alt="" />
                  <p>Aplicación Android</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-appIos.png" alt="" />
                  <p>Aplicación iOS</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-appWindowsPhone.png" alt="" />
                  <p>Aplicación Windows Phone</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-androi-ios.png" alt="" />
                  <p>Aplicación Androi + iOS</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-escritorio.webp" alt="" />
                  <p>Aplicación de Escritorio</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<four-component></four-component>` : ""} ${this.back ? html`<two-component></two-component>` : ""}
    `;
  }
}

customElements.define("three-component", ThreeComponent);
