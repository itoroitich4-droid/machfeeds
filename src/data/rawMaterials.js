import { slugify, px } from './images'

const IDS = {omena: 11932015, 'cottonseed-cake': 2889370, 'sunflower-cake': 5425020, 'maize-germ': 60507, 'soybean-meal': 31226914, 'wheat-bran-and-pollard': 6412634, molasses: 4480158, 'canola-meal': 17031636, 'copra-meal': 7248420}

const m = (name, emoji, tone, description) => ({ name, slug: slugify(name), image: px(IDS[slugify(name)]), emoji, tone, description })

export const materials = [
  m('Omena', '🐟', 'blue', 'A fish-based ingredient used in animal feed formulations.'),
  m('Cottonseed Cake', '🌱', 'sand', 'An agricultural by-product used as an ingredient in livestock feeds.'),
  m('Sunflower Cake', '🌻', 'sand', 'A plant-based feed ingredient obtained from sunflower processing.'),
  m('Maize Germ', '🌽', 'sand', 'A maize processing ingredient used in animal feed production.'),
  m('Soybean Meal', '🫘', 'rose', 'A plant-based protein ingredient used in animal nutrition.'),
  m('Wheat Bran and Pollard', '🌾', 'sand', 'Wheat milling by-products used in livestock feed formulations.'),
  m('Molasses', '🍯', 'rose', 'A sugar-industry by-product used in animal feed formulations.'),
  m('Canola Meal', '🌿', 'blue', 'A plant-based ingredient obtained from canola seed processing and used in animal feed formulations.'),
  m('Copra Meal', '🥥', 'blue', 'A coconut processing by-product used as an ingredient in animal feed formulations.'),
]
