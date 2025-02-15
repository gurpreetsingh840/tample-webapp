import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: 'weekly-programs',
    loadComponent: () => import('./weekly-programs/weekly-programs.component')
      .then(m => m.WeeklyProgramsComponent)
  },
  {
    path: 'religious-services',
    loadComponent: () => import('./religious-services/religious-services.component')
      .then(m => m.ReligiousServicesComponent)
  }
]; 