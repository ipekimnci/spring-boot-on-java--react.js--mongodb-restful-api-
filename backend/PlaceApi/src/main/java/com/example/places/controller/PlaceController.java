package com.example.places.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.places.model.Place;
import com.example.places.service.PlaceService;

@RestController
public class PlaceController {
	
	private PlaceService ps;
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(method=RequestMethod.POST , value="/create")
	public void insert(@RequestBody Place p) {
		ps.insert(p);		
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping("/get/{location}")
	public Place get(@PathVariable String location) {
		return ps.getByLocation(location);		
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping("/AllPlace")
	public List<Place> getAll(){
		return ps.getAll();
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(method=RequestMethod.PUT , value="/update")
	public String update(@PathVariable String location) {
		Place p=ps.update(location);
		return p.toString();
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(method=RequestMethod.DELETE , value="/delete/{location}")
	public String delete(String location) {
		ps.delete(location);
		return "Deleted" +location;
	}
}
