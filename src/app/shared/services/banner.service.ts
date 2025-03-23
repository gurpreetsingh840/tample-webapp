import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom, map } from 'rxjs';
import { AppSettingsService } from './app-settings.service';

export interface Banner {
    id: string;
    type: 'info' | 'primary' | 'warning';
    message: string;
    link?: string;
    startDate: string;
    endDate: string;
}

interface BannerData {
    banners: Banner[];
}

@Injectable({
    providedIn: 'root'
})
export class BannerService {
    private banners = new BehaviorSubject<Banner[]>([]);

    constructor(
        private http: HttpClient,
        private settings: AppSettingsService
    ) {
        this.loadBanners();
    }

    private async loadBanners(): Promise<void> {
        const now = Math.floor(Date.now() / 1000);
        const cached = localStorage.getItem('bannerData');
        const cacheTime = parseInt(localStorage.getItem('bannerCacheTime') ?? '0');
        if (cached && (now - cacheTime < this.settings.banners.cacheTimeoutSeconds)) {
            this.banners.next(JSON.parse(cached));
            return;
        }

        try {
            const data = await firstValueFrom(
                this.http.get<BannerData>(this.settings.banners.dataUrl)
            );
            if (data?.banners) {
                localStorage.setItem('bannerData', JSON.stringify(data.banners));
                localStorage.setItem('bannerCacheTime', now.toString());
                this.banners.next(data.banners);
            }
        } catch (error) {
            console.error('Failed to load banners:', error);
        }
    }

    getBanners(): Observable<Banner[]> {
        return this.banners.asObservable().pipe(
            map(banners => {
                const now = new Date();
                const dismissedBanners = this.getDismissedBanners();

                return banners.filter(banner => {
                    const startDate = new Date(banner.startDate);
                    const endDate = new Date(banner.endDate);
                    const isDismissed = dismissedBanners[banner.id];
                    const dismissExpired = !isDismissed ||
                        ((Math.floor(now.getTime() / 1000) - isDismissed) > this.settings.banners.dismissTimeoutSeconds);

                    return now >= startDate && now <= endDate && dismissExpired;
                });
            })
        );
    }

    dismissBanner(bannerId: string) {
        const dismissed = this.getDismissedBanners();
        dismissed[bannerId] = Math.floor(Date.now() / 1000); // Store in seconds
        localStorage.setItem('dismissedBanners', JSON.stringify(dismissed));
    }

    private getDismissedBanners(): { [key: string]: number } {
        const dismissed = localStorage.getItem('dismissedBanners');
        return dismissed ? JSON.parse(dismissed) : {};
    }
}
