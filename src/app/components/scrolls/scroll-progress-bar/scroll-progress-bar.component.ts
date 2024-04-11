import { Component, HostListener, signal } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'scroll-progress-bar',
  standalone: true,
  imports: [MatProgressBar, MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <mat-progress-bar mode="determinate" [value]="scrollPercentage()">
    </mat-progress-bar>
    @if (scrollPercentage() > 10) {
    <button
      mat-icon-button
      color="primary"
      (click)="scrollToTop()"
      aria-label="Button with a arrow upward icon for return to top"
      matTooltip="Return to top"
      matTooltipPosition="above"
    >
      <mat-icon>arrow_upward</mat-icon>
    </button>
    }
  `,
  styles: `
    mat-progress-bar {
      position: sticky;
      top: 0;
    }
    button {
      position: fixed;
      bottom: 24px;
      right: 24px;
    }
  `,
})
export class ScrollProgressBarComponent {
  protected scrollPercentage = signal(0);

  @HostListener('window:scroll', [])
  protected onWindowScroll() {
    const scrollOffset = window.scrollY || 0;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollPercentage.set((scrollOffset / windowHeight) * 100);
  }

  protected scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
