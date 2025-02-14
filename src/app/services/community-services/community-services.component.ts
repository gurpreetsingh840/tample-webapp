import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-community-services',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="Community Services"
      description="Strengthen our community through service, education, and cultural programs. Everyone is welcome to participate and contribute."
      icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />

    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 dark:text-white">Community Services</h1>
        
        <div class="space-y-8">
          <!-- Khalsa School -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Khalsa School</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Our Khalsa School provides education in Sikh religion, Punjabi language, 
              and cultural values to children and young adults. Classes are held weekly 
              with dedicated volunteer teachers.
            </p>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Punjabi Language Classes</li>
              <li>Kirtan Classes</li>
              <li>Sikh History Lessons</li>
              <li>Gurmat Education</li>
            </ul>
          </div>

          <!-- Langar Seva -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Langar Seva</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Langar is the community kitchen where meals are served to all visitors 
              regardless of faith, religion, or background. This is an essential part 
              of Sikh practice emphasizing equality and community service.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Volunteers are always welcome to participate in this seva (selfless service).
            </p>
          </div>

          <!-- Community Events -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Community Events</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We regularly organize community events to bring people together and 
              celebrate our rich cultural heritage:
            </p>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Vaisakhi Celebrations</li>
              <li>Gurpurab Celebrations</li>
              <li>Youth Programs</li>
              <li>Cultural Festivals</li>
              <li>Community Service Projects</li>
            </ul>
          </div>

          <!-- Support Services -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-4 dark:text-white">Support Services</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Our Gurdwara provides various support services to the community:
            </p>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Newcomer Support</li>
              <li>Community Counseling</li>
              <li>Youth Mentorship</li>
              <li>Senior Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CommunityServicesComponent {} 