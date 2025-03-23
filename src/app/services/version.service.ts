import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface VersionInfo {
    version: string;
    buildTime: string;
}

@Injectable({
    providedIn: 'root',
})
export class VersionService {
    constructor(private http: HttpClient) { }

    async checkVersion(): Promise<boolean> {
        try {
            const versionInfo = await firstValueFrom(this.http.get<VersionInfo>('/version.json'));
            const storedVersion = localStorage.getItem('app_version');

            if (!storedVersion || storedVersion !== versionInfo.version) {
                await this.handleVersionChange(versionInfo.version);
                return true;
            }
            return false;
        } catch (err) {
            console.error('Failed to check version:', err);
            return false;
        }
    }

    private async handleVersionChange(newVersion: string): Promise<void> {
        // Clear all caches
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(key => caches.delete(key)));
        }

        // Store new version without clearing other localStorage items
        localStorage.setItem('app_version', newVersion);
    }
}
