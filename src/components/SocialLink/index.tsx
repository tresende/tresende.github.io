import Image from 'next/image'

export type SocialLinkProps = {
  name: 'linkedin' | 'email' | 'github' | 'facebook' | 'instagram'
  url: string
}

const SocialLink = ({ name, url }: SocialLinkProps) => (
  <a href={url} target="_blank" rel="noreferrer">
    <Image width="32" height="32" src={`/img/${name}.png`} alt={`${name} icon`} />
  </a>
)

export default SocialLink
