export const siteConfig = {
  name: 'Krisha Systems',
  title: 'Krisha Systems | Enterprise IT Services & Staffing',
  description:
    'Krisha Systems delivers enterprise IT services and staffing — Data & AI, Cloud, Integration, Full Stack, SAP, Oracle, and Salesforce solutions across India.',
  keywords:
    'IT services, IT staffing, enterprise technology, cloud migration, Data AI, SAP, Oracle, Salesforce, Krisha Systems, Delhi',
  url: '/',
  ogImage: '/og-image.svg',
}

export const pageSeo = {
  home: {
    title: siteConfig.title,
    description: siteConfig.description,
    path: '/',
  },
  notFound: {
    title: 'Page Not Found | Krisha Systems',
    description: 'The page you are looking for does not exist. Return to Krisha Systems homepage.',
    path: '/404',
    robots: 'noindex, follow',
  },
}
