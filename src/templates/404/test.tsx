import { render, screen } from '@testing-library/react'

import Custom404 from '.'

describe('<404 />', () => {
  it('should render all components', () => {
    const { container } = render(<Custom404 />)

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
