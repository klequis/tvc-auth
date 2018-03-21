import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'

const navStyle = {
  // backgroundColor: 'gray',
  display: 'flex',
  // justifyContent: 'space-around',
  padding: '15px 0 30px 0',
}
const buttonStyle = {
  marginRight: '15px',
}

const NavButton = ({ children }) => {
  return (
    <button type="button" className="btn btn-primary" style={buttonStyle}>{children}</button>
  )
}
const Nav = () => {
  const authenticated = isAuthenticated()
    ? <Link to='/logout'><NavButton>Logout</NavButton></Link>
    : <Link to='/login'><NavButton>Logout</NavButton></Link>

  return (
    <div style={navStyle} >
      <Link to='/'><NavButton>Home</NavButton></Link>
      <Link to='/register'><NavButton>Register</NavButton></Link>
      {authenticated}
      <Link to='/unprotected'><NavButton>Unprotected</NavButton></Link>
      <Link to='/protected'><NavButton>Protected</NavButton></Link>
    </div>
  )
}
export default Nav