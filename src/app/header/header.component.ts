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
  children?: MenuItem[];
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
    {
      path: '/services/religious-services',
      label: 'Services',
      children: [
        { path: '/services/religious-services#akhand-path', label: 'Akhand Path' },
        { path: '/services/religious-services#sehaj-path', label: 'Sehaj Path' },
        { path: '/services/religious-services#sukhmani-sahib', label: 'Sukhmani Sahib' },
        { path: '/services/religious-services#anand-karaj', label: 'Anand Karaj' },
        { path: '/services/religious-services#antim-ardas', label: 'Antim Ardas' }
      ]
    },
    { path: '/services/weekly-programs', label: 'Programs' },
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

  navigateWithFragment(path: string) {
    const [route, fragment] = path.split('#');
    this.router.navigate([route], { fragment }).then(() => {
      this.isMenuOpen = false;
      
      if (this.router.url.startsWith(route) && fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    });
  }
}