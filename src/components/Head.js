import React from 'react'
import Helmet from 'react-helmet'

const DESCRIPTION =
  'Suncoast Developers Guild is a collective of software engineers, programmers, and designers in Tampa Bay.'

const Head = () => (
  <Helmet
    title="Suncoast Developers Guild"
    meta={[
      { name: 'description', content: DESCRIPTION },
      {
        name: 'keywords',
        content:
          'sdg, Tampa Bay, Code School, St Petersburg, Academy, Programming, Development, Suncoast',
      },
      { name: 'description', content: DESCRIPTION },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Suncoast Developers Guild' },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:site', content: '@suncoastio' },
      { name: 'twitter:creator', content: '@suncoastio' },
      {
        name: 'twitter:image',
        content: 'https://suncoast.io/assets/1024-512.png',
      },
      {
        property: 'og:title',
        name: 'title',
        content: 'Suncoast Developers Guild',
      },
      { property: 'og:description', name: 'description', content: DESCRIPTION },
      {
        property: 'og:image',
        name: 'image',
        content: 'https://suncoast.io/assets/1200-630.png',
      },
      { property: 'og:url', name: 'url', content: 'https://suncoast.io' },
      {
        property: 'og:site_name',
        name: 'site_name',
        content: 'Suncoast Developers Guild',
      },
      { property: 'og:locale', name: 'locale', content: 'en_US' },
      { property: 'fb:admins', name: 'fb:admins', content: '365336690280273' },
      { property: 'fb:app_id', name: 'fb:app_id', content: '228326264426970' },
      { property: 'og:type', name: 'type', content: 'website' },
    ]}
    link={[
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ]}
  />
)

export default Head
