import React from "react";
import '../App.css';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Character Name Placeholder</h2>
     
      <div className='container align-self-center w-75' >
        <div className="card">
          <div className='card-header'>Skills</div>
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