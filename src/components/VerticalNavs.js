import React from 'react';
import { Link } from 'react-router-dom'
import Mine from './MiningPage';

function VerticalNavs() {
    return (
        <ul className="nav nav-pills flex-column m-auto p-auto text-truncate">
            <li className="nav-item">
                <a className="nav-link active text-truncate" aria-current="page" href="#">Dashboard</a>
            </li>
            <Link to='/Mine'>
              <li className ="nav-item"> Mining</li>
            </Link>
            <li className="nav-item">
                <a className="nav-link text-white text-truncate" href="#">Smithing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white text-truncate" href="#">Woodcutting</a>
            </li>
        </ul>
    );
}

export default VerticalNavs;