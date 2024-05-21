import { LitElement, html } from "lit";
import "./nine_component.js";

class EightComponent extends LitElement {
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
            <section class="page7">
              <div class="container-top">
                <button class="back">← Anterior</button>
                <h2>7/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿Los usuarios tienen sus propios perfiles?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-perfilSi.png" alt="" />
                  <p>Sí</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-perfilNo.png" alt="" />
                  <p>No</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-perfilNose.png" alt="" />
                  <p>No lo sé</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<nine-component></nine-component>` : ""}
    `;
  }
}

customElements.define("eight-component", EightComponent);
