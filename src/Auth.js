
import React from 'react'

import { Login } from 'Screens'

export class Auth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      authenticated: null
    }

    this.login = () => {
      window.localStorage.setItem('reach-test-auth', true)
      this.setState({authenticated: true})
    }
  }

  componentDidMount () {
    const authenticated = window.localStorage.getItem('reach-test-auth')
    this.setState({authenticated})
  }

  render () {
    const {children} = this.props
    const {authenticated} = this.state
    const {login} = this

    if (authenticated) {
      return children
    }

    return <Login handleClick={login} />
  }
}
