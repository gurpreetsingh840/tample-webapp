import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
    selector: 'app-antim-ardas-ceremony',
    standalone: true,
    imports: [CommonModule, PageHeroComponent],
    templateUrl: './antim-ardas-ceremony.component.html'
})
export class AntimArdasCeremonyComponent { }
