import { Truck, Users, Store, FlaskConical, Handshake } from 'lucide-react'
import { slugify, px } from './images'

const IDS = {'animal-nutrition-consultation': 25020306, 'product-distribution-and-delivery': 15733306, 'distributorship-opportunities': 13870874, 'feed-supplements': 13779116, 'livestock-nutrition-support': 20407614}

const s = (title, Icon, emoji, tone, description) => ({ title, slug: slugify(title), image: px(IDS[slugify(title)], 1000), Icon, emoji, tone, description })

export const services = [
  s('Animal Nutrition Consultation', Users, '🧑‍🌾', 'blue', 'Guidance and consultation to help farmers make informed animal nutrition decisions.'),
  s('Product Distribution and Delivery', Truck, '🚚', 'sand', 'Distribution and delivery support to help customers access Mach Feeds products.'),
  s('Distributorship Opportunities', Store, '🏪', 'rose', 'Opportunities for businesses interested in distributing Mach Feeds products.'),
  s('Feed Supplements', FlaskConical, '🧪', 'blue', 'Access to nutritional supplements that support animal feeding programmes.'),
  s('Livestock Nutrition Support', Handshake, '🤝', 'sand', 'Support for farmers seeking appropriate feed solutions for their livestock.'),
]
