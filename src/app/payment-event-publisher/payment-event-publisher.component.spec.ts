import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEventPublisherComponent } from './payment-event-publisher.component';

describe('PaymentEventPublisherComponent', () => {
  let component: PaymentEventPublisherComponent;
  let fixture: ComponentFixture<PaymentEventPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEventPublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentEventPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
