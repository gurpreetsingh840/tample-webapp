import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom, map } from 'rxjs';

export interface AppSettings {
    donation: {
        enabled: boolean;
        paypalLink: string;
    };
    banners: {
        cacheTimeoutSeconds: number;
        dismissTimeoutSeconds: number;
        dataUrl: string;
    };
    firebase: {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    private settings$ = new BehaviorSubject<AppSettings | null>(null);

    constructor(private http: HttpClient) {
        this.loadSettings();
    }

    async loadSettings(): Promise<void> {
        try {
            const settings = await firstValueFrom(
                this.http.get<AppSettings>('/assets/config/app-settings.json')
            );
            this.settings$.next(settings);
        } catch (error) {
            console.error('Failed to load app settings:', error);
        }
    }

    get banners() {
        return this.settings$.value?.banners ?? {
            cacheTimeoutSeconds: 3600, // 5 hours
            dismissTimeoutSeconds: 432000, // 5 days
            dataUrl: '/assets/data/banners.json'
        };
    }

    getDonationSettings(): Observable<AppSettings['donation'] | null> {
        return this.settings$.asObservable()
            .pipe(map(settings => settings?.donation ?? null));
    }

    /**
     * Get Firebase configuration object
     * @returns Firebase configuration object or null if not available
     */
    getFirebaseConfig(): AppSettings['firebase'] | null {
        return this.settings$.value?.firebase ?? null;
    }
}
