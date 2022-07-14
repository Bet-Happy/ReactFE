import React from "react";
import '../App.css';

function Home() {
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <h2></h2>
     
      <div className='container align-self-center w-75 homeCards' >
        <div className="card">
          <div className='card-header homeCards'>Skills</div>
          <div className='card-body row'>
            <div id='HomePageSkills'>
              <div>
              Mining (0/99)
              </div>
              <div>
              Smithing (0/99)
              </div>
              
              
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;