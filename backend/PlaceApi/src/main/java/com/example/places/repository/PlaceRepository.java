package com.example.places.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.places.model.Place;

@Repository
@RepositoryRestResource(collectionResourceRel = "places", path = "places")
public interface PlaceRepository extends MongoRepository<Place, String> {
	public Place findByLocation(String location);
}
