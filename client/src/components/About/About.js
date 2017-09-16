import React, { Component } from 'react'
import Section from '../Section/Section'
import { withRouter } from 'react-router-dom'

class About extends Component {
  render() {
    const { match, location, history } = this.props
    // console.log(location.pathname);
    return (
      <Section name='About' data='about'/>
    )
  }
}

export default About
