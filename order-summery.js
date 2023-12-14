// order-summary.js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let OrderSummary = class OrderSummary extends LitElement {
    // Render method to define the HTML structure of the component
    render() {
        if (!this.orderDetails) {
            return html `<p>No order details available.</p>`;
        }
        return html `
      <h2>Order Summary:</h2>
      <p>Service: ${this.orderDetails.service}</p>
      <p>Price: ${this.orderDetails.price}</p>
      <p>Date: ${this.orderDetails.date}</p>
    `;
    }
};
// Define styles for the order summary page
OrderSummary.styles = css `
    /* Add your styles for the order summary page */
  `;
__decorate([
    property({ type: Object })
], OrderSummary.prototype, "orderDetails", void 0);
OrderSummary = __decorate([
    customElement('order-summary')
], OrderSummary);
export { OrderSummary };
//# sourceMappingURL=order-summery.js.map