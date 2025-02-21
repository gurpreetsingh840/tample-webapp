import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
    selector: 'app-anand-karaj',
    standalone: true,
    imports: [CommonModule, PageHeroComponent],
    templateUrl: './anand-karaj.component.html'
})
export class AnandKarajComponent { }
