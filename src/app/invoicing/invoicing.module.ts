import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePositionsComponent } from './invoice-positions/invoice-positions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SinglePositionComponent } from './single-position/single-position.component';

@NgModule({
  declarations: [InvoicePositionsComponent, InvoiceComponent, SinglePositionComponent],
  imports: [
    CommonModule
  ],
  exports: [InvoiceComponent]
})
export class InvoicingModule { }
