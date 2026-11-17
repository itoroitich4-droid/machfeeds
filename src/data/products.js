import { px } from './images'

const IDS = {"dairy-meal-high-yield": 4910809, "layers-mash-complete-meal": 19972937, "growers-mash": 27083552, "chick-mash": 30327614, "broilers-starter": 29863325, "broilers-finisher": 2253583, "sow-and-weaner-starter": 4956944, "pig-finisher": 4636983, "dog-meal": 8434670, "mach-rabbit": 4001296, "mach-samaki": 3947869, "sheep-and-goat-complete-meal": 8807304}

export const productCategories = [
  { name: 'Dairy Feed', emoji: '🐄', tone: 'blue' },
  { name: 'Poultry Feed', emoji: '🐔', tone: 'sand' },
  { name: 'Pig Feed', emoji: '🐖', tone: 'rose' },
  { name: 'Dog Feed', emoji: '🐕', tone: 'sand' },
  { name: 'Rabbit Feed', emoji: '🐇', tone: 'rose' },
  { name: 'Fish Feed', emoji: '🐟', tone: 'blue' },
  { name: 'Sheep and Goat Feed', emoji: '🐐', tone: 'sand' },
]

const p = (name, category, slug, description) => ({ name, category, slug, description, image: px(IDS[slug]) })

export const products = [
  p('Dairy Meal High Yield', 'Dairy Feed', 'dairy-meal-high-yield', 'Animal feed formulated for dairy cattle.'),
  p('Layers Mash Complete Meal', 'Poultry Feed', 'layers-mash-complete-meal', 'Complete feed for laying birds.'),
  p('Growers Mash', 'Poultry Feed', 'growers-mash', 'Feed for growing poultry.'),
  p('Chick Mash', 'Poultry Feed', 'chick-mash', 'Feed for young chicks.'),
  p('Broilers Starter', 'Poultry Feed', 'broilers-starter', 'Starter feed for broiler chickens.'),
  p('Broilers Finisher', 'Poultry Feed', 'broilers-finisher', 'Finisher feed for broiler chickens.'),
  p('Sow and Weaner Starter', 'Pig Feed', 'sow-and-weaner-starter', 'Feed for sows and weaner pigs.'),
  p('Pig Finisher', 'Pig Feed', 'pig-finisher', 'Feed for finishing pigs.'),
  p('Dog Meal', 'Dog Feed', 'dog-meal', 'Feed formulated for dogs.'),
  p('Mach Rabbit', 'Rabbit Feed', 'mach-rabbit', 'Feed for rabbits.'),
  p('Mach Samaki', 'Fish Feed', 'mach-samaki', 'Feed for fish.'),
  p('Sheep and Goat Complete Meal', 'Sheep and Goat Feed', 'sheep-and-goat-complete-meal', 'Complete feed for sheep and goats.'),
]

export const categoryMeta = (name) =>
  productCategories.find((c) => c.name === name) ?? { emoji: '🌾', tone: 'sand' }
