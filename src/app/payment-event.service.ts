import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PaymentEvent} from './payment-event';
@Injectable({
  providedIn: 'root'
})
export class PaymentEventService {

 private url = 'http://localhost:8091';

  constructor(private httpClient: HttpClient) { }

  publishPaymentEvents(numberOfRecords: any){
      console.log("In Service Publishing payment events:"+ numberOfRecords);
      this.httpClient.post(this.url+'/publish-mock-payment-event?numberOfRecords='+numberOfRecords,{}).subscribe(response => {
      console.log(response);
      });
  }

publishPaymentEvent(paymentEvent:PaymentEvent){
      console.log("In Service Publishing payment events:"+ paymentEvent);
      this.httpClient.post(this.url+'/publish-payment-event',paymentEvent).subscribe(response => {
      console.log(response);
      });
  }



}
