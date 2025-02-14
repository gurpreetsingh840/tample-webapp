// src/app/header/header.component.ts
import { Component, EventEmitter, Input, Output, HostBinding, signal } from '@angular/core';
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
  @Input() darkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();

  navigationItems = navigationItems;
  isMenuOpen = false;
  showEventBanner = true;

  constructor() {
  }

  closeEventBanner() {
    this.showEventBanner = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}