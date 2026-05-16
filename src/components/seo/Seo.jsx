import { useEffect } from 'react'
import { siteConfig } from '../../config/seo'

const setMeta = (attr, key, content) => {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const Seo = ({
  title = siteConfig.title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  path = '/',
  ogImage = siteConfig.ogImage,
  robots = 'index, follow',
}) => {
  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const url = `${origin}${path}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'keywords', keywords)
    setMeta('name', 'robots', robots)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', `${origin}${ogImage}`)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', `${origin}${ogImage}`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, keywords, path, ogImage, robots])

  return null
}

export default Seo
