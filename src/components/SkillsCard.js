import React from 'react';
import LinkButton from './LinkButton';


class SkillsCard extends React.Component {


  componentDidMount() {
    console.log(this.props.start)
  }

  componentDidUpdate() {
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
            <LinkButton startProgress={this.props.startProgress} endProgress={this.props.endProgress} start={this.props.start} />
          </div>
        </div >
      </>
    );
  }


}

export default SkillsCard;