// main-elements.ts

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './my-calendar.js';
import './order-summary.js';
import './service-selection.js';

interface Service {
  name: string;
  price: number;
  time: string;
}

@customElement('main-element')
export class MainElement extends LitElement {
  @property({type: Array})
  services: Service[] = [];

  @property({type: Object})
  selectedService?: Service;

  @property()
  selectedDate?: string;

  static override styles = css`
    /* Add your global styles if needed */
  `;

  override render() {
    return html`
      <div id="app">
        ${this.selectedService
          ? html`<my-calendar
              @date-selected=${(event: CustomEvent) =>
                this._onDateSelected(event)}
            ></my-calendar>`
          : html`<service-selection
              @service-selected=${(event: CustomEvent) =>
                this._onServiceSelected(event)}
            ></service-selection>`}
        ${this.selectedDate
          ? html`<order-summary
              .orderDetails=${{
                service: this.selectedService?.name || '',
                price: this.selectedService?.price || 0,
                date: this.selectedDate || '',
              }}
            ></order-summery>`
          : ''}
      </div>
    `;
  }

  private _onServiceSelected(event: CustomEvent) {
    this.selectedService = event.detail;
  }

  private _onDateSelected(event: CustomEvent) {
    this.selectedDate = event.detail;
  }
}
