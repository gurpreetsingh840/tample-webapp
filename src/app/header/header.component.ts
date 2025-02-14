// src/app/header/header.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center group">
            <div class="h-12 w-12 text-primary-600 dark:text-primary-500">
              <img src="assets/khanda.svg" 
                   alt="Khanda Symbol" 
                   class="h-full w-full">
            </div>
            <span class="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
              Gurdwara Singh Sabha
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <a routerLink="/services/weekly-programs" 
               routerLinkActive="text-orange-600 dark:text-orange-500"
               class="group px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 relative">
              <span>Programs</span>
              <span class="absolute bottom-1.5 left-3 right-3 h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a routerLink="/services/religious-services" 
               routerLinkActive="text-orange-600 dark:text-orange-500"
               class="group px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 relative">
              <span>Services</span>
              <span class="absolute bottom-1.5 left-3 right-3 h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a routerLink="/services/community-services" 
               routerLinkActive="text-orange-600 dark:text-orange-500"
               class="group px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 relative">
              <span>Community</span>
              <span class="absolute bottom-1.5 left-3 right-3 h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-orange-600 dark:text-orange-500"
               class="group px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 relative">
              <span>About</span>
              <span class="absolute bottom-1.5 left-3 right-3 h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a routerLink="/contact" 
               routerLinkActive="text-orange-600 dark:text-orange-500"
               class="group px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 relative">
              <span>Contact</span>
              <span class="absolute bottom-1.5 left-3 right-3 h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <app-contact-info 
              [showAddress]="false"
              [showPhone]="false"
              [showEmail]="false"
              class="group relative"
            />
          </div>

          <!-- Mobile menu button -->
          <button class="md:hidden" (click)="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!isMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a routerLink="/services/weekly-programs" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Programs</a>
            <a routerLink="/services/religious-services" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Services</a>
            <a routerLink="/services/community-services" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Community</a>
            <a routerLink="/about" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">About</a>
            <a routerLink="/contact" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Contact</a>
            <app-contact-info 
              [showAddress]="false"
              [showPhone]="false"
              [showEmail]="false"
              [directionsClass]="'block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'"
            />
          </div>
        </div>
      </nav>
    </header>

    <!-- Spacer to prevent content from going under fixed header -->
    <div class="h-20"></div>
  `
})
export class HeaderComponent {
  @Input() darkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}