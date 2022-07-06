import React from 'react';
import LinkButton from './LinkButton';


function SkillsCard(props) {
  return (
    <>
      <div className="card w-25">
        <div className="card-header">{props.skillName}</div>
        <div className="card-body">
          <div className="card-title">Image</div>
          <div className="card-text">
            Description.
          </div>
          <LinkButton startProgress={props.startProgress} endProgress={props.endProgress} active={props.active} />
        </div>
      </div >
    </>
  );

}

export default SkillsCard;