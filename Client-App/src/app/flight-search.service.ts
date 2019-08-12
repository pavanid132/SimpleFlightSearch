import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  constructor(private http: HttpClient) { }

  getFlightSearch(params: FlightSearchParams): Observable<Flights[]> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    return this.http.post<Flights[]>('http://localhost:8080/api/flight-search', JSON.stringify(params), {
      headers: httpHeaders
    });
  }
  getAllFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>('http://localhost:8080/api/flights');
  }
}

export interface Flights {
  flightNumber: string;
  carrier: string;
  origin: string;
  departure: string;
  destination: string;
  arrival: string;
  aircraft: string;
  distance: number;
  travelTime: string;
  status: string;
}
export interface FlightSearchParams {
  date: string;
  flightNumber: string;
  origin: string;
  destination: string;
}
