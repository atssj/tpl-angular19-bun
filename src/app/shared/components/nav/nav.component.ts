import { Component } from '@angular/core';
import { NavLinkComponent } from './nav.link.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavLinkComponent],
  template: `
    <nav class="bg-[var(--border-color)] p-4">
      <div class="container flex gap-4">
        <app-nav-link to="/" label="Home" />
        <app-nav-link to="/about" label="About" />
      </div>
    </nav>
  `
})
export class NavComponent {}