import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'h4dts712',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
})
