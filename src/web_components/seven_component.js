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
            <section class="page6">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">← Anterior</button>
                <h2>6/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿Tu App tiene que estar integrada con un sitio web?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-integrada.png" alt="" />
                  <p>Sí</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-Nointegrada.png" alt="" />
                  <p>No</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-Nointegrada.png" alt="" />
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
