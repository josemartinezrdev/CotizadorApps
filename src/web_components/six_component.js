import { LitElement, html } from "lit";
import "./seven_component.js";

class SixComponent extends LitElement {
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
    if (id === "redes") {
      window.globalPrice.push(3000);
      window.globalSettings.optLogin = "Login con Redes";
    } else if (id === "email") {
      window.globalPrice.push(2500);
      window.globalSettings.optLogin = "Login con Email";
    } else if (id === "no-login") {
      window.globalPrice.push(0);
      window.globalSettings.optLogin = "No Login";
    } else if (id === "no-se-login") {
      window.globalPrice.push(500);
      window.globalSettings.optLogin = "No se";
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
            <section class="page5">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>5/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Tu App necesita un sistema de login?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("redes")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-redes-login.png"
                    alt=""
                  />
                  <p>Sí, con redese sociales y email</p>
                </div>
                <div @click="${() => this.btnClick("email")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-email-login.png"
                    alt=""
                  />
                  <p>Sí, con email</p>
                </div>
                <div @click="${() => this.btnClick("no-login")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-no-login.png"
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div
                  @click="${() => this.btnClick("no-se-login")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-login-pregunta.png"
                    alt=""
                  />
                  <p>No lo sé todavía</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<seven-component></seven-component>` : ""}
      ${this.back ? html`<five-component></five-component>` : ""}
    `;
  }
}

customElements.define("six-component", SixComponent);
