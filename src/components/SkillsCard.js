import React from 'react';
import toast, {Toaster} from 'react-hot-toast';




class SkillsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, hardcode: false};
  }

  

  handleClick = () => {
    console.log(this.props.hardcode)
   
    if(this.props.hardcode || this.state.hardcode) {
      
      if (!this.state.active) {
        this.props.activeMiningSkill(this.props.skillName);
        this.props.startProgress();
        this.setState({ active: true });
      } else {
        this.props.activeMiningSkill("nothing");
        this.props.endProgress();
        this.setState({ active: false })
      }
    } else 
      
      alert("You will only make Bronze if you have Copper and Tin Ore in your Inventory")
      this.setState({ hardcode: true})
      
    
  }

  render() {
    return (
      <>
        <div className="card w-25" onClick={this.handleClick} >
          <Toaster></Toaster>
          <div className="card-header">{this.props.skillName}</div>
          <div className="card-body">
            <div className="card-title">
              <img src={this.props.skillImage} height='40vh' className="round pb-1 px-1" />
            </div>
            
          </div>
        </div >
      </>
    );
  }


}

export default SkillsCard;