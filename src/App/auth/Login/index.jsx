import React from 'react'
import { Redirect } from 'react-router-dom'
import { AUTH_LOGIN_URL } from '../../../constants'
import { isAuthenticated } from '../index'
import { log } from '../../../lib/ke-utils'

const logColor = 'green'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputFields: {
        username: '',
        password: '',
      },
    }
    log('Login.constructor', '', logColor)
  }

  // Mount
  componentWillMount() {
    log('Login.WillMount', '', logColor)
  }
  componentDidMount() {
    log('Login.DidMount', '', logColor)
  }
  // Updating
  componentWillReceiveProps() {
    log('Login.WillReceiveProps', '', logColor)
  }
  shouldComponentUpdate() {
    log('Login.shouldUpdate', '', logColor)
    return true
  }
  componentWillUpdate() {
    log('Login.WillUpdate', '', logColor)}

  componentDidUpdate() {
    log('Login.DidUpdate', '', logColor)
  }
  // Error
  componentDidCatch() {
    log('Login.DidCatch', '', logColor)
  }

  handleLogin = (userData) => {
    fetch(
      AUTH_LOGIN_URL,
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      return null
    })
    .then((json) => {
      if (json.user) {
        localStorage.setItem('jwt', json.token)
        localStorage.setItem('username', json.user)
      } else {
        console.error('Login failed')
      }
    })
    .catch((err) => {
      console.error('error logging in', err)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      inputFields: {
        username: '',
        password: '',
      },
    })
    this.handleLogin(this.state.inputFields)
  }

  updateInputValue = (field, e) => {
    let newFields = this.state.inputFields
    newFields[field] = e.target.value
    this.setState({
      inputFields: newFields,
    })
  }

  formStyle = {
    padding: '20px 0'
  }
  buttonStyle = {
    marginTop: '15px',
  }

  render() {
    log('Login.render', '', logColor)
    if (isAuthenticated()) {
      return <Redirect to='/protected' />
    }
    return (
      <div>
        <h1>Login Page</h1>
        <form className="form" style={this.formStyle} onSubmit={this.handleSubmit}>
          <div className="auth-form-item">
            <label htmlFor="email">Username:</label><br/>
            <input
              name="username"
              onChange={e => this.updateInputValue('username', e)}
              type="text"
              value={this.state.inputFields.username}
            />
          </div>
          <div className="auth-form-item">
            <label htmlFor="password">Password:</label><br/>
            <input
              name="password"
              onChange={e => this.updateInputValue('password', e)}
              type="text"
              value={this.state.inputFields.password}
            />
          </div>
          <button className="btn btn-success" style={this.buttonStyle}>Login</button>
          <br/><br/>
        </form>
      </div>
    )
  }
}

export default Login
