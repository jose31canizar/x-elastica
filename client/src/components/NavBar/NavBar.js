import React, { Component } from 'react'
import data from '../../data/sections.json'
import { Link, withRouter, Route } from 'react-router-dom'
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import './NavBar.styl'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "Home",
      distance: 0,
      flip: false,
      currentScrollTop: document.body.scrollTop,
      DropDown: ''
    }
    this.setSelected = this.setSelected.bind(this)
    this.flip = this.flip.bind(this)
    this.showDropDown = this.showDropDown.bind(this)
    this.hideDropDown = this.hideDropDown.bind(this)
  }
  componentWillMount() {
    document.addEventListener('scroll', this.flip)
  }
  setSelected(name) {
    this.setState({
      selected: name
    })
  }
  flip() {
    this.setState((prevState, props) => {
      const newDistance = document.body.scrollTop
      const oldDistance = prevState.currentScrollTop
      if(oldDistance > newDistance) {
        return {
          distance: oldDistance + 1,
          flip: false
        }
      } else if(oldDistance === newDistance) {
        return {
          distance: oldDistance
        }
      } else {
        return {
          distance: oldDistance - 1,
          flip: false
        }
      }

    })
    this.setState({
      currentScrollTop: document.body.scrollTop
    })
  }
  showDropDown(name) {
    this.setState({
      DropDown: name
    })
  }
  hideDropDown() {
    // this.setState({
    //   DropDown: ''
    // })
  }
  render() {
    console.log(window.location.href);
    return (
      <div className='nav-bar-wrapper'>
        <div className={'nav-bar' + (this.state.flip ? ' flip' : '')}>
          <h1></h1>
          <ul>
            {data.map((item, i) => (
              <Link className="nav-link" to={`/${item.route}`} onMouseDown={this.setSelected.bind(this, item.name)} onMouseOver={this.showDropDown.bind(this, item.name)}>
                <Link to={`/${item.route}`}>
                  <li className={"nav-item " + (item.name === this.state.selected ? "selected-page" : "")} onMouseDown={this.setSelected.bind(this, item.name)}>
                    {item.name}
                  </li>
                </Link>
                {this.state.DropDown === item.name && item.sections.length !== 0 ? (
                  <div className='dropdown' onMouseOut={this.hideDropDown}>
                    {window.location.href.includes(item.route) ? (item.sections.map((s, i) => (

                        <SmoothScroll section={s.replace(/\s+/g, '-').toLowerCase()}>
                        <li>{s}</li>
                        </SmoothScroll>

                    ))) : (item.sections.map((s, i) => (

                        <Link to={`/${item.route}/${s.replace(/\s+/g, '-').toLowerCase()}`}>
                        <li>{s}</li>
                        </Link>

                    ))) }
                  </div>
                ) : ''}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// <Link to={`/${item.route}/${s.replace(/\s+/g, '-').toLowerCase()}`}>
//</Link>

export default NavBar;
