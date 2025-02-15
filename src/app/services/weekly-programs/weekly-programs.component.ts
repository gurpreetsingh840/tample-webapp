import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-weekly-programs',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent],
  template: `
    <app-page-hero
      title="Weekly Programs"
      description="Join our vibrant community in prayer, learning, and service. Experience spiritual growth through our diverse programs and activities."
      icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />

    <div class="page-container">
      <div class="max-w-5xl mx-auto">
        <!-- Sunday Program -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-sun text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Sunday Deewan</h2>
          </div>
          <div class="p-6">
            <div class="grid-2-cols">
              <div>
                <h3 class="heading-3 mb-4">Morning Program</h3>
                <div class="space-y-3">
                  <p class="list-item">
                    <i class="fa-solid fa-clock text-orange-600 dark:text-orange-400 mr-2"></i>
                    <span><strong>9:00 AM</strong> - Asa Di Vaar</span>
                  </p>
                  <p class="list-item">
                    <i class="fa-solid fa-clock text-orange-600 dark:text-orange-400 mr-2"></i>
                    <span><strong>10:00 AM</strong> - Kirtan</span>
                  </p>
                  <p class="list-item">
                    <i class="fa-solid fa-clock text-orange-600 dark:text-orange-400 mr-2"></i>
                    <span><strong>11:30 AM</strong> - Katha & Viakhiya</span>
                  </p>
                  <p class="list-item">
                    <i class="fa-solid fa-clock text-orange-600 dark:text-orange-400 mr-2"></i>
                    <span><strong>1:00 PM</strong> - Ardaas</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 class="heading-3 mb-4">Langar Seva</h3>
                <p class="text-body mb-4">
                  Langar is served after Ardaas. All are welcome to participate in this 
                  blessed community meal and seva opportunity.
                </p>
                <div class="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p class="text-sm text-body">
                    Want to contribute to Langar seva? Contact our seva coordinator or 
                    sign up at the Langar hall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Khalsa School -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-graduation-cap text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Khalsa School</h2>
          </div>
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Our Khalsa School provides Punjabi language classes, Kirtan lessons, and religious education for children. 
              Classes are held every Sunday, helping our youth connect with their heritage and faith.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
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
                    Every Sunday Morning
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Age-appropriate Groups
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-circle-check text-orange-600 dark:text-orange-400 mr-2 text-sm"></i>
                    Qualified Instructors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Special Programs -->
        <div class="card mb-8">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <i class="fa-solid fa-star text-white/90 text-xl"></i>
            </div>
            <h2 class="heading-2 text-white">Special Programs</h2>
          </div>
          <div class="p-6">
            <div class="grid-3-cols">
              <div class="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 class="heading-3 mb-2">Gurpurab Celebrations</h3>
                <p class="text-body">
                  Special programs and Kirtan Darbars on Guru Sahiban's Gurpurabs
                </p>
              </div>
              <div class="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 class="heading-3 mb-2">Youth Camps</h3>
                <p class="text-body">
                  Summer and winter camps focusing on Sikhi, leadership, and community service
                </p>
              </div>
              <div class="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 class="heading-3 mb-2">Nagar Kirtan</h3>
                <p class="text-body">
                  Annual procession celebrating Vaisakhi and other important occasions
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-12 text-center">
          <p class="text-body mb-6">
            All programs are open to everyone. New to the Gurdwara? 
            Our sevadars will be happy to assist you.
          </p>
          <a routerLink="/contact" class="btn-primary">
            <i class="fa-solid fa-envelope mr-2"></i>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  `
})
export class WeeklyProgramsComponent {} 