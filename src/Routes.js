
import React from 'react'
import { Router } from '@reach/router'

import { Account, Home } from 'Screens'

export function Routes () {
  return (
    <Router>
      <Home path='/' default />
      {/* Authenticated Routes */}
      <Account path='account' />
    </Router>
  )
}
