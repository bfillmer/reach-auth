
import React from 'react'

import { Heading, P, Section } from 'Atoms'

export function Login ({handleClick}) {
  return (
    <Section>
      <Heading>Login</Heading>
      <P><button onClick={handleClick}>Click to Login</button></P>
    </Section>
  )
}
