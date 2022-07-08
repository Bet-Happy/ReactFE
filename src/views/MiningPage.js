import React from "react";
import '../App.css';
import XpBox from '../components/XpBox';
import ProgressCircle from '../components/ProgressCircle';
import SkillsCard from '../components/SkillsCard';

function Mine(props) {

  return (
    <div className="container-fluid">
      <div className='row mt-4'>
        <XpBox updateXp={props.xp} />
      </div>
      <div className="row my-5">
        <ProgressCircle activeSkill="Mining" value={props.value} />
      </div>
      <div className='row d-flex justify-content-around'>
        <SkillsCard skillName="Copper Ore" startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Tin Ore" />
        <SkillsCard skillName="Iron Ore" />
      </div>
    </div>
  );
}

export default Mine;