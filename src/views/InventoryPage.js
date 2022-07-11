import React from 'react';
import './css/InventoryPage.css'

class Inventory extends React.Component {
    async componentDidMount() {
        //axio from here
        const response = await fetch('http://localhost:8080/inventory', {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        });
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