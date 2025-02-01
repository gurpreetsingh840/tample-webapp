// src/app/config/navigation.ts
export interface NavItem {
    path: string;
    label: string;
    isButton?: boolean;
  }
  
  export const navigationItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
    { path: '/donate', label: 'Donate', isButton: true }
  ];