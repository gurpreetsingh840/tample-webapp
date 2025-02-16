// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostBinding, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header [darkMode]="darkMode()" (toggleDarkMode)="toggleDarkMode()" />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  `]
})
export class AppComponent {
  public darkMode = signal<boolean>(

    JSON.parse(window.localStorage.getItem('darkMode') ?? String(window.matchMedia('(prefers-color-scheme: dark)').matches))
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}