import React from 'react';


class SkillsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick = () => {

    if (!this.state.active) {
      this.props.activeMiningSkill(this.props.skillName);
      this.props.startProgress();
      this.setState({ active: true });
    } else {
      this.props.activeMiningSkill("nothing");
      this.props.endProgress();
      this.setState({ active: false })
    }
  }

  render() {
    return (
      <>
        <div className="card w-25" onClick={this.handleClick}>
          <div className="card-header">{this.props.skillName}</div>
          <div className="card-body">
            <div className="card-title"><img src={this.props.skillImage} height="40vh" ></img></div>
            <div className="card-text">
              
            </div>
          </div>
        </div >
      </>
    );
  }


}

export default SkillsCard;