import React from "react";
import '../App.css';
import XpBox from '../components/XpBox';
import ProgressCircle from '../components/ProgressCircle';
import SkillsCard from '../components/SkillsCard';

function Mine(props) {

  return (
    <>
      <div className='row'>
        <XpBox updateXp={props.xp} />
      </div>
      <div className="row my-5">
        <ProgressCircle activeSkill="Mining" value={props.value} />
      </div>
      <div className='row d-flex justify-content-around'>
        <SkillsCard skillName="Mining" startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Smithing" />
        <SkillsCard skillName="Woodcutting" />
      </div>
    </>
  );
}

export default Mine