import React from 'react'
import { AUTH_REGISTER_URL } from '../../../constants'
import { log } from '../../../lib/ke-utils'

const logColor = 'orange'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFields: {
        username: '',
        password: '',
        zipCode: '',
      },
    }
    log('Register.constructor', '', logColor)
  }

  // Mount
  componentWillMount() {
    log('Register.WillMount', '', logColor)
  }
  componentDidMount() {
    log('Register.DidMount', '', logColor)
  }
  // Updating
  componentWillReceiveProps() {
    log('Register.WillReceiveProps', '', logColor)
  }
  shouldComponentUpdate() {
    log('Register.shouldUpdate', '', logColor)
  }
  componentWillUpdate() {
    log('Register.WillUpdate', '', logColor)}

  componentDidUpdate() {
    log('Register.DidUpdate', '', logColor)
  }
  // Error
  componentDidCatch() {
    log('Register.DidCatch', '', logColor)
  }

  handleRegister = (userData) => {
    fetch(
      AUTH_REGISTER_URL,
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
      // if (json.user) {
      //   this.setState({ userData: json.user, token: json.token })
      // } else {
      //   console.error('login failed')
      // }
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
        zipCode: '',
      },
    })
    this.handleRegister(this.state.inputFields)
  }

  updateInputValue(field, e) {
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
    return (
      <div>
        <h1>Registration Page</h1>
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
          <div className="auth-form-item">
            <label htmlFor="zipCode">Zip Code:</label><br/>
            <input
              name="zipCode"
              onChange={e => this.updateInputValue('zipCode', e)}
              type="text"
              value={this.state.inputFields.zipCode}
            />
          </div>
          <button class='btn btn-success' style={this.buttonStyle}>Register</button>
          <br/><br/>
        </form>
      </div>
    )
  }
}

export default Register
