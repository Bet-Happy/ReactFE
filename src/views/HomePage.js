import React from "react";
import '../App.css';

function Home(props) {
  const { miningXp, smithingXp } = props.xp;
  return (
    <div className="Home">
      <h1>Home</h1>
      <h2>BetHappy</h2>

      <div className='container align-self-center w-75 homeCards' >
        <div className="card">
          <div className='card-header homeCards'>Skills</div>
          <div className='card-body row'>
            <div id='HomePageSkills'>
              <div>
                Mining ({Math.round(miningXp / 10)}/99)
              </div>
              <div>
                Smithing ({Math.round(smithingXp / 10)}/99)
              </div>
              


            </div>
            
          </div>
          <div>
                Extra skills coming in the next release patch!
              </div>
        </div>

      </div>

    </div>
  )
}

export default Home;