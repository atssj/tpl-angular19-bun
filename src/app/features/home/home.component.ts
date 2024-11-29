import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { HomeTitleComponent } from './home.title.component';
import { HomeContentComponent } from './home.content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ThemeToggleComponent,
    HomeTitleComponent,
    HomeContentComponent
  ],
  template: `
    <div class="container py-8">
      <div class="flex justify-between items-center mb-8">
        <app-home-title />
        <app-theme-toggle />
      </div>
      <app-home-content />
    </div>
  `
})
export class HomeComponent {}