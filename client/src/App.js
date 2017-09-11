import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Disciplines from './components/Disciplines/Disciplines'
import Software from './components/Software/Software'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Layout from './layout/Layout'
import './styl/main.styl'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/disciplines' component={Disciplines}/>
              <Route path='/software' component={Software}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
//
