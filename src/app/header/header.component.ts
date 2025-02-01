// src/app/header/header.component.ts
import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { navigationItems } from '../config/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  navigationItems = navigationItems;
  isMenuOpen = false;
  showEventBanner = true;

  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }

  closeEventBanner() {
    this.showEventBanner = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}