
import React from 'react'

import { A, Heading, P, Section } from 'Atoms'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <P><A to='account'>Account Screen</A></P>
    </Section>
  )
}
