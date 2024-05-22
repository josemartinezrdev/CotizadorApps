import { LitElement, html } from "lit";
import "./ten_component.js";

class NineComponent extends LitElement {
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
            <section class="page8">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>8/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿Tu App necesita un panel de administración?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-si-panel.png"
                    alt=""
                  />
                  <p>Sí</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-no-panel.png"
                    alt=""
                  />
                  <p>No</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-panel-pregunta.png"
                    alt=""
                  />
                  <p>No lo sé</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<ten-component></ten-component>` : ""}
      ${this.back ? html`<eight-component></eight-component>` : ""}
    `;
  }
}

customElements.define("nine-component", NineComponent);
