import { Component, OnInit } from '@angular/core';
import { FlightSearchService, FlightSearchParams, Flights } from './flight-search.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public flightNumbers: Array<string> = [];
  public origins: Array<string> = [];
  public destinations: Array<string> = [];
  public flightResults: Array<Flights>;
  public date: Date;
  public flightForm: FormGroup;
  public error;
  constructor(private flightService: FlightSearchService, private fb: FormBuilder) { }
  ngOnInit() {
    this.flightForm = this.fb.group({
      date: null,
      flightNumber: null,
      origin: null,
      destination: null
    });;
    this.flightService.getAllFlights().subscribe(flights => {
      this.flightNumbers = flights.map(x => x.flightNumber).filter((val, index, self) => self.indexOf(val) === index).sort();
      this.origins = flights.map(x => x.origin).filter((val, index, self) => self.indexOf(val) === index).sort();
      this.destinations = flights.map(x => x.destination).filter((val, index, self) => self.indexOf(val) === index).sort();
    });
  }
  Clear() {
    this.flightForm.setValue({
      date: null,
      flightNumber: null,
      origin: null,
      destination: null
    });
    this.flightResults = null;
  }
  Submit() {
    this.error = '';
    this.flightResults = null;
    const flightParams = this.flightForm.value as FlightSearchParams;
    if(flightParams.date && ((flightParams.origin && flightParams.destination) || flightParams.flightNumber)) {
     flightParams.date = new Date(flightParams.date).toISOString().substring(0,19);
     console.log(flightParams);
      this.flightService.getFlightSearch(flightParams).subscribe(res => {
        console.log(res);
        this.flightResults = res;
      });
    } else {
      this.error = 'Provide departure date and also provide either flight number or origin and destination';
    }
  }

}
