import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[65vh] bg-cover bg-center" style="background-image: url('/assets/images/gurdwara-hero.jpg');">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <!-- Khanda Symbol -->
        <div class="mb-6">
          <img src="assets/khanda.svg" 
               alt="Khanda Symbol" 
               class="h-32 w-32"
               aria-hidden="true">
        </div>

        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Gurdwara Singh Sabha Richmond VA
        </h1>
        <p class="text-xl text-white/90 max-w-3xl mb-8">
          Welcome to our spiritual home. Experience the divine teachings of Guru Granth Sahib Ji 
          and join our vibrant community in prayer, service, and celebration.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a routerLink="/services/weekly-programs" 
             class="btn-primary">
            Weekly Programs
          </a>
          <a routerLink="/about" 
             class="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
            Learn More
          </a>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="heading-2 mb-6">Welcome to Our Spiritual Home</h2>
          <p class="text-body mb-8">
            Welcome, and thank you for visiting Gurdwara Singh Sabha Richmond, VA online. 
            We hope that our website highlights the wide variety of worship, fellowship and 
            service opportunities available. Please feel free to read more about our Gurdwara 
            on this site, or come in for a visit.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section id="services" class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="heading-2 text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Weekly Programs -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex flex-col h-full">
              <div class="flex items-center mb-4">
                <div class="p-3 bg-orange-100 dark:bg-gray-600 rounded-full mr-4">
                  <i class="fa-solid fa-calendar-days text-orange-600 dark:text-orange-400 text-xl"></i>
                </div>
                <h3 class="heading-3">Weekly Programs</h3>
              </div>
              <p class="text-body mb-6 flex-grow">
                Join us for our weekly Sunday Deewan services from 9:00 AM to 2:00 PM. 
                Experience spiritual enlightenment through Kirtan, Katha, and Langar Seva. 
                Additional special programs are regularly announced on our notice board.
              </p>
              <div class="mt-4">
                <a routerLink="/services/weekly-programs" class="link-primary inline-flex items-center">
                  Learn More
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Religious Services -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex flex-col h-full">
              <div class="flex items-center mb-4">
                <div class="p-3 bg-orange-100 dark:bg-gray-600 rounded-full mr-4">
                  <i class="fa-solid fa-book-open text-orange-600 dark:text-orange-400 text-xl"></i>
                </div>
                <h3 class="heading-3">Religious Services</h3>
              </div>
              <p class="text-body mb-6 flex-grow">
                We offer various religious services including Akhand Path, Sehaj Path, 
                and Sukhmani Sahib Path. Our Gurdwara provides a peaceful environment 
                for prayer and meditation. Special arrangements can be made for 
                ceremonies and religious events.
              </p>
              <div class="mt-4">
                <a routerLink="/services/religious-services" class="link-primary inline-flex items-center">
                  Learn More
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Community Services -->
          <div class="card p-8 hover:shadow-lg transition">
            <div class="flex flex-col h-full">
              <div class="flex items-center mb-4">
                <div class="p-3 bg-orange-100 dark:bg-gray-600 rounded-full mr-4">
                  <i class="fa-solid fa-hands-helping text-orange-600 dark:text-orange-400 text-xl"></i>
                </div>
                <h3 class="heading-3">Community Services</h3>
              </div>
              <p class="text-body mb-6 flex-grow">
                From Khalsa School for children to community events and Langar seva, 
                we provide various services to strengthen our community bonds. Join us 
                for educational programs, cultural celebrations, and community gatherings.
              </p>
              <div class="mt-4">
                <a routerLink="/services/community-services" class="link-primary inline-flex items-center">
                  Learn More
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 bg-primary-600 dark:bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
          <p class="text-lg mb-8">
            The objective of Gurdwara Singh Sabha is to Preach Guru Nanak Dev Ji's universal 
            message of brotherhood, learn, practice and promote religious, cultural and social 
            values based on the concept of Guru Nanak Dev Ji's and universal brotherhood as 
            taught by ten Sikh Gurus and Guru Granth Sahib.
          </p>
          <a routerLink="/about" class="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="heading-2 mb-6">Visit Us</h2>
          <app-contact-info 
            [directionsClass]="'btn-primary'"
          />
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {} 