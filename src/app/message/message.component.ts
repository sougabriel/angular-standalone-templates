import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BarAnnotatedComponent } from './bar-annotated/bar-annotated.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'message',
  standalone: true,
  imports: [MatSnackBarModule, MatButtonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  protected option: number = 0;
  protected message = inject(MatSnackBar);

  selectOption(option: number) {
    this.option = option;
  }

  protected openSnackBar() {
    const messageRef = this.message.openFromComponent(BarAnnotatedComponent, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
      politeness: 'off',
    });

    messageRef.afterOpened().subscribe(() => {
      console.log('Abriu Mensagem!');
    });

    messageRef.onAction().subscribe(() => {
      console.log('Ativou Ação!');
    });

    messageRef.afterDismissed().subscribe(() => {
      console.log('Fechou Mensage!');
    });

  }

}
