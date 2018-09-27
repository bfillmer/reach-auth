
import React from 'react'

import { Heading, Logout, P, Section } from 'Atoms'
import { Auth } from 'Auth'

export function Account () {
  return (
    <Auth>
      <Section>
        <Heading>Account</Heading>
        <P><Logout /></P>
      </Section>
    </Auth>
  )
}
