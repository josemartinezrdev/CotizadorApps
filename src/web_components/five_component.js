import { LitElement, html } from "lit";
import "./six_component.js";

class FiveComponent extends LitElement {
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
    window.price = globalPrice.reduce((acc, num) => acc + num, 0);
  }

  btnClick(id) {
    if (id === "gratis") {
      window.globalPrice.push(1500);
      window.globalSettings.optBeneficio = "App Gratuita";
    } else if (id === "pago") {
      window.globalPrice.push(3000);
      window.globalSettings.optBeneficio = "App de Pago";
    } else if (id === "compras") {
      window.globalPrice.push(2500);
      window.globalSettings.optBeneficio = "App Compras Internas";
    } else if (id === "otros-no-se") {
      window.globalPrice.push(1000);
      window.globalSettings.optBeneficio = "Otros / No se";
    }

    this.first = !this.first;
    this.second = !this.second;
  }

  btnBack() {
    window.globalPrice.pop();
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
            <section class="page4">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>4/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Cómo quieres sacar beneficio tu App?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("gratis")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-no-pagos.png"
                    alt=""
                  />
                  <p>Aplicación gratuita con publicidad</p>
                </div>
                <div @click="${() => this.btnClick("pago")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-si-pagos.png"
                    alt=""
                  />
                  <p>Aplicación de pago</p>
                </div>
                <div @click="${() => this.btnClick("compras")}" class="option">
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-compras-dentro.png"
                    alt=""
                  />
                  <p>Compras dentro de la App</p>
                </div>
                <div
                  @click="${() => this.btnClick("otros-no-se")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-otros.png"
                    alt=""
                  />
                  <p>Otros/No lo sé todavía</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<six-component></six-component>` : ""}
      ${this.back ? html`<four-component></four-component>` : ""}
    `;
  }
}

customElements.define("five-component", FiveComponent);
