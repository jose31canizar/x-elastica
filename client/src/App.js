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
import createHistory from 'history/createBrowserHistory'

class App extends Component {
  render() {
    const history = createHistory()
    history.listen((location, action) => {
    })
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={About}/>
              <Route exact path='/home' component={About}/>
              <Route path='/about' component={About}/>
              <Route exact path='/disciplines' component={Disciplines}/>
              <Route path='/disciplines/:subroute' component={(props) => <Disciplines {...props}/>}/>
              <Route exact path='/software' component={Software}/>
              <Route path='/software/:subroute' component={(props) => <Software {...props}/>}/>
              <Route exact path='/projects' component={Projects}/>
              <Route path='/projects/:subroute' component={(props) => <Projects {...props}/>}/>
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
