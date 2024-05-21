import { LitElement, html } from "lit";
import "./three_component.js";

class TwoComponent extends LitElement {
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
            <section class="page1">
              <div class="container-top">
                <div class="empty"></div> <!-- este es un div vacio -->
                <h2>1/10</h2>
              </div>
              <h1 class="h1page1">¿Qué nivel de calidad estás buscando?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-calidadO.png" alt="" />
                  <p>Calidad Optima</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-bnRelacion.png" alt="" />
                  <p>Buena Relación Calidad/Precio</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-npCalidad.png" alt="" />
                  <p>No me importa tanto la calidad</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<three-component></three-component>` : ""}
    `;
  }
}

customElements.define("two-component", TwoComponent);
