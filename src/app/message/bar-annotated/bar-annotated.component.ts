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
    <span class="message" matSnackBarLabel> Desfazer Menssagem? </span>
    <span matSnackBarActions>
      <button
        mat-button
        matSnackBarAction
        (click)="selectOption(1)"
        (click)="mensagemRef.dismissWithAction()"
      >
        Sim
      </button>
      <button mat-button matSnackBarAction (click)="mensagemRef.dismiss()">
        Não
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
export class BarAnnotatedComponent {
  mensagemRef = inject(MatSnackBarRef);

  protected option: number = 0;

  selectOption(option: number) {
    this.option = option;
  }
}
