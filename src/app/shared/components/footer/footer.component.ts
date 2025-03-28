// src/app/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsEvent } from '../../enums/analytics-events.enum';
import { AnalyticsService } from '../../services/analytics.service ';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { DonationButtonComponent } from '../donation-button/donation-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent, DonationButtonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private analyticsService: AnalyticsService) { }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  trackGitHubClick(): void {
    this.analyticsService.trackEvent(AnalyticsEvent.GITHUB_LINK_CLICK, {
      location: 'footer'
    });
  }
}