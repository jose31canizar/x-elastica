import React, { Component } from 'react'
import './Footer.styl'

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <h2>X Elastica</h2>
        <div className='info'>
          <p>Phone: +1 303 731-9921</p>
          <p>info at xelastica.com </p>
          <p>Mailing Address: 880 Gapter Road</p>
          <p>Boulder, CO 80303</p>
        </div>
      </div>
    );
  }
}

export default Footer;
