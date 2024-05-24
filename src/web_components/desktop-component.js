import { LitElement, html } from "lit";
import "./four_component.js";
import "./two_component.js";

window.isDesk = false;
class DeskComponent extends LitElement {
  static get properties() {
    return {
      first: { type: Boolean },
      second: { type: Boolean },
      back: { type: Boolean },
    };
  }

  constructor() {
    super();
    window.isDesk = true;
    this.first = true;
    this.second = false;
    this.back = false;
    window.price = globalPrice.reduce((acc, num) => acc + num, 0);
  }

  btnClick(id) {
    if (id === "pwd") {
      window.globalPrice.push(1000);
      window.globalSettings.optTipoNewApp = "App PWD";
    } else if (id === "spa") {
      window.globalPrice.push(1500);
      window.globalSettings.optTipoNewApp = "App SPA";
    } else if (id === "nativa") {
      window.globalPrice.push(2500);
      window.globalSettings.optTipoNewApp = "App Nativa";
    }
    this.first = !this.first;
    this.second = !this.second;
    this.back = false;
  }

  btnBack() {
    window.globalPrice.pop();
    this.first = false;
    this.second = false;
    this.back = true;
  }

  render() {
    return html`
      <style>
        @import "../../src/web_components/styles_components.css";
      </style>
      ${this.first
        ? html`
            <section class="sub-component-desktop">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>Opcional</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Elige una Opción?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("pwd")}" class="option">
                  <img
                    class="img-option"
                    src="../assets/imgs/img-app-pwd.png"
                    alt=""
                  />
                  <p>PWA</p>
                </div>
                <div @click="${() => this.btnClick("spa")}" class="option">
                  <img
                    class="img-option"
                    src="./assets/imgs/img-app-spa.png"
                    alt=""
                  />
                  <p>SPA</p>
                </div>
                <div @click="${() => this.btnClick("nativa")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-app-nativa.png"
                    alt=""
                  />
                  <p>Nativa</p>
                </div>
                <div class="vacio"></div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<four-component></four-component>` : ""}
      ${this.back ? html`<three-component></three-component>` : ""}
    `;
  }
}

customElements.define("desktop-component", DeskComponent);
