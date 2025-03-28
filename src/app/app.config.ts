import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VersionService } from './services/version.service';
import { AppSettingsService } from './shared/services/app-settings.service';
import { GlobalErrorHandler } from './shared/services/global-error-handler.service';

import { getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => {

      // create local promise
      const appSettingsService = inject(AppSettingsService);
      const http = inject(HttpClient);
      const versionService = new VersionService(http);

      const promise = new Promise<boolean>((resolve, reject) => {
        appSettingsService.loadSettings().then(() => {
          loadFireBase(appSettingsService);
          versionService.checkVersion().finally(() => {
            resolve(true);
          });
        }, (error) => {
          console.error('Failed to check version:', error);
          reject(false);
        });
      });

      return promise;
    }),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};

function loadFireBase(appSettingsService: AppSettingsService) {
  try {
    const firebaseConfig = appSettingsService.getFirebaseConfig();
    if (firebaseConfig.apiKey) {
      const firebaseApp: FirebaseApp = initializeApp(firebaseConfig, appSettingsService.appName);
      getAnalytics(firebaseApp);
    }
    // Optional: Set global analytics properties or user ID
    // analytics.setUserId('user123');
  } catch (error) {
    console.error('Firebase Initialization Error:', error);
  }
}