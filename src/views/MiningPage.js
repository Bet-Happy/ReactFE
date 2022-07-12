import React from "react";
import '../App.css';
import XpBox from '../components/XpBox';
import ProgressCircle from '../components/ProgressCircle';
import SkillsCard from '../components/SkillsCard';
import copperOre from '../views/icons/copperOre.png'

function Mine(props) {

  return (
    <div className="container-fluid mine" >
      <div className='row mt-4 mineCards'>
        <XpBox updateXp={props.xp} />
      </div>
      <div className="row my-5 mineCards">
        <ProgressCircle activeOre={props.activeOre} value={props.value} />
      </div>
      <div className='mineCards row d-flex justify-content-around'>
        <SkillsCard className='copper' skillTime="5.00s" img={copperOre} skillName="Copper Ore" activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Tin Ore" skillTime="10.00s" activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
        <SkillsCard skillName="Iron Ore" activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} />
      </div>
    </div>
  );
}

export default Mine;