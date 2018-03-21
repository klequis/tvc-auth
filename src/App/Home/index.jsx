import React, { Component } from 'react'
import { log } from '../../lib/ke-utils'

const logColor = 'pink'

class Home extends Component {
  constructor(props) {
    super(props)
    log('Home.constructor', '', logColor)
  }

  // Mount
  componentWillMount() {
    log('Home.WillMount', '', logColor)
  }
  componentDidMount() {
    log('Home.DidMount', '', logColor)
  }
  // Updating
  componentWillReceiveProps() {
    log('Home.WillReceiveProps', '', logColor)
  }
  shouldComponentUpdate() {
    log('Home.shouldUpdate', '', logColor)
  }
  componentWillUpdate() {
    log('Home.WillUpdate', '', logColor)}

  componentDidUpdate() {
    log('Home.DidUpdate', '', logColor)
  }
  // Error
  componentDidCatch() {
    log('Home.DidCatch', '', logColor)
  }

  render() {
    log('Home.render', '', logColor)
    return (
      <h1>Home</h1>
    )
  }

}
export default Home