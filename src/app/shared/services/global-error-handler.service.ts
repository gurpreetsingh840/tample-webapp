import { ErrorHandler, Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service ';

@Injectable({
    providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private analytics: AnalyticsService) {
        // Override console methods to track errors
        const originalError = console.error;
        console.error = (...args) => {
            this.handleError(args.length === 1 ? args[0] : args);
            originalError.apply(console, args);
        };
    }

    /**
     * Handle errors and log them to Firebase Analytics.
     * @param error - The error to handle.
     **/
    handleError(error: unknown): void {
        let errorMessage: string;
        let errorStack: string | undefined;

        if (error instanceof Error) {
            errorMessage = error.message;
            errorStack = error.stack;
        } else {
            errorMessage = String(error);
        }

        // Track error in analytics
        this.analytics.trackError(errorMessage, {
            stack: errorStack,
            timestamp: new Date().toISOString(),
            url: window.location.href
        });
    }
}
