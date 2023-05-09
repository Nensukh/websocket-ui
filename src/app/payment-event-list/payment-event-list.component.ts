import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { WebSocketService } from "./../websocket.service";
import {PaymentEvent} from './../payment-event';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-payment-event-list',
  templateUrl: './payment-event-list.component.html',
  styleUrls: ['./payment-event-list.component.scss']
})
export class PaymentEventListComponent {

private gridApi!: GridApi;

  columnDefs: ColDef[] = [
        { field: 'paymentType' },
        { field: 'amount' }
    ];

public rowData:any[] = [{ "paymentType": "Debit", "amount": 954}];

//public rowData$!: Observable<PaymentEvent[]>;


   constructor() {
          //this.webSocketService.connect();
          console.log('connected');
         // this.rowData$ = this.webSocketService.paymentEvents$.asObservable();
          /*  this.webSocketService.paymentEventObs.subscribe(payment => {
          console.log('list: ' + payment);
            this.rowData.push(payment);
            this.gridApi.redrawRows();
          }); */
    }

     onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;
      }

}
