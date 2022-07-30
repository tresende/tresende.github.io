import { render, screen } from '@testing-library/react'

import SocialLink from '.'

const mock = {
  githubUrl: 'github.com/tresende',
  icon: '/img/github.png'
}

describe('<SocialLink />', () => {
  it('should render social link', () => {
    const { container } = render(<SocialLink name="github" url="github.com/tresende" />)

    expect(screen.getByRole('link')).toHaveAttribute('href', mock.githubUrl)
    expect(screen.getByRole('img')).toHaveAttribute('src', mock.icon)
    expect(container).toMatchSnapshot()
  })
})
