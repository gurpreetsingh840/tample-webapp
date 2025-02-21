// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: ImageGalleryComponent },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'services',
    children: [
      {
        path: 'weekly-programs',
        loadComponent: () => import('./pages/weekly-programs/weekly-programs.component')
          .then(m => m.WeeklyProgramsComponent)
      },
      {
        path: 'religious-services',
        loadComponent: () => import('./pages/religious-services/religious-services.component')
          .then(m => m.ReligiousServicesComponent)
      },
      {
        path: 'akhand-path', loadComponent: () => import('./pages/akhand-path/akhand-path.component')
          .then(m => m.AkhandPathComponent)
      },
      {
        path: 'sehaj-path', loadComponent: () => import('./pages/sehaj-path/sehaj-path.component')
          .then(m => m.SehajPathComponent)
      },
      {
        path: 'sukhmani-sahib', loadComponent: () => import('./pages/sukhmani-sahib/sukhmani-sahib.component')
          .then(m => m.SukhmaniSahibComponent)
      },
      {
        path: 'anand-karaj', loadComponent: () => import('./pages/anand-karaj/anand-karaj.component')
          .then(m => m.AnandKarajComponent)
      },
      {
        path: 'antim-ardas-ceremony', loadComponent: () => import('./pages/antim-ardas-ceremony/antim-ardas-ceremony.component')
          .then(m => m.AntimArdasCeremonyComponent)
      },
    ]
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
      .then(m => m.ContactComponent)
  },
];