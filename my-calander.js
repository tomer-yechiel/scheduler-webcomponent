// calendar.js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let Calendar = class Calendar extends LitElement {
    // Render method to define the HTML structure of the component
    render() {
        return html `
      <h2>Select a Date:</h2>
      <input
        type="date"
        @change=${(event) => this._onDateChange(event)}
      />
    `;
    }
    // Handle the change event when a date is selected
    _onDateChange(event) {
        this.selectedDate = event.target.value;
        // Dispatch an event to signal that a date has been selected
        this.dispatchEvent(new CustomEvent('date-selected', { detail: this.selectedDate }));
    }
};
// Define styles for the calendar page
Calendar.styles = css `
    /* Add your styles for the calendar page */
  `;
__decorate([
    property()
], Calendar.prototype, "selectedDate", void 0);
Calendar = __decorate([
    customElement('my-calander')
], Calendar);
export { Calendar };
//# sourceMappingURL=my-calander.js.map