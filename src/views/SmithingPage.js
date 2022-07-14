import React from "react";
import '../App.css';
import XpBox from '../components/XpBox';
import ProgressCircle from '../components/ProgressCircle';
import SkillsCard from '../components/SkillsCard';

function Smithing(props) {

  return (
    <div className="container-fluid smithing" >
      <div className='row  smithingCards'>
        <XpBox updateXp={props.xp} />
      </div>
      <div className="row my-5 smithingCards">
        <ProgressCircle activeOre={props.activeOre} value={props.value} activeSkill="Smithing:" />
      </div>
      <div className='smithingCards row d-flex justify-content-around'>
        <SkillsCard skillName="Bronze Bar" skillTime="10.00s"  activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Bronze Pickaxe" skillTime="15.00s"  activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
      </div>
    </div>
  );
}

export default Smithing;