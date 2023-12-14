// service-selection.ts

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// Define the structure of a service
interface Service {
  name: string;
  price: number;
  time: string;
}

@customElement('service-selection')
export class ServiceSelection extends LitElement {
  @property({type: Array})
  services: Service[] = [];

  @property({type: Object})
  selectedService?: Service;

  // Define styles for the service selection page
  static override styles = css`
    /* Add your styles for the service selection page */
  `;

  // Render method to define the HTML structure of the component
  override render() {
    return html`
      <h2>Select a Service:</h2>
      <ul>
        ${this.services.map(
          (service) => html`
            <li @click=${() => this._onServiceClick(service)}>
              ${service.name} - Price: ${service.price}, Time: ${service.time}
            </li>
          `
        )}
      </ul>
    `;
  }

  // Handle the click event when a service is selected
  private _onServiceClick(service: Service) {
    this.selectedService = service;
    // Dispatch an event to signal that a service has been selected
    this.dispatchEvent(new CustomEvent('service-selected', {detail: service}));
  }
}
