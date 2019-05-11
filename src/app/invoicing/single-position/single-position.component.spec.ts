import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePositionComponent } from './single-position.component';

describe('SinglePositionComponent', () => {
  let component: SinglePositionComponent;
  let fixture: ComponentFixture<SinglePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
