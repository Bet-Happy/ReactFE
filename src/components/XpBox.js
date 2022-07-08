import React from 'react';

class XpBox extends React.Component {
  constructor(props) {
  super(props);
  }
  

  render(){
    return (
      <>
        <div className="container w-100">
          <div className="card">
            <div className="card-header">Experience</div>
            <div className="card-body">
              <div className="Xp">
                XP: {this.props.updateXp}
              </div>
              <div className="Level">
                Level: {Math.round(this.props.updateXp / 10)}
              </div>
            </div>
          </div>
        </div>
          
      </>
    );
  }
}

export default XpBox;