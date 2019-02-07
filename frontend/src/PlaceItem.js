import React from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'

class PlaceItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item : props.item
        }
    }
    onDelete(){
        let lction=this.state.item.location
        axios.delete(`http://localhost:8080/delete/${lction}`).then(res=>{
            window.location.reload()
        })
    }
    render(){
        return(
            <li className="list-group-item">
                <Link to={`/get/${this.state.item.location}`}>
                    {this.state.item.location}
                </Link>
                <span className="badge left">
                   <button className="btn btn-primary fa fa-minus" onClick={this.onDelete.bind(this)}></button>
                </span>
            </li>
        )
    }
    
}
export default PlaceItem