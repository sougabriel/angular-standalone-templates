import { Component, Injectable, inject } from '@angular/core';
import { Message } from '../interfaces/simple-message';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { MakeActionMessageComponent } from '../components/make-action-message.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  protected messageBar = inject(MatSnackBar);

  protected configs: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  public message: Message = {
    text: 'Make an Action? ',
  };

  public openSimpleMessage(text: string) {
    const messageRef = this.messageBar.open(text, '', this.configs);

    messageRef.afterOpened().subscribe(() => {
      console.log('The Message has Opened! ');
    });

    messageRef.afterDismissed().subscribe(() => {
      console.log('The Message has Closed! ');
    });
  }

  public openMessage(message: Message = this.message): MatSnackBarRef<any> {
    return this.messageBar.openFromComponent(
      MakeActionMessageComponent,
      {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        data: message,
      }
    );
  }
}
