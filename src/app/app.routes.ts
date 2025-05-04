// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';

export const TEMPLE_NAME = 'Gurudwara Singh Sabha Richmond VA';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: `${TEMPLE_NAME}` }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: `About Us - ${TEMPLE_NAME}` }
  },
  {
    path: 'gallery',
    component: ImageGalleryComponent,
    data: { title: `Photo Gallery - ${TEMPLE_NAME}` }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: `Events & Programs - ${TEMPLE_NAME}` }
  },
  {
    path: 'services',
    children: [
      {
        path: 'weekly-programs',
        loadComponent: () => import('./pages/weekly-programs/weekly-programs.component')
          .then(m => m.WeeklyProgramsComponent),
        data: { title: `Weekly Programs - ${TEMPLE_NAME}` }
      },
      {
        path: 'religious-services',
        loadComponent: () => import('./pages/religious-services/religious-services.component')
          .then(m => m.ReligiousServicesComponent),
        data: { title: `Religious Services - ${TEMPLE_NAME}` }
      },
      {
        path: 'akhand-path',
        loadComponent: () => import('./pages/akhand-path/akhand-path.component')
          .then(m => m.AkhandPathComponent),
        data: { title: `Akhand Path - ${TEMPLE_NAME}` }
      },
      {
        path: 'sehaj-path',
        loadComponent: () => import('./pages/sehaj-path/sehaj-path.component')
          .then(m => m.SehajPathComponent),
        data: { title: `Sehaj Path - ${TEMPLE_NAME}` }
      },
      {
        path: 'sukhmani-sahib',
        loadComponent: () => import('./pages/sukhmani-sahib/sukhmani-sahib.component')
          .then(m => m.SukhmaniSahibComponent),
        data: { title: `Sukhmani Sahib - ${TEMPLE_NAME}` }
      },
      {
        path: 'anand-karaj',
        loadComponent: () => import('./pages/anand-karaj/anand-karaj.component')
          .then(m => m.AnandKarajComponent),
        data: { title: `Anand Karaj - ${TEMPLE_NAME}` }
      },
      {
        path: 'antim-ardas-ceremony',
        loadComponent: () => import('./pages/antim-ardas-ceremony/antim-ardas-ceremony.component')
          .then(m => m.AntimArdasCeremonyComponent),
        data: { title: `Antim Ardas Ceremony - ${TEMPLE_NAME}` }
      },
    ]
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent),
    data: { title: `Contact Us - ${TEMPLE_NAME}` }
  },
];