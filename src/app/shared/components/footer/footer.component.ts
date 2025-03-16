// src/app/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { DonationButtonComponent } from '../donation-button/donation-button.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent, DonationButtonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}