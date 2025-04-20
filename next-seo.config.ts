export default {
  title: 'Thiago Resende',
  titleTemplate: '%s | Thiago Resende',
  defaultTitle: 'Thiago Resende',
  description: 'Web developer focused on Java, Kotlin, Node.js, and modern architecture.',
  canonical: 'https://www.thiagoresende.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thiagoresende.com',
    site_name: 'Thiago Resende',
    title: 'Thiago Resende',
    description: 'Web developer focused on Java, Kotlin, Node.js, and modern architecture.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/32820963?v=4',
        width: 400,
        height: 400,
        alt: 'Thiago Resende',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    handle: '@thiagorgcr',
    site: '@thiagorgcr',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Thiago Resende'
    },
    {
      name: 'keywords',
      content: 'Java, Kotlin, Node.js, Developer, Backend, Web, Architecture, Spring, Engineering'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ]
} as const
