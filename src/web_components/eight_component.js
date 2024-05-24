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
    this.back = false;
    window.price = globalPrice.reduce((acc, num) => acc + num, 0);
  }

  btnClick(id) {
    if (id === "perfil-si") {
      window.globalPrice.push(2000);
      window.globalSettings.optPerfiles = "Con Perfil";
    } else if (id === "perfil-no") {
      window.globalPrice.push(0);
      window.globalSettings.optPerfiles = "Sin Perfil";
    } else if (id === "perfil-no-se") {
      window.globalPrice.push(500);
      window.globalSettings.optPerfiles = "No se";
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
              @import "./styles_components.css";
            </style>
            <section class="page7">
              <div class="container-top">
                <button @click="${this.btnBack}" class="back">
                  ← Anterior
                </button>
                <h2>7/10</h2>
                <h2 class="precio">${window.price} COP</h2>
              </div>
              <h1>¿Los usuarios tienen sus propios perfiles?</h1>
              <div class="container-option">
                <div
                  @click="${() => this.btnClick("perfil-si")}"
                  class="option"
                >
                  <img class="img-option" src="./img-si-perfil.png" alt="" />
                  <p>Sí</p>
                </div>
                <div
                  @click="${() => this.btnClick("perfil-no")}"
                  class="option"
                >
                  <img class="img-option" src="./img-no-perfil.png" alt="" />
                  <p>No</p>
                </div>
                <div
                  @click="${() => this.btnClick("perfil-no-se")}"
                  class="option"
                >
                  <img
                    class="img-option"
                    src="./img-perfil-pregunta.png"
                    alt=""
                  />
                  <p>No lo sé</p>
                </div>
              </div>
            </section>
          `
        : ""}
      ${this.second ? html`<nine-component></nine-component>` : ""}
      ${this.back ? html`<seven-component></seven-component>` : ""}
    `;
  }
}

customElements.define("eight-component", EightComponent);
