import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { DatePipe } from '@angular/common';
import { WebSocketService } from "./../websocket.service";
import {PaymentEvent} from './../payment-event';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

  public barChart: any;
  public lineChart: any;
  public paymentEvents:PaymentEvent[] = [];
  private amount:any[] = [];
  private debitAmount: any[] = [];
  private creditAmount: any[] = [];
  private txnDateTime:any[] = [];
  public paymentSummary:any[] = [0,0,0];
  constructor(private datePipe: DatePipe, public webSocketService: WebSocketService) {
        this.webSocketService.paymentEventObs.subscribe(p =>
        {

          if(this.paymentEvents.length>10){
            this.paymentEvents= this.paymentEvents.slice(1);
//             this.txnDateTime= this.txnDateTime.slice(1);
//             this.creditAmount= this.creditAmount.slice(1);
//             this.debitAmount= this.debitAmount.slice(1);
          }
           this.paymentEvents.push(p);
          if(p.paymentType === 'Credit'){
            this.creditAmount.push(p.amount);
           // this.debitAmount.push(0);
          }else{
            this.debitAmount.push(p.amount*-1);
            //this.creditAmount.push(0);
          }
          this.txnDateTime.push(this.datePipe.transform(p.txnDateTime, 'mm:ss.SSS'));
          this.lineChart.update();



        });



          this.webSocketService.paymentSummary.subscribe(ps =>{
                    this.paymentSummary[0]= ps.totalDebit;
                    this.paymentSummary[1] = ps.totalCredit;
                  //  this.paymentSummary[2] = this.webSocketService.paymentSummary.totalBalance;
                    this.barChart.update();
                  });
  }

     ngOnInit(): void {

        this.createChart();
     }

      ngOnDestroy() {
        this.webSocketService.close();
      }

    createChart(){

      this.barChart = new Chart("barChart", {
        type: 'doughnut', //this denotes tha type of chart

        data: {// values on X-Axis
          labels: ['Total Debit', 'Total Credit'],
           datasets: [
            {
              data: this.paymentSummary,
            }
          ]
        },
        options: {
          aspectRatio:2.5
        }

    });


     this.lineChart = new Chart("lineChart", {
            type: 'line', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: this.txnDateTime,
               datasets: [
                   {
                    label: 'Debit',
                    data: this.debitAmount,
                    backgroundColor:'red'
                   },
                   {
                     label: 'Credit',
                     data: this.creditAmount,
                     backgroundColor:'green'
                    }
              ],

            },
           options: {
                             scales: {
                                 x: {
                                     ticks: {
                                         maxTicksLimit: 10
                                     }
                                 }
                             }
                         }

        });

  }



}
