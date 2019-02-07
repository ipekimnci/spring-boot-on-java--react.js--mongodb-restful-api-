import React, {Component} from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'
import PlaceItem from './PlaceItem'

class Place extends Component{
    constructor(){
        super();
        this.state={
            places:[
                {
                    location:'istanbul'
                }
            ]
        }
    }
    componentWillMount(){
        this.getPlace();
    }
    getPlace(){
        axios.get('http://localhost:8080/AllPlace').then(response=>{
            this.setState({places: response.data})
        })
    }
    render(){
        var placeitem = this.state.places.map((place,i)=>{
            return(
                <li>
                    <PlaceItem item={place}></PlaceItem>
                </li>
            )
        })
        return(
            <div>
                <ul className="list-group">
                   {placeitem}
                </ul>
                <Link to="/create">Serch and Add Place</Link>
            </div>
            )
        }
    }
export default Place;