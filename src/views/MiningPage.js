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
        <ProgressCircle activeOre={props.activeOre} value={props.value} />
      </div>
      <div className='row d-flex justify-content-around'>
        <SkillsCard skillName="Copper Ore" activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Tin Ore" activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Iron Ore" activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
      </div>
    </div>
  );
}

export default Mine;