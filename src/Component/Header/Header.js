import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'


const Header = () => {
    const [loggedInUser] = useContext(userContext)
    return (
        <div className="header">
            <div className="name">
                <h3>BD Rider</h3>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/ride/:rideId">Destination</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h4>{loggedInUser.Name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Header;