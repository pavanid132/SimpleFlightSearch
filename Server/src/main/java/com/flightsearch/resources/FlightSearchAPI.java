package com.flightsearch.resources;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightsearch.models.FlightSearchParams;
import com.flightsearch.models.Flights;
import com.flightsearch.services.IFlightSearch;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FlightSearchAPI {

	@Autowired
	private IFlightSearch flightSearch;

	@PostMapping(path ="/flight-search")
	public List<Flights> GetFlights(@RequestBody FlightSearchParams params) {
		try {
			return flightSearch.GetFlights(params);
		} catch (IOException | URISyntaxException e) {
			e.printStackTrace();
			return new ArrayList<Flights>();
		}

	}
	@GetMapping(path ="/flights")
	public List<Flights> Flights() {
		try {
			return flightSearch.GetAllFlights();
		} catch (IOException | URISyntaxException e) {
			e.printStackTrace();
			return new ArrayList<Flights>();
		}
	}

}
