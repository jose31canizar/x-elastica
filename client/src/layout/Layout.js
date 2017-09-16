import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
          <NavBar />
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;
