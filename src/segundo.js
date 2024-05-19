// segundo-element.js
import { LitElement, css, html } from "lit";

export class Segundo extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`<h1>Hola segundo</h1>`;
  }

  static get styles() {
    return css``;
  }
}

customElements.define("segundo-element", Segundo);
