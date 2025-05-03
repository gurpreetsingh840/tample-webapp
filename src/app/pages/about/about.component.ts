import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    SocialLinksComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { }
