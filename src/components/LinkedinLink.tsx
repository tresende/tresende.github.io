const LINKEDIN_URL = 'https://www.linkedin.com/in/thiago-resende-46175391'

import { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren) => (
  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
    {children}
  </a>
)
