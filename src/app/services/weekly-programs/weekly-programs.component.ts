import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
  selector: 'app-weekly-programs',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="Weekly Programs"
      description="Join us in prayer, learning, and community service. Experience spiritual growth through our diverse programs and activities."
      icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />

    <div class="page-container">
      <div class="max-w-5xl mx-auto">
        <!-- Sunday Program -->
        <div class="card mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Sunday Deewan</h2>
          </div>
          <div class="p-6">
            <div class="grid-2-cols">
              <div>
                <h3 class="heading-3 mb-4">Morning Program</h3>
                <div class="space-y-3">
                  <p class="list-item">
                    <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>9:00 AM</strong> - Asa Di Vaar</span>
                  </p>
                  <p class="list-item">
                    <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>10:00 AM</strong> - Kirtan</span>
                  </p>
                  <p class="list-item">
                    <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>11:30 AM</strong> - Katha & Viakhiya</span>
                  </p>
                  <p class="list-item">
                    <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
                <div class="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p class="text-sm text-body">
                    Want to contribute to Langar seva? Contact our seva coordinator or 
                    sign up at the Langar hall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Weekly Classes -->
        <div class="card mb-8">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Weekly Classes</h2>
          </div>
          <div class="p-6">
            <div class="grid-2-cols">
              <div class="space-y-4">
                <div class="border-l-4 border-primary-500 pl-4">
                  <h3 class="heading-3">Kirtan Classes</h3>
                  <p class="text-body">Wednesdays 6:00 PM - 7:30 PM</p>
                  <p class="text-sm text-body">
                    Learn traditional Kirtan, Raag basics, and Gurbani pronunciation
                  </p>
                </div>
                <div class="border-l-4 border-primary-500 pl-4">
                  <h3 class="heading-3">Punjabi Language</h3>
                  <p class="text-body">Saturdays 11:00 AM - 12:30 PM</p>
                  <p class="text-sm text-body">
                    Classes for beginners to advanced learners
                  </p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="border-l-4 border-primary-500 pl-4">
                  <h3 class="heading-3">Sikh History</h3>
                  <p class="text-body">Saturdays 1:00 PM - 2:30 PM</p>
                  <p class="text-sm text-body">
                    Learn about Sikh history, philosophy, and traditions
                  </p>
                </div>
                <div class="border-l-4 border-primary-500 pl-4">
                  <h3 class="heading-3">Gatka Classes</h3>
                  <p class="text-body">Sundays 3:00 PM - 4:30 PM</p>
                  <p class="text-sm text-body">
                    Traditional Sikh martial arts training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Special Programs -->
        <div class="card">
          <div class="card-gradient p-6 flex items-center">
            <div class="bg-white/10 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 class="heading-2 text-white">Special Programs</h2>
          </div>
          <div class="p-6">
            <div class="grid-3-cols">
              <div class="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 class="heading-3 mb-2">Gurpurab Celebrations</h3>
                <p class="text-body">
                  Special programs and Kirtan Darbars on Guru Sahiban's Gurpurabs
                </p>
              </div>
              <div class="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 class="heading-3 mb-2">Youth Camps</h3>
                <p class="text-body">
                  Summer and winter camps focusing on Sikhi, leadership, and community service
                </p>
              </div>
              <div class="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
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
          <a href="#" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Full Calendar
          </a>
        </div>
      </div>
    </div>
  `
})
export class WeeklyProgramsComponent {} 