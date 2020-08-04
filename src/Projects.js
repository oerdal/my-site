import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='d-flex flex-column align-items-center justify-content-center' style={{height: window.innerHeight}}>
      <h2 id='projects-tag'>Projects</h2>
      <div className='d-flex align-items-center justify-content-center flex-wrap'>
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
        <Project
          name='Music Genre Classifier'
          description=
            'Machine Learning model built for classifying music by genre.
            Uses Linear Discriminant Analysis and time-frequency analysis.
            Written in MATLAB.'
          link1='/ldareport.pdf'
          link2='https://github.com/oerdal/amath482/tree/master/lda'
        />
        <Project
          name='MNIST Image Classifier'
          description=
            'Convolutional Neural Network built for classifying images.
            Uses modified implementation of LeNet-5 and Fashion MNIST data set.
            Written in python with tensorflow and Keras.'
          link1='/nnreport.pdf'
          link2='https://github.com/oerdal/amath482/tree/master/neuralnetwork'
        />
        <Project
          name='NBA Team Optimization'
          description=
            'Linear Programming group project for maximizing team effectiveness
            under a given salary constraint.
            Web scraper code and LP input code written in python.'
          link1=''
          link2='https://github.com/sa-tony/MATH-381-Project-1'
        />
        <Project
          name="Rubik's Cube Solver"
          description=
            "A.I. agent for solving a simplified 3x3 Rubik's cube
            using feature-based Q-learning. Written in python."
          link1=''
          link2='https://github.com/AashrayAnand/rubiks-cube-reinforcement-learning'
        />
      </div>
    </div>
  );
}

export default Projects;