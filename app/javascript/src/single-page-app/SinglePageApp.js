import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import AboutContainer from './containers/AboutContainer'
import HomeContainer from './containers/HomeContainer'
import UsersContainer from './containers/UsersContainer'

const SinglePageApp = () => (
  <Router basename='/single_page_app'>
    <h2>Hello! I&apos;m a single page app that coexists with other apps.</h2>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/users'>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/about' component={AboutContainer} />
        <Route path='/users' component={UsersContainer} />
        <Route path='/' component={HomeContainer} />
      </Switch>
    </div>
  </Router>
)

export default SinglePageApp
