import { render, screen } from '@testing-library/react'

import Home from '.'

jest.mock('components/video', () => () => <div data-testid="video" />)
jest.mock('components/Terminal', () => () => <div data-testid="terminal" />)
jest.mock('components/Bio', () => () => <div data-testid="bio" />)
jest.mock('components/Social', () => () => <div data-testid="social" />)
jest.mock('components/Github', () => () => <div data-testid="github" />)

describe('<Home />', () => {
  it('should render all components', () => {
    const { container } = render(<Home />)

    expect(screen.getByTestId('video')).toBeInTheDocument()
    expect(screen.getByTestId('bio')).toBeInTheDocument()
    expect(screen.getByTestId('social')).toBeInTheDocument()
    expect(screen.getByTestId('github')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
