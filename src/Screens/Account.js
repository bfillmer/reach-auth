
import React from 'react'

import { Heading, P, Section } from 'Atoms'
import {Logout} from 'Logic'

export function Account () {
  return (
    <Section>
      <Heading>Account</Heading>
      <P><Logout /></P>
    </Section>
  )
}
