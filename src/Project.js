import React from 'react';
import LazyLoad from 'react-lazy-load';

const Project = ({ name, description, img, link1, link2 }) => {
  return (
    <div className='container d-flex flex-column align-items-center text-center py-3 my-3 _proj_container'>
      <div className='_img_container my-4'>
        <img src={img} className='_proj_img'/>
      </div>
      <h3 className='lead'>{name}</h3>
      <p className='text-center text-muted'>{description}</p>
      <div className='container d-flex justify-content-around'>
        {link1.length !== 0 && <a href={link1} target='_blank' rel='noopener noreferrer' className='btn btn-sm btn-outline-primary'>Check it Out!</a>}
        <a href={link2} target='_blank' rel='noopener noreferrer' className='btn btn-sm btn-outline-primary'>Github</a>
      </div>
    </div>
  )
}

export default Project;