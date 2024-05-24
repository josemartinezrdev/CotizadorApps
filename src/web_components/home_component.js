import { LitElement, css, html } from "lit";
import "./two_component.js";

class HomeComponent extends LitElement {
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
            <section class="initial">
              <img class="intro-img" src="./img-intro.png" alt="" />
              <h1 class="title-intro">
                ¿Cuánto cuesta desarrollar mi <strong>app</strong>?
              </h1>
              <p class="subTitle-intro">
                Calcula de forma rápida el costo para crear tu app, contestando
                estas sencillas preguntas.
              </p>
              <button @click="${this.btnClick}" class="button-intro">
                Empezar
              </button>
            </section>
          `
        : ""}
      ${this.second ? html`<two-component></two-component>` : ""}
    `;
  }

  static get styles() {
    return css`
      .intro-img {
        width: auto;
        height: auto;
        max-width: 400px;
        max-height: 30vh;
      }
      section {
        margin-top: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        min-width: 100%;
        gap: 10px;
      }
      button {
        max-width: 50%;
        margin: 0.5em 0;
        border-radius: 5px;
        text-align: center;
        display: inline-block;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        padding: 1em 3em;
        background-image: linear-gradient(to left, #14e6d3, #8660f5);
        border: 0;
        color: white;
        font-size: 20px;
        font-weight: 700;
        box-sizing: inherit;
        cursor: pointer;
      }
      h1 {
        font-size: 28px;
        font-weight: 700;
      }
      h1,
      p {
        color: white;
      }
      strong {
        color: #14e2cd;
      }
    `;
  }
}

customElements.define("home-component", HomeComponent);
