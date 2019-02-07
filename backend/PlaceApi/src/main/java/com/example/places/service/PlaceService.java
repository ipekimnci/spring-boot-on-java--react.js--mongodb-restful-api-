package com.example.places.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.places.model.Place;
import com.example.places.repository.PlaceRepository;

@Service
public class PlaceService {
	
	@Autowired
	private PlaceRepository pr;
	
	public void insert (Place p) {
		pr.save(p);
	}
	
	public Place getByLocation(String location) {
		return pr.findByLocation(location);
	}
	
	public List<Place> getAll(){
		return pr.findAll();
	}
	
	public Place update(String location) {
		Place p= pr.findByLocation(location);
		return pr.save(p);
	}
	public void delete(String location) {
		Place p=pr.findByLocation(location);
		pr.delete(p);
	}
	

}
