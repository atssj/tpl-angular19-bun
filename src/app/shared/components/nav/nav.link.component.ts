import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a 
      [routerLink]="to" 
      class="text-[var(--text-primary)] hover:text-[var(--accent-color)]"
    >
      {{ label }}
    </a>
  `
})
export class NavLinkComponent {
  @Input() to!: string;
  @Input() label!: string;
}