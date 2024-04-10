import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message-service/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected messageService = inject(MessageService);

  protected openMessage() {
    const messageRef = this.messageService.openMessage('Dismiss message with an action?', 'Yes');
    messageRef.afterOpened().subscribe(() => {
      console.log('The message has been opened!');
    });
    messageRef.onAction().subscribe(() => {
      console.log('An action has been activated!');
    });
    messageRef.afterDismissed().subscribe(() => {
      console.log('The message has been closed!');
    });
  }

}
