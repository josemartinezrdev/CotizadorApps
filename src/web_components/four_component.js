import { LitElement, html } from "lit";
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
    this.back = false;
    window.price = globalPrice.reduce((acc, num) => acc + num, 0);
  }

  btnClick(id) {
    if (id === "sencilla") {
      window.globalPrice.push(1000);
      window.globalSettings.optInterface = "Interfaz Sencilla";
    } else if (id === "personalizada") {
      window.globalPrice.push(3000);
      window.globalSettings.optInterface = "Interfaz Personalizada";
    } else if (id === "replica") {
      window.globalPrice.push(5000);
      window.globalSettings.optInterface = "Interfaz Replica Web";
    } else if (id === "no-diseño") {
      window.globalPrice.push(0);
      window.globalSettings.optInterface = "Sin Diseño";
    }

    this.first = !this.first;
    this.second = !this.second;
  }

  btnBack() {
    window.globalPrice.pop();
    if (window.isDesk === true) {
      window.globalPrice.pop();
      window.isDesk = false;
    }
    this.first = false;
    this.second = false;
    this.back = true;
  }

  render() {
    return html`
      ${this.first
        ? html`
            <style>
              @import "./styles_components.css";
            </style>
            <section class="page3">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>3/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Qué diseño quieres que tenga tu App?</h1>
              <div class="container-option">
                <div @click="${() => this.btnClick("sencilla")}" class="option">
                  <img
                    class="img-option"
                    src="./img-diseño-sencillo.png"
                    alt=""
                  />
                  <p>Interfaz sencilla</p>
                </div>
                <div
                  @click="${() => this.btnClick("personalizada")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="./img-diseño-personalizado.png"
                    alt=""
                  />
                  <p>Interfaz personalizada</p>
                </div>
                <div @click="${() => this.btnClick("replica")}" class="option">
                  <img class="img-option" src="./img-si-replica.png" alt="" />
                  <p>Interfaz replicada de la web</p>
                </div>
                <div
                  @click="${() => this.btnClick("no-diseño")}"
                  class="option"
                >
                  <img class="img-option" src="./img-no-diseño.png" alt="" />
                  <p>No necesito diseño</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<five-component></five-component>` : ""}
      ${this.back ? html`<three-component></three-component>` : ""}
    `;
  }
}

customElements.define("four-component", FourComponent);
