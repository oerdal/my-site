import React from 'react';

const Project = ({ name, description, link1, link2 }) => {
  return (
    <div id='project' className='d-flex flex-column align-items-center text-center w-50 my-3'>
      <h3>{name}</h3>
      <p className='w-75'>{description}</p>
      <div className='_links d-flex justify-content-around w-50'>
        <a href={link1} target='_blank' rel='noopener noreferrer'>Check it Out!</a>
        <a href={link2} target='_blank' rel='noopener noreferrer'>Github</a>
      </div>
    </div>
  );
}

export default Project;