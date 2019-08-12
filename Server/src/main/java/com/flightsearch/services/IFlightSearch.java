package com.flightsearch.services;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.flightsearch.models.FlightSearchParams;
import com.flightsearch.models.Flights;

public interface IFlightSearch {
	public List<Flights> GetFlights(FlightSearchParams parameters) throws JsonParseException, JsonMappingException, IOException, URISyntaxException;
	public List<Flights> GetAllFlights() throws JsonParseException, JsonMappingException, IOException, URISyntaxException;
}
