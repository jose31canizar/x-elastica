import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;
