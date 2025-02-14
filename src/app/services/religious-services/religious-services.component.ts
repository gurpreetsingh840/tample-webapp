import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-religious-services',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="Religious Services"
      description="Experience the divine through our various religious services and ceremonies. Connect with the teachings of Guru Granth Sahib Ji."
      icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />

    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <!-- Akhand Path -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Akhand Path</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Akhand Path is a continuous, uninterrupted reading of Sri Guru Granth Sahib Ji 
              that takes approximately 48 hours. Our Gurdwara provides this service for special 
              occasions and remembrances.
            </p>
          </div>

          <!-- Sehaj Path -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Sehaj Path</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Sehaj Path is a complete reading of Sri Guru Granth Sahib Ji done over a longer 
              period, allowing for deeper contemplation and understanding.
            </p>
          </div>

          <!-- Sukhmani Sahib -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Sukhmani Sahib</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Sukhmani Sahib Path is a prayer composed by Sri Guru Arjan Dev Ji. This service 
              is available upon request for peace of mind and spiritual tranquility.
            </p>
          </div>

          <!-- Anand Karaj -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Anand Karaj</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Our Gurdwara offers traditional Sikh wedding ceremonies in accordance with 
              Sikh traditions and values. Please contact us for arrangements and details.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ReligiousServicesComponent {} 