import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

@Component({
    selector: 'app-akhand-path',
    templateUrl: './akhand-path.component.html',
    standalone: true,
    imports: [CommonModule, PageHeroComponent],
})
export class AkhandPathComponent { }
