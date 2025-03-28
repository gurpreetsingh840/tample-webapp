import { Injectable, isDevMode } from '@angular/core';
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { AnalyticsEvent } from '../enums/analytics-events.enum';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private analytics: Analytics | null = null;

    // Initialize Firebase Analytics
    private getAnalyticsInstance(): Analytics | null {
        if (this.analytics) {
            return this.analytics;
        }

        try {
            this.analytics = getAnalytics();
            return this.analytics;
        } catch (error) {
            if (isDevMode()) {
                console.warn('Firebase Analytics not initialized:', error);
            }
            return null;
        }
    }

    /**
    * Track page views in Firebase Analytics.
    * @param pageName - The name of the page being viewed.
    */
    trackPageView(pageName: string, title?: string) {
        const analytics = this.getAnalyticsInstance();
        if (!analytics) {
            if (isDevMode()) {
                console.warn('Analytics not initialized. Cannot log page view.');
            }
            return;
        }
        logEvent(analytics, AnalyticsEvent.PAGE_VIEW, { page_name: pageName, page_title: title });

        if (isDevMode()) {
            console.log(`Page view tracked: ${pageName} - ${title}`);
        }
    }

    /**
     * Track custom events in Firebase Analytics.
     * @param eventName - The name of the event.
     * @param params - Optional parameters related to the event.
     */
    trackEvent(eventName: string, params?: Record<string, any>) {
        const analytics = this.getAnalyticsInstance();
        if (!analytics) {
            if (isDevMode()) {
                console.warn(`Analytics not initialized. Cannot log event: ${eventName}`);
            }
            return;
        }
        logEvent(analytics, eventName, params);

        if (isDevMode()) {
            console.log(`Event tracked: ${eventName}`, params);
        }
    }

    /**
     * Track errors in Firebase Analytics.
     * @param error - The error message to track.
     * @param context - Optional context to include with the error.
     */
    trackError(error: string, context?: Record<string, any>) {
        const analytics = this.getAnalyticsInstance();
        if (!analytics) {
            if (isDevMode()) {
                console.warn('Analytics not initialized. Cannot log error.');
            }
            return;
        }
        logEvent(analytics, AnalyticsEvent.EXCEPTION, {
            description: error,
            fatal: true,
            ...context
        });
    }
}