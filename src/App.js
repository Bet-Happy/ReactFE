import React from 'react';
import './App.css';

import VerticalNavs from './components/VerticalNavs';
import { Routes, Route } from 'react-router-dom';
import Mine from './views/MiningPage';
import Smithing from './views/SmithingPage';
import Home from './views/HomePage';
import Inventory from './views/InventoryPage';
import CreateCharacter from './views/CreateCharacterPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, value: 0, active: false, sec: 5, miningXp: 0, smithingXp: 0, activeOre: "nothing", activeSmithing: "nothing" };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/characters', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    this.setState({ id: data['data'][0]['id'] })
    this.setState({ miningXp: data['data'][0]['mining'] });
    this.setState({ smithingXp: data['data'][0]['smithing'] });

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state['miningXp'] !== prevState.miningXp) {
      this.postMineXp();
      this.patchResource();
    } else if(this.state['smithingXp'] !== prevState.smithingXp){

      this.postSmithingXp();
    }
  }

  async postMineXp() {
    const id = this.state['id']
    const miningContent = this.state['miningXp']


    let data = {
      id: id,
      mining: miningContent,

    };
    await fetch('http://localhost:8080/characters/updateExperience', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  async postSmithingXp() {
    const id = this.state['id']
    const smithingContent = this.state['smithingXp']

    let data = {
      id: id,
      smithing: smithingContent,
    };
    await fetch('http://localhost:8080/characters/updateExperience', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  async patchResource() {
    let resource = this.state.activeOre
    let amount = 1;
    if (resource === 'Copper Ore') {
      resource = 1
    } else if( resource = 'Tin Ore'){
      resource = 2
    }

    let data = {
      resource: resource,
      amount: amount
    };
    await fetch('http://localhost:8080/inventory', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }


  updateXp = async (e) => {
    if (this.state.activeOre != 'nothing') {
      this.setState({ miningXp: this.state.miningXp + 1 }) // 1 is a placeholder for the xp from resource table DB
    } else {
      this.setState({ smithingXp: this.state.smithingXp + 1 })
    }




  }

  updateActiveMiningSkill = (oreName) => {
    this.setState({ activeOre: oreName });
  }

  updateActiveSmithingSkill = (smithName) => {
    this.setState({ activeSmithing: smithName });
  }

  startProgress = async (e) => {
    console.log("startProgress");
    this.counterInterval = setInterval(
      async (e) => {
        if (this.state.value >= 100) {

          this.setState({ value: 0 });
          //right here is were we update the Xp state in XpBox.js
          await this.updateXp();
        } else {
          this.setState({ value: this.state.value + 1 })
        }
      },
      10 * (this.state.sec - 0.5)
    );
  }

  endProgress = () => {
    console.log("endProgress");
    clearInterval(this.counterInterval);
    this.setState({ value: 0 })
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row homepage">
            <div className="col-lg-2 col-md-3 col-sm-4 flex-column py-3 px-auto text-white bg-dark">
              <VerticalNavs />
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8 py-0 px-0" >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mine" element={<Mine activeOre={this.state.activeOre} value={this.state.value} xp={this.state.miningXp} startProgress={this.startProgress} endProgress={this.endProgress} activeMiningSkill={this.updateActiveMiningSkill} />} />
                <Route path="/Smithing" element={<Smithing activeOre={this.state.activeSmithing} value={this.state.value} xp={this.state.smithingXp} startProgress={this.startProgress} endProgress={this.endProgress} activeMiningSkill={this.updateActiveSmithingSkill} />} />
                <Route path="/Inventory" element={<Inventory />} />

              </Routes>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;