import { Component, OnInit } from '@angular/core';
import { InvoiceItem, InvoiceItemFactory } from '../model/item';

@Component({
  selector: 'app-invoice-positions',
  templateUrl: './invoice-positions.component.html',
  styleUrls: ['./invoice-positions.component.scss']
})
export class InvoicePositionsComponent implements OnInit {
  private positions: InvoiceItem[] = [];
  private invoiceItemFactory: InvoiceItemFactory;

  constructor() {
    this.invoiceItemFactory = new InvoiceItemFactory();
  }

  ngOnInit() {
  }

  addPosition(): void {
    this.positions.push(this.invoiceItemFactory.newInvoiceItem());
  }
}
