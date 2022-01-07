import { render, screen } from '@testing-library/react'

import SocialLink from '.'

const mock = {
  githubUrl: 'github.com/tresende',
  icon: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
}

describe('<SocialLink />', () => {
  it('should render social link', () => {
    const { container } = render(<SocialLink name="github" url="github.com/tresende" />)

    expect(screen.getByRole('link')).toHaveAttribute('href', mock.githubUrl)
    expect(screen.getByRole('img')).toHaveAttribute('src', mock.icon)
    expect(container.firstChild).toMatchSnapshot()
  })
})
