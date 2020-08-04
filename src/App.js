import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import NavBar from './NavBar';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = () => {
    this.setState({ scrollPos: window.scrollY });
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  render() {
    let navIsLarge = this.state.scrollPos < 100;
    console.log('' + navIsLarge + ' ' + this.state.scrollPos);

    return (
      <div>
        <NavBar navIsLarge={this.state.scrollPos < 100}/>
        <div id='body' className='position-relative' >
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;