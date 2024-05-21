import { LitElement, html } from "lit";
import "./twelve_component.js";

class ElevenComponent extends LitElement {
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
            <section class="page10">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">← Anterior</button>
                <h2>10/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿En qué estado se encuentra tu proyecto?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-idea.png" alt="" />
                  <p>Sólo es una idea</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-boseto.png" alt="" />
                  <p>Boseto ya preparado</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-apDesarrollo.png" alt="" />
                  <p>App en desarrollo</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-appDesarrollada.png" alt="" />
                  <p>App ya desarrollada</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<twelve-component></twelve-component>` : ""}
      ${this.back ? html`<ten-component></ten-component>` : ""}
    `;
  }
}

customElements.define("eleven-component", ElevenComponent);
