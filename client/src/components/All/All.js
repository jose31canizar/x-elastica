import React, { Component } from 'react';
import Section from '../Section/Section'
import Sections from '../../data/sections.json'
import './All.styl'
import { Link } from 'react-router-dom'

class All extends Component {
  render() {
    console.log(Sections);
    return (
      <div className="All">
        {Sections.map((section, i) => {
          var ret = []
          if (section.name === 'Software') {
            ret.push(<Section name={section.name} data={section.data}/>)
            ret.push(<div className='Section links'>
              <a href={require('../../content/kumo.pdf')} target='_blank'>Kumo</a>
              <p>Powerful 3D mesh generator (based on T3D) written for dam and fracture analysis.</p>
              <a href={require('../../content/spider.pdf')} target='_blank'>Spider</a>
              <p>OpenGL based for display of incremental nonlinear analysis, eigenvectors, and transient analysis results.</p>
              <h2>Documentation</h2>
              <a href={require('../../content/merlin-user.pdf')} target='_blank'>User Manual</a>
              <a href={require('../../content/merlin-theory.pdf')} target='_blank'>Technical Manual</a>
            </div>)
            return ret
          } else {
            return <Section name={section.name} data={section.data}/>
          }
        })}
      </div>
    )
  }
}

export default All;
