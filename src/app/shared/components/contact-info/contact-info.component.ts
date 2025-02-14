import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoService } from '../../services/contact-info.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClass">
      <ng-container *ngIf="showAddress">
        <p [class]="textClass">{{ contactInfo.address.street }}</p>
        <p [class]="textClass">{{ contactInfo.address.city }}, {{ contactInfo.address.state }} {{ contactInfo.address.zip }}</p>
      </ng-container>
      
      <ng-container *ngIf="showPhone">
        <p [class]="textClass">
          Phone: <a href="tel:{{ contactInfo.phone }}" 
                   class="text-orange-600 hover:text-orange-700 dark:text-orange-500 
                          dark:hover:text-orange-400 transition-colors duration-200">
            {{ contactInfo.phone }}
          </a>
        </p>
      </ng-container>

      <ng-container *ngIf="showEmail">
        <p [class]="textClass">
          Email: <a href="mailto:{{ contactInfo.email }}"
                   class="text-orange-600 hover:text-orange-700 dark:text-orange-500 
                          dark:hover:text-orange-400 transition-colors duration-200">
            {{ contactInfo.email.replace('@', '&#64;') }}
          </a>
        </p>
      </ng-container>

      <ng-container *ngIf="showDirections">
        <a [href]="contactInfo.getMapsUrl()" 
           target="_blank"
           rel="noopener noreferrer"
           [class]="directionsClass">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Get Directions
        </a>
      </ng-container>
    </div>
  `
})
export class ContactInfoComponent {
  @Input() showAddress = true;
  @Input() showPhone = true;
  @Input() showEmail = true;
  @Input() showDirections = true;
  @Input() containerClass = '';
  @Input() textClass = 'mb-2 text-gray-600 dark:text-gray-300';
  @Input() directionsClass = 'inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-200';

  constructor(public contactInfo: ContactInfoService) {}
} 