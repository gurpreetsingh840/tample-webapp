import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
    selector: 'app-sukhmani-sahib',
    standalone: true,
    imports: [CommonModule, PageHeroComponent],
    templateUrl: './sukhmani-sahib.component.html'
})
export class SukhmaniSahibComponent { }
