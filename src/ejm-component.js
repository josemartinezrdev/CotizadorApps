
import { LitElement, css, html } from "lit";
import "./segundo.js";
class NameElement extends LitElement {
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
            <h1>Hola</h1>
            <button @click="${this.btnClick}">BTN</button>
          `
        : ""}
      ${this.second ? html`<segundo-element></segundo-element>` : ""}
    `;
  }
}

customElements.define("name-element", NameElement);
