import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService, Message } from './MessageModule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected messageService = inject(MessageService);

  openMessage() {
    const messageRef = this.messageService.openMessage();
    messageRef.afterOpened().subscribe(() => {
      console.log('The Message has Opened! ')
    });
  }

}
