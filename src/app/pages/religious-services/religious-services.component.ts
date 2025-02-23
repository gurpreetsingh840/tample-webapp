import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ContactInfoService } from '../../shared/services/contact-info.service';

@Component({
  selector: 'app-religious-services',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './religious-services.component.html',
  styleUrls: ['./religious-services.component.css']
})
export class ReligiousServicesComponent implements AfterViewInit {
  constructor(public contactInfo: ContactInfoService, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    // Handle fragment navigation after view init
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}