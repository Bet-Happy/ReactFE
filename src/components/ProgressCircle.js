import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ProgressCircle extends React.Component {

    render() {
        return (
            <div className='container align-self-center w-50'>
                <div className="card">
                    <div className="card-header">Activity: {this.props.skillName}</div>
                    <div className="card-body row align-items-center justify-content-center text-center">
                        <div className="d-flex" style={{ width: 200, height: 200 }}>
                            <CircularProgressbar value={this.props.value} maxValue={100} styles={buildStyles({ pathTransition: this.props.value === 0 ? "none" : "stroke-dashoffset 10%s ease 0s" })} />
                        </div>
                        <div className="card-title">progress circle</div>
                        <div className="card-text">
                            Description.
                        </div>
                    </div>
                </div >
            </div>
        );
    }

}

export default ProgressCircle;