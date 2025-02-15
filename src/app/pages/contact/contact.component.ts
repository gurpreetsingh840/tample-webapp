import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ContactInfoService } from '../../shared/services/contact-info.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  template: `
    <app-page-hero
      title="Contact Us"
      description="Get in touch with Gurdwara Singh Sabha Richmond. We're here to help and welcome your inquiries."
      icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />

    <div class="page-container">
      <div class="max-w-5xl mx-auto">
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-address-card text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Contact Information</h2>
          </div>
          
          <div class="p-6">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Address Section -->
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="p-3 bg-orange-100 dark:bg-gray-700 rounded-full">
                      <i class="fa-solid fa-location-dot text-orange-600 dark:text-orange-400 text-xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Address</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      {{ contactInfo.address.street }}<br>
                      {{ contactInfo.address.city }}, {{ contactInfo.address.state }} {{ contactInfo.address.zip }}
                    </p>
                  </div>
                </div>

                <!-- Contact links section -->
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="p-3 bg-orange-100 dark:bg-gray-700 rounded-full">
                      <i class="fa-solid fa-phone text-orange-600 dark:text-orange-400 text-xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Phone</h3>
                    <a [href]="'tel:' + contactInfo.phone" 
                       class="link-base">
                      <span class="border-b border-current">{{ contactInfo.phone }}</span>
                      <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-sm"></i>
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="p-3 bg-orange-100 dark:bg-gray-700 rounded-full">
                      <i class="fa-solid fa-envelope text-orange-600 dark:text-orange-400 text-xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Email</h3>
                    <a [href]="'mailto:' + contactInfo.email" 
                       class="link-base">
                      <span class="border-b border-current">{{ contactInfo.email }}</span>
                      <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Quick Links -->
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
                <div class="space-y-4">
                  <a routerLink="/about" 
                     class="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                    <i class="fa-solid fa-circle-arrow-right text-orange-600 dark:text-orange-400 mr-2"></i>
                    About Us
                  </a>
                  <a routerLink="/services/religious-services" 
                     class="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                    <i class="fa-solid fa-circle-arrow-right text-orange-600 dark:text-orange-400 mr-2"></i>
                    Religious Services
                  </a>
                  <a routerLink="/services/weekly-programs" 
                     class="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                    <i class="fa-solid fa-circle-arrow-right text-orange-600 dark:text-orange-400 mr-2"></i>
                    Weekly Programs
                  </a>
                </div>

                <!-- Donation Button -->
                <div class="mt-8">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">Support Our Mission</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">
                    Your contributions help us maintain and expand our services to the community.
                  </p>
                  <a href="#" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 
                            text-white font-medium rounded-lg transition-colors duration-200 w-full">
                    <i class="fa-solid fa-heart mr-2"></i>
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  constructor(public contactInfo: ContactInfoService) {}
} 