import { Injectable, inject } from '@angular/core';
import { Message } from '../interface/message';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MakeActionMessageComponent } from '../components/make-action-message.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  protected messageBar = inject(MatSnackBar);

  constructor() {}

  public openSnackBar(message: Message) {
    const messageRef = this.messageBar.openFromComponent(
      MakeActionMessageComponent,
      {
        duration: message.duration,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        data: message,
      }
    );

    messageRef.afterOpened().subscribe(() => {
      console.log('The Message has Opened! ');
    });

    messageRef.onAction().subscribe(() => {
      console.log('An Action as Activated! ');
    });

    messageRef.afterDismissed().subscribe(() => {
      console.log('The Message has Closed! ');
    });
  }
}
