import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AppSettingsService } from './app-settings.service';

@Injectable({
    providedIn: 'root'
})
export class FirebaseInitializationService {
    constructor(private appSettingsService: AppSettingsService) { }

    initializeFirebase() {
        const firebaseConfig = this.appSettingsService.getFirebaseConfig();

        if (firebaseConfig) {
            try {
                initializeApp(firebaseConfig);
                console.log('Firebase initialized successfully');
            } catch (error) {
                console.error('Firebase initialization error:', error);
            }
        }
    }
}