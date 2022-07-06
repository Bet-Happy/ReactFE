import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ProgressCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    componentDidMount() {
        let sec = 10;
        setInterval(
            () => {
                if (this.state.value > 100) {
                    //console.log(this.state.value)
                    this.setState({ value: 0 });
                } else {
                    this.setState({ value: this.state.value++ })
                }
            },
            100
        );

    }

    render() {
        return (
            <div className='container align-self-center w-50'>
                <div className="card">
                    <div className="card-header">Activity: {this.props.skillName}</div>
                    <div className="card-body row align-items-center justify-content-center text-center">
                        <div className ="d-flex" style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={this.state.value} maxValue={100} text={`${this.state.value}%`} styles={buildStyles({ pathTransition: this.state.value === 0 ? "none" : "stroke-dashoffset 0.01s ease 0s" })} />
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