import React from 'react'

const Signup = (props) =>

<div className="signUp">
  <h3>{props.name}</h3>
  <input type="text" placeholder="username" className="username"/>
  <input type="password" placeholder="password" className="password"/>
  <button type="submit" className="loginBtn">Sign Up</button>
</div>

module.exports = Signup
