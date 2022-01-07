import { render, screen } from '@testing-library/react'

import Terminal from '.'

describe('<Terminal />', () => {
  it('should start in branch main', () => {
    const { container } = render(<Terminal />)

    expect(screen.getByText(/main/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should view readme.txt', () => {
    render(<Terminal />)

    expect(screen.getByText(/cat readme.txt/i)).toBeInTheDocument()
  })
})
