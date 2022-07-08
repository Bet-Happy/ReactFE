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
      this.props.activeMiningSkill("none");
      this.props.endProgress();
      this.setState({ active: false })
    }
  }

  render() {
    return (
      <>
        <div className="card w-25">
          <div className="card-header">{this.props.skillName}</div>
          <div className="card-body">
            <div className="card-title">Image</div>
            <div className="card-text">
              Description.
            </div>
            <div>
              <button type="button" className="btn btn-primary mt-3" onClick={this.handleClick}>Start</button>
            </div>
          </div>
        </div >
      </>
    );
  }


}

export default SkillsCard;