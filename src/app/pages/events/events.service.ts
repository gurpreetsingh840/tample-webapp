import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private eventsUrl = 'assets/data/events.json'; // Adjust this path as needed

    constructor(private http: HttpClient) { }

    getEvents(): Observable<Events> {
        return this.http.get<Events>(this.eventsUrl);
    }
}