import React from 'react';
import LinkedIn from './img/LI-In-Bug.png';
import Github from './img/GitHub-Mark-120px-plus.png';

const Contact = () => {
  return(
    <div id='contact' className='d-flex flex-column align-items-center justify-content-center' style={{height: window.innerHeight}}>
      <h2 id='contact-tag'>Contact</h2>
      <div id='contact-bar' className='d-flex justify-content-around text-center w-50'>
        <a href='http://linkedin.com/in/oerdal'><img src={LinkedIn} alt='LinkedIn' /></a>
        <a href='http://github.com/oerdal'><img src={Github} alt='Github' /></a>
      </div>
    </div>
  )
}

export default Contact;