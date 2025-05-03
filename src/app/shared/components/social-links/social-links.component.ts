import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnalyticsEvent } from '../../enums/analytics-events.enum';
import { AnalyticsService } from '../../services/analytics.service ';
import { AppSettingsService } from '../../services/app-settings.service';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent {
  @Input() location: string = 'footer';
  socialLinks: { [key: string]: string } = {};

  constructor(
    private analyticsService: AnalyticsService,
    private appSettingsService: AppSettingsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.appSettingsService.loadSettings();
    this.socialLinks = this.appSettingsService.settings.socialLinks ?? {};
  }

  trackSocialLinkClick(platform: string): void {
    this.analyticsService.trackEvent(AnalyticsEvent.SOCIAL_LINK_CLICK, {
      location: this.location,
      platform: platform
    });
  }

  getSocialIconColor(platform: string): string {
    const colors = {
      facebook: 'text-blue-600 hover:text-blue-500',
      twitter: 'text-blue-400 hover:text-blue-300',
      instagram: 'text-pink-500 hover:text-pink-400',
      linkedin: 'text-blue-700 hover:text-blue-600',
      youtube: 'text-red-600 hover:text-red-500',
      github: 'text-gray-600 hover:text-gray-500'
    } as const;

    return platform && colors[platform as keyof typeof colors] || 'text-gray-400 hover:text-white';
  }
}
