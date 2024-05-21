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

            <section class="page10">
              <div class="container-top">
                <button class="back">← Anterior</button>
                <h2>10/10</h2>
                <h2 class="precio">0 COP</h2>
              </div>
              <h1>¿En qué estado se encuentra tu proyecto?</h1>
              <div class="container-option">
                <div class="option">
                  <img class="img-option" src="imgs/img-idea.png" alt="" />
                  <p>Sólo es una idea</p>
                </div>
                <div class="option">
                  <img class="img-option" src="imgs/img-boseto.png" alt="" />
                  <p>Boseto ya preparado</p>
                </div>
                <div class="option">
                  <img class="img-option" src="imgs/img-apDesarrollo.png" alt="" />
                  <p>App en desarrollo</p>
                </div>
                <div class="option">
                  <img class="img-option" src="imgs/img-appDesarrollada.png" alt="" />
                  <p>App ya desarrollada</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<twelve-component></twelve-component>` : ""}
    `;
  }
}

customElements.define("eleven-component", ElevenComponent);
