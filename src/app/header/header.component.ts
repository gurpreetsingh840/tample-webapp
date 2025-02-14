// src/app/header/header.component.ts
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, Event, NavigationEnd } from '@angular/router';
import { ContactInfoComponent } from '../shared/components/contact-info/contact-info.component';
import { filter } from 'rxjs/operators';

interface MenuItem {
  path: string;
  label: string;
  icon?: string;  // SVG path
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ContactInfoComponent
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() darkMode: boolean = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
  menuItems: MenuItem[] = [
    {
      path: '/',
      label: 'Home'
    },
    { path: '/services/weekly-programs', label: 'Programs' },
    { path: '/services/religious-services', label: 'Services' },
    { path: '/services/community-services', label: 'Community' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
      this.isMenuOpen = false;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}