import { Component } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner'

@Component({
  selector: 'full-loading',
  standalone: true,
  imports: [MatProgressSpinner],
  templateUrl: './full-loading.component.html',
  styleUrl: './full-loading.component.scss'
})
export class FullLoadingComponent {

}
