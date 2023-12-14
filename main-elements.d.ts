import { LitElement } from 'lit';
import './my-calendar';
import './order-summary';
import './service-selection';
interface Service {
    name: string;
    price: number;
    time: string;
}
export declare class MainElement extends LitElement {
    services: Service[];
    selectedService?: Service;
    selectedDate?: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _onServiceSelected;
    private _onDateSelected;
}
export {};
//# sourceMappingURL=main-elements.d.ts.map