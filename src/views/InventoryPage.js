import React from 'react';
import './css/InventoryPage.css'

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inventory: [] };
    }

    async componentDidMount() {
        //axio from here
        const response = await fetch('http://localhost:8080/inventory', {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        });
        const { data } = await response.json();
        this.setState({ inventory: data });

    }

    render() {
        const { inventory } = this.state;
        const list = inventory.map((item) => {
            //only display when item.amount > 0
            if (item.amount == 0) { return (<></>); }
            if (item.resource === "Copper" && item.amount >= 1) {
                return (
                    <div className='container-fluid text-white box' key={item.id}>
                        <img src={require("./icons/copperOre.png")} className="img-thumbnail" alt="copper img" />
                        <br></br>
                        {item.resource}
                        <br></br>
                        {/* <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span> */}
                        {item.amount}
                    </div >
                )
            }
            if (item.resource === "Tin" && item.amount >= 1) {
                return (
                    <div className='container-fluid text-white box' key={item.id}>
                        <img src={require("./icons/tinOre.png")} className="img-thumbnail" alt="tin img" />
                        <br></br>
                        {item.resource}
                        <br></br>
                        {item.amount}
                    </div>
                )
            }

        });
        return (
            <div className='container-fluid inventory p-0 p-5'>
                <div className='container inventory-grid m-auto p-4'>
                    {list}
                </div>
            </div>
        );
    }
}

export default Inventory;