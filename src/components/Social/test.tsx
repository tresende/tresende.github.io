import { render, screen } from '@testing-library/react'

import Social from '.'

describe('<Social />', () => {
  it('should render 4 social links', () => {
    const { container } = render(<Social />)

    expect(screen.getAllByRole('link')).toHaveLength(4)
    expect(container).toMatchSnapshot()
  })
})
