import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { EventData, Events, EventsService } from './events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    imports: [CommonModule, PageHeroComponent],
    standalone: true
})
export class EventsComponent implements OnInit, AfterViewInit {
    @ViewChild('timelineContainer') timelineContainer!: ElementRef;

    events: EventData[] = [];
    groupedEvents: { [key: string]: EventData[] } = {};
    displayedMonths: string[] = [];
    currentMonth: string = '';

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.getEvents().subscribe((events: Events) => {
            this.events = events.events;
            this.groupEventsByMonth(this.events);
            this.currentMonth = this.getCurrentMonth();
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.scrollToMonth(this.currentMonth);
        }, 100);
    }

    groupEventsByMonth(events: EventData[]): void {
        const currentYear = new Date().getFullYear();
        this.groupedEvents = events.reduce((groups, event) => {
            const date = new Date(event.date);
            const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!groups[month]) {
                groups[month] = [];
            }
            groups[month].push(event);
            return groups;
        }, {} as { [key: string]: EventData[] });

        this.displayedMonths = Object.keys(this.groupedEvents).sort((a, b) =>
            new Date(a).getTime() - new Date(b).getTime()
        );

        for (const month in this.groupedEvents) {
            this.groupedEvents[month].sort((a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
            );
        }
    }

    getCurrentMonth(): string {
        const now = new Date();
        return now.toLocaleString('default', { month: 'long', year: 'numeric' });
    }

    getFormattedDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
    }

    getShortMonth(month: string): string {
        return month.split(' ')[0].substring(0, 3);
    }

    scrollToMonth(month: string) {
        const element = document.getElementById(`month-${month.replace(' ', '-')}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // New methods for enhancements
    toggleDescription(event: EventData) {
        event.showFullDescription = !event.showFullDescription;
    }

    truncateDescription(description: string, maxLength: number = 150): string {
        return description.length > maxLength
            ? description.substring(0, maxLength) + '...'
            : description;
    }
}

