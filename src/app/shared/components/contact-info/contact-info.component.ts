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
        <p [class]="textClass">
          {{ contactInfo.address.city }}, {{ contactInfo.address.state }}
          {{ contactInfo.address.zip }}
        </p>
      </ng-container>

      <ng-container *ngIf="showPhone">
        <p [class]="textClass">
          <i class="fa-solid fa-phone w-6 text-center mr-2 text-orange-600 dark:text-orange-400"></i>
          <a [href]="'tel:' + contactInfo.phone" class="link-base">
            {{ contactInfo.phone }}
          </a>
        </p>
      </ng-container>

      <ng-container *ngIf="showEmail">
        <p [class]="textClass">
          <i class="fa-solid fa-envelope w-6 text-center mr-2 text-orange-600 dark:text-orange-400"></i>
          <a [href]="'mailto:' + contactInfo.email" class="link-base">
            {{ contactInfo.email }}
          </a>
        </p>
      </ng-container>

      <ng-container *ngIf="showDirections">
        <a [href]="contactInfo.getMapsUrl()"
           target="_blank"
           rel="noopener noreferrer"
           [class]="directionsClass">
          <i class="fa-solid fa-location-dot w-6 text-center mr-2"></i>
          Get Directions
        </a>
      </ng-container>
    </div>
  `,
})
export class ContactInfoComponent {
  @Input() showAddress = true;
  @Input() showPhone = true;
  @Input() showEmail = true;
  @Input() showDirections = true;
  @Input() containerClass = '';
  @Input() textClass = 'mb-2 text-gray-600 dark:text-gray-300';
  @Input() directionsClass =
    'inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-200';

  constructor(public contactInfo: ContactInfoService) {}
}
