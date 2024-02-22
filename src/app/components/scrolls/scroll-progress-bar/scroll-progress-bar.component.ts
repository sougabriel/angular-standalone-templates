import { Component, HostListener, signal } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'scroll-progress-bar',
  standalone: true,
  imports: [MatProgressBar, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './scroll-progress-bar.component.html',
  styleUrl: './scroll-progress-bar.component.scss',
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
