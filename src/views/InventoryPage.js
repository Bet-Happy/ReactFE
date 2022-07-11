import React from 'react';
import './css/HomePage.css'

class Inventory extends React.Component {
    componentDidMount() {
        //axio from here
    }

    render() {
        return (
            <div className='container-fluid p-0 m-0'>
                <div className='inventory-container'>
                    {/* item loop goes here */}
                </div>
            </div>
        );
    }
}

export default Inventory;