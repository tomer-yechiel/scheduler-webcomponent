// order-summary.ts

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// Define the structure of order details
interface OrderDetails {
  service: string;
  price: number;
  date: string;
}

@customElement('order-summary')
export class OrderSummary extends LitElement {
  @property({type: Object})
  orderDetails?: OrderDetails;

  // Define styles for the order summary page
  static override styles = css`
    /* Add your styles for the order summary page */
  `;

  // Render method to define the HTML structure of the component
  override render() {
    if (!this.orderDetails) {
      return html`<p>No order details available.</p>`;
    }

    return html`
      <h2>Order Summary:</h2>
      <p>Service: ${this.orderDetails.service}</p>
      <p>Price: ${this.orderDetails.price}</p>
      <p>Date: ${this.orderDetails.date}</p>
    `;
  }
}
