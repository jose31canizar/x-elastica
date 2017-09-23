import React, { Component } from 'react';
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './Section.styl'
import About from '../../content/about.md'
import Software from '../../content/software.md'
import Disciplines from '../../content/disciplines.md'
import Projects from '../../content/projects.md'
import Contact from '../../content/contact.md'

class Section extends Component {
  render() {
    var section;
    switch (this.props.data) {
      case 'about':
        section = <About />
        break
      case 'software':
        section = <Software/>
        break
      case 'disciplines':
        section = <Disciplines/>
        break
      case 'projects':
        section = <Projects/>
        break
      case 'contact':
        section = <Contact/>
        break
      default:
        break
    }
    return (
      <div className="Section" id={this.props.name}>
          {section}
      </div>
    );
  }
}

export default Section;
