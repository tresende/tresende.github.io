import { render } from '@testing-library/react'

import Bio from '.'

describe('<Bio />', () => {
  it('should render correctly', () => {
    const { container } = render(<Bio />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
