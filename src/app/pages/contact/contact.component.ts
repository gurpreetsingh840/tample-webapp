import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="Contact Us"
      description="Get in touch with us for any inquiries, services, or to become part of our community."
    />

    <!-- Rest of the content -->
  `
})
export class ContactComponent {} 