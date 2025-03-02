import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageHeroComponent } from "../../shared/components/page-hero/page-hero.component";

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  imports: [CommonModule, PageHeroComponent]
})
export class ImageGalleryComponent implements OnInit {
  selectedImage?: GalleryImage = undefined;
  images: GalleryImage[] = [];

  openLightbox(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeLightbox(): void {
    this.selectedImage = undefined;
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    if (this.selectedImage) {
      const currentIndex = this.images.indexOf(this.selectedImage);
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.selectedImage = this.images[nextIndex];
    }
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    if (this.selectedImage) {
      const currentIndex = this.images.indexOf(this.selectedImage);
      const prevIndex = (currentIndex - 1 + this.images.length) % this.images.length;
      this.selectedImage = this.images[prevIndex];
    }
  }

  ngOnInit(): void {
    const imagesFolder = 'assets/images';
    const imageCount = 24;

    for (let i = 1; i <= imageCount; i++) {
      this.images.push({
        src: `${imagesFolder}/gallery-image-${i}.jpg`,
        title: `Golden Temple Image ${i}`,
        description: `Description for image ${i}`
      });
    }
  }
}

interface GalleryImage {
  src: string,
  title: string,
  description: string
}