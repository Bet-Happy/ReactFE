import React from 'react';
import { Link } from 'react-router-dom'

function VerticalNavs() {
    return (
        <ul className="nav nav-pills flex-column m-auto p-auto text-truncate">
            <Link to='/'>
                <li className="nav-item">Dashboard</li>
            </Link>
            <Link to='/Inventory'>
                <li className="nav-item">Inventory</li>
            </Link>
            <Link to='/Mine'>
                <li className="nav-item"> Mining</li>
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