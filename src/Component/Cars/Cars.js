import React from 'react';
import { useHistory} from 'react-router';
import './cars.css'

const Cars = (props) => {

    const {name,imgUrl,rideId} = props.car

    const history = useHistory();
    
    const ridHandler = () =>{
     history.push(`/ride/${rideId}`)
    }
    return (
        <div onClick={ridHandler} className="cars">
            <img src={imgUrl} alt=""/>
            <h2>{name}</h2>
        </div>
    );
};

export default Cars;