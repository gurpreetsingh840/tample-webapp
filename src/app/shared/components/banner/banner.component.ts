import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner, BannerService } from '../../services/banner.service';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
    banners: Banner[] = [];

    constructor(private bannerService: BannerService) { }

    ngOnInit() {
        this.bannerService.getBanners().subscribe(banners => {
            this.banners = banners;
        });
    }

    dismissBanner(bannerId: string) {
        this.bannerService.dismissBanner(bannerId);
        this.banners = this.banners.filter(b => b.id !== bannerId);
    }
}
