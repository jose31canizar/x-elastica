import React, { Component } from 'react';
import Section from '../Section/Section'
import Sections from '../../data/sections.json'
import './Home.styl'

class Home extends Component {
  render() {
    console.log(Sections);
    return (
      <div className="Home">
        {Sections.map((section, i) => {
          return <Section name={section.name} data={section.data}/>
        })}
      </div>
    )
  }
}

export default Home;
