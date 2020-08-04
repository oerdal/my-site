import React from 'react';

function renderText() {
  return(
    <div id='about' className='d-flex flex-column align-items-center justify-content-center' style={{height: window.innerHeight}}>
      <h2 id='about-tag'>About Me</h2>
      <p className='w-50 text-center'>I am a recent graduate from the University of Washington.
        I have a Bachelor of Science in Applied and Computational Math Sciences with a concentration in Scientific Computing and Numerical Algorithms.
        I additionally have a minor from the Information School at the UW and am particularly interested in data science and its applications across many fields.</p>
      <p>My resume is available <a href='/Resume_Summer2020.pdf'>here</a>.</p> 
    </div>
  )
}

const About = () => {
  return(renderText());
}

export default About;