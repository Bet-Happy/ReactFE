import { useRef, useEffect } from 'react';

const LinkButton = (props) => {
  const ref = useRef(null);


  useEffect(() => {
    const handleClick = () => {
      console.log("link button")
      console.log(props.active)
      if (props.active) {
        props.endProgress()
      } else {
        props.startProgress()
      }

    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-primary mt-3" ref={ref}>Start</button>
    </div>
  );
};

export default LinkButton;