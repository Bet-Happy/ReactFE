import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function VerticalNavs() {
    return (
        <ul className="nav nav-pills flex-column m-auto p-auto text-truncate">
            <Link to='/' style ={{textDecoration: 'none'}}>
                <li className="nav-item-1">Home</li>
            </Link>
            <Link to='/Inventory'>
                <li className="nav-item-2">Inventory</li>
            </Link>
            <Link to='/Mine'>
                <li className="nav-item-3"> Mining</li>
            </Link>
            <Link to='/Smithing'>
              <li className="nav-item-4">Smithing</li>
            </Link>
        </ul>
    );
}

export default VerticalNavs;