import { Component, inject } from '@angular/core';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { Message } from '../interfaces/simple-message';

@Component({
  selector: 'app-bar-annotated',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
  template: `
    <span class="message" matSnackBarLabel> {{ message.text }} </span>
    <span matSnackBarActions>
      <button
        mat-button
        matSnackBarAction
        (click)="mensagemRef.dismissWithAction()"
      >
        Yes
      </button>
      <button mat-button matSnackBarAction (click)="mensagemRef.dismiss()">
        No
      </button>
    </span>
  `,
  styles: `
    :host {
      display: flex;
    }
    .message {
      color: hotpink;
    }
  `,
})
export class MakeActionMessageComponent {
  protected mensagemRef = inject(MatSnackBarRef);
  protected message: Message = inject(MAT_SNACK_BAR_DATA);

  constructor() {}
}
