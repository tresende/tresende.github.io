import { render, screen } from '@testing-library/react'

import Social from '.'

describe('<Social />', () => {
  it('should render 5 social links', () => {
    const { container } = render(<Social />)

    expect(screen.getAllByRole('link')).toHaveLength(5)
    expect(container.firstChild).toMatchSnapshot()
  })
})
