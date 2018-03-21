import React, { Component } from 'react'
import { AUTH_LOGOUT_URL } from '../../../constants'
import { log } from '../../../lib/ke-utils'

const logColor = 'blue'

const logout = async () => {
  await fetch(AUTH_LOGOUT_URL)
  .then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    return null
  })
  .then((json) => {
    localStorage.removeItem('jwt')
  })
  .catch((err) => {
    console.error('error logging in', err)
  })
}

class Logout extends Component {
  constructor(props) {
    super(props)
    log('Logout.constructor', '', logColor)
  }
  // Mount
  componentWillMount() {
    log('Logout.WillMount', '', logColor)
  }
  componentDidMount() {
    log('Logout.DidMount', '', logColor)
  }
  // Updating
  componentWillReceiveProps() {
    log('Logout.WillReceiveProps', '', logColor)
  }
  shouldComponentUpdate() {
    log('Logout.shouldUpdate', '', logColor)
  }
  componentWillUpdate() {
    log('Logout.WillUpdate', '', logColor)}

  componentDidUpdate() {
    log('Logout.DidUpdate', '', logColor)
  }
  // Error
  componentDidCatch() {
    log('Logout.DidCatch', '', logColor)
  }
  render() {
    log('Logout.render', '', logColor)
    logout()
    return (
      <div>
        <h1>Thank you for using our application! We hope you learned something.</h1>
        <h2>Please help spread the word about TriValley Coders</h2>
        <ul>
          <li><a href="https://www.facebook.com/trivalleycoders/">Like us on Facebook</a></li>
          <li><a href="http://bit.ly/tvc-slack-join">Ask questions on Slack</a></li>
        </ul>
      </div>
    )
  }
}
export default Logout