import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ProgressCircle extends React.Component {



    render() {
        return (
            <div className='container align-self-center w-50'>
                <div className="card">
                    <div className="card-header">Currently Mining: {this.props.activeOre}</div>
                    <div className="card-body row align-items-center justify-content-center text-center">
                        <div style={{ width: 200, height: 200, paddingTop: 12}}>
                            <CircularProgressbar value={this.props.value} maxValue={100} styles ={{
                              path: {
                                transition: 'none'
                              },
                            }}
                              />
                        </div>
                       
                        
                    </div>
                </div >
            </div>
        );
    }

}

export default ProgressCircle;