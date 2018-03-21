import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth'
import Nav from './Nav'
import Home from './Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Logout from './auth/Logout'
import Protected from './Protected'
import Unprotected from './Unprotected'
import { log } from '../lib/ke-utils'

const logColor = 'red'

const appStyle = {
  padding: '0 10px 30px 10px'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showToast: false,
      toastMessage: '',
    }
    log('App.constructor', '', logColor)
  }
  showToast = (message) => {
    this.setState({
      toastMessage: message,
    })
  }
  // Mount
  componentWillMount() {
    log('App.WillMount', '', logColor)
  }
  componentDidMount() {
    log('App.DidMount', '', logColor)
  }
  // Updating
  componentWillReceiveProps() {
    log('App.WillReceiveProps', '', logColor)
  }
  shouldComponentUpdate() {
    log('App.shouldUpdate', '', logColor)
  }
  componentWillUpdate() {
    log('App.WillUpdate', '', logColor)}

  componentDidUpdate() {
    log('App.DidUpdate', '', logColor)
  }
  // Error
  componentDidCatch() {
    log('App.DidCatch', '', logColor)
  }

  routerChange = () => {
    log('ROUTER-CHANGE', '', 'red')
  }
  render () {
    log('App.render', '', logColor)
    return (
      <div style={appStyle}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <PublicRoute exact path='/' component={Home} />
              <PublicRoute path='/login' component={Login} />
              <PublicRoute path='/logout' component={Logout} />
              <PublicRoute path='/register' component={Register} />
              <PublicRoute path='/unprotected' component={Unprotected} />
              <PrivateRoute path='/Protected' component={Protected} />
            </Switch>
          </div>
        </Router>

      </div>
    )
  }
}
export default App

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
        render={props => <Component {...props} />
      }
    />
  )
}