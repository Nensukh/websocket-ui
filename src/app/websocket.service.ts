import { Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
//import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs'
import { environment } from '../environments/environment';
import {PaymentEvent, PaymentSummary} from './payment-event';
interface MessageData {
  message: string;
  content: string;
  time?: string;
}

interface Response {
  body: string;
}



@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  public paymentEventObs = new Subject<PaymentEvent>();
  public paymentSummary = new Subject<PaymentSummary>();
  public stompClient;


  public connect(): void {
 console.log('*****connecting to webSocket');
   const ws = new SockJS(environment.webSocketUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
//       that.stompClient.subscribe('/topic/greetings', (message) => {
//       console.log("Message Received:"+ message.body);
//         if (message.body) {
//           that.receivedData.push(JSON.parse(message.body));
//         }
//       });


      that.stompClient.subscribe('/topic/paymentEvent', (message: Response) => {
              if (message.body) {
                let paymentEvent = JSON.parse(message.body);
                 that.paymentEventObs.next(paymentEvent);
              }
            });


         that.stompClient.subscribe('/topic/paymentSummary', (message: Response) => {
                      if (message.body) {
                        let ps = JSON.parse(message.body);
                        that.paymentSummary.next(ps);
                      }
                    });
    });
  }




  sendMessage(message: string) {
    console.log('publishing message:' + message);
     this.stompClient.send("/app/hello", {}, JSON.stringify({'name': message}));
   // this.socket$.next({ message });
  }

  close() {
    //this.socket$.complete();
  }
}
