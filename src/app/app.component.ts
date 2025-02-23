// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit, effect, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen overflow-x-hidden">
      <app-header [darkMode]="darkMode()" (toggleDarkMode)="toggleDarkMode()" />
      <main class="flex-grow relative">
        <!-- Previous page placeholder -->
        <div 
          *ngIf="isNavigating"
          class="absolute inset-0 z-10"
          [class.animate-slide-out]="isNavigating">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/10 to-slate-100/20 dark:via-slate-900/10 dark:to-slate-900/20"></div>
        </div>
        
        <!-- Current page content -->
        <div 
          class="relative"
          [class.animate-slide-in]="isNavigating">
          <router-outlet />
        </div>
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .animate-slide-out {
      animation: slideOut 300ms ease-in-out forwards;
    }
    
    .animate-slide-in {
      animation: slideIn 300ms ease-in-out forwards;
    }
    
    @keyframes slideOut {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-20px);
        opacity: 0;
      }
    }
    
    @keyframes slideIn {
      0% {
        transform: translateX(20px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    :host {
      display: block;
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  `]
})
export class AppComponent implements OnInit {
  isNavigating = false;

  public darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? String(window.matchMedia('(prefers-color-scheme: dark)').matches))
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor(private router: Router) {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isNavigating = false;
        }, 2000); // Match the animation duration
      }
    });
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}