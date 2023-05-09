import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebSocketService } from './websocket.service';
import { PaymentEventService } from './payment-event.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentEventListComponent } from './payment-event-list/payment-event-list.component'
import { AgGridModule } from 'ag-grid-angular';
import { PaymentEventPublisherComponent } from './payment-event-publisher/payment-event-publisher.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PaymentEventListComponent,
    PaymentEventPublisherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [DatePipe,  WebSocketService, PaymentEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
