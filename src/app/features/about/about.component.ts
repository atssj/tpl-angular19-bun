import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-8">
      <h1 class="text-4xl font-bold mb-6">About</h1>
      <div class="prose prose-lg">
        <p class="text-[var(--text-secondary)]">
          This is the about page of our Angular 19 application.
        </p>
      </div>
    </div>
  `
})
export class AboutComponent {}