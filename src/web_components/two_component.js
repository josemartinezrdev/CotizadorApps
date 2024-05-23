import { LitElement, html } from "lit";
import "./three_component.js";

window.globalPrice = [0];
window.globalSettings = {
  optCalidad: "Sin Seleccionar",
  optTipoApp: "Sin Seleccionar",
  optTipoNewApp: "No es desktop",
  optInterface: "Sin Seleccionar",
  optBeneficio: "Sin Seleccionar",
  optLogin: "Sin Seleccionar",
  optIntegration: "Sin Seleccionar",
  optPerfiles: "Sin Seleccionar",
  optPanel: "Sin Seleccionar",
  optIdioma: "Sin Seleccionar",
  optEstado: "Sin Seleccionar",
};
window.price = 0;

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

  btnClick(id) {
    if (id === "calidadOptima") {
      window.globalPrice.push(3600);
      window.globalSettings.optCalidad = "Calidad Optima";
    } else if (id === "calidadMedia") {
      window.globalPrice.push(2400);
      window.globalSettings.optCalidad = "Calidad Buena";
    } else if (id === "calidadBaja") {
      window.globalPrice.push(1200);
      window.globalSettings.optCalidad = "Calidad Baja";
    }

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
                <div class="empty"></div>
                <h2>1/10</h2>
              </div>
              <h1 class="h1page1">¿Qué nivel de calidad estás buscando?</h1>
              <div class="container-option">
                <div
                  @click="${() => this.btnClick("calidadOptima")}"
                  id="calidadOptima"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-calidad-alta.png"
                    alt=""
                  />
                  <p>Calidad Optima</p>
                </div>
                <div
                  @click="${() => this.btnClick("calidadMedia")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-calidad-media.png"
                    alt=""
                  />
                  <p>Buena Relación Calidad/Precio</p>
                </div>
                <div
                  @click="${() => this.btnClick("calidadBaja")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="../../src/assets/imgs/img-calidad-baja.png"
                    alt=""
                  />
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
