import React from 'react';

function renderText() {
  return(
    <div id='about' className='d-flex flex-column align-items-center my-4'>
      <h2 id='about-tag'>About Me</h2>
      <p className='w-50 text-center'>I am a fourth year student at the University of Washington.
        I am studying toward a major Applied and Computational Math Sciences with a concentration in Scientific Computing and Numerical Algorithms.
        I am also completing a minor from the Information School at the UW and am particularly interested in data science.</p>
      <p>My resume is available <a href='/Resume_Summer2020.pdf'>here</a>.</p> 
    </div>
  )
}

const About = () => {
  return(renderText());
}

export default About;