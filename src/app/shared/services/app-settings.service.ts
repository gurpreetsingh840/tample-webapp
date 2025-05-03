import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseOptions } from 'firebase/app';
import { firstValueFrom } from 'rxjs';

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
    firebase: FirebaseOptions;
    socialLinks: {
        [key: string]: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    private loadedSettings: AppSettings | null = null;
    private loadingPromise: Promise<void> | null = null;

    constructor(private http: HttpClient) {
        this.loadSettings();
    }

    async loadSettings(): Promise<void> {
        if (!this.loadingPromise) {
            this.loadingPromise = (async () => {
                if (this.loadedSettings) return;

                try {
                    this.loadedSettings = await firstValueFrom(
                        this.http.get<AppSettings>('/assets/config/app-settings.json')
                    );
                } catch (error) {
                    console.error('Failed to load app settings:', error);
                    throw error;
                }
            })();
        }
        return this.loadingPromise;
    }

    get banners() {
        return this.loadedSettings?.banners ?? {
            cacheTimeoutSeconds: 3600, // 5 hours
            dismissTimeoutSeconds: 432000, // 5 days
            dataUrl: '/assets/data/banners.json'
        };
    }

    get(key: keyof AppSettings): any {
        return this.loadedSettings?.[key];
    }

    get settings(): AppSettings {
        return this.loadedSettings ?? {
            donation: { enabled: false, paypalLink: '' },
            banners: { cacheTimeoutSeconds: 0, dismissTimeoutSeconds: 0, dataUrl: '' },
            firebase: {},
            socialLinks: {}
        };
    }

    getDonationSettings(): AppSettings['donation'] {
        return this.loadedSettings?.donation ?? { enabled: false, paypalLink: '' };
    }

    getFirebaseConfig(): FirebaseOptions {
        return this.loadedSettings?.firebase ?? {};
    }
}
