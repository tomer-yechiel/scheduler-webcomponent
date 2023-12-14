// main-elements.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './my-calendar';
import './order-summary';
import './service-selection';
let MainElement = class MainElement extends LitElement {
    constructor() {
        super(...arguments);
        this.services = [];
    }
    render() {
        return html `
      <div id="app">
        ${this.selectedService
            ? html `<my-calendar
              @date-selected=${(event) => this._onDateSelected(event)}
            ></my-calendar>`
            : html `<service-selection
              @service-selected=${(event) => this._onServiceSelected(event)}
            ></service-selection>`}
        ${this.selectedDate
            ? html `<order-summary
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
    _onServiceSelected(event) {
        this.selectedService = event.detail;
    }
    _onDateSelected(event) {
        this.selectedDate = event.detail;
    }
};
MainElement.styles = css `
    /* Add your global styles if needed */
  `;
__decorate([
    property({ type: Array })
], MainElement.prototype, "services", void 0);
__decorate([
    property({ type: Object })
], MainElement.prototype, "selectedService", void 0);
__decorate([
    property()
], MainElement.prototype, "selectedDate", void 0);
MainElement = __decorate([
    customElement('main-element')
], MainElement);
export { MainElement };
//# sourceMappingURL=main-elements.js.map