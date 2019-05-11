import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoicingModule } from './invoicing/invoicing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InvoicingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
