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
      description="Building stronger bonds through service and education. Join us in making a difference in our community."
      icon="M12 4.354a4 4 0 110 5.292V4.354zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />

    <div class="page-container">
      <div class="max-w-5xl mx-auto">
        <!-- Khalsa School -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-graduation-cap text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Khalsa School</h2>
          </div>
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our Khalsa School provides Punjabi language classes, Kirtan lessons, and religious education for children. 
              Classes are held every Sunday, helping our youth connect with their heritage and faith.
            </p>
            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-book text-orange-600 dark:text-orange-400 mr-2"></i>
                  Programs Offered
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Punjabi Language Classes
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Kirtan Training
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Religious Education
                  </li>
                </ul>
              </div>
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-clock text-orange-600 dark:text-orange-400 mr-2"></i>
                  Schedule
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Every Sunday
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Morning Sessions
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Age-appropriate Groups
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Langar Seva -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-utensils text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Langar Seva</h2>
          </div>
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Langar is a cornerstone of Sikh tradition, offering free meals to all visitors regardless of faith, 
              background, or status. Join us in this sacred service of preparing and serving meals to the community.
            </p>
            <div class="mt-6 grid sm:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-hands-helping text-orange-600 dark:text-orange-400 mr-2"></i>
                  How to Participate
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Volunteer for Kitchen Service
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Donate Groceries
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Sponsor a Langar
                  </li>
                </ul>
              </div>
              <div class="bg-orange-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <i class="fa-solid fa-calendar text-orange-600 dark:text-orange-400 mr-2"></i>
                  Timings
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Daily Service Available
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Special Events
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Festivals & Celebrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CommunityServicesComponent {} 