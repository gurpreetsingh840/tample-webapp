import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Events {
    events: EventData[];
}

export interface EventData {
    id: number;
    name: string;
    date: string;
    showDateVariationWarning?: boolean;
    description: string;
    time?: string;
    showFullDescription?: boolean;
}

export interface GroupedEvents {
    [key: string]: EventData[];
}

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private eventsUrl = 'assets/data/events.json'; // Adjust this path as needed

    constructor(private http: HttpClient) { }

    getEvents(): Observable<Events> {
        return this.http.get<Events>(this.eventsUrl);
    }

    getGroupedEvents(): Observable<{ groupedEvents: GroupedEvents, displayedMonths: string[] }> {
        return this.getEvents().pipe(
            map(events => this.groupEventsByMonth(events.events))
        );
    }

    private parseDate(dateString: string): Date {
        if (dateString.includes('-')) {
            const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
            return new Date(year, month - 1, day);
        }
        return new Date(`${dateString}T00:00:00Z`);
    }

    private groupEventsByMonth(events: EventData[]) {
        const groupedEvents = events.reduce((groups, event) => {
            const date = this.parseDate(event.date);
            const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!groups[month]) {
                groups[month] = [];
            }
            groups[month].push(event);
            return groups;
        }, {} as GroupedEvents);

        // Sort months chronologically
        const displayedMonths = Object.keys(groupedEvents).sort((a, b) => {
            const dateA = this.parseDate(groupedEvents[a][0].date);
            const dateB = this.parseDate(groupedEvents[b][0].date);
            return dateA.getTime() - dateB.getTime();
        });

        // Sort events within each month
        for (const month in groupedEvents) {
            groupedEvents[month].sort((a, b) => {
                const dateA = this.parseDate(a.date);
                const dateB = this.parseDate(b.date);
                return dateA.getTime() - dateB.getTime();
            });
        }

        return { groupedEvents, displayedMonths };
    }

    getCurrentMonth(): string {
        const now = new Date();
        return now.toLocaleString('default', { month: 'long', year: 'numeric' });
    }

    formatDate(dateString: string): string {
        const date = this.parseDate(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
    }

    getShortMonth(month: string): string {
        return month.split(' ')[0].substring(0, 3);
    }
}