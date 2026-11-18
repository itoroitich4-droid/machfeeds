import { slugify, px } from './images'

const IDS = {omena: 11932015, 'cottonseed-cake': 2889370, 'sunflower-cake': 5425020, 'maize-germ': 60507, 'soybean-meal': 31226914, 'wheat-bran-and-pollard': 6412634, molasses: 4480158, 'canola-meal': 17031636, 'copra-meal': 7248420}

// `description` is the short blurb shown on cards. The other fields appear on each
// material's detail page. Nutrient figures are typical industry ranges only; they vary
// by source, processing and batch, so exact specifications are confirmed with our team.
const m = (name, emoji, tone, description, detail) => ({ name, slug: slugify(name), image: px(IDS[slugify(name)]), emoji, tone, description, ...detail })

export const materials = [
  m('Omena', '🐟', 'blue',
    'Small sun-dried freshwater fish (silver cyprinid), a concentrated animal-protein ingredient for poultry, pig and fish feeds.',
    {
      overview: [
        'Omena is the East African name for the small silver cyprinid fish (Rastrineobola argentea) harvested from Lake Victoria and other inland waters. In feed milling, dried omena is used as a high-quality animal-protein ingredient, valued for its protein density and its content of minerals such as calcium and phosphorus.',
        'Because it is a source of animal protein with a good amino acid profile, it is often used in small amounts to lift the protein quality of poultry, pig and fish diets, and in starter feeds for young animals.',
      ],
      nutrition: 'Typically a high-protein ingredient, often in the range of 55% to 65% crude protein, with useful fat and mineral content. Values vary with drying, fat content and any sand or ash.',
      usedIn: ['Chick and broiler starter feeds', 'Pig and weaner feeds', 'Fish feeds', 'Dog and other specialty feeds'],
      considerations: 'Quality depends on freshness and drying. Look for clean, well-dried material free of sand, salt, mould and spoilage, and store dry. It is usually included at modest levels, as too much can affect feed cost, flavour of products and the fat balance of the diet.',
    }),
  m('Cottonseed Cake', '🌱', 'sand',
    'A protein-rich by-product of cottonseed oil extraction, widely used as an economical plant-protein source in ruminant and other livestock feeds.',
    {
      overview: [
        'Cottonseed cake is what remains after oil is pressed or extracted from cottonseed. It is a widely available and economical plant-protein ingredient, and one of the traditional protein sources in dairy and beef rations in Kenya and across East Africa.',
        'It also supplies energy, phosphorus and fibre, and is especially well suited to ruminants such as dairy cattle, sheep and goats, whose rumen microbes handle it well.',
      ],
      nutrition: 'Typically around 30% to 41% crude protein depending on whether hulls are included and how the oil was removed, with moderate fibre and residual oil.',
      usedIn: ['Dairy meals and cattle concentrates', 'Sheep and goat feeds', 'Beef finishing rations', 'Limited use in pig and poultry diets'],
      considerations: 'Cottonseed naturally contains gossypol, which limits how much can be fed to pigs, poultry and young animals. Inclusion rates should follow the formulation for each species. Quality varies with hull content and processing.',
    }),
  m('Sunflower Cake', '🌻', 'sand',
    'The protein- and fibre-rich residue left after sunflower oil extraction, used as a cost-effective plant-protein ingredient in many livestock rations.',
    {
      overview: [
        'Sunflower cake (also called sunflower meal) is a by-product of sunflower seed oil production. Kenya and the region grow and process sunflower, which makes it a readily available local source of plant protein for feed formulators.',
        'It provides protein, fibre and B vitamins, and is a popular partner for other protein sources such as soybean meal and cottonseed cake, helping formulators manage cost while balancing the amino acid profile of the diet.',
      ],
      nutrition: 'Crude protein typically ranges from about 28% to 36%, mainly depending on how much hull is left in. Fibre is higher than in soybean meal, particularly when hulls are included.',
      usedIn: ['Dairy and beef cattle concentrates', 'Sheep and goat feeds', 'Pig and poultry feeds (within limits)', 'Rabbit feeds'],
      considerations: 'Higher fibre means lower energy, so inclusion in poultry and pig feeds is limited. It is low in the amino acid lysine, which is normally balanced with other ingredients. Hull content and storage conditions affect quality.',
    }),
  m('Maize Germ', '🌽', 'sand',
    'An energy-dense maize milling by-product containing germ, bran and oil, used to raise the energy and palatability of animal feeds.',
    {
      overview: [
        'Maize germ is a by-product of maize milling, made up largely of the germ of the kernel along with some bran and endosperm. Because the germ is rich in oil, maize germ is a valuable source of energy and also provides moderate protein, phosphorus and vitamin E.',
        'It is palatable to animals and is commonly used to raise the energy density of feed and as a partial replacement for more expensive cereal grains in formulations.',
      ],
      nutrition: 'Moderate protein (typically about 10% to 14% crude protein), a notable oil content and good energy value. Composition varies with the mill and the milling process.',
      usedIn: ['Dairy and beef concentrates', 'Pig and poultry feeds', 'Sheep and goat feeds', 'Rabbit and other small-livestock feeds'],
      considerations: 'The high oil content means maize germ can turn rancid if stored for too long or in warm, humid conditions, so it should be kept cool, dry and used while fresh. Check for mould and aflatoxin risks.',
    }),
  m('Soybean Meal', '🫘', 'rose',
    'A high-quality, highly digestible plant-protein ingredient and the standard benchmark protein source in poultry, pig and dairy feeds.',
    {
      overview: [
        'Soybean meal is produced from soybeans after the oil has been extracted and the meal heat-treated. It is the most widely used plant-protein ingredient in the world because of its high protein content, excellent digestibility and well-balanced amino acid profile, especially lysine.',
        'It is the preferred protein source for fast-growing, high-performing animals such as broilers, layers and pigs, and is also used in dairy, calf, rabbit and fish feeds.',
      ],
      nutrition: 'Typically about 44% to 48% crude protein (higher for dehulled meal), with a good amino acid profile and relatively low fibre.',
      usedIn: ['Broiler and layer feeds', 'Chick and growers feeds', 'Pig, sow and weaner feeds', 'Dairy concentrates and fish feeds'],
      considerations: 'Raw soybeans contain anti-nutritional factors that proper heat processing deactivates, so well-processed meal matters. Supply and price can vary with the market. Store dry to avoid mould.',
    }),
  m('Wheat Bran and Pollard', '🌾', 'sand',
    'Fibre- and energy-rich wheat milling by-products, widely used as affordable bulk ingredients in dairy, pig, poultry and rabbit feeds.',
    {
      overview: [
        'Wheat bran and pollard are by-products of milling wheat into flour. Bran is the coarse outer layer of the grain, and pollard (sometimes called middlings) is a finer fraction containing more of the starchy material. Both are among the most commonly used feed ingredients in East Africa.',
        'They supply fibre, moderate protein, phosphorus and B vitamins, and are valued for their palatability and for providing bulk. In ruminant diets they help maintain a healthy rumen, and in pig diets they add fibre and bulk.',
      ],
      nutrition: 'Typically about 14% to 17% crude protein, with moderate energy. Bran has more fibre than pollard, so pollard is generally higher in energy.',
      usedIn: ['Dairy meals and cattle concentrates', 'Pig feeds', 'Poultry feeds (limited)', 'Rabbit, sheep and goat feeds'],
      considerations: 'Higher fibre limits how much can go into young poultry and pig diets. Phosphorus is largely bound as phytate, so mineral balance matters. Store dry and free of mould and insects.',
    }),
  m('Molasses', '🍯', 'rose',
    'A thick, sugar-rich by-product of sugar manufacturing, used as an energy source, palatability enhancer and binder in animal feeds.',
    {
      overview: [
        'Molasses is the dark, thick syrup left over after sugar is crystallised from sugar cane. It is rich in readily available sugars, which makes it a quick source of energy, and it gives feed a sweet taste that improves palatability and helps animals eat dry or dusty feeds.',
        'In feed manufacturing it also acts as a binder, reducing dust and helping hold meals or pellets together, and it provides potassium and some trace minerals. It is a long-standing ingredient in dairy and beef feeds.',
      ],
      nutrition: 'Typically around 75% to 80% dry matter, mostly sugars, with low protein. Valued as an energy and palatability source rather than a protein source.',
      usedIn: ['Dairy and beef cattle feeds', 'Sheep and goat feeds', 'Horse and other livestock feeds', 'Binder and palatability enhancer in mixed feeds'],
      considerations: 'It is used at limited inclusion rates, because too much can cause loose droppings and make mixing and handling difficult. It should be stored in clean tanks or drums and protected from contamination and fermentation.',
    }),
  m('Canola Meal', '🌿', 'blue',
    'A protein-rich plant ingredient from canola (rapeseed) oil extraction, with a good amino acid balance and useful for dairy, poultry and pig feeds.',
    {
      overview: [
        'Canola meal is the protein-rich residue left after oil is extracted from canola (rapeseed) seed. It is an established alternative to soybean meal in many parts of the world and is widely used in dairy cow rations, where it is well regarded for its amino acid profile and its ability to support milk production.',
        'It also supplies useful amounts of fibre, minerals and sulphur-containing amino acids, and can be used in poultry, pig and fish feeds within recommended limits.',
      ],
      nutrition: 'Typically about 34% to 38% crude protein, with more fibre than soybean meal and a good balance of amino acids.',
      usedIn: ['Dairy cow concentrates', 'Beef and small-ruminant feeds', 'Pig and poultry feeds', 'Fish feeds'],
      considerations: 'Modern canola varieties are low in glucosinolates and erucic acid, but residual levels can still limit inclusion in some species, particularly young animals. Higher fibre lowers its energy value compared with soybean meal.',
    }),
  m('Copra Meal', '🥥', 'blue',
    'A fibrous, palatable coconut by-product left after copra oil extraction, used as an economical protein and energy ingredient in ruminant and other feeds.',
    {
      overview: [
        'Copra meal (also called coconut cake) is the by-product left after oil has been extracted from dried coconut kernel, or copra. Coconut is grown along the Kenyan coast and in other tropical regions, making copra meal a useful locally relevant ingredient.',
        'It provides moderate protein and fibre along with residual oil, and is well accepted by cattle, sheep and goats. It is used as an economical component of rations, blended with other protein sources to meet the nutrient needs of the animal.',
      ],
      nutrition: 'Typically about 20% to 24% crude protein, with high fibre and variable residual oil depending on the extraction method.',
      usedIn: ['Dairy and beef cattle feeds', 'Sheep and goat feeds', 'Pig feeds (limited)', 'Blends with other protein meals'],
      considerations: 'It is fibrous and low in some amino acids such as lysine, which limits use in poultry and young pigs. It is prone to aflatoxin contamination if stored badly, so it must be kept dry and checked for quality.',
    }),
]
