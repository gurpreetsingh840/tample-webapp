// src/app/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent],
  template: `
    <footer class="bg-gray-900 dark:bg-gray-950 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <app-contact-info 
              [textClass]="'mb-2 text-white dark:text-gray-300'"
              [directionsClass]="'inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-200'"
            />
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a routerLink="/services" class="hover:text-orange-500 transition">Services</a></li>
              <li><a routerLink="/activities" class="hover:text-orange-500 transition">Activities</a></li>
              <li><a routerLink="/about" class="hover:text-orange-500 transition">About Us</a></li>
              <li><a routerLink="/contact" class="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li><a routerLink="/services/weekly-programs" class="hover:text-orange-500 transition">Weekly Programs</a></li>
              <li><a routerLink="/services/religious-services" class="hover:text-orange-500 transition">Religious Services</a></li>
              <li><a routerLink="/services/community-services" class="hover:text-orange-500 transition">Community Services</a></li>
            </ul>
          </div>

          <!-- Donate -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Support Us</h3>
            <p class="mb-4">Your contributions help us serve the community better.</p>
            <a href="#" 
               class="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg 
                      hover:bg-orange-700 transition">
              Donate Now
            </a>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 Gurdwara Singh Sabha Richmond VA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}