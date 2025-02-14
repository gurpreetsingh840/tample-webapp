import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-br from-primary-800 to-primary-900 dark:from-gray-800 dark:to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-16 text-center">
          <!-- Title Section -->
          <div class="space-y-6">
            <!-- Icon -->
            <div class="flex justify-center">
              <div class="rounded-full bg-primary-700/50 dark:bg-gray-700/50 p-3">
                <div class="rounded-full bg-primary-600/50 dark:bg-gray-600/50 p-2">
                  <svg class="h-8 w-8 text-primary-200 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="icon"/>
                  </svg>
                </div>
              </div>
            </div>

            <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {{ title }}
            </h1>
            
            <!-- Description -->
            <p class="text-lg text-primary-100/90 dark:text-gray-300 max-w-2xl mx-auto">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PageHeroComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
} 