import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
    selector: 'app-sehaj-path',
    standalone: true,
    imports: [CommonModule, PageHeroComponent],
    templateUrl: './sehaj-path.component.html'
})
export class SehajPathComponent { }
