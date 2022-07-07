import React from 'react';
import './App.css';
import ProgressCircle from './components/ProgressCircle';
import SkillsCard from './components/SkillsCard';
import VerticalNavs from './components/VerticalNavs';
import XpBox from './components/XpBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, active: false, sec: 5, Xp: 0 };
  }
  updateXp = () => {
    this.setState({ Xp: this.state.Xp + 1 }) // 1 is a placeholder for the xp from resource table DB
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
      <div className="App" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 flex-column py-3 px-auto text-white bg-dark">
              <VerticalNavs />
            </div>
      
            <div className="col-lg-10 col-md-9 col-sm-8">
              <div className='row'>
                <XpBox updateXp={this.state.Xp}/>
              </div>
              <div className="row my-5">
                <ProgressCircle activeSkill="Mining" value={this.state.value} />
              </div>
              <div className='row d-flex justify-content-around'>
                <SkillsCard skillName="Mining" startProgress={this.startProgress} endProgress={this.endProgress} />
                <SkillsCard skillName="Smithing" />
                <SkillsCard skillName="Woodcutting" />
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
