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

  protected actionMessage: Message = {
    message: 'Make an Action? ',
    duration: 5000
  }
}
