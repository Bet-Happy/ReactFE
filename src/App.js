import './App.css';
import ProgressCircle from './components/ProgressCircle';
import SkillsCard from './components/SkillsCard';
import VerticalNavs from './components/VerticalNavs';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 flex-column py-3 px-auto text-white bg-dark">
            <VerticalNavs />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8">
            <div className="row my-5">
              <ProgressCircle activeSkill="Mining" />
            </div>
            <div className='row d-flex justify-content-around'>
              <SkillsCard skillName="Mining" />
              <SkillsCard skillName="Smithing" />
              <SkillsCard skillName="Woodcutting" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
