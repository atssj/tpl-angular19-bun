import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { routes } from './app/app.routes';
import { NavComponent } from './app/shared/components/nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  template: `
    <app-nav />
    <router-outlet />
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));