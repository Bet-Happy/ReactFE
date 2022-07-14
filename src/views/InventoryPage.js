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
            if (item.amount > 0) {
                return (
                    <div className='container-fluid text-white' key={item.id}>
                        {item.resource}
                        <br></br>
                        {item.amount}
                    </div>
                )
            }

            if (item.resource === "Copper") {
                return (
                    <div className='container-fluid text-white' key={item.id}>
                        <img src={require("./icons/copperOre.png")} className="img-thumbnail round" alt="copper img" />
                        {item.resource}
                        <br></br>
                        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                        {item.amount}
                    </div >
                )
            }
            if (item.resource === "Tin") {
                return (
                    <div className='container-fluid text-white' key={item.id}>
                        <img src={require("./icons/tinOre.png")} className="img-thumbnail round" alt="tin img" />
                        {item.resource}
                        <br></br>
                        {item.amount}
                    </div>
                )
            }

        });


        return (
            <div className='container-fluid p-0 m-0'>
                <div className='inventory-container'>

                    {list}

                </div>
            </div>
        );
    }
}

export default Inventory;