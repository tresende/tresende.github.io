import SocialLink from 'components/SocialLink'

const Social = () => (
  <footer className="flex content-between justify-center gap-2">
    <SocialLink url="https://github.com/tresende" name="github" />
    <SocialLink url="https://www.linkedin.com/in/thiago-resende-46175391" name="linkedin" />
    <SocialLink url="mailto:thiago.gcresende@gmail.com" name="email" />
    <SocialLink url="https://www.instagram.com/thiago.gcr/" name="instagram" />
  </footer>
)

export default Social
