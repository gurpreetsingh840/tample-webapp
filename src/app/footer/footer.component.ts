// src/app/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white p-4 mt-auto">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}