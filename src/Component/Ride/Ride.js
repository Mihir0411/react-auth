import React from 'react';
import { useParams } from 'react-router';
import './ride.css'

const Ride = () => {
    const {rideId} = useParams()
    return (
        <div className="ride">
            <form>
                <label className="label">Pic From</label><br></br>
                <input className="input" type="text"/><br></br>
                <label className="label">Pic To</label><br></br>
                <input className="input" type="text"/><br></br>
                <label className="label">Pic Date</label><br></br>
                <input className="input" type="date"/><br></br>
                <button className="baton">Search</button>
            </form>
        </div>
    );
};

export default Ride;