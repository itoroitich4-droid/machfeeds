// Remote photos (Pexels, free to use). Swap any id/URL below for your own images.
export const px = (id, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const slugify = (s) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const heroImages = {
  hero: px(4910809, 1100),
  field: px(3049324, 1600),
  about: px(11815954, 1100),
}

// Home hero slideshow: add, remove or replace URLs freely.
export const heroSlides = [
  px(3049324, 1600),
  px(4910809, 1600),
  px(11815954, 1600),
  px(29863325, 1600),
  px(4636983, 1600),
  px(8807304, 1600),
]
