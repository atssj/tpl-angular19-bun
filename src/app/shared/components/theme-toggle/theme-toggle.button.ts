import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  template: `
    <button
      class="p-2 rounded-lg hover:bg-[var(--border-color)] transition-colors"
      [attr.aria-label]="ariaLabel"
    >
      <ng-content></ng-content>
    </button>
  `,
  inputs: ['ariaLabel']
})
export class ThemeToggleButtonComponent {
  ariaLabel!: string;
}