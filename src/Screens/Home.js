
import React from 'react'

import { A, Heading, P, Section } from 'Atoms'
import {Logout} from 'Logic'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <P><A to='account'>Account Screen</A></P>
      <P><Logout /></P>
    </Section>
  )
}
