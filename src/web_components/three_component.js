import { LitElement, html } from "lit";
import "./four_component.js";
import "./two_component.js";
import "./desktop-component.js";

class ThreeComponent extends LitElement {
  static get properties() {
    return {
      first: { type: Boolean },
      second: { type: Boolean },
      back: { type: Boolean },
      desk: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.first = true;
    this.second = false;
    this.back = false;
    this.desk = false;
    window.price = globalPrice.reduce((acc, num) => acc + num, 0);
  }

  btnClick(id) {
    if (id === "android") {
      window.globalPrice.push(5000);
      window.globalSettings.optTipoApp = "App Android";
    } else if (id === "ios") {
      window.globalPrice.push(6000);
      window.globalSettings.optTipoApp = "App IOS";
    } else if (id === "windows") {
      window.globalPrice.push(6500);
      window.globalSettings.optTipoApp = "App Windows";
    } else if (id === "android-ios") {
      window.globalPrice.push(10000);
      window.globalSettings.optTipoApp = "App Android - IOS";
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

  btnDesk() {
    this.first = false;
    this.second = false;
    this.back = false;
    this.desk = true;
    window.globalPrice.push(5000);
    window.globalSettings.optTipoApp = "App Desktop";
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
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>2/10</h2>
              </div>
              <h1>¿Qué tipo de App necesitas?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("android")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-android.png"
                    alt=""
                  />
                  <p>Aplicación Android</p>
                </div>
                <div @click="${() => this.btnClick("ios")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-ios.png"
                    alt=""
                  />
                  <p>Aplicación iOS</p>
                </div>
                <div @click="${() => this.btnClick("windows")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-windows.png"
                    alt=""
                  />
                  <p>Aplicación Windows Phone</p>
                </div>
                <div
                  @click="${() => this.btnClick("android-ios")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-android-ios.png"
                    alt=""
                  />
                  <p>Aplicación Androi + iOS</p>
                </div>
                <div @click="${this.btnDesk}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-escritorio.webp"
                    alt=""
                  />
                  <p>Aplicación de Escritorio</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<four-component></four-component>` : ""}
      ${this.back ? html`<two-component></two-component>` : ""}
      ${this.desk ? html`<desktop-component></desktop-component>` : ""}
    `;
  }
}

customElements.define("three-component", ThreeComponent);
