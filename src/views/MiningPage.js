import React from "react";
import '../App.css';
import XpBox from '../components/XpBox';
import ProgressCircle from '../components/ProgressCircle';
import SkillsCard from '../components/SkillsCard';
import copperOre from '../views/icons/copperOre.png';
import tinOre from '../views/icons/tinOre.png';

function Mine(props) {

  return (
    <div className="container-fluid mine" >
      <div className='row  mineCards'>
        <XpBox updateXp={props.xp} />
      </div>
      <div className="row my-5 mineCards">
        <ProgressCircle activeOre={props.activeOre} value={props.value} activeSkill="Mining:" />
      </div>
      <div className='mineCards row d-flex justify-content-around'>
        <SkillsCard skillName="Copper Ore" skillTime="5.00s" skillImage={copperOre} activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} hardcode={true} />
        <SkillsCard skillName="Tin Ore" skillTime="10.00s" skillImage={tinOre} activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} hardcode={true}/>
      </div>
    </div>
  );
}

export default Mine;