import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DonationSettings } from '../../models/app-settings.model';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
    selector: 'app-donation-button',
    templateUrl: './donation-button.component.html',
    imports: [CommonModule, RouterLink],
    standalone: true
})
export class DonationButtonComponent {
    @Input() buttonClass = '';
    @Input() context: 'default' | 'contact' | 'footer' = 'default';
    @Input() showTitle = true;
    donationSettings$: Observable<DonationSettings | null>;

    supportMessages = {
        default: {
            title: 'Support Our Mission',
            description: 'Your generous contributions help us maintain our religious services and expand our community programs.'
        },
        contact: {
            title: 'Make a Contribution',
            description: 'Support our religious services, educational programs, and community initiatives by making a direct contribution. Our Sewadar-in-Chief or Head Granthi will be happy to assist you.'
        },
        footer: {
            title: 'Support Us',
            description: 'Help us serve the community better through your generous contributions.'
        }
    };

    contactMessage = "For donations and contributions, please contact our management team. We'll be happy to assist you with the process.";

    constructor(private appSettings: AppSettingsService) {
        this.donationSettings$ = this.appSettings.getDonationSettings();
    }

    getSupportMessage() {
        return this.supportMessages[this.context] || this.supportMessages.default;
    }

    openDonationLink(paypalLink: string): void {
        window.open(paypalLink, '_blank');
    }
}
