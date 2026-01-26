import { createImageUrlBuilder } from '@sanity/image-url'
import { sanityClient } from './sanityClient'

const builder = createImageUrlBuilder(sanityClient)

export function sanityImageUrlFor(source) {
  return builder.image(source)
}
