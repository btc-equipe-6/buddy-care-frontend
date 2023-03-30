import React, { Component } from 'react'
import { LoginForm } from '../../components/login-form/login-form'

// export default class login extends Component {
//   render() {
//     return (
//       <h1>oi</h1>
//     )
//   }
// }

import { StyledLoginPage } from './styles'

function Login() {
 return (
  <StyledLoginPage>
   <LoginForm />
  </StyledLoginPage>
 )
}
export default Login
