// What each video is about, for the line under the player, and which of its stop's "Did you know?" facts (by position in facts.js)
// the video itself says, so those get an "In the video" tag. Written from each video's transcript; videos without one show
// only who made them. If a stop's facts are reordered or rewritten, check its numbers here too.
window.ABOUT = {
  // p.12 The story of the universe
  "GncYOf29uc4": ["Cartoon scientist Dr. Binocs explains the Big Bang: how the universe grew from something smaller than an atom, cooled down, and made the first atoms, stars and galaxies.", [0]],
  "i42otfB4xBk": ["Jessi and Squeaks explain how the Sun, Earth and the other planets formed billions of years ago from a giant spinning cloud of dust and gas, pulled together by gravity.", [2]],
  "wNDGgL73ihY": ["Kurzgesagt walks through the first moments of the universe: space stretching (not exploding), the first particles and atoms, the first stars switching on, and what we still don't know.", [0]],
  // p.14 Life on Earth
  "bIaq4HUD3jo": ["Jessi and Squeaks ride a pretend time machine back 3.5 billion years to meet stromatolites, layered rocks built by some of the first living things on Earth. You can still see them in Australia today.", [0]],
  "de1hiS_XjWg": ["TED-Ed searches for the place where life on Earth may have begun, and makes the case for hot, mineral-rich vents on the dark ocean floor.", []],
  "dO2xx-aeZ4w": ["TED-Ed tells how tiny ocean bacteria learned to make food from sunlight, filled the air with oxygen, nearly wiped out life on Earth, and then made complex life, including us, possible.", [0,1]],
  // p.16 The age of dinosaurs
  "2rcS9JuFICY": ["Jessi and Dino find out that dinosaurs didn't all live at the same time, and use their own bodies as a ruler to show the Triassic, Jurassic and Cretaceous periods.", []],
  "dktnOPfE7Dc": ["Learn Bright shows how paleontologists dig up dinosaur fossils and piece them together, and meets Sue the T. rex, Triceratops and turkey-sized Velociraptor.", [2]],
  "e5BFR-E-ae0": ["National Geographic covers the basics: when dinosaurs appeared, their two big families, giants and tiny ones, plant-eaters and pack hunters, and the birds that are their living descendants.", [2]],
  // p.18 End of the dinosaurs
  "oXwoy-Ce1ZE": ["Dino the bird and Jessi, calling in from Mexico, weigh up the clues: a giant asteroid, huge volcanoes in India, or both, and how a darkened sky left the dinosaurs without food.", [0]],
  "ogLFEq1X0RM": ["Learn Bright explains extinction: the sudden kind that ended the dinosaurs, the slow kind, how people can cause it, and simple ways kids can help endangered animals and plants.", [0]],
  "pjoQdz0nxf4": ["Kurzgesagt tells the end of the dinosaurs as a true-crime mystery: did the asteroid do it alone, or had giant volcanoes in India already poisoned the world?", [0,2]],
  // p.20 Human ancestors
  "_w3X87gCNjg": ["Jessi and Squeaks look at the human family tree and meet the Neanderthals, our close cousins who were built for Ice Age cold and died out about 40,000 years ago.", []],
  "mmCGDsFfl2c": ["Dr. Binocs explains human evolution over 7 million years, from early ape-like ancestors to tool-making, fire-using humans, and why only our species, Homo sapiens, is left.", [2]],
  "dGiQaabX3_o": ["Kurzgesagt zooms through the human story, from the other human species we once shared the Earth with to fire, language, farming and cities, and how new our modern life really is.", [2]],
  // p.22 Agriculture
  "bhzQFIZuNFY": ["A short clip from HISTORY's Mankind series. Experts explain how learning to farm let people settle down, and how that led to towns, leaders, property and, in time, cities and empires.", [1]],
  "teavjYI9pdM": ["A quick classroom-style explainer on the Neolithic Revolution: how farming let people settle down, build homes, take on special jobs and trade with faraway places.", []],
  "i6teBcfKpik": ["TED-Ed follows corn from a nearly inedible wild grass in Mexico 9,000 years ago to the most-grown crop on Earth, and the problems that come with growing so much of one kind.", []],
  // p.24 Working with metals
  "DsUID4Oz73o": ["A calm, narrated tour of the Bronze Age: why mixing copper and tin made better tools, how trade spread across the world, and how it all gave way to the Iron Age.", [1]],
  "jLsWmAR0m_E": ["A local British museum shows real Bronze Age axes and a stone mold, and explains how metal you could melt and reuse changed life in Britain about 4,000 years ago.", []],
  // p.26 Towns and cities
  "IAQAAJo1fI0": ["FreeSchool explains how hunter-gatherers became farmers, how farming villages grew into towns and cities, and what makes a civilization, starting in Mesopotamia over 7,000 years ago.", []],
  "XBk9KywTIgk": ["TED-Ed tells the story of Sumer, where people built the first cities out of river mud, invented the potter's wheel and the first writing, and ran schools for scribes.", [2]],
  "mrxh2H7JlP8": ["History with Cy explores Çatalhöyük in Turkey, a town from about 10,000 years ago where houses were packed so tightly that people walked on the roofs and climbed in through the ceiling.", [1]],
  // p.28 The story of the wheel
  "6UfoM4UbLak": ["Dr. Binocs rolls from logs under heavy sledges to the potter's wheel, the first wooden cart wheels, speedy spoked chariots and, finally, air-filled rubber tires.", [0,1,2]],
  "XzG1aPw7YBc": ["A short cartoon about the wheel: how rolling logs may have given someone the idea, how potters used it first, and how it came to move carts and so much more.", [1]],
  "vC8xmdA4Dmg": ["A narrated look at how farming led to the first cities in Mesopotamia, and how the wheel, first for moving goods and then for chariots, changed travel forever.", []],
  // p.30 The written word
  "j7nM3YOwu00": ["A young presenter at the British Museum shows real clay tablets, Egyptian hieroglyphs, mystery seals from the Indus Valley and Roman letters, and tries writing like a scribe.", [0,1]],
  "dbu9yhzbpy4": ["A cartoon history of writing, from picture signs and wedge-shaped cuneiform to Egyptian papyrus, Gutenberg's printing press and the screens we write on today.", [0]],
  "Z8dZSySRX_g": ["TED-Ed tells how the Rosetta Stone, with the same message in three scripts, helped scholars like Champollion finally read Egyptian hieroglyphs in 1822, and what it actually says.", []],
  // p.36 Mesopotamia
  "QeZKNjo-exs": ["A cartoon tour of Mesopotamia: walled city-states with ziggurats in the middle, farms watered by the rivers, the empires that ruled it, and the first writing on clay.", [0]],
  "xVf5kZA0HtQ": ["National Geographic shows why Mesopotamia is called the cradle of civilization: the first cities, ziggurats, counting in 60s, the seven-day week, and cuneiform writing.", [0,1]],
  // p.38 Fun and games
  "aob7rM5PV5A": ["TED-Ed follows toys through history, from a Roman girl's jointed doll to toy carts, whistles, balls and board games. Kids have always played in much the same ways.", []],
  "SjH_XRV1EWE": ["A quick look at the oldest games we know: board games carved into stone floors, ancient dice, the Royal Game of Ur, Egyptian senet, and Greek yo-yos.", [0,1,2]],
  "wHjznvH54Cw": ["British Museum curator Irving Finkel shows how he found the rules for the Royal Game of Ur on an old clay tablet, and the 4,500-year-old board they belong to.", [0]],
  // p.40 Ancient Egypt
  "8_Tbv7anqXk": ["A cartoon tour of ancient Egypt: life along the Nile, gods with animal heads, pharaohs like Tutankhamun, and why Egyptians built pyramids and made mummies.", []],
  "Y_RMjmMtjOY": ["Dr. Binocs explains, step by step, how Egyptian priests made a mummy: removing the organs, drying the body with salt, and wrapping it in linen. A little gross in places.", []],
  "hO1tzmi1V5g": ["National Geographic covers ancient Egypt's 3,000 years: pharaohs and gods, pyramids and mummies, and inventions like the 365-day calendar, hieroglyphs and papyrus.", []],
  // p.42 Ancient monuments
  "qOlnIF6z2mA": ["Dr. Binocs looks at how Pharaoh Khufu's workers may have built the Great Pyramid without wheels or cranes, including the trick of wetting the sand to drag giant stones.", [0]],
  "wf7xwHFuH2o": ["FreeSchool explores Stonehenge: how old it is, the giant stones dragged there (some all the way from Wales), how they line up with the sun, and what it may have been for.", [2]],
  "fJBlEPOj4Fk": ["TED-Ed follows the architect Hemiunu as 25,000 paid workers quarry, haul and shape more than 2 million stone blocks to build Pharaoh Khufu's Great Pyramid.", [0,1]],
  // p.44 The Great Sphinx
  "ExM6MiWDlnk": ["FreeSchool explains what we know about the Great Sphinx: who it probably honors, how it was once painted, where its nose went, and how it spent centuries buried in sand.", [0,1,2]],
  "G1WWkr_DvGE": ["Two boys visit the Great Sphinx with a tour guide, who explains who it may show, why Napoleon didn't shoot off its nose, and how it spent centuries buried in sand.", [0,1,2]],
  "Ex4sSRPcDuw": ["Smithsonian Magazine looks at the mysteries of the Great Sphinx: how it was carved out of the bedrock, its lost paint and beard, centuries buried in sand, and how it lines up with the sun.", [0,1]],
  // p.46 Sharing stories
  "wTxW7sa2rtg": ["Learn Bright introduces the Greek myths: how stories of gods like Zeus and Helios explained thunder and the sun, plus monsters like Medusa, with a quick quiz at the end.", []],
  "pMdJxVjZMRI": ["TED-Ed retells the Greek myth of Pandora, whose curiosity got the better of her when she opened a forbidden box and let out all the world's troubles, and then hope.", []],
  // p.48 Jewelry
  "4JVVA4Bncn4": ["Art teacher Ms. Potts, who used to be a jeweler, shows why people have always worn jewelry, from Neanderthal eagle-talon necklaces and Egyptian gold to friendship bracelets.", []],
  "Of3on3bru7Q": ["An expert at the auction house Christie's shows real ancient gold jewelry, including Etruscan earrings, a Greek olive wreath and a Celtic neck ring, and how it was made.", []],
  // p.50 The story of sport
  "uSf7-LsmU3Y": ["FreeSchool tells the story of the Olympics, from a single footrace in ancient Greece to today's Summer and Winter Games, and what the rings and the torch stand for.", [0,1]],
  "KTrWQOztqoo": ["Behind the News tells the story of the ancient Olympics, from a single sprint in 776 BC to boxing, wrestling and chariot races, olive crowns for winners, and the modern Games in 1896.", [0,1]],
  // p.52 Ancient Greece
  "RchSJSJAbc0": ["Learn Bright tours ancient Greece: Athens and Sparta, the first Olympics, democracy, columns and plays, and what school, food and home life were like for Greek families.", [0]],
  "IUZKg3KdtYo": ["A cartoon tour of ancient Greece: independent city-states like Athens and Sparta, the first democracy, great thinkers like Socrates, the Olympics, and the Greek gods and heroes.", [0]],
  "6bDrYTXQLu8": ["National Geographic sums up ancient Greece: its many city-states, the first democracy in Athens, Sparta's soldiers, the Olympics, and the art, ideas and words it passed on to us.", [0]],
  // p.54 Mathematics
  "wz_GGGgHs0w": ["A cartoon look at how counting began, from Egyptian number symbols to the Inca's knotted strings, and how our digits traveled from India through the Arab world to Europe.", [1]],
  "cZH0YnFpjwU": ["TED-Ed explains how people have written numbers, from tally marks and Roman numerals to the Hindu-Arabic system with zero that we use today, and why we count in tens.", [0,1]],
  "G8cbIWMv0rI": ["Carl Sagan, in a classic clip from Cosmos, shows how Eratosthenes used sticks, shadows and a man pacing out the distance to measure the whole Earth 2,200 years ago.", [2]],
  // p.56 The story of democracy
  "f-feDZRxJKw": ["A cartoon history of democracy, from citizens voting in ancient Athens to the French Revolution and the long struggle for everyone, women included, to get a vote.", [0,1]],
  "CmrO44KM7yk": ["Learn Bright explains how democracy works, using friends picking a game and a pretend ice-cream tax, and the difference between voting on everything, as in ancient Greece, and electing representatives.", [0]],
  // p.58 Rise of the Celts
  "Di_L5ZWpZOY": ["Five surprising facts about the Celts: the Romans named them, they wore the first trousers, Queen Boudicca fought Rome, they made early soap, and leaders were buried ready for a feast.", []],
  "lmYQMJi30aw": ["TED-Ed tells the story of the Celtic tribes, fearless warriors in gold neck rings with poets and druids, and how Rome conquered all of them except Ireland. It mentions their grisly war trophies.", [0,2]],
  // p.60 The Persian Empire
  "NUf1jHUCc1A": ["A calm, narrated story of Cyrus the Great, who built the huge Persian Empire and let the peoples he ruled keep their own ways, and of the roads and palaces of the kings after him.", [0,2]],
  "eCTyU3G5FEo": ["A narrated history of how Cyrus the Great built the Persian Empire by letting conquered peoples keep their ways, and how roads, relay riders and one shared money held it together.", [0,2]],
  // p.62 The Battle of Issus
  "hsyIzelwxUQ": ["Dr. Binocs tells Alexander the Great's story: lessons with Aristotle, taming his horse Bucephalus, and conquering an empire that reached all the way to India.", [2]],
  "j_K7588OVPE": ["Bedtime History tells Alexander the Great's story, from taming his horse Bucephalus and learning from Aristotle to conquering Persia, founding Alexandria, and dying young at 32.", [2]],
  // p.64 The story of philosophy
  "lTSPVKwJTA0": ["A calm story of Socrates, who taught by asking questions in the streets of Athens: his famous method, his trial, and how his student Plato kept his ideas alive.", [1]],
  "enr-AvvU398": ["A teacher introduces five Greek philosophers (Socrates, Plato, Aristotle, Epicurus and Zeno) with each one's big idea and a famous quote.", [1]],
  // p.66 The story of sculpture
  "tSG4oleq_us": ["In this cartoon, Mati and Dada visit Michelangelo at a marble quarry, and he shows them how he frees figures from the stone and makes still marble look like it's moving.", []],
  "ppnrpB0DUNA": ["A short art lesson on ancient Egypt: carvings that stand out from the wall, colors with special meanings, and art made to honor pharaohs and gods.", []],
  // p.68 Early Imperial China
  "mP5p4QbvPtc": ["TED-Ed tells the story of China's first emperor and the army of clay soldiers, horses and chariots made to guard him after death, found by farmers in 1974.", [0,1,2]],
  "RsUE-ZtcUFg": ["National Geographic tells how farmers found China's clay army in 1974, and why the first emperor had thousands of one-of-a-kind soldiers made to guard him after death.", [0,1,2]],
  // p.70 Measuring time
  "74I0M0RKNIE": ["TED-Ed traces telling time from shadow-casting sundials, candles and hourglasses to mechanical and atomic clocks, and explains how trains led to time zones.", [1,2]],
  "s4ANp-J624I": ["A friendly cartoon guide to telling time, from Egyptian sundials and water clocks to church clocks with gears, Galileo's pendulum, pocket watches and smartwatches.", [1]],
  // p.72 The Roman Empire
  "Wo0KujQEJ_s": ["Learn Bright follows Rome from a small town on seven hills to a republic and then an empire, with Julius Caesar, Augustus, the Roman gods, and gladiators in the Colosseum.", []],
  "b9bcohqsTGk": ["A cartoon guide to ancient Rome: the legend of Romulus and Remus, the republic and then the empire, patricians, plebeians and enslaved people, legions, roads and aqueducts.", [0]],
  // p.74 Roman technology
  "itXhx2x7x6o": ["A calm, narrated tour of Roman know-how: layered stone roads, concrete that set underwater, arches, aqueducts, cranes, heated floors and sewers.", [0,1,2]],
  "i8jx6spROL8": ["Bex and Dan go on a road trip through the history of roads, from prehistoric tracks and straight Roman roads to milestones, toll gates and driverless cars.", []],
  // p.76 Religion
  "DrM5xutxHrU": ["A simple introduction to six world religions (Judaism, Christianity, Islam, Buddhism, Hinduism and Sikhism) and how people practice them through prayer, meditation and festivals.", []],
  "4ylbXjN7yjU": ["Twinkl gives a short, friendly introduction to five world religions (Christianity, Islam, Hinduism, Buddhism and Judaism) with their holy books and holidays.", [0]],
  // p.78 The destruction of Pompeii
  "tZ4lAWXLW9g": ["A calm, narrated walk through Pompeii before and after Mount Vesuvius buried it in ash, and what its snack bars, paintings and kids' graffiti tell us about Roman life.", [0,1]],
  "9klE-iUxX0c": ["TED-Ed follows three siblings through the eruption of Mount Vesuvius as each chooses a way to escape Pompeii, and not all of them make it. Intense; best watched together.", [0]],
  // p.80 Fun and festivals
  "_ztsyv0WLWE": ["A rhyming picture-book read-aloud that visits festivals around the world, from Lunar New Year and Carnival to Nowruz, Passover, Eid, the Day of the Dead and Diwali.", [0]],
  "1z7Xz8dnCq4": ["A quick trip to ten celebrations around the world, including Diwali, Chinese New Year, Carnival in Brazil, Holi, Eid al-Fitr, Hanami in Japan and Midsummer in Sweden.", [0]],
  // p.82 Ancient Indian empires
  "KhDY4KJuvc0": ["MocomiKids explores the Indus Valley Civilization of about 5,000 years ago and its planned brick cities like Mohenjo-daro, with wells, covered drains and the Great Bath.", []],
  // p.84 The transformation of the Roman Empire
  "UD6tpkKW7ew": ["A calm, narrated history of Constantinople, the Roman capital where Europe meets Asia, from its great walls and Hagia Sophia to 1453, when the Ottomans took it and it became Istanbul.", [0,1,2]],
  "Okph9wt8I0A": ["TED-Ed tells how the Roman Empire lived on for 1,000 more years in Constantinople, with roaring golden lions by the throne, Hagia Sophia's huge dome and great scholars, until 1453.", [0,1]],
  // p.90 China's Golden Ages
  "1UkBLC8a1Bc": ["Simple History explains China's Four Great Inventions (paper, printing with movable type, the compass and gunpowder) and how each one changed the world.", [0]],
  "omFTIO6xEmk": ["Equatoro explains China's Four Great Inventions (the compass, gunpowder, paper and woodblock printing) and how each one changed life around the world.", [0]],
  // p.92 Early Islamic empires
  "rQ0EKiCt6H8": ["TED-Ed tells how the Islamic Empire grew from Arabia to stretch from Spain to India, how Baghdad became a rich meeting place of cultures, and how it fell to the Mongols in 1258.", []],
  "JZDe9DCx7Wk": ["A short film where a mysterious librarian sends schoolkids back to the \"Dark Ages\" to meet inventors of the Muslim world, like Ibn al-Haytham, Abbas ibn Firnas and al-Jazari.", []],
  // p.94 Empires of the Americas
  "VtJK6AStK50": ["Bedtime History visits the Maya: jungle cities with stone step pyramids, a tricky ball game played with the hips, a 365-day calendar, and the mystery of why their cities emptied.", [0]],
  "shuRg1oTI7c": ["A fast history rap about the Maya, Aztecs and Inca: pyramids, chocolate, calendars and zero, a city on a lake, mountain roads and Machu Picchu. It mentions human sacrifice.", [0,1,2]],
  // p.96 Germanic peoples
  "FJ2obneWbIY": ["In this puppet show, Hedgehog (who mostly wants tea and biscuits) learns who the Anglo-Saxons were, why they came to Britain, and how to spot their words in English place names.", [1]],
  "CH8JcBKb1W4": ["Horrible Histories spoofs a TV property show as Saxon brothers Hengist and Horsa \"negotiate\" for Kent and then much of England. Silly, with a very unfriendly dinner party.", []],
  // p.98 Medieval Europe
  "3zqOXN-cuqI": ["Five things to know about the Middle Ages: how long they lasted, the feudal pyramid from king down to peasant, knights, castles, and busy markets with their craft guilds.", [0,1]],
  "yq3q7KMlvw0": ["Simple History shows everyday life in a medieval village: serfs farming a lord's land, wattle-and-daub houses, bread and pottage, church bells, and how the Black Death changed everything.", [1]],
  // p.100 The Battle of Crécy
  "i0NXWfCLIfI": ["Extra History sets up the Hundred Years' War: how young Edward III took charge of England, and how fights over land, wool and the French crown pushed England and France into war.", [0]],
  "ku8xKk-GAVM": ["BattleStack maps out the Battle of Crécy in 1346, showing how England's longbow archers beat a much bigger French army of knights early in the Hundred Years' War.", [0]],
  // p.102 The Vikings
  "gA6b-H7VM3U": ["A boy finds himself aboard a real Viking longship, where a Viking shows him the clothes, sword, shield and ship they'll take across the sea to look for better farmland in England.", [0]],
  "kge0c2mNmRQ": ["TED-Ed shows how Viking longships grew out of simple log canoes into light, fast ships with sails that could cross oceans, land on beaches and sail far up rivers.", [0]],
  // p.104 The Crusades
  "ox7R8GEBnco": ["A teacher walks through the First to Fourth Crusades and the Children's Crusade, including Saladin and Richard the Lionheart, and reads first-hand accounts of the brutal fighting on both sides.", [0]],
  "0LZOXYwRVq4": ["Bedtime History explains the Crusades from 1096 on: why European armies marched to Jerusalem, Saladin and Richard the Lionheart, and the hardship and lasting effects they caused.", [0]],
  // p.106 Kingdoms of Southeast Asia
  "b4nQWCV2bKE": ["A narrated history of the Khmer Empire, from its first king in 802 to the building of Angkor Wat, the great king Jayavarman VII, and the wars that ended it in 1431.", [0]],
  "oumxCLy_N9k": ["Extra History tells how the Khmer god-kings built Angkor, maybe once the world's biggest city, by taming the monsoon with giant reservoirs and canals. Made for older kids and grown-ups.", [0,1]],
  // p.108 Angkor Wat
  "MSpPUFdYpJI": ["National Geographic flies over Angkor, the Khmer Empire's capital in the forests of Cambodia, with its stone temples and the canals and reservoirs that watered a giant city.", [2]],
  "gISEEOmabFQ": ["Smithsonian Channel shows the clever engineering that keeps Angkor Wat standing, including light, porous stone inside its walls and a giant moat whose water helps hold it up.", []],
  // p.110 Rise of the samurai
  "I8-4VaZFEDU": ["Mr. Q explains who the samurai were, from their code of honor and their katana swords to women warriors, and how the age of the samurai ended in 1868.", [0,1]],
  "wy0mU-SbOrw": ["TED-Ed spends a day in 1800 with 16-year-old samurai Banshirô, who trains with swords and books and hopes to go to Edo to secretly become a painter. It briefly mentions ritual suicide.", [0,2]],
  // p.112 Castles and forts
  "AesgRREuCQI": ["FreeSchool explains what makes a castle a castle: early wooden ones on earth mounds, then stone walls, towers, moats, portcullises and murder holes, until cannons made them useless.", [0,1]],
  "ZWcCCS8NIgU": ["Simple History takes a castle apart layer by layer: moats, walls and gates, the keep and great hall, the treasury, the chapel, and even the long-drop toilets.", [0,1,2]],
  // p.114 Early North America
  "YqU9kKEgJag": ["Bedtime History follows the first people to reach North America over a land bridge from Asia, and visits Mississippian mound cities, Hohokam canals in Arizona and Mesa Verde's cliff homes.", [2]],
  "esqXKnIC_MM": ["Colossal Cranium explores Cahokia, a city of the Mississippian people that around the year 1100 was bigger than London, with over 100 earth mounds, and the mystery of why it emptied.", [1]],
  // p.116 Settling the Pacific
  "m8bDCaPhOek": ["TED-Ed shows how Polynesian navigators crossed the Pacific in double-hulled canoes with no instruments, reading the sun, stars, ocean swells, clouds and birds.", [0]],
  "mk1gYmPjdyY": ["Great Big Story sails aboard Hōkūleʻa, a Polynesian voyaging canoe with no engine or instruments, as young navigators learn to find their way by the sun, stars and swells.", [0,2]],
  // p.118 African kingdoms
  "O3YJMaL55TM": ["TED-Ed tells the story of Mansa Musa, the king of Mali whose gold-laden trip to Mecca made him famous, and who turned Timbuktu into a great center of learning.", [0,1]],
  "4-Un2xx6Pzo": ["Extra History tells how Mansa Musa made his famous gold-filled pilgrimage in 1324 to put Mali on the map, then brought scholars home to turn Timbuktu into a center of learning.", [0,1]],
  // p.120 The Mongol Empire
  "QXrGSrYw_CU": ["Dr. Binocs tells how a boy named Temujin united the Mongol tribes as Genghis Khan and built a giant empire that reopened the Silk Road, along with the destruction it caused.", [0,1]],
  "wUVvTqvjUaM": ["TED-Ed tells how Temujin united the nomads of the steppe as Genghis Khan, and how his family built the biggest land empire ever, with Silk Road trade booming, until it split into four.", [0,1,2]],
  // p.122 Maps and map-making
  "77hLX8jO6e4": ["TED-Ed looks at old world maps from Europe, the Islamic world and China, and their big mistakes, from sea dragons to an \"Island of California\" and a magnetic rock at the North Pole.", [1,2]],
  "UZaTK7B0doE": ["Learn Bright explains how to read a map: landmarks, symbols and the legend, the compass rose, and how a map shrinks a big place down to fit in your pocket.", []],
  // p.124 Plagues and epidemics
  "myw23rX5mVo": ["Dr. Binocs explains the Black Death of the 1340s: how it spread, what people wrongly blamed, and how scientists later found the real cause, a germ carried by rat fleas.", [0,2]],
  "LMt8xm4t7XQ": ["TED-Ed explains the beaked plague-doctor costume (from the 1600s, not the Black Death), what doctors then thought caused plague, and some painful old treatments. Some gross details.", [0,2]],
  // p.126 Weapons and armor
  "u-PWrg4JlKM": ["A jokey \"infomercial\" from The Met museum, where an armor expert shows how steel, rounded shapes and ridges helped knights' armor shrug off blows in a joust.", []],
  "pG0dMxybV_8": ["Simple History explains how a boy trained from page to squire to knight, the code of chivalry, armor from chain mail to full plate, and tournaments and jousts.", []],
  // p.132 Technology of writing
  "Bhbl0eDGmsA": ["A narrated history of printing, from monks copying books by hand to Gutenberg's press, which made books cheap enough to spread new ideas all over Europe.", [0,2]],
  "DLctAw4JZXE": ["A museum guide demonstrates a working copy of Gutenberg's printing press: inking the metal type with leather ink balls, lining up the damp paper, and pulling the big lever.", [0]],
  // p.134 Ships
  "7FfBKYx2sIM": ["A simple tour of ships today: giant cargo ships, cruise ships, warships and old tall ships, plus the main parts of a ship and how it keeps people safe at sea.", []],
  "_BOx57WjKKg": ["A quick tour of famous ships through history, from Egyptian reed boats, Greek triremes and Viking longships to Chinese junks, the Santa Maria, the Titanic and giant container ships.", []],
  // p.136 Renaissance
  "v1zeIrO50mY": ["Two kids ride a talking time machine to Renaissance Italy, where they meet Michelangelo at the Sistine Chapel and Leonardo da Vinci with the Mona Lisa.", [2]],
  "GOjBbkGiwq0": ["Cosimo, a cartoon guide from the National Gallery of Ireland, shows what changed in Renaissance art, from flat gold paintings to lifelike perspective, oil paint, Leonardo and Michelangelo.", [0]],
  // p.138 Exploring the world
  "x0S_5pViw40": ["A fast-paced overview of the Age of Exploration, from Portugal's voyages around Africa and Columbus to the Columbian Exchange, with a frank section on the Atlantic slave trade.", [2]],
  "sGeXtUZQScc": ["A narrated overview of the Age of Exploration: why Europeans sailed for new routes, better ships and tools, Columbus, Magellan and da Gama, and the harm it brought to Indigenous peoples.", [0,2]],
  // p.140 Voyages of Zheng He
  "PN6W8kPUkFI": ["PBS tells how Zheng He, a captured boy who became the emperor's trusted adviser, led a giant Chinese fleet as far as Africa, and why China then tried to forget him.", [0,1,2]],
  "ZTCVaHn9b88": ["Geo History follows Zheng He's seven voyages from 1405 to 1433 on an animated map, from Java and Ceylon to Arabia and Africa, and why China then stopped sailing. It mentions that he was made a eunuch as a boy.", [0,1,2]],
  // p.142 The story of painting
  "f2Ue-JjY1Ow": ["Art teacher Miss C runs through a timeline of art, from cave paintings and the Renaissance to Impressionism, Picasso and today, with what was happening in the world at each step.", []],
  "kffZAGZLzZg": ["A short art lesson that visits the Middle Ages, with knights, castles and stained glass, then the Renaissance, with Leonardo's Mona Lisa, Michelangelo's David and Dürer's animals.", []],
  // p.144 The Reformation
  "FhGGjRjvq7w": ["A funny animated history from National Geographic: Martin Luther's thunderstorm promise, his 95 Theses, hiding out to put the Bible into German, and how his ideas split the Church in two.", [0,2]],
  "tox2TflUH90": ["Martin Luther's story acted out with Playmobil figures: his thunderstorm promise, nailing his complaints to the church door, hiding in a castle, and putting the Bible into German. Told from a Christian point of view.", [0,1]],
  // p.146 Spanish America
  "8OaDpRKnE7Y": ["A quick, detailed account of how Hernán Cortés and his Native allies brought down the Aztec Empire, including the massacres, the siege of the capital, and the smallpox that killed so many.", [2]],
  "xU909OfBb8U": ["A narrated overview of how Spain explored and conquered the Americas, from Columbus to Cortés and Pizarro, how it ruled its colonies, and how they won independence in the 1800s.", [2]],
  // p.148 The fall of Tenochtitlán
  "TUs56Z3xJG8": ["Bedtime History visits Tenochtitlán, the Aztec city built on an island in a lake, with its floating gardens, markets, temples and schools, and tells how it fell to the Spanish in 1521.", [0,1]],
  "i_1FB6lwiwY": ["Kidsview shares facts about the Aztecs: their huge empire, homes and schools, chocolate drinks, a ball game with stone hoops, the Day of the Dead, and the eagle on Mexico's flag. It mentions human sacrifice.", []],
  // p.150 The Ottoman Empire
  "KYoxGR1SD9I": ["A calm, narrated history of the Ottoman Empire, from Osman in 1299 and the capture of Constantinople to Suleiman the Magnificent and the empire's end after World War I.", [0,1]],
  "BnOS90_cwQA": ["TED-Ed tells how Osman's small Turkish state grew into the vast Ottoman Empire, with its Janissary soldiers, the giant cannon that took Constantinople in 1453, and Istanbul's golden age.", [0,1,2]],
  // p.152 Astronomy
  "JI36dazqEwU": ["Learn Bright tells Galileo's story: the swinging chandelier, his better telescope, Jupiter's moons, and how backing the idea that Earth circles the Sun got him in trouble with the Church.", [0,1]],
  "I2xARpL4J7Q": ["An astronomy teacher explains how Copernicus put the Sun at the center, and how Galileo's telescope found craters on the Moon, phases of Venus and Jupiter's moons. For older kids.", [0,1]],
  // p.154 Big battles
  "tjiEnoT2YHk": ["Twinkl explains how Athens and Sparta differed, how the outnumbered Athenians beat the Persians at Marathon in 490 BC, and the legend of the runner Pheidippides.", [0]],
  "O7boahKNrBo": ["A narrated account of the Battle of Hastings in 1066: King Harold's rush south after another battle, the English shield wall on the hill, the Normans' fake retreats, and William crowned king.", [1]],
  // p.156 The Battle of Adwa
  "JYLlYiNxn2U": ["A dramatic retelling of 1896, when Emperor Menelik II and Empress Taytu led Ethiopia's army to defeat Italy at Adwa and keep their country free.", [0,1,2]],
  "1Hln0GjuUQk": ["The Armchair Historian explains how Ethiopia's Emperor Menelik II, with a huge, well-armed army, beat Italy at Adwa in 1896 and kept his country free. Made for older kids and grown-ups.", [0,1]],
  // p.158 Edo Japan
  "DNPUtQiv08E": ["A quick, grown-up overview of Edo Japan: the Tokugawa shoguns, a strict social order, booming cities, and 250 years of keeping foreigners out until American ships arrived in 1853.", [0,1]],
  // p.160 Colonial North America
  "vd0fMpAIs1s": ["Kids Academy names the 13 American colonies, explains how life differed in the New England, middle and southern colonies, and how they became the first states.", [0,2]],
  "UUmi3iNMawo": ["Learn Bright tours the 13 British colonies region by region, from the Pilgrims at Plymouth and William Penn's Pennsylvania to the tobacco farms of the South, worked by enslaved people.", [1,2]],
  // p.162 A scientific revolution
  "l_HnEZf7BB4": ["Jessi celebrates Isaac Newton's birthday by explaining gravity, from a falling apple to the Moon circling Earth, and whether the famous apple really bonked him on the head.", [0,1]],
  "SFt1Z0HvZjI": ["A quick look at Isaac Newton's life: finding that white light is a mix of colors, the falling apple that got him thinking about gravity, his three laws of motion, and his mirror telescope.", [0,1]],
  // p.164 Enslavement in the US
  "5zmOwgqkcec": ["Learn Bright tells Harriet Tubman's story: born into slavery, escaping north on the Underground Railroad, going back to guide others, and serving as a nurse, scout and spy in the Civil War.", [1]],
  "HDLfEBQDNAc": ["Scholastic explains the Underground Railroad, the secret network that helped enslaved people escape north, and how Harriet Tubman escaped and then went back again and again to lead others to freedom.", [0,1,2]],
  // p.166 The Mughal Empire
  "I6i8cLXPGQE": ["FreeSchool tells the story behind the Taj Mahal, the white marble tomb Emperor Shah Jahan built for his wife, with 20,000 workers, 1,000 elephants and gardens made to catch reflections.", [0,1]],
  "fMsmCxIEQr4": ["TED-Ed tells the 300-year story of the Mughal Empire in India, from Babur's cannons and Akbar's open religious debates to the Taj Mahal, Nur Jahan the tiger-slayer, and the British takeover.", []],
  // p.168 Ming and Qing China
  "PN7kzQmSWx8": ["A narrated tour of Beijing's Forbidden City, the walled palace where 24 emperors lived for 500 years, from its moat and Dragon Throne to how it became a museum.", []],
  "g5D2Niz3LMI": ["A narrated tour of Beijing's Forbidden City: who built it, its 980 buildings and wide moat, what its yellow roofs and favorite numbers meant, and how it became a museum.", [0]],
  // p.170 Chemistry
  "aowghaUvP6Q": ["FreeSchool tells Marie Curie's life story: studying in secret in Poland, discovering radium and polonium with Pierre, winning two Nobel Prizes, and building X-ray trucks in World War I.", [0]],
  "xazQRcSCRaY": ["TED-Ed follows the 2,400-year search for the atom, from Democritus's guess in ancient Greece to Dalton, the discovery of the electron and nucleus, and today's quantum model.", []],
  // p.172 The story of dance
  "wTKKnhmNMu0": ["A dance company traces dance from cave paintings through ancient Mesopotamia, Egypt, China, India, Greece and Rome, with clips showing what those dances may have looked like.", [0,2]],
  "OEekFTj5PvU": ["TED-Ed explains how ballet grew out of the manners and parties of Renaissance royal courts, and how King Louis XIV of France, the Sun King, danced in dozens of ballets and made it an art.", [1]],
  // p.174 The Golden Age of Piracy
  "SX7zKiwqxQA": ["Bedtime History tells the story of Blackbeard, who lit smoking fuses under his hat to scare ships into giving up, blockaded Charleston, and met his end in 1718.", [0,1]],
  "p3fztn2roaw": ["National Geographic counts down five pirate legends that turn out to be true, from the Jolly Roger and peg legs to marooning and the pirate code. Some rough pirate behavior.", []],
  // p.180 The Enlightenment
  "_Ws8AxXPZaY": ["A teacher introduces the big thinkers of the Enlightenment (Voltaire, Locke, Rousseau, Kant, Mary Wollstonecraft and Montesquieu) and their ideas about rights and fair government.", [0,2]],
  "d7jmfXkeCPQ": ["Britannica explains the Enlightenment, the 1600s and 1700s movement that prized reason, science and freedom, and how its ideas shaped the Declaration of Independence.", [0,2]],
  // p.182 The Great Lisbon Earthquake
  "IVLGo_SgRfs": ["BBC Reel tells how the 1755 earthquake, tsunami and fire destroyed Lisbon, and how the questions asked afterward helped start the science of earthquakes and new ways of thinking.", [0,2]],
  "_b8ifOJdGl8": ["An animated map of the 1755 Lisbon earthquake, tsunami and fires, followed by a grown-up reflection on how people tried to explain why it happened. Some descriptions are grim.", [0]],
  // p.184 Natural disasters
  "ay416AyoqRU": ["Learn Bright runs through ten kinds of natural disaster, from blizzards and droughts to earthquakes, hurricanes, tornadoes, tsunamis and wildfires, and what causes each one.", []],
  "mr3Hc6yOrhg": ["Smile and Learn explains seven kinds of natural disaster (earthquakes, volcanoes, tsunamis, tornadoes, hurricanes, wildfires and floods) and how scientists help us get ready for them.", [2]],
  // p.186 The story of music
  "7ldOdLx9Ix0": ["A jokey, fast-paced trip through music history, from Stone Age bone flutes and church chants to Mozart, rock and roll, the Beatles, hip-hop and streaming.", [0]],
  "lExW80sXsHs": ["The a cappella group Pentatonix sings a medley of famous songs through the years, from old tunes and big-band hits to rock, pop and hip-hop, using only their voices.", []],
  // p.188 Imperial Russia
  "3tBNr2gjAA0": ["A fast, joke-filled history, made for older kids and grown-ups, of Russia's early Romanov tsars and Peter the Great, who built a navy and a new capital, St. Petersburg.", [0,1]],
  "q3v5NhXkOvs": ["History Abridged gives a quick, jokey history of Peter the Great, who toured Europe to learn shipbuilding, built Russia a navy and schools, and even taxed beards. It mentions mass executions.", [1]],
  // p.190 Birth of the US
  "mXE1l_7ytG8": ["Lesson Boosters explains the American Revolution: unfair taxes, the Boston Tea Party, the first shots at Lexington, the Declaration of Independence, and victory in 1783.", [0,2]],
  "Q2pETzEsaoA": ["Colonial Williamsburg races through the American Revolution in three minutes, from taxes and the Boston Tea Party to the Declaration of Independence, the war, and George Washington as first president.", [0,2]],
  // p.192 Crossing the Delaware River
  "ioBjYhmANaU": ["Bedtime History puts you in the boats on Christmas night 1776, as George Washington's tired army crosses the icy Delaware River to surprise the soldiers at Trenton.", [0,1]],
  "6M5sYsiVG_Q": ["A historian by the Delaware River explains what Washington's famous Christmas-night crossing in 1776 was really like, and why the surprise win at Trenton saved the Revolution.", [0,1,2]],
  // p.194 The Industrial Revolution
  "nl_-6WPQ4Sg": ["Learn Bright explains how work moved from homes to steam-powered factories, with inventions like the cotton gin, sewing machine, telegraph and railroads, and the problems crowded cities brought.", [0,1,2]],
  "Xh_Lk7kDrUI": ["A cartoon guide to the Industrial Revolution: James Watt's steam engine, factories replacing small workshops, the first trains and steamboats, and workers' long fight for fair hours and an end to child labor.", [0,1,2]],
  // p.196 First Nations Australians
  "T_4sM72nWNI": ["Laurie brings his grandmother to show-and-tell, and she shares a Dreamtime story and how Aboriginal people have cared for the land of Australia for 60,000 years.", [0]],
  "qndZ4eYmc5M": ["A young sailor on Captain Cook's ship watches a Gadigal family on the shore of Sydney Harbour fish, cook, carve rock art and dance, as their people had for over 50,000 years.", [0]],
  // p.197 The colonization of Australia
  "MnUNEkMsjfY": ["Behind the News meets two young convicts sent from London for small thefts, and follows the First Fleet's long voyage to Sydney Cove in 1788, on land Aboriginal people had lived on for tens of thousands of years.", [0,1]],
  "UKHehoqz34A": ["Bedtime History tours Australia: the outback and Great Barrier Reef, the first people who arrived 65,000 years ago, the British convict settlers of 1788, and its one-of-a-kind animals.", [0,1]],
  // p.198 The storming of the Bastille
  "mgqgpRdIYOs": ["History Crunch explains why an angry crowd stormed the Bastille, a royal prison in Paris, on July 14, 1789, and how it sparked the French Revolution.", [0,2]],
  "d-r1o5w0t44": ["Ronen's Playhouse explains why the people of Paris stormed the Bastille prison on July 14, 1789, and how France celebrates Bastille Day today with parades, fireworks and picnics.", [0,1,2]],
  // p.200 The French Revolution
  "IIDfZ-8o4jE": ["A cartoon guide to the French Revolution: a king with all the power, the storming of the Bastille, the Declaration of the Rights of Man, and the end of the monarchy.", [0]],
  "PBn7iWzrKoI": ["TED-Ed explains what caused the French Revolution, from unfair taxes and the storming of the Bastille to the end of the king and the Reign of Terror. It's frank about the executions.", [0,1]],
  // p.202 Medicine
  "1hIq_FSdyyE": ["A narrated history of medicine, from Egyptian scrolls and Hippocrates to handwashing, germs, anesthesia, penicillin, body scans and vaccines.", [0,1,2]],
  "fuEuaSmDOec": ["English Heritage shows that medieval medicine wasn't all nonsense: the four humors, sniffing pee, leeches, herbal remedies, prayers to saints, and barber-surgeons who also cut hair. A little gross.", []],
  // p.204 The Napoleonic Wars
  "npl9G-lyRB0": ["A cartoon Napoleon tells his own story, from math-loving boy in Corsica to emperor of France, his failed invasions of Spain and Russia, and defeat at Waterloo.", [2]],
  "by8QoBTGLII": ["An animated map history of Napoleon's rise from a boy in Corsica to Emperor of the French, his wars across Europe, the disaster in Russia, and his final defeat at Waterloo in 1815.", [1,2]],
  // p.206 Preserving food
  "k0Gu6ttLXjo": ["How people kept food from spoiling before fridges: Egyptians drying and salting meat, Romans packing food in snow, Native Americans sun-drying corn, and pioneers using salt and honey.", [0]],
  "Sbj8cssdo6M": ["A chatty history of keeping food fresh, from drying and salting to ice houses, shipping ice around the world, ice factories and, finally, the home refrigerator.", [0]],
  // p.208 Central and South American independence
  "wxuxFg_8nkI": ["NBC News Learn tells the story of Simón Bolívar, \"the Liberator,\" who led armies over the Andes to free much of South America from Spanish rule.", [0,1]],
  "80b4ROFoaFY": ["Extra History tells young Simón Bolívar's story: a rich orphan in Caracas, losing his young wife, admiring and then turning on Napoleon, and swearing in Rome to free his homeland. Part one of a series.", []],
  // p.210 Trains
  "9nMi1KPB2-Y": ["Learn Bright follows trains from horse-pulled coal carts to the Tom Thumb steam engine, the railroad that joined America's coasts in 1869, and today's bullet trains.", [2]],
  "hU22evActPU": ["Dr. Binocs tells how steam trains were invented, from Richard Trevithick's first locomotive in 1804 to George Stephenson's Locomotion No. 1 and today's floating maglev trains.", [0,1]],
  // p.212 Spreading the news
  "SOYOt2yDgqQ": ["Behind the News looks at how newspapers ruled the news in Australia for 200 years, and why radio, TV and especially the internet have made so many of them close.", []],
  // p.214 Engineering
  "owHF9iLyxic": ["Crash Course Kids explains what engineers do (solve problems, like the Golden Gate Bridge, the microwave and Henry Ford's affordable cars) and the many kinds of engineers there are.", []],
  "dyckL6HuLRU": ["TED-Ed tells how three members of the Roebling family built the Brooklyn Bridge, from airtight boxes sunk under the river to Emily Roebling running the job, until it opened in 1883.", [1,2]],
  // p.216 The US frontier
  "_uLFDDzeqBE": ["Bedtime History takes you on an imaginary trip along the Oregon Trail in 1859: packing the wagon, floating it across rivers, staying healthy, and finally reaching Oregon's green valleys.", [0,1,2]],
  "eA4oOB-4wCg": ["A teacher explains westward expansion in the United States: the idea of Manifest Destiny, why pioneers moved west, and how Louisiana, Florida, Texas, Oregon and California were added.", []],
  // p.217 Frontier conflicts
  "E2YidQrQuec": ["An animated map history of Native Americans, from crossing into the Americas in the Ice Age to European diseases, forced removal, the Indian Wars and citizenship in 1924. It's frank about the violence.", [0,1]],
  "14wE9-kHb2M": ["Pursuit of History follows the Oregon Trail, the 2,000-mile wagon route west taken by 400,000 settlers, and its cost for the Native nations pushed from their homelands.", [0]],
  // p.218 The 1848 Revolutions
  "CFer-iqW8Cs": ["History Matters asks why Britain, unlike much of Europe, had no revolution in 1848, with the Chartists' giant petition for the vote and the rainy day their big march fizzled out.", [0,1]],
  "PbUU_RHbw3I": ["Heimler's History, a review for high school students, explains the revolutions of 1848 across Europe and why most of them failed. Made for older students.", [0,1]],
  // p.220 Biology
  "JnvjRj7aOYg": ["Jessi celebrates Charles Darwin's birthday: his five-year voyage on the Beagle, the animals of the Galápagos, and his big idea about how living things change to fit where they live.", [0,1]],
  "-NFfSLlCawE": ["English Heritage tells Charles Darwin's life story: beetle collecting, a five-year voyage around the world, years of experiments at home with his family, and the book that shook Victorian England.", [0]],
  // p.222 The British Empire
  "Pi2S0zXJgjU": ["Newsround's young reporters interview author Sathnam Sanghera about the British Empire: what it was, how it shaped Britain today, and why we should learn both the good and the bad.", [0]],
  // p.224 The Civil War
  "ILc0nfzePT4": ["KidsKonnect walks through the Civil War: slavery and the split between North and South, Lincoln, the big battles, the Emancipation Proclamation, Lee's surrender and Lincoln's assassination.", [0,1]],
  "aVXJnA-kyog": ["Lesson Boosters explains the Civil War: why the Southern states broke away, the role of slavery, Lincoln and the Emancipation Proclamation, and Lee's surrender in 1865.", [0,1]],
  // p.226 Colonialism in Africa
  "5uMF9j8FTtI": ["History Crunch explains the Scramble for Africa, when European countries raced to take over almost the whole continent between 1884 and 1914, and the harm it did to African peoples.", [0,2]],
  // p.228 Telecommunications
  "VNbFLCZ9KEY": ["Dr. Binocs tells how Alexander Graham Bell, a teacher of deaf students, worked with Thomas Watson to send the human voice down a wire, and why we say \"hello\" and not \"ahoy.\"", [1]],
  "FmIGXZPZugw": ["Bedtime History tells how painter Samuel Morse helped invent the telegraph and Morse code, and sent the first long-distance message in 1844: \"What hath God wrought?\"", [0]],
  // p.230 Photography
  "RGMAZ4DwuH8": ["The Smithsonian zips through the history of photography, from the first 8-hour photo in 1826 and silver-plated daguerreotypes to Kodak's roll film, the Brownie snapshot camera and phone cameras.", [0]],
  "SGncepmrckE": ["A fast, funny history of photography, from the pinhole camera obscura and the first photo in 1826 to Kodak, the first digital camera, and phone cameras.", [0,1]],
  // p.232 Crime detection
  "1G03TEN3w2o": ["Big Bang Academy explains how fingerprints form before we're born, why no two are alike (not even a twin's), and how we leave invisible prints on everything we touch.", [0]],
  "qX6hFXHDmk4": ["Smithsonian Channel explains how fingerprints form before we're born, why no two are alike, what they're really for (gripping things), and how people slowly learned they could identify us.", [0]],
  // p.234 Aircraft and aviation
  "Qt3pry6cWJM": ["FreeSchool tells the Wright brothers' story, from a toy helicopter and their bicycle shop to gliders at Kitty Hawk and the first powered airplane flight in 1903.", [0]],
  "NpqU3eSeS1c": ["Dr. Binocs tells the story of flight, from Leonardo's sketches and the first hot-air balloon in 1783 to gliders, the Wright brothers' first airplane and Lindbergh's flight across the Atlantic.", [0,1]],
  // p.236 Getting the vote
  "MaibJd-I5bo": ["Lesson Boosters explains suffrage, the right to vote, and the long fight for women's votes, from Seneca Falls in 1848 to New Zealand in 1893 and the 19th Amendment in 1920.", [0,1]],
  // p.238 Physics
  "GjoYbsvUoO4": ["Homeschool Pop tells Albert Einstein's story, from a late talker and math whiz to a patent clerk who changed science, and tries to explain E = mc² and bendy space to Mr. Whiskers.", []],
  "gKS2eD8iyuo": ["Dr. Binocs explains Einstein's big idea about gravity: heavy things like the Sun bend space and time, like a bowling ball on a trampoline, and the planets roll along the curves.", []],
  // p.240 Cars
  "wxxEV19sgjQ": ["Dr. Binocs shows that no one person invented the car: from a steam wagon that crashed into a wall in 1769 to Karl and Bertha Benz, Daimler's engines and Henry Ford's assembly line.", [0,1,2]],
  "5cFovJ4HZ8s": ["A narrated history of the car, from steam and electric vehicles to Karl Benz's 1885 car, Ford's Model T, 1950s chrome and muscle cars, and today's electric and self-driving cars.", [0]],
  // p.242 Great adventures
  "Ts3LIirgDbU": ["TED-Ed tells the story of the race to the South Pole between Roald Amundsen's small team with sled dogs and Robert Scott's bigger expedition, which arrived second and never made it home.", [0]],
  "tIKwbdIs9aw": ["Dr Growl tells the story of the race to the South Pole, which Amundsen won in 1911, and the sad return journey of Scott's team, who died in the cold. Best watched together.", [0]],
  // p.244 The voyage of R.M.S. Titanic
  "4ozKNydPF7I": ["Twinkl explains how the Titanic sank on its first voyage after hitting an iceberg, why there weren't enough lifeboats, who may have been to blame, and how the wreck was found in 1985.", [0,1,2]],
  "TpABdOzmxJY": ["National Geographic tells the Titanic's story, from its \"unsinkable\" design to the iceberg, the shortage of lifeboats, the new safety rules that followed, and finding the wreck in 1985.", [0,1,2]],
  // p.250 World War I
  "RBtyaelrgmg": ["Bedtime History explains World War I, from how it started to life in the muddy trenches, new weapons, America joining in 1917, and why people wear poppies on November 11. It doesn't hide how grim it was.", [0,1,2]],
  "zvz25HSLlqU": ["A cartoon teacher and student look at what led up to World War I: factories, a money crisis, closed borders and European empires, and how the map of Europe changed afterward.", []],
  // p.252 The 1920s
  "e6VipKZwtpA": ["The Daily Bellringer explains why the 1920s roared in America: women winning the vote, flappers, Prohibition, radios, cars, movies, and jazz from the Harlem Renaissance.", [0,1]],
  "nGI8f5eC6Q0": ["PIP Academy roars through the 1920s: cars for everyone, radios, the first talking movie, flappers and the Charleston, jazz stars, and Prohibition, with quick quizzes along the way.", [0,1]],
  // p.253 The 1930s
  "KB9HvnEWPTg": ["Lesson Boosters explains the Great Depression: the 1929 stock market crash, closed banks and lost jobs, the Dust Bowl, and President Roosevelt's New Deal.", [0,1]],
  "pJ9QOcVt1Hc": ["NBC News Learn explains the Dust Bowl of the 1930s, when drought and over-farming turned the Great Plains to dust and \"black blizzards\" darkened the sky, and how people recovered.", [1]],
  // p.254 Archaeology
  "zOJlCdMvWAI": ["Jessi explains how archaeologists work like detectives: spotting clues on the ground and even from space, digging carefully in a grid, and studying what they find in the lab.", [1]],
  "o_MCl_5acjo": ["Colossal Cranium answers a great question: why are ancient ruins always underground? Mud-brick houses, rebuilding on top of old rubble, disasters and plants all slowly bury them.", []],
  // p.256 The Soviet Union
  "XmBytlA9rS4": ["A short explainer on the Soviet Union: how Lenin's revolution led to it in 1922, Stalin's harsh rule, World War II, the Cold War with the United States, and its collapse in 1991.", [0,1]],
  "CJVDqlWJ7vY": ["An animated history, made for grown-ups, of the Soviet Union from the 1917 revolution through Stalin's rule and World War II. It covers famines, prison camps and mass killings in detail.", []],
  // p.258 The story of skyscrapers
  "ewNKuacMtkw": ["LEGO uses its bricks to show how skyscrapers stand up to gravity and wind, from the first one in Chicago in 1885 to steel frames, tube designs and the Burj Khalifa.", [0,2]],
  "kHm-g7zIWns": ["National Geographic shows how the elevator, and a clever safety brake that stops it from falling, made skyscrapers possible, from early office buildings to the Burj Khalifa.", [1]],
  // p.260 World War II in Europe
  "HUqy-OQvVtI": ["Simple History races through World War II in three minutes, from the invasion of Poland to D-Day and Japan's surrender. It's quick, but it names hard events like the Holocaust and the atomic bombs.", [0]],
  // p.262 War at home
  "9aRVVae2i_c": ["HISTORY shows how World War II changed life at home in America: ration cards, victory gardens, scrap drives, women in factories, and the unjust imprisonment of Japanese Americans.", [0,1,2]],
  // p.264 The Holocaust
  "CGBjMfaiFs8": ["Dr. Binocs tells Anne Frank's story: a Jewish girl who hid from the Nazis with her family behind a bookcase in Amsterdam, kept her famous diary, and died in a camp in 1945.", [0,1]],
  // p.266 The D-Day landings
  "4cGuB-OWR0g": ["Simple History explains the planning and fighting of D-Day: the trick that fooled the Germans, the special tanks, and how American, British and Canadian troops took the five Normandy beaches.", [0,2]],
  // p.268 The Pacific War
  "ludo9DfTt_M": ["Bedtime History puts you in the cockpit for the Battle of Midway in 1942, where codebreakers and dive bombers helped the US Navy sink four Japanese aircraft carriers and turn the war in the Pacific.", [1]],
  // p.270 Indian independence
  "WFBiKeVvXDs": ["Learn Bright tells Gandhi's story, from facing unfair treatment in South Africa to leading India's peaceful fight for independence, including the Salt March, and how he inspired later leaders.", [1,2]],
  // p.271 African independence
  "Nj0vzQWvQgw": ["Dr. Binocs tells Nelson Mandela's life story: growing up under apartheid's unfair laws, 27 years in prison, and becoming South Africa's first Black president in 1994.", [2]],
  // p.272 The story of spying
  "0wg-meWjVZI": ["Colossal Cranium tells the story of Agent 355, a mystery woman in George Washington's Culper spy ring who helped uncover Benedict Arnold's plan to hand West Point to the British.", [1]],
  // p.274 Middle East conflicts
  "_FZC4f1xORo": ["Learn Bright gives a quick tour of the Middle East: its early civilizations, the three religions that began there, its deserts, rivers and countries, and famous places like Petra.", [0,1]],
  // p.276 Household appliances
  "Bm9fjlYbwhc": ["A visit to The Henry Ford museum shows how the fridge grew out of the icebox, from ice delivered by the iceman to steel fridges in the 1920s and 1940s models with a freezer and a butter bin.", [0]],
  // p.278 Renewable energy
  "Q6f7CcekmpI": ["Learn Bright explains renewable energy, with the pros and cons of solar, wind, water, geothermal, biomass and nuclear power, and a bean game that shows why fossil fuels run out.", []],
  // p.280 The Korean War
  "yxaegqvl4aE": ["Simple History walks through the Korean War of 1950 to 1953, as armies swept up and down the peninsula, China joined in, and the fighting stopped near where it began, at a border that still divides Korea.", [0,1,2]],
  // p.281 The Vietnam War
  "oJ5SpNyY7nA": ["Mr. Q gives a grown-up-level introduction to the Vietnam War: how it began, why the US got involved, the protests at home, and how Vietnam was reunited. It mentions the My Lai massacre.", [0,1,2]],
  // p.282 The 1960s
  "uVNtTuxEUBI": ["A Carnegie Hall short, made for grown-ups, where historians and musicians talk about how the 1960s changed America: civil rights, the war on TV news, protest songs, and new kinds of music and art.", []],
  // p.284 Postcolonial Africa
  "KcNVNsvyFfA": ["Learn Bright shares facts about Africa: where the first humans lived, its 54 countries, the Nile and the Sahara, Victoria Falls, the great animal migration, and why hippos are more dangerous than lions.", [0,2]],
  // p.286 The Cold War
  "5CUq0DKckjU": ["Lesson Boosters explains the Cold War between the United States and the Soviet Union: the Berlin Wall, the arms race, the space race, and how it ended in 1991.", [0,1,2]],
  // p.288 Race to the moon
  "xvaEvCNZymo": ["Simple History tells the story of the space race, from Sputnik and Yuri Gagarin to Valentina Tereshkova, the first spacewalks and Apollo 11, and the handshake in orbit that ended it.", [0,1,2]],
  // p.290 Apollo launches
  "oSUJIDKT8xc": ["Dr. Binocs follows Apollo 11 from President Kennedy's challenge to the launch, the tricky landing in the Sea of Tranquility, and Neil Armstrong's first step on the Moon.", [0]],
  // p.292 The Cuban Missile Crisis
  "XbKCyQn5oTc": ["Simple History tells how spy planes found Soviet nuclear missiles in Cuba in October 1962, and how letters and secret deals between Kennedy and Khrushchev pulled the world back from nuclear war.", [0,1,2]],
  // p.294 The US Civil Rights Movement
  "WKEGou1zPII": ["Kids Academy explains segregation and how activists like Rosa Parks and Martin Luther King Jr. worked to end it, leading to the Civil Rights Act of 1964.", [0,2]],
  // p.296 Fashion
  "zaW0si0WuUQ": ["BYJU'S explains how people started wearing clothes, from animal furs in the cold to linen in early towns and Egypt, the legend of how silk was found in China, and the birth of fashion.", [0]],
  // p.298 Space exploration
  "L1UiaMNK614": ["Jessi and Squeaks follow the Voyager space probes, launched in 1977, past the giant planets and out into the space between the stars, carrying golden records about life on Earth.", [0]],
  // p.300 Booming nations
  "q7JK5Vxf_VQ": ["Learn Bright tours China: its mountains and rivers, its government, thousands of years of dynasties and inventions, the Great Wall, and giant pandas. It was made before India passed China in population.", []],
  // p.302 Computing
  "brgKZVXSiC0": ["Mystery Science explains that the first computers were people doing math, then room-sized machines like ENIAC, then home computers with word-only games, and now the phone in your pocket.", [0]],
  // p.304 Assistive technology
  "8hzPIKmCHUA": ["Dr. Binocs tells how Louis Braille, blinded as a young boy, turned a soldiers' night-writing code into the six-dot alphabet that blind people around the world read with their fingertips.", [1]],
  // p.306 Feminism
  "tcGsgKrAE9c": ["Twinkl explains Women's Equality Day and the long fight for American women's right to vote, from the Seneca Falls meeting in 1848 to the 19th Amendment in 1920.", [0]],
  // p.308 The Internet
  "UXsomnDkntI": ["Dr. Binocs explains what happens when you send a picture online: it's broken into tiny packets, routers read their addresses, and the pieces are put back together in a split second.", []],
  // p.310 Youth culture
  "juWYhMoDTN0": ["TED-Ed spends a day with a 17-year-old in ancient Rome in AD 73: his brother's coming-of-age festival, the crowded streets, the public baths, and a family feast.", []],
  // p.312 The story of robotics
  "negyqkJ8UKM": ["A short cartoon history of robots, from the Unimate arm that went to work in a car factory in 1961 to Shakey, the first robot that could find its own way, and today's talking robot Sophia.", [0,1]],
  // p.314 Vaccines
  "5SproXmRUkI": ["Jessi, nervous about her own shot, explains how vaccines work: tiny bits of dead or weak germs let your body practice fighting a disease before the real germs show up.", []],
  // p.316 British rulers
  "vC6okzIKQvg": ["Horrible Histories sings its way through every English king and queen since William the Conqueror in 1066, with a gruesome or funny fact about almost every one.", [1]],
  // p.318 US presidents
  "q1DDcGDy3fU": ["Twinkl names every US president in order, from George Washington to today, with quick facts about many of them, like the shortest presidency and the only one to serve four terms.", [2]],
};
