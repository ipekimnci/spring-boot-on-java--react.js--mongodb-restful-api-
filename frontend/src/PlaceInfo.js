import React, { Component } from 'react';
import axios from 'axios'

class PlaceInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            info:''
        }
    }
    componentWillMount(){
        this.getInfo()
    }
    getInfo(){
        let lction=this.props.match.params.location
        axios.get(`http://localhost:8080/get/${lction}`).then(response=>{
            this.setState({info:response.data})
        })
    }
    update(place){
        axios.request({
            method:'PUT',
            url:'http://localhost:8080/update',
            data:place
        }).then(res=>{
            this.props.history.push('/')
        })
    }
    onUpdateSubmit(e){
        e.preventDefault()
        const place ={
            location: this.state.info.location,
            longitude: this.refs.longitude.value,
            latitude: this.refs.latitude.value,
            radius: this.refs.radius.value,
        }
        this.update(place)
    }
    render() {
        return (
        <div>
            <h1>Info</h1>
            <h2>{this.state.info.longitude}</h2>
            <h2>{this.state.info.latitude}</h2>
            <button className="btn" data-toggle="modal" data-target="#exampleModal">update</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form onSubmit={this.onUpdateSubmit.bind(this)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Longitude: </label>
                        <input type="text" className="form-control" name="longitude" aria-describedby="Longitude" placeholder="Enter Longitude" ref="longitude"></input> 
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Latitude: </label>
                        <input type="text" className="form-control" name="latitude" aria-describedby="Latitude" placeholder="Enter Latitude" ref="latitude"></input>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Radius: </label>
                        <input type="text" className="form-control" name="radius" aria-describedby="Radius" placeholder="Enter Radius" ref="radius"></input>
                    </div>

                    <input type="submit" value="Find and Update"/>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default PlaceInfo;