import React, { Component } from 'react';
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './Section.styl'

class Section extends Component {
  render() {
    return (
      <div className="Section" id={this.props.id}>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Section;
