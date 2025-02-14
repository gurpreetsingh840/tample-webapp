// src/app/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 mt-auto">
      <div class="container mx-auto text-center">
        &copy; {{ currentYear }} Gurdwara Sahib. All rights reserved.
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}