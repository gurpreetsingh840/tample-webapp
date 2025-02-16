import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: { src: string, title: string, description: string }[] = [];

  ngOnInit(): void {
    const imagesFolder = 'assets/images';
    const imageCount = 6;

    for (let i = 1; i <= imageCount; i++) {
      this.images.push({
        src: `${imagesFolder}/gallery-image-${i}.jpg`,
        title: `Golden Temple Image ${i}`,
        description: `Description for image ${i}`
      });
    }
  }
}
