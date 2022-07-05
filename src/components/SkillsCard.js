import React from 'react';


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
          <button type="button" class="btn btn-primary mt-3">Start {props.skillName}</button>
        </div>
      </div >
    </>
  );

}

export default SkillsCard;