import React from 'react';
import './App.css';

import VerticalNavs from './components/VerticalNavs';
import { Routes, Route } from 'react-router-dom';
import Mine from './views/MiningPage';
import Home from './views/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, value: 0, active: false, sec: 5, miningXp: 5, activeOre: "none" };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/characters', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    this.setState({ id: data['data'][0]['id']});
    this.setState({ miningXp: data['data'][0]['mining'] });
    
  }

  async postXp() {
    const id = this.state['id']
    const miningContent = this.state['miningXp']
    let data = {
      id: id,
      mining: miningContent
    };
    await fetch('http://localhost:8080/characters/updateExperience', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }


  updateXp = async (e) => {
    
   this.setState({ miningXp: this.state.miningXp + 1 }) // 1 is a placeholder for the xp from resource table DB

  }

  updateActiveMiningSkill = (oreName) => {
    this.setState({ activeOre: oreName });
  }

  startProgress = async (e) => {
    console.log("startProgress");
    this.counterInterval = setInterval(
      async (e) => {
        if (this.state.value >= 100) {
          //right here is were we update the Xp state in XpBox.js
          this.setState({ value: 0 });
          console.log(this.state.miningXp)
          await this.updateXp();
          // below should only run after updateXp has run, but currently it runs immediatly
          console.log(this.state.miningXp);
          await this.postXp();
          
          
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
    console.log(this.state.miningXp)
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row homepage">
            <div className="col-lg-2 col-md-3 col-sm-4 flex-column py-3 px-auto text-white bg-dark">
              <VerticalNavs />
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mine" element={<Mine activeOre={this.state.activeOre} value={this.state.value} xp={this.state.miningXp} startProgress={this.startProgress} endProgress={this.endProgress} activeMiningSkill={this.updateActiveMiningSkill} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;