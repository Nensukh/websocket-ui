import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from "./websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    title = 'websocket-ui';
    content = '';
    received = [];
    sent = [];
    message: any;

    constructor(public webSocketService: WebSocketService) {
        this.webSocketService.connect();
      }

      sendMessage(message: string) {
        console.log('sending message to server:'+message);
        this.webSocketService.sendMessage(message);
      }

      ngOnDestroy() {
        this.webSocketService.close();
      }
}
