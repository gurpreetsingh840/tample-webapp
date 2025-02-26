import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { EventData, EventsService, GroupedEvents } from './events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    imports: [CommonModule, PageHeroComponent]
})
export class EventsComponent implements OnInit, AfterViewInit {
    @ViewChild('timelineContainer') timelineContainer!: ElementRef;

    events: EventData[] = [];
    groupedEvents: GroupedEvents = {};
    displayedMonths: string[] = [];
    currentMonth: string = '';

    constructor(protected eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.getGroupedEvents().subscribe(({ groupedEvents, displayedMonths }) => {
            this.groupedEvents = groupedEvents;
            this.displayedMonths = displayedMonths;
            this.currentMonth = this.eventsService.getCurrentMonth();
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.scrollToMonth(this.currentMonth);
        }, 100);
    }

    getFormattedDate(dateString: string): string {
        return this.eventsService.formatDate(dateString);
    }

    getShortMonth(month: string): string {
        return this.eventsService.getShortMonth(month);
    }

    getMonthFromDate(dateString: string): string {
        return this.eventsService.getMonthFromDate(dateString);
    }

    getDayFromDate(dateString: string): string {
        return this.eventsService.getDayFromDate(dateString);
    }

    scrollToMonth(month: string) {
        const element = document.getElementById(`month-${month.replace(' ', '-')}`);
        if (element) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    getGoogleMapsUrl(location: string): string {
        return this.eventsService.getGoogleMapsUrl(location);
    }

    @HostListener('document:click', ['$event'])
    clickOutside(evt: MouseEvent) {
        // Close all calendar dropdowns when clicking outside
        for (let month in this.groupedEvents) {
            this.groupedEvents[month].forEach(event => {
                if (event.showCalendarDropdown) {
                    const target = evt.target as HTMLElement;
                    if (!target?.closest('.calendar-dropdown')) {
                        event.showCalendarDropdown = false;
                    }
                }
            });
        }
    }

    toggleCalendarDropdown(event: EventData) {
        // Close other dropdowns
        for (let month in this.groupedEvents) {
            this.groupedEvents[month].forEach(e => {
                if (e !== event) e.showCalendarDropdown = false;
            });
        }
        event.showCalendarDropdown = !event.showCalendarDropdown;
    }

    getCalendarLinks(event: EventData) {
        return this.eventsService.generateCalendarLinks(event);
    }
}

