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
    this.back= false;
  }
  btnClick() {
    this.first = !this.first;
    this.second = !this.second;
  }
  btnBack() {
    this.first = false;
    this.second = false;
    this.back= true;
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
              <button @click="${this.btnBack}" class="back">← Anterior</button>
              <h2>5/10</h2>
              <h2 class="precio">0 COP</h2>
            </div>
              <h1>¿Tu App necesita un sistema de login?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="imgs/img-logRedesEmail.png"
                    alt=""
                  />
                  <p>Sí, con redese sociales y email</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-logEmail.png" alt="" />
                  <p>Sí, con email</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-logNO.png" alt="" />
                  <p>No</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-logNoSabe.png" alt="" />
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
