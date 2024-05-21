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
            <section class="page8">
              <div class="container-top">
                <button class="back">← Anterior</button>
                <h2>8/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿Tu App necesita un panel de administración?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-panelAdmiSi.png" alt="" />
                  <p>Sí</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-panelAdmiNo.png" alt="" />
                  <p>No</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-panelAdmiNose.png" alt="" />
                  <p>No lo sé</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<ten-component></ten-component>` : ""}
    `;
  }
}

customElements.define("nine-component", NineComponent);
