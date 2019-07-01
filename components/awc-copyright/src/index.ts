import { html, css, customElement, property, LitElement } from "lit-element";

// These are the shared styles needed by this element.
import { SharedStyles } from "@assemblage/awc-base";

@customElement("awc-copyright")
export class Copyright extends LitElement {
  @property({ type: String })
  appTitle = "";

  @property({ type: Number })
  _year = new Date().getFullYear();

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          background-color: var(--app-color-tertiary);
          color: var(--app-footer-text-color);
          display: grid;
          height: 4rem;
          place-content: center;
          text-transform: uppercase;
          width: 100%;
        }
      `
    ];
  }

  protected render() {
    return html`
      ${this.appTitle} &copy; ${this._year}
    `;
  }
}
