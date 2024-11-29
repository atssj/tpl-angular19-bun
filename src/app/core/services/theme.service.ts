import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSignal = signal<boolean>(false);
  isDarkTheme = computed(() => this.isDarkThemeSignal());

  constructor() {
    effect(() => {
      document.documentElement.setAttribute(
        'data-theme',
        this.isDarkTheme() ? 'dark' : 'light'
      );
    });
  }

  toggleTheme(): void {
    this.isDarkThemeSignal.update(current => !current);
  }

  setInitialTheme(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkThemeSignal.set(prefersDark);
  }
}