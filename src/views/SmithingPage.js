import React from "react";
import '../App.css';
import XpBox from '../components/XpBox';
import ProgressCircle from '../components/ProgressCircle';
import SkillsCard from '../components/SkillsCard';
import bronzePickaxe from '../views/icons/pickaxe.png';
import bronzeBar from '../views/icons/gold-ingot.png'

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
        <SkillsCard skillName=" Bronze Bar" skillTime="10.00s" skillImage={bronzeBar}  activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress} Inventory={props.Inventory} hardcode={props.hardcode} />
        <SkillsCard skillName=" Bronze Pickaxe" skillTime="15.00s" skillImage={bronzePickaxe}   activeMiningSkill={props.activeMiningSkill} startProgress={props.startProgress} endProgress={props.endProgress}  />
      </div>
    </div>
  );
}

export default Smithing;