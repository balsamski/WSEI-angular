export interface InvoiceItem {
    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}

export enum Unit {
    service = 'service',
    good = 'good',
    hour = 'hour'
}

export enum Tax {
    t23 = 0.23,
    t8 = 0.08,
    t5 = 0.05
}

export class InvoiceItemFactory {
    newInvoiceItem(): InvoiceItem {
        return {
            name: '',
            quantity: 1,
            unit: null,
            netto: null,
            tax: null,
            brutto: null,
        };
    }
}
