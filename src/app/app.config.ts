import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VersionService } from './services/version.service';
import { AppSettingsService } from './shared/services/app-settings.service';
import { FirebaseInitializationService } from './shared/services/firebase.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => {

      // create local promise
      const appSettingsService = inject(AppSettingsService);
      const firebaseInitService = inject(FirebaseInitializationService);
      const http = inject(HttpClient);
      const versionService = new VersionService(http);

      const promise = new Promise<boolean>((resolve, reject) => {
        appSettingsService.loadSettings().then(() => {
          firebaseInitService.initializeFirebase();
          versionService.checkVersion().finally(() => {
            resolve(true);
          });
        }, (error) => {
          console.error('Failed to check version:', error);
          reject(false);
        });
      });

      return promise;
    })
  ]
};

