import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function VerticalNavs() {
    return (
        <ul className="nav nav-pills flex-column m-auto p-auto text-truncate">
            <Link to='/dashboard'>
                <li className="nav-item">Dashboard</li>
            </Link>
            <Link to='/Inventory'>
                <li className="nav-item">Inventory</li>
            </Link>
            <Link to='/Mine'>
                <li className="nav-item"> Mining</li>
            </Link>
            <Link to='/Smithing'>
              <li className="nav-item">Smithing</li>
            </Link>
        </ul>
    );
}

export default VerticalNavs;