import React, { Component } from 'react';
import Section from '../Section/Section'
import Sections from '../../data/sections.json'
import './Home.styl'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    console.log(Sections);
    return (
      <div className="Home">
        <Section name='About' data='about'/>
      </div>
    )
  }
}

export default Home;
