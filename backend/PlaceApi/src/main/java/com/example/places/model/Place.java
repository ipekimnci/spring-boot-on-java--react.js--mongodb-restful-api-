package com.example.places.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Document(collection="places")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Place {
	
	@Id
	private String id;
	private double longitude;
	private double latitude;
	private double radius;
	private String location;
	
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getRadius() {
		return radius;
	}
	public void setRadius(double radius) {
		this.radius = radius;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Place [id=" + id + ", longitude=" + longitude + ", latitude=" + latitude + ", radius=" + radius
				+ ", location=" + location + "]";
	}
	
	
}
