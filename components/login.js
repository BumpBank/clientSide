import React from 'react'

const Login = (props) =>

<div className="login">
<h3>{props.name}</h3>
<input type="text" placeholder="username" className="username"/>
<input type="password" placeholder="password" className="password"/>
<button type="submit" className="loginBtn">Login</button>
</div>

module.exports = Login
