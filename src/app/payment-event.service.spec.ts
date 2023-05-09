import { TestBed } from '@angular/core/testing';

import { PaymentEventService } from './payment-event.service';

describe('PaymentEventService', () => {
  let service: PaymentEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
