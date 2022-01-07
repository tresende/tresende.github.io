import { render, screen } from '@testing-library/react'

import Github from '.'
const GITHUB_URL = 'https://github.com/tresende/tresende.github.io'

describe('<Github />', () => {
  it('should render with link', () => {
    const { container } = render(<Github />)

    expect(screen.getByRole('link')).toHaveAttribute('href', GITHUB_URL)
    expect(container.firstChild).toMatchSnapshot()
  })
})
