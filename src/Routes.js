
import React from 'react'
import { Router } from '@reach/router'

import { Account, Auth, Home } from 'Screens'

export function Routes () {
  return (
    <Router>
      <Home path='/' />
      <Auth path='/'>
        <Account path='account' />
      </Auth>
    </Router>
  )
}
