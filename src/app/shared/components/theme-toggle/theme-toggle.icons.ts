import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-icons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="isDark; else lightIcon">
      🌙
    </ng-container>
    <ng-template #lightIcon>
      ☀️
    </ng-template>
  `,
  inputs: ['isDark']
})
export class ThemeIconsComponent {
  isDark!: boolean;
}