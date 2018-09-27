
import React from 'react'
import {Location} from '@reach/router'

export class Logout extends React.Component {
  constructor (props) {
    super(props)

    this.makeHandleClick = (navigate) => (e) => {
      window.localStorage.removeItem('reach-test-auth')
      navigate('/')
    }
  }

  render () {
    const {makeHandleClick} = this

    return (
      <Location>
        {({navigate}) => <button onClick={makeHandleClick(navigate)}>Logout</button>}
      </Location>
    )
  }
}
