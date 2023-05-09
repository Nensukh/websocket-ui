import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEventListComponent } from './payment-event-list.component';

describe('PaymentEventListComponent', () => {
  let component: PaymentEventListComponent;
  let fixture: ComponentFixture<PaymentEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEventListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
