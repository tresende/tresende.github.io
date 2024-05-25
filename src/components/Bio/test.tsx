import { render, screen } from '@testing-library/react'

import Bio from '.'

describe('<Bio />', () => {
  it('should render bio with skills', () => {
    const skils = ['React', 'Angular', 'Node', 'Flutter', 'SNES', 'Bass']

    const { container } = render(<Bio />)
    skils.forEach((skill) => expect(screen.getByText(skill)).toBeInTheDocument())

    expect(container).toMatchSnapshot()
  })
})
