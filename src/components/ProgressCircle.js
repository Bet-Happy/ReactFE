import React from 'react';


function ProgressCircle(props) {
    return (
        <div className='container align-self-center w-50'>
            <div className="card">
                <div className="card-header">Activity: {props.skillName}</div>
                <div className="card-body">
                    <div className="card-title">progress circle</div>
                    <div className="card-text">
                        Description.
                    </div>
                </div>
            </div >
        </div>
    );

}

export default ProgressCircle;