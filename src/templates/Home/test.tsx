import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from '.'

describe('<Home />', () => {
  it('should render all components', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
