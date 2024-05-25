import { render, screen } from '@testing-library/react'

import Video from '.'

describe('<Video />', () => {
  it('should render background video', () => {
    const { container } = render(<Video />)
    const sourceElement = container.querySelector('source')

    expect(sourceElement?.getAttribute('src')).toBe('/videos/bg.mp4')
    expect(sourceElement?.getAttribute('type')).toBe('video/mp4')
  })

  it('should render image fallaback', () => {
    const { container } = render(<Video />)

    expect(screen.getByRole('img', { name: 'busy avenue' })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
