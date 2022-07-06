// import { useRef, useEffect } from 'react';

import React from "react";

// const LinkButton = (props) => {
//   const ref = useRef(null);


//   useEffect(() => {
//     const handleClick = () => {
//       // console.log("link button")
//       // console.log(props.active)
//       if (props.active) {
//         props.endProgress()
//       } else {
//         props.startProgress()
//       }

//     };

//     const element = ref.current;

//     element.addEventListener('click', handleClick);

//     return () => {
//       element.removeEventListener('click', handleClick);
//     };
//   }, []);

//   return (
//     <div>
//       <button type="button" className="btn btn-primary mt-3" ref={ref}>Start</button>
//     </div>
//   );
// };

class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick = () => {
    if (!this.state.active) {
      this.props.startProgress();
      this.setState({ active: true });
    } else {
      this.props.endProgress();
      this.setState({ active: false })
    }
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary mt-3" onClick={this.handleClick}>Start</button>
      </div>
    )
  }
}

export default LinkButton;