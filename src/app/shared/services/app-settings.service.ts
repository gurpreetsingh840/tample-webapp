import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AppSettings, DonationSettings } from '../models/app-settings.model';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    private settings$ = new BehaviorSubject<AppSettings | null>(null);

    constructor(private http: HttpClient) {
        this.loadSettings();
    }

    private loadSettings(): void {
        this.http.get<AppSettings>('assets/config/app-settings.json')
            .subscribe(settings => this.settings$.next(settings));
    }

    getDonationSettings(): Observable<DonationSettings | null> {
        return this.settings$.asObservable()
            .pipe(map(settings => settings?.donation ?? null));
    }
}
