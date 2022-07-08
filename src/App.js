import React from 'react';
import './App.css';

import VerticalNavs from './components/VerticalNavs';
import { Routes, Route } from 'react-router-dom';
import Mine from './views/MiningPage';
import Home from './views/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, active: false, sec: 5, xp: 5 };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/character', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    this.setState({ xp: data['data']['mining'] })
    console.log(data['data']['mining'])
    console.log(data)
  }

  updateXp = () => {
    this.setState({ xp: this.state.xp + 1 }) // 1 is a placeholder for the xp from resource table DB
  }

  startProgress = () => {
    console.log("startProgress");
    this.counterInterval = setInterval(
      () => {
        if (this.state.value >= 100) {

          //right here is were we update the Xp state in XpBox.js
          this.updateXp();

          this.setState({ value: 0 });
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
            <div className="col-lg-10 col-md-9 col-sm-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mine" element={<Mine value={this.state.value} xp={this.state.xp} startProgress={this.startProgress} endProgress={this.endProgress} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;