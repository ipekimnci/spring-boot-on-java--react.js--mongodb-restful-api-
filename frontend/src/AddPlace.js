import React, { Component } from 'react';
import axios from 'axios'
import GoogleMapReact from 'google-map-react'

class AddPlace extends Component {

    addplace(place){
        axios.request({
            method:'POST',
            url:'http://localhost:8080/create',
            data:place
        }).then(res=>{
            this.props.history.push('/')
        })

    }
    onAddSubmit(e){
        e.preventDefault()
        const place ={
            longitude: this.refs.longitude.value,
            latitude: this.refs.latitude.value,
            radius: this.refs.radius.value,
        }
        this.addplace(place)
    }
    static center={
        longitude: document.getElementById('longitude'),
        latitude: document.getElementById('latitude'),
    }
    static zoom={
        radius: document.getElementById('radius'),
    }

  render() {
    return (
      <div>
          <form onSubmit={this.onAddSubmit.bind(this)}>
            <div className="form-group">
                <label for="exampleInputEmail1">Longitude: </label>
                <input type="text" className="form-control" name="longitude" id="longitude"  aria-describedby="Longitude" placeholder="Enter Longitude" ref="longitude"></input> 
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Latitude: </label>
                <input type="text" className="form-control" name="latitude" id="latitude"  aria-describedby="Latitude" placeholder="Enter Latitude" ref="latitude"></input>
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Radius: </label>
                <input type="text" className="form-control" name="radius" id="radius"  aria-describedby="Radius" placeholder="Enter Radius" ref="radius"></input>
            </div>
            <input type="submit" value="Find and Save"/>
            <br/>
            <br/>
            <div style={{ height: '300px', width: '800px' , border:'solid 1px black ' , margin: 'auto'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC20O-hDw6Tud7dZCZenlizlYT_KoOmwRs&callback=initMap" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>

           </div>
          </form>

      </div>
    );
  }
}

export default AddPlace;