import { Component, inject } from '@angular/core';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

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
    <span class="message" matSnackBarLabel> Make a Action? </span>
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

  mensagemRef = inject(MatSnackBarRef);

}
