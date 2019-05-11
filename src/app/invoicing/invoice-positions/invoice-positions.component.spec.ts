import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePositionsComponent } from './invoice-positions.component';

describe('InvoicePositionsComponent', () => {
  let component: InvoicePositionsComponent;
  let fixture: ComponentFixture<InvoicePositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
