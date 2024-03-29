import { css } from "lit-element";

export const SharedStylesButton = css`
  button {
    -webkit-appearance: none;
    align-items: center;
    appearance: none;
    background-color: transparent;
    border-style: none;
    border-width: 0;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    font-size: inherit;
    margin: 0;
    padding: 0;
    vertical-align: middle;
  }

  button:active,
  button:focus {
    border-color: transparent;
    color: var(--awc-button-selected-background-color);
    outline: none;
  }

  button:disabled {
    cursor: not-allowed;
    color: var(--awc-button-disabled-background-color);
  }

  button.cta {
    border-style: solid;
    border-width: 1px;
    justify-content: center;
    padding: 1rem 2rem;
  }

  button.cta:first-of-type {
    background-color: var(--awc-primary-button-background-color);
    border-color: var(--mdc-theme-on-surface, black);
    color: var(--awc-primary-button-text-color, black);
  }

  button.cta:first-of-type svg {
    fill: var(--awc-primary-button-text-color);
  }

  button.cta:not(:first-of-type) {
    background-color: var(--awc-secondary-button-background-color);
    border-color: var(--awc-secondary-button-border-color);
    color: var(--awc-secondary-button-text-color);
  }

  button.cta:not(:first-of-type) svg {
    fill: var(--awc-secondary-button-text-color);
  }

  button.cta:active,
  button.cta:focus {
    background-color: var(--awc-button-selected-background-color);
    border-color: var(--awc-button-selected-background-color);
    color: var(--awc-button-selected-color);
  }

  button.cta:disabled {
    background-color: var(--awc-button-disabled-background-color);
    border-color: var(--awc-button-disabled-background-color);
    color: var(--awc-button-disabled-color);
  }

  button span {
    flex-basis: 100%;
  }

  button.cta svg {
    height: 1rem;
    margin-right: 1rem;
    width: 1rem;
  }

  button.cta:active svg,
  button.cta:focus svg {
    fill: var(--awc-button-selected-background-color);
  }

  button.cta:disabled svg {
    fill: var(--awc-button-disabled-color);
  }

  button.icon {
    justify-content: center;
  }
`;
