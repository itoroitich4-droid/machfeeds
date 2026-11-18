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

const p = (name, category, slug, description, detail) => ({ name, category, slug, description, ...detail, image: px(IDS[slug]) })

// `description` is the short blurb used on cards; `overview`, `highlights`, `suitableFor`
// and `feedingNotes` are the detailed copy shown on each product's page.
export const products = [
  p('Dairy Meal High Yield', 'Dairy Feed', 'dairy-meal-high-yield',
    'A concentrate dairy meal formulated to support milk production, body condition and herd health in lactating and high-producing cows.',
    {
      overview: [
        'Dairy Meal High Yield is a concentrate feed formulated for dairy cattle that are producing milk at a high level. Milk production places a heavy demand on a cow for energy, protein, minerals and vitamins, and forage alone often cannot meet it. This meal is designed to be fed alongside good-quality roughage such as napier grass, hay or silage, to fill that gap and help cows sustain production through the lactation.',
        'Balanced nutrition supports more than the milk tank. It also helps cows keep their body condition, stay in good health and return to breeding on time. Mach Feeds Limited manufactures the meal in Thika, Kenya, using carefully selected feed ingredients.',
      ],
      highlights: [
        'Formulated to support milk yield and milk quality in lactating cows',
        'Helps maintain body condition during peak lactation',
        'Supports fertility, rumen function and overall herd health',
        'Designed to complement roughage, not replace it',
      ],
      suitableFor: 'Lactating and high-yielding dairy cows, and cows in late pregnancy being prepared for calving. Ask our team about the right product for heifers and calves.',
      feedingNotes: 'Feed according to milk yield, split across milking times, and always alongside quality forage and plenty of clean water. Introduce any change in feed gradually over several days. Store in a cool, dry place off the floor.',
    }),
  p('Layers Mash Complete Meal', 'Poultry Feed', 'layers-mash-complete-meal',
    'A complete feed for laying hens, balanced to support steady egg production, strong shells and the long-term health of the flock.',
    {
      overview: [
        'Layers Mash Complete Meal is a complete ration for hens in lay. Laying birds need a diet carefully balanced in energy, protein, calcium and phosphorus, because they use large amounts of calcium every day to form eggshells while maintaining their own body condition. A complete meal removes the guesswork, since no extra concentrates are needed.',
        'Fed consistently and with clean water available at all times, it supports good laying performance, sound shell quality and a healthy flock. It suits small backyard flocks as well as commercial egg producers.',
      ],
      highlights: [
        'Complete ration: a single feed for the whole laying period',
        'Supports steady egg production and shell strength',
        'Provides the calcium and phosphorus laying hens need',
        'Suitable for small and commercial flocks',
      ],
      suitableFor: 'Laying hens from the start of lay (typically around 18 to 20 weeks). Younger birds should be on Chick Mash or Growers Mash first.',
      feedingNotes: 'Provide feed daily at the same times, keep feeders clean and topped up, and ensure constant access to fresh water. Avoid sudden feed changes, which can cause a drop in egg production.',
    }),
  p('Growers Mash', 'Poultry Feed', 'growers-mash',
    'A feed for growing pullets and young birds, supporting steady frame development and healthy preparation for the laying stage.',
    {
      overview: [
        'Growers Mash is fed during the growing phase, after chicks have finished on Chick Mash and before pullets move onto layers feed. The aim at this stage is healthy, even growth: a well-developed frame, good feathering and a bird that reaches point of lay in the right condition.',
        'Getting the grower stage right has a lasting effect on laying performance, because pullets that are underfed or overfed often lay poorly later. The feed is formulated to support controlled development rather than rapid fattening.',
      ],
      highlights: [
        'Supports steady skeletal and muscle development',
        'Helps pullets reach point of lay in good, uniform condition',
        'Bridges the gap between chick feed and layers feed',
        'Easy-to-feed mash form',
      ],
      suitableFor: 'Growing pullets and other young poultry between the chick stage and the start of lay.',
      feedingNotes: 'Switch from Chick Mash gradually over a few days. Weigh a sample of birds regularly and check uniformity of the flock. Provide clean water at all times and enough feeder space so all birds can eat.',
    }),
  p('Chick Mash', 'Poultry Feed', 'chick-mash',
    'A starter feed for young chicks, formulated for strong early growth, good feathering and a healthy start to life.',
    {
      overview: [
        'The first weeks of a chick’s life decide how well it will perform later. Chick Mash is formulated for this critical period, when young birds grow very fast but have small digestive systems and high nutritional needs. It supplies the protein, energy, vitamins and minerals needed for strong early growth, feather development and a robust immune system.',
        'Used together with good brooding practice (warmth, clean bedding, ventilation and fresh water), it gives chicks the best start whether they are destined for egg production or for meat.',
      ],
      highlights: [
        'Formulated for the rapid growth of the first weeks',
        'Supports feather development and early immunity',
        'Fine mash that young chicks can eat easily',
        'Foundation for later laying or meat performance',
      ],
      suitableFor: 'Day-old chicks up to the start of the growing stage, including layer-type and general-purpose chicks.',
      feedingNotes: 'Make feed and water available as soon as chicks arrive, using shallow feeders so every chick can reach it. Keep feed fresh and dry, and move to Growers Mash at the right age.',
    }),
  p('Broilers Starter', 'Poultry Feed', 'broilers-starter',
    'A high-nutrient starter for young broilers, supporting fast early growth and a strong foundation for good meat yield.',
    {
      overview: [
        'Broilers are bred to grow quickly, and most of their early development happens in the first weeks of life. Broilers Starter is a nutrient-dense feed designed to meet the high protein and energy needs of young broiler chicks during this stage, supporting rapid weight gain, healthy bone development and good feed conversion.',
        'A good start sets the pace for the whole batch. Combined with proper brooding, clean water and sound flock management, it helps farmers achieve uniform birds that are ready for market on time.',
      ],
      highlights: [
        'Nutrient-dense formulation for fast early growth',
        'Supports healthy bone and muscle development',
        'Helps achieve uniform flocks and good feed conversion',
        'Followed by Broilers Finisher for the final growth phase',
      ],
      suitableFor: 'Broiler chicks from day-old through the starter phase, before moving to Broilers Finisher.',
      feedingNotes: 'Provide feed from arrival with constant access to clean water. Keep litter dry and feeders clean. Transition to Broilers Finisher at the recommended age rather than abruptly.',
    }),
  p('Broilers Finisher', 'Poultry Feed', 'broilers-finisher',
    'A finishing feed for broilers in the final growth phase, formulated to support efficient weight gain and good carcass quality at market.',
    {
      overview: [
        'Broilers Finisher is fed in the last stage of the broiler cycle, when birds put on most of their final market weight. The feed is formulated to deliver the energy and protein required for efficient weight gain and well-finished carcasses, while keeping feed costs under control at the stage when birds eat the most.',
        'Because finishing is the most feed-intensive phase, feed quality and feeding management have a direct effect on profit. Consistent feeding, adequate feeder and drinker space and good house conditions all help the flock reach target weights.',
      ],
      highlights: [
        'Supports efficient weight gain in the final weeks',
        'Helps produce well-finished, good-quality carcasses',
        'Formulated for the high feed intake of finishing birds',
        'Continues from Broilers Starter',
      ],
      suitableFor: 'Broiler chickens from the end of the starter phase until sale or slaughter.',
      feedingNotes: 'Follow the starter-to-finisher changeover gradually. Keep clean water available at all times, and observe any withdrawal periods if birds have received medication before slaughter.',
    }),
  p('Sow and Weaner Starter', 'Pig Feed', 'sow-and-weaner-starter',
    'A feed for breeding sows and young weaner pigs, supporting milk production, litter performance and a smooth transition off the sow.',
    {
      overview: [
        'Two of the most nutritionally demanding groups on a pig farm are the breeding sow and the newly weaned piglet, and this feed is designed to serve both. For sows, it supports pregnancy and lactation, helping them produce enough milk to feed a large litter while maintaining their own body condition for the next breeding cycle.',
        'For weaners, it provides a palatable, easily digested diet at a stressful time, when piglets move from sow’s milk to solid feed. A good weaner diet helps keep growth going through weaning and reduces setbacks, setting the pigs up for the growing and finishing stages.',
      ],
      highlights: [
        'Supports pregnancy, lactation and litter performance in sows',
        'Palatable, easily digested starter diet for weaners',
        'Helps piglets maintain growth through the stress of weaning',
        'Followed by Pig Finisher as pigs grow',
      ],
      suitableFor: 'Pregnant and lactating sows, and weaner piglets after weaning.',
      feedingNotes: 'Introduce piglets to solid feed early and keep it fresh. Provide clean water at all times. Adjust sow rations according to stage of pregnancy, lactation and body condition.',
    }),
  p('Pig Finisher', 'Pig Feed', 'pig-finisher',
    'A finishing feed for growing-finishing pigs, formulated for efficient weight gain and good-quality pork at market weight.',
    {
      overview: [
        'Pig Finisher is fed to growing pigs in the last phase before market, when feed intake is highest and the cost of feed is the farmer’s largest expense. The feed is formulated to support efficient lean growth and steady weight gain so that pigs reach market weight in good condition and in good time.',
        'Used with clean housing, adequate water and good herd health management, it helps farmers achieve uniform pigs and consistent results from batch to batch.',
      ],
      highlights: [
        'Supports efficient weight gain through the finishing phase',
        'Helps produce good-quality, well-finished pork',
        'Formulated for the high feed intake of finishing pigs',
        'Suitable for commercial and smallholder pig units',
      ],
      suitableFor: 'Growing and finishing pigs from the end of the weaner stage until market weight.',
      feedingNotes: 'Provide ample feeder space to limit competition, supply clean drinking water at all times, and group pigs by size to promote even growth.',
    }),
  p('Dog Meal', 'Dog Feed', 'dog-meal',
    'A dry feed formulated for dogs, providing balanced everyday nutrition for energy, healthy body condition and general wellbeing.',
    {
      overview: [
        'Dog Meal is a dry feed formulated to provide dogs with balanced everyday nutrition. It supplies the energy, protein, vitamins and minerals dogs need to stay active, maintain a healthy weight and keep their coat and general condition in good shape.',
        'It is a practical and affordable option for households, farms, guard dogs and working dogs. As with any feed, the right amount depends on a dog’s size, age and activity level, and it should be fed with fresh drinking water always available.',
      ],
      highlights: [
        'Balanced everyday nutrition in a convenient dry meal',
        'Supports energy, healthy body condition and coat',
        'Suitable for household, farm and working dogs',
        'Practical and affordable for regular feeding',
      ],
      suitableFor: 'Adult dogs of different sizes and activity levels. Speak to our team or your vet about puppies, nursing mothers and dogs with special dietary needs.',
      feedingNotes: 'Adjust quantity to the dog’s size, age and activity, and divide it into regular meals. Introduce it gradually when changing foods, and keep fresh water available.',
    }),
  p('Mach Rabbit', 'Rabbit Feed', 'mach-rabbit',
    'A formulated feed for rabbits, supporting healthy growth, breeding performance and digestive health when fed with good-quality fibre.',
    {
      overview: [
        'Mach Rabbit is a formulated feed for domestic rabbits kept for meat, breeding or as pets. Rabbits have a sensitive digestive system that works best on a diet rich in fibre, so the feed is designed to provide balanced protein, energy, vitamins and minerals to complement hay and fresh forage.',
        'It supports steady growth in young rabbits, good condition and fertility in breeding does and bucks, and overall health across the herd. Careful feeding is among the most important factors in successful rabbit keeping.',
      ],
      highlights: [
        'Balanced nutrition for growing, breeding and maintenance rabbits',
        'Designed to be fed with hay or fresh forage',
        'Supports growth, fertility and general health',
        'Suitable for meat, breeding and pet rabbits',
      ],
      suitableFor: 'Weaner, growing, breeding and adult rabbits.',
      feedingNotes: 'Provide forage or hay daily and clean drinking water at all times. Make feed changes gradually to avoid digestive upsets, and keep feed dry and free of mould.',
    }),
  p('Mach Samaki', 'Fish Feed', 'mach-samaki',
    'A formulated feed for farmed fish, supporting growth, feed efficiency and healthy stock in pond and tank aquaculture.',
    {
      overview: [
        'Mach Samaki (“samaki” is Swahili for fish) is a formulated feed for farmed fish such as tilapia and catfish. Fish feed has to supply protein, energy, vitamins and minerals in a form fish can digest well, and good feeding is central to growth rate, survival and the economics of a fish farm.',
        'Used with good pond management (water quality, stocking density and regular feeding), it helps fish grow steadily and efficiently. Feed accounts for a large share of the cost of fish production, so a quality feed fed correctly makes a real difference to returns.',
      ],
      highlights: [
        'Formulated to support steady growth and good feed efficiency',
        'Suitable for pond and tank fish farming',
        'Helps maintain healthy, well-conditioned stock',
        'Contact our team for available pellet sizes for each growth stage',
      ],
      suitableFor: 'Farmed freshwater fish, including tilapia and catfish. Confirm the right feed size for your fish with our team.',
      feedingNotes: 'Feed at regular times, adjusting the quantity to fish size, number and water temperature. Avoid overfeeding, which wastes feed and harms water quality, and store feed dry and out of direct sun.',
    }),
  p('Sheep and Goat Complete Meal', 'Sheep and Goat Feed', 'sheep-and-goat-complete-meal',
    'A complete feed for sheep and goats, supporting growth, milk production, breeding performance and general flock health.',
    {
      overview: [
        'Sheep and Goat Complete Meal is a ready-to-feed ration for small ruminants kept for meat, milk or breeding. It provides balanced energy, protein, minerals and vitamins to support growth in young stock, milk production and kid or lamb rearing in lactating does and ewes, and good body condition throughout the year.',
        'Pasture and browse are often limited in quality and quantity, especially in the dry season, so a complete meal helps farmers keep animals productive and healthy year-round. It is best fed alongside roughage, which keeps the rumen working properly.',
      ],
      highlights: [
        'Complete meal for sheep and goats kept for meat, milk or breeding',
        'Supports growth, lactation and breeding performance',
        'Helps maintain condition when pasture is scarce',
        'Easy to include in a daily feeding routine',
      ],
      suitableFor: 'Growing, breeding and lactating sheep and goats, including dairy goats.',
      feedingNotes: 'Feed with good roughage and fresh water at all times, and introduce the meal gradually. Make mineral licks available, and adjust amounts for production stage.',
    }),
]

export const categoryMeta = (name) =>
  productCategories.find((c) => c.name === name) ?? { emoji: '🌾', tone: 'sand' }
