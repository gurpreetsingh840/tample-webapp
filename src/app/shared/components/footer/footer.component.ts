// src/app/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactInfoComponent } from '../contact-info/contact-info.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactInfoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}