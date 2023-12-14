import { LitElement } from 'lit';
interface OrderDetails {
    service: string;
    price: number;
    date: string;
}
export declare class OrderSummary extends LitElement {
    orderDetails?: OrderDetails;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=order-summery.d.ts.map