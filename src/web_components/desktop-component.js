import { LitElement, html } from "lit";
import { animate } from "@lit-labs/motion";
import "./four_component.js";
import "./two_component.js";

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
    this.first = true;
    this.second = false;
    this.back = false;
  }

  btnClick() {
    this.first = !this.first;
    this.second = !this.second;
    this.back = false;
  }

  btnBack() {
    this.first = false;
    this.second = false;
    this.back = true;
  }

  render() {
    return html`
      <style>
        @import "../src/web_components/styles_components.css";
      </style>
      <div
        ${animate({
          keyframeOptions: { duration: 500 },
          properties: ["opacity"],
        })}
      >
        ${this.first
          ? html`
              <section class="subcomponent-desktop">
                <div class="container-top">
                  <button @click="${this.btnBack}" class="back">← Anterior</button>
                  <h2>Opcional</h2>
                  <h2 class="precio">0 COP</h2>
                </div>
                <h1>¿Elige una Opción?</h1>
                <div class="container-option">
                  <div @click="${this.btnClick}" class="option">
                    <img class="img-option" src="imgs/img-integrada.png" alt="" />
                    <p>PWA</p>
                  </div>
                  <div @click="${this.btnClick}" class="option">
                    <img class="img-option" src="imgs/img-Nointegrada.png" alt="" />
                    <p>SPA</p>
                  </div>
                  <div @click="${this.btnClick}" class="option">
                    <img class="img-option" src="imgs/img-Nointegrada.png" alt="" />
                    <p>Nativa</p>
                  </div>
                  <div class="vacio"></div>
                </div>
              </section>
            `
          : ""}
        ${this.second ? html`<four-component></four-component>` : ""} 
        ${this.back ? html`<three-component></three-component>` : ""}
      </div>
    `;
  }
}

customElements.define("desktop-component", DeskComponent);
