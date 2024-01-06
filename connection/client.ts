import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'
export const client = createClient({
  dataset: 'production',
  projectId: '9ict3bbf',
  apiVersion: '2022-03-25',
  useCdn: false,
})

export const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
