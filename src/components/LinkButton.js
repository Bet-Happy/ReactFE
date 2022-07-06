import {useRef, useEffect} from 'react';

const LinkButton = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');
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