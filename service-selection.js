// service-selection.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ServiceSelection = class ServiceSelection extends LitElement {
    constructor() {
        super(...arguments);
        this.services = [];
    }
    // Render method to define the HTML structure of the component
    render() {
        return html `
      <h2>Select a Service:</h2>
      <ul>
        ${this.services.map((service) => html `
            <li @click=${() => this._onServiceClick(service)}>
              ${service.name} - Price: ${service.price}, Time: ${service.time}
            </li>
          `)}
      </ul>
    `;
    }
    // Handle the click event when a service is selected
    _onServiceClick(service) {
        this.selectedService = service;
        // Dispatch an event to signal that a service has been selected
        this.dispatchEvent(new CustomEvent('service-selected', { detail: service }));
    }
};
// Define styles for the service selection page
ServiceSelection.styles = css `
    /* Add your styles for the service selection page */
  `;
__decorate([
    property({ type: Array })
], ServiceSelection.prototype, "services", void 0);
__decorate([
    property({ type: Object })
], ServiceSelection.prototype, "selectedService", void 0);
ServiceSelection = __decorate([
    customElement('service-selection')
], ServiceSelection);
export { ServiceSelection };
//# sourceMappingURL=service-selection.js.map