import React, { Component } from 'react';
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './Section.styl'

class Section extends Component {
  render() {
    return (
      <div className="Section" id={this.props.name}>
          <div className='markdown' dangerouslySetInnerHTML={{__html: require(`../../content/${this.props.data}.md`)}} />
      </div>
    );
  }
}

export default Section;
