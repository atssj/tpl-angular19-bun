import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { ThemeToggleButtonComponent } from './theme-toggle.button';
import { ThemeIconsComponent } from './theme-toggle.icons';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, ThemeToggleButtonComponent, ThemeIconsComponent],
  template: `
    <app-theme-toggle-button
      (click)="themeService.toggleTheme()"
      [ariaLabel]="themeService.isDarkTheme() ? 'Switch to light theme' : 'Switch to dark theme'"
    >
      <app-theme-icons [isDark]="themeService.isDarkTheme()"/>
    </app-theme-toggle-button>
  `
})
export class ThemeToggleComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setInitialTheme();
  }
}