// import { LitElement, css, html } from "lit";
// // import "./seven_component.js";

// class FiveComponent extends LitElement {
//   static get properties() {
//     return {
//       first: { type: Boolean },
//       second: { type: Boolean },
//     };
//   }

//   constructor() {
//     super();
//     this.first = true;
//     this.second = false;
//   }
//   btnClick() {
//     this.first = !this.first;
//     this.second = !this.second;
//   }

//   render() {
//     return html`
//       ${this.first
//         ? html`
//             <style>
//               @import "../src/web_components/styles_components.css";
//             </style>
//           `
//         : ""}
//       ${this.second ? html`<seven-component></seven-component>` : ""}
//     `;
//   }
// }

// customElements.define("five-component", FiveComponent);
