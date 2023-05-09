import { Component } from '@angular/core';
import { PaymentEventService } from './../payment-event.service';
import {PaymentEvent} from './../payment-event';
@Component({
  selector: 'app-payment-event-publisher',
  templateUrl: './payment-event-publisher.component.html',
  styleUrls: ['./payment-event-publisher.component.scss']
})
export class PaymentEventPublisherComponent {

public noOfRecords: any;
public paymentEvent: PaymentEvent = {
                                      txnId : 0,
                                      amount : 0,
                                      paymentType: '',
                                      txnDateTime: new Date()
                                    };
  constructor(private paymentEventService: PaymentEventService){
  }

  publishEvents(){
    console.log("Publishing payment events:"+ this.noOfRecords);
    this.paymentEventService.publishPaymentEvents(this.noOfRecords);
  }

  publishEvent(paymentEvent : PaymentEvent){
    this.paymentEvent.txnDateTime = new Date();
    console.log("Publishing payment events:"+ this.paymentEvent);
    this.paymentEventService.publishPaymentEvent(paymentEvent);
  }
}
