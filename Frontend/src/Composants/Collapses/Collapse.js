import React, { useState } from 'react';
import '../Collapses/Collapses.css';
import Vector from '../images/Vector.png';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapseContainer'>
      <div className='Collapse_title' onClick={toggleCollapse}>
        <p>{title}</p>
        <img className={isOpen ? 'Collapse_iconDown' : 'Collapse_iconUp'} src={Vector} alt='arrow' role="button"/>
      </div>
      {isOpen && <div className='Collapse_text'>{content}</div>}
    </div>
  );
};

export default Collapse;
