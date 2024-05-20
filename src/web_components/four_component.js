import { LitElement, css, html } from "lit";
import "./five_component.js";

class FourComponent extends LitElement {
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
            <section class="page3">
              <h2>3/10</h2>
              <h1>¿Qué diseño quieres que tenga tu App?</h1>
              <div class="container-option">
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-Isencilla.png" alt="" />
                  <p>Interfaz sencilla</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="imgs/img-iPersonalizada.png"
                    alt=""
                  />
                  <p>Interfaz personalizada</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img
                    class="img-option"
                    src="imgs/img-Ireplicada.png"
                    alt=""
                  />
                  <p>Interfaz replicada de la web</p>
                </div>
                <div @click="${this.btnClick}" class="option">
                  <img class="img-option" src="imgs/img-npDiseño.png" alt="" />
                  <p>No necesito diseño</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<five-component></five-component>` : ""}
    `;
  }
}

customElements.define("four-component", FourComponent);
