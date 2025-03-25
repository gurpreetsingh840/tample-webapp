// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Gurdwara Singh Sabha Richmond - Sikh Temple VA'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us - Gurdwara Singh Sabha Richmond'
  },
  {
    path: 'gallery',
    component: ImageGalleryComponent,
    title: 'Photo Gallery - Gurdwara Singh Sabha Richmond'
  },
  {
    path: 'events',
    component: EventsComponent,
    title: 'Events & Programs - Gurdwara Singh Sabha Richmond'
  },
  {
    path: 'services',
    children: [
      {
        path: 'weekly-programs',
        loadComponent: () => import('./pages/weekly-programs/weekly-programs.component')
          .then(m => m.WeeklyProgramsComponent),
        title: 'Weekly Programs - Gurdwara Singh Sabha Richmond'
      },
      {
        path: 'religious-services',
        loadComponent: () => import('./pages/religious-services/religious-services.component')
          .then(m => m.ReligiousServicesComponent),
        title: 'Religious Services - Gurdwara Singh Sabha Richmond'
      },
      {
        path: 'akhand-path',
        loadComponent: () => import('./pages/akhand-path/akhand-path.component')
          .then(m => m.AkhandPathComponent),
        title: 'Akhand Path - Gurdwara Singh Sabha Richmond'
      },
      {
        path: 'sehaj-path',
        loadComponent: () => import('./pages/sehaj-path/sehaj-path.component')
          .then(m => m.SehajPathComponent),
        title: 'Sehaj Path - Gurdwara Singh Sabha Richmond'
      },
      {
        path: 'sukhmani-sahib',
        loadComponent: () => import('./pages/sukhmani-sahib/sukhmani-sahib.component')
          .then(m => m.SukhmaniSahibComponent),
        title: 'Sukhmani Sahib - Gurdwara Singh Sabha Richmond'
      },
      {
        path: 'anand-karaj',
        loadComponent: () => import('./pages/anand-karaj/anand-karaj.component')
          .then(m => m.AnandKarajComponent),
        title: 'Anand Karaj - Gurdwara Singh Sabha Richmond'
      },
      {
        path: 'antim-ardas-ceremony',
        loadComponent: () => import('./pages/antim-ardas-ceremony/antim-ardas-ceremony.component')
          .then(m => m.AntimArdasCeremonyComponent),
        title: 'Antim Ardas Ceremony - Gurdwara Singh Sabha Richmond'
      },
    ]
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent),
    title: 'Contact Us - Gurdwara Singh Sabha Richmond'
  },
];