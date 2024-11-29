import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  standalone: true,
  template: `
    <div class="bg-[var(--border-color)] p-6 rounded-lg">
      <p class="text-[var(--text-secondary)]">
        This is a modern Angular 19 application with Tailwind CSS and theme support.
      </p>
    </div>
  `
})
export class HomeContentComponent {}