import { LitElement } from 'lit';
interface Service {
    name: string;
    price: number;
    time: string;
}
export declare class ServiceSelection extends LitElement {
    services: Service[];
    selectedService?: Service;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _onServiceClick;
}
export {};
//# sourceMappingURL=service-selection.d.ts.map