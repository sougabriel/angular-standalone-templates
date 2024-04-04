import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MakeActionMessageComponent } from './make-action-message/make-action-message.component';

@Component({
  selector: 'message',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule],
  template: ` <button (click)="openSnackBar()">Menssagem</button> `,
  styles: '',
})
export class MessageComponent {
  protected option: number = 0;
  protected message = inject(MatSnackBar);

  selectOption(option: number) {
    this.option = option;
  }

  protected openSnackBar() {
    const messageRef = this.message.openFromComponent(MakeActionMessageComponent,
      {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'start',
        politeness: 'off',
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
