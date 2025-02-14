// src/app/header/header.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Home</a>
            <a routerLink="/services" class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Services</a>
            <a routerLink="/activities" class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Activities</a>
            <a routerLink="/about" class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">About</a>
            <a routerLink="/contact" class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Contact</a>
            
            <!-- Dark Mode Toggle -->
            <button 
              (click)="onToggleDarkMode()"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              <svg *ngIf="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg *ngIf="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button 
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mr-2"
              (click)="onToggleDarkMode()"
            >
              <svg *ngIf="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg *ngIf="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <button class="text-gray-600 dark:text-gray-300" (click)="toggleMenu()">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div 
          class="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50"
          [class.hidden]="!isMenuOpen"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a routerLink="/" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Home</a>
            <a routerLink="/services" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Services</a>
            <a routerLink="/activities" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Activities</a>
            <a routerLink="/about" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">About</a>
            <a routerLink="/contact" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">Contact</a>
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