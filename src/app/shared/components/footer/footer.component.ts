// src/app/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsEvent } from '../../enums/analytics-events.enum';
import { AnalyticsService } from '../../services/analytics.service ';
import { AppSettingsService } from '../../services/app-settings.service';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { DonationButtonComponent } from '../donation-button/donation-button.component';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ContactInfoComponent,
    DonationButtonComponent,
    SocialLinksComponent
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  constructor(private analyticsService: AnalyticsService, private appSettingsService: AppSettingsService) { }

  async ngOnInit(): Promise<void> {
    await this.appSettingsService.loadSettings();
  }

  trackGitHubClick(): void {
    this.analyticsService.trackEvent(AnalyticsEvent.GITHUB_LINK_CLICK, {
      location: 'footer'
    });
  }
}