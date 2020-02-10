import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='d-flex align-items-center'>
      <Project
        name='NBA Fantasy Trade Tool'
        description=
          'Tool for determining the +/- effects of trading selecting players.
          Contains a database of all players and their season stats.
          Written entirely in R and deployed to ShinyApps.'
        link1='https://oerdal.shinyapps.io/final/'
        link2='https://github.com/oerdal/info201-NBA'
      />
      <Project
        name='Pi Alpha Phi Website'
        description=
          'Website for my Fraternity for external presentation.
          Facilitates recruitment outreach and information provision.
          Built using React.js, Bootstrap, and deployed to Heroku.'
        link1='http://uwpaphi.com/'
        link2='https://github.com/oerdal/paphi'
      />
      <div className='_project'>
        
      </div>
      <div className='_project'>
        
      </div>
    </div>
  );
}

export default Projects;