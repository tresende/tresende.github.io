import React from 'react'

export type SocialLinkProps = {
  name: 'linkedin' | 'email' | 'github' | 'facebook' | 'instagram'
  url: string
}

const SocialLink = ({ name, url }: SocialLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={`/img/${name}-min.png`} alt={`${name} icon`} />
    </a>
  )
}
export default SocialLink
