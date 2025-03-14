// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, OnInit, effect, signal } from '@angular/core';
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

      <!-- Scroll to top button -->
      <button
        *ngIf="showScrollTop"
        (click)="scrollToTop()"
        class="fixed bottom-6 right-6 p-3 rounded-full bg-rose-600 dark:bg-rose-500 text-white shadow-lg hover:bg-rose-500 dark:hover:bg-rose-400 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </button>
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
  showScrollTop = false;

  public darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? String(window.matchMedia('(prefers-color-scheme: dark)').matches))
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(private router: Router) {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  ngOnInit() {
    // Check if all CSS is loaded
    const checkCSSLoaded = () => {
      return Array.from(document.styleSheets).every(sheet => {
        try {
          return sheet.cssRules !== null;
        } catch (e) {
          return false;
        }
      });
    };

    const markReady = () => {
      document.body.classList.add('css-loaded');
      document.body.classList.add('app-ready');

      // Cleanup loader after transition
      setTimeout(() => {
        const loader = document.getElementById('initial-loader');
        if (loader) loader.remove();
      }, 400);
    };

    // Check CSS loading status
    if (checkCSSLoaded()) {
      markReady();
    } else {
      const checkInterval = setInterval(() => {
        if (checkCSSLoaded()) {
          clearInterval(checkInterval);
          markReady();
        }
      }, 50);
    }

    setTimeout(() => {
      const loader = document.getElementById('initial-loader');
      if (loader) {
        loader.remove();
      }
    }, 1000); // Give extra time for styles to load

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isNavigating = false;
        }, 300); // Match the animation duration
      }
    });
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}