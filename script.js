const data = {
  movies: [
    {
      title: "Cure (1997)",
      creator: "Directed by Kiyoshi Kurosawa",
      description: "A chilling psychological thriller where violence, suggestion, and spiritual emptiness quietly infect everything.",
      image: "images/movies/cure 1997.jpg"
    },
    {
      title: "Demolition",
      creator: "Directed by Jean-Marc Vallee",
      description: "A strange and tender film about grief, collapse, and the urge to tear everything down to feel again.",
      image: "images/movies/demolition.jpg"
    },
    {
      title: "Donnie Darko",
      creator: "Directed by Richard Kelly",
      description: "A moody suburban nightmare where teenage alienation, time, and doom blur together.",
      image: "images/movies/donnie darko.jpg"
    },
    {
      title: "Fallen Angels",
      creator: "Directed by Wong Kar-wai",
      description: "A restless neon romance of loneliness, collision, and urban desire at strange hours.",
      image: "images/movies/fallen angles.jpg"
    },
    {
      title: "Fear and Loathing in Las Vegas",
      creator: "Directed by Terry Gilliam",
      description: "A manic and grotesque trip through excess, paranoia, and the chemical collapse of the American dream.",
      image: "images/movies/fear and loathing in las vegas.jpg"
    },
    {
      title: "First Reformed",
      creator: "Directed by Paul Schrader",
      description: "A severe spiritual drama about guilt, ecological dread, and the slow unraveling of faith.",
      image: "images/movies/first reformed.jpg"
    },
    {
      title: "Ikiru",
      creator: "Directed by Akira Kurosawa",
      description: "A humanist masterpiece about mortality, purpose, and the search for one meaningful act.",
      image: "images/movies/ikiru.jpg"
    },
    {
      title: "Masque of the Red Death",
      creator: "Directed by Roger Corman",
      description: "A lush gothic horror film of plague, decadence, and the futility of trying to outrun death.",
      image: "images/movies/masque of the red death.jpg"
    },
    {
      title: "Memories of Murder",
      creator: "Directed by Bong Joon-ho",
      description: "A gripping crime film where procedural failure, violence, and social dread bleed into each other.",
      image: "images/movies/memories of murder.jpg"
    },
    {
      title: "Mishima: A Life in Four Chapters",
      creator: "Directed by Paul Schrader",
      description: "A formally brilliant portrait of art, discipline, performance, and self-destructive idealism.",
      image: "images/movies/mishima a life in four chapters.jpg"
    },
    {
      title: "Mulholland Drive",
      creator: "Directed by David Lynch",
      description: "A hypnotic Hollywood nightmare where identity, desire, and dream logic collapse into one another.",
      image: "images/movies/mullholand drive.jpg"
    },
    {
      title: "Mysterious Skin",
      creator: "Directed by Gregg Araki",
      description: "A devastating coming-of-age film about trauma, memory, and the painful struggle to understand oneself.",
      image: "images/movies/mysterious skin.jpg"
    },
    {
      title: "Parasite",
      creator: "Directed by Bong Joon-ho",
      description: "A razor-sharp social thriller where class desire, humiliation, and violence build with terrifying precision.",
      image: "images/movies/parasite.jpg"
    },
    {
      title: "Perfect Days",
      creator: "Directed by Wim Wenders",
      description: "A quiet and graceful film about routine, solitude, and the hidden richness of ordinary living.",
      image: "images/movies/perfect days.jpg"
    },
    {
      title: "Possession",
      creator: "Directed by Andrzej Zulawski",
      description: "A ferocious psychological horror film where desire, divorce, and madness become almost mythic.",
      image: "images/movies/possession.jpg"
    },
    {
      title: "Prisoners",
      creator: "Directed by Denis Villeneuve",
      description: "A tense moral thriller about desperation, punishment, and what fear does to ordinary people.",
      image: "images/movies/prisoners.jpg"
    },
    {
      title: "Ritual (2000)",
      creator: "Directed by Hideaki Anno",
      description: "A disorienting psychological film about repetition, emptiness, and the search for emotional contact.",
      image: "images/movies/ritual 2000.jpg"
    },
    {
      title: "Se7en",
      creator: "Directed by David Fincher",
      description: "A grim serial killer thriller drenched in rain, corruption, and moral despair.",
      image: "images/movies/seven.jpg"
    },
    {
      title: "The Seventh Seal",
      creator: "Directed by Ingmar Bergman",
      description: "A stark philosophical classic where death, doubt, and silence shape every encounter.",
      image: "images/movies/seventh seal.jpg"
    },
    {
      title: "Sonatine",
      creator: "Directed by Takeshi Kitano",
      description: "A cool and melancholy yakuza film about violence, boredom, and the strange calm before annihilation.",
      image: "images/movies/sonatine.jpg"
    },
    {
      title: "Suspiria (1977)",
      creator: "Directed by Dario Argento",
      description: "A feverish horror landmark built from color, sound, and pure nightmare sensation.",
      image: "images/movies/suspiria 1977.jpg"
    },
    {
      title: "Taste of Cherry",
      creator: "Directed by Abbas Kiarostami",
      description: "A meditative road film about death, dignity, and the fragile possibility of choosing life again.",
      image: "images/movies/taste of cherry.jpg"
    },
    {
      title: "Trainspotting",
      creator: "Directed by Danny Boyle",
      description: "A kinetic, darkly funny film about addiction, escape, and the ugly rush of self-destruction.",
      image: "images/movies/trainspotting.jpg"
    },
    {
      title: "Vanilla Sky",
      creator: "Directed by Cameron Crowe",
      description: "A glossy psychological romance where vanity, regret, and dreamlike unreality steadily take over.",
      image: "images/movies/vanilla sky.jpg"
    },
    {
      title: "Vertigo",
      creator: "Directed by Alfred Hitchcock",
      description: "A masterful spiral of obsession, projection, and the terrifying instability of desire.",
      image: "images/movies/vertigo.jpg"
    },
    {
      title: "Whiplash",
      creator: "Directed by Damien Chazelle",
      description: "A blistering drama of ambition, discipline, abuse, and the cost of greatness.",
      image: "images/movies/whiplash.jpg"
    },
    {
      title: "Wings of Desire",
      creator: "Directed by Wim Wenders",
      description: "A lyrical and deeply humane film about observation, longing, and the ache of becoming mortal.",
      image: "images/movies/wings of desire.jpg"
    }
  ],
  tvShows: [
    {
      title: "Twin Peaks",
      creator: "Created by David Lynch and Mark Frost",
      description: "A surreal mystery series where small-town melodrama, dream logic, and cosmic dread fold into each other.",
      image: "images/tvshows/twin peaks.jpg"
    },
    {
      title: "True Detective",
      creator: "Created by Nic Pizzolatto",
      description: "A hypnotic crime story built on dread, damaged masculinity, and two unforgettable central performances.",
      image: "images/tvshows/true detective.jpg"
    },
    {
      title: "Mindhunter",
      creator: "Created by Joe Penhall",
      description: "A cool, methodical psychological crime series focused on obsession, profiling, and the banality of evil.",
      image: "images/tvshows/mindhunter.jpg"
    },
    {
      title: "Hannibal",
      creator: "Created by Bryan Fuller",
      description: "A lush and disturbing thriller that turns murder, desire, and transformation into high gothic art.",
      image: "images/tvshows/hannibal.webp"
    },
    {
      title: "Maniac",
      creator: "Created by Patrick Somerville",
      description: "A strange, tender miniseries that blends sci-fi therapy, broken memory, and emotional loneliness.",
      image: "images/tvshows/maniac.jpg"
    },
    {
      title: "Black Mirror",
      creator: "Created by Charlie Brooker",
      description: "A sharp anthology that uses speculative technology to expose fear, vanity, and moral collapse.",
      image: "images/tvshows/black mirror.jpg"
    },
    {
      title: "Chernobyl",
      creator: "Created by Craig Mazin",
      description: "A harrowing historical drama about catastrophe, institutional lies, and the cost of truth.",
      image: "images/tvshows/chernobyl.jpg"
    },
    {
      title: "Silicon Valley",
      creator: "Created by Mike Judge, John Altschuler, and Dave Krinsky",
      description: "A cutting comedy about ambition, ego, and the absurd culture of the startup world.",
      image: "images/tvshows/silicon valley.jpg"
    },
    {
      title: "Dark",
      creator: "Created by Baran bo Odar and Jantje Friese",
      description: "A dense, haunting sci-fi drama where time, grief, and fate become impossible to separate.",
      image: "images/tvshows/dark.jpg"
    }
  ],
  games: [
    {
      title: "Elden Ring",
      creator: "Developed by FromSoftware",
      description: "A vast dark fantasy adventure built on mystery, dread, discovery, and the thrill of overcoming impossible odds.",
      image: "images/games/elden ring.jpg"
    },
    {
      title: "Battlefield 1",
      creator: "Developed by DICE",
      description: "A war shooter that trades clean heroism for mud, spectacle, chaos, and the sense of history collapsing around you.",
      image: "images/games/battlefield 1.jpg"
    },
    {
      title: "Call of Duty: Black Ops",
      creator: "Developed by Treyarch",
      description: "A stylish Cold War shooter full of paranoia, fractured memory, and some of the series' most iconic momentum.",
      image: "images/games/cod black ops 1.jpg"
    },
    {
      title: "Call of Duty: Modern Warfare 2",
      creator: "Developed by Infinity Ward",
      description: "A bombastic military shooter remembered for its cinematic scale, sharp pacing, and legendary multiplayer energy.",
      image: "images/games/modern warfare 2.jpg"
    },
    {
      title: "Skyrim",
      creator: "Developed by Bethesda Game Studios",
      description: "A huge fantasy sandbox built on wandering, roleplay, atmosphere, and the freedom to disappear into another life.",
      image: "images/games/skyrim.jpg"
    },
    {
      title: "The Witcher 3",
      creator: "Developed by CD Projekt Red",
      description: "A richly written fantasy role-playing game full of moral ambiguity, melancholy landscapes, and unforgettable quests.",
      image: "images/games/witcher 3.jpg"
    },
    {
      title: "Outlast",
      creator: "Developed by Red Barrels",
      description: "A relentless first-person horror game that turns helplessness, darkness, and pursuit into pure panic.",
      image: "images/games/outlast.jpg"
    },
    {
      title: "SOMA",
      creator: "Developed by Frictional Games",
      description: "A haunting sci-fi horror game about consciousness, identity, and the horror of continuing to exist.",
      image: "images/games/soma.jpg"
    },
    {
      title: "Bloodborne",
      creator: "Developed by FromSoftware",
      description: "A feverish gothic action RPG where speed, aggression, and cosmic terror merge into something unforgettable.",
      image: "images/games/bloodborne.jpg"
    },
    {
      title: "GTA Vice City",
      creator: "Developed by Rockstar North",
      description: "A neon-soaked crime epic fueled by style, radio culture, ambition, and the fantasy of reinvention.",
      image: "images/games/vice city.jpg"
    },
    {
      title: "Far Cry 4",
      creator: "Developed by Ubisoft Montreal",
      description: "An open-world action game that mixes revolution, chaos, and beautiful landscapes with unpredictable violence.",
      image: "images/games/far cry 4.jpg"
    },
    {
      title: "Resident Evil 2",
      creator: "Developed by Capcom",
      description: "A survival horror classic of dread, resource scarcity, and precise tension inside a collapsing city.",
      image: "images/games/resident evil 2.jpg"
    },
    {
      title: "Resident Evil 7",
      creator: "Developed by Capcom",
      description: "A first-person horror reinvention that traps you inside rot, madness, and suffocating domestic terror.",
      image: "images/games/resident evil 7.jpg"
    },
    {
      title: "Need for Speed: Most Wanted",
      creator: "Developed by EA Black Box",
      description: "An arcade racing game driven by speed, pursuit, swagger, and the thrill of escaping impossible odds.",
      image: "images/games/most wanted.jpg"
    },
    {
      title: "Tekken 3",
      creator: "Developed by Namco",
      description: "A landmark fighting game that blends fast movement, iconic characters, and pure arcade confidence.",
      image: "images/games/tekken 3.jpg"
    },
    {
      title: "Batman: Arkham Asylum",
      creator: "Developed by Rocksteady Studios",
      description: "A dark superhero action game where stealth, combat, and gothic atmosphere come together with unusual precision.",
      image: "images/games/arkham asylum.jpg"
    }
  ],
  anime: [
    {
      title: "One Piece",
      creator: "Created by Eiichiro Oda",
      description: "A sprawling adventure saga built on friendship, freedom, absurdity, and the relentless pursuit of impossible dreams.",
      image: "images/anime/ONE PIECE.jpg"
    },
    {
      title: "Dororo",
      creator: "Based on the manga by Osamu Tezuka",
      description: "A dark historical fantasy about bodily loss, revenge, and the difficult recovery of one's humanity.",
      image: "images/anime/dororo.jpg"
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      creator: "Based on the manga by Hiromu Arakawa",
      description: "A rich fantasy epic balancing grief, ethics, war, sacrifice, and the bond between two brothers.",
      image: "images/anime/fullmetal alchemist.jpg"
    },
    {
      title: "Monster",
      creator: "Based on the manga by Naoki Urasawa",
      description: "A slow-burn thriller built on moral tension, obsession, and one of anime's most haunting villains.",
      image: "images/anime/monster.jpg"
    },
    {
      title: "Blue Period",
      creator: "Based on the manga by Tsubasa Yamaguchi",
      description: "A reflective coming-of-age story about art, ambition, insecurity, and the struggle to make meaning through creation.",
      image: "images/anime/blue period.jpg"
    },
    {
      title: "Attack on Titan",
      creator: "Based on the manga by Hajime Isayama",
      description: "A brutal and escalating epic of survival, ideology, and the terrifying costs of freedom.",
      image: "images/anime/attack on titan.jpg"
    },
    {
      title: "Noragami",
      creator: "Based on the manga by Adachitoka",
      description: "A supernatural action series mixing humor, loneliness, and the search for purpose with surprising emotional depth.",
      image: "images/anime/noragami.jpg"
    },
    {
      title: "Tokyo Ghoul",
      creator: "Based on the manga by Sui Ishida",
      description: "A dark fantasy about identity, hunger, cruelty, and the instability of living between two worlds.",
      image: "images/anime/tokyo ghoul.jpg"
    },
    {
      title: "Your Lie in April",
      creator: "Based on the manga by Naoshi Arakawa",
      description: "A bittersweet drama about music, grief, and the painful beauty of emotional awakening.",
      image: "images/anime/your lie in april.jpg"
    },
    {
      title: "Erased",
      creator: "Based on the manga by Kei Sanbe",
      description: "A tense mystery that blends time travel, childhood trauma, and the desperate wish to undo tragedy.",
      image: "images/anime/erased.jpg"
    },
    {
      title: "Vinland Saga",
      creator: "Based on the manga by Makoto Yukimura",
      description: "A historical epic about revenge, war, and the long, difficult path toward a different kind of strength.",
      image: "images/anime/vinland saga.jpg"
    },
    {
      title: "Evangalion",
      creator: "Created by Hideaki Anno",
      description: "A psychologically intense sci-fi work that turns apocalypse, depression, and adolescence into something raw and mythic.",
      image: "images/anime/evangalion.jpg"
    },
    {
      title: "Grave of the Fireflies",
      creator: "Directed by Isao Takahata",
      description: "A devastating anti-war film about innocence, hunger, and the human cost of total collapse.",
      image: "images/anime/Grave of the Fireflies.jpg"
    },
    {
      title: "Fireworks (2017)",
      creator: "Directed by Akiyuki Shinbo and Nobuyuki Takeuchi",
      description: "A wistful and fragmented romance that turns adolescent longing into something dreamy, slippery, and melancholic.",
      image: "images/anime/fireworks.jpg"
    },
    {
      title: "Akira",
      creator: "Directed by Katsuhiro Otomo",
      description: "A landmark cyberpunk film of psychic violence, urban decay, and social breakdown.",
      image: "images/anime/akira.jpg"
    },
    {
      title: "Perfect Blue",
      creator: "Directed by Satoshi Kon",
      description: "A brilliant psychological thriller about fame, identity, paranoia, and the collapse of the line between self and performance.",
      image: "images/anime/perfect blue.jpg"
    },
    {
      title: "Fate Franchise",
      creator: "Created by Type-Moon",
      description: "A sprawling fantasy franchise of heroic spirits, violent ideals, and elaborate clashes between destiny and desire.",
      image: "images/anime/fate.jpg"
    },
    {
      title: "Berserk",
      creator: "Based on the manga by Kentaro Miura",
      description: "A dark fantasy masterpiece of trauma, rage, ambition, and endurance in the face of monstrous cruelty.",
      image: "images/anime/Cvlt of the Pop Cvlture.jpg"
    },
    {
      title: "Cowboy Bebop",
      creator: "Directed by Shinichiro Watanabe",
      description: "A stylish space western full of melancholy, rhythm, and effortless cool.",
      image: "images/anime/cowboy bepop.jpg"
    },
    {
      title: "Samurai Champloo",
      creator: "Directed by Shinichiro Watanabe",
      description: "A kinetic samurai road story mixing style, music, improvisation, and emotional restlessness.",
      image: "images/anime/samurai champloo.jpg"
    },
    {
      title: "Death Note",
      creator: "Based on the manga by Tsugumi Ohba and Takeshi Obata",
      description: "A sharp cat-and-mouse thriller about power, justice, ego, and the corruption that follows certainty.",
      image: "images/anime/death note.jpg"
    }
  ],
  books: [
    {
      title: "No Exit",
      creator: "By Jean-Paul Sartre",
      description: "A claustrophobic existential play that turns self-deception, judgment, and human dependence into psychological torment.",
      image: "images/books/no exit.jpg"
    },
    {
      title: "The Brothers Karamazov",
      creator: "By Fyodor Dostoevsky",
      description: "A vast moral and spiritual novel about faith, freedom, guilt, and the chaos inside a fractured family.",
      image: "images/books/The Brothers Karamazov.jpg"
    },
    {
      title: "A Grief Observed",
      creator: "By C. S. Lewis",
      description: "An intimate meditation on mourning, belief, and the emotional disorientation that follows devastating loss.",
      image: "images/books/a grief observed.jpg"
    },
    {
      title: "The Stranger",
      creator: "By Albert Camus",
      description: "A stark, quietly disturbing novel about alienation, absurdity, and emotional detachment.",
      image: "images/books/the stranger.jpg"
    },
    {
      title: "Norwegian Wood",
      creator: "By Haruki Murakami",
      description: "A melancholic coming-of-age novel shaped by memory, longing, and the fragility of intimate connection.",
      image: "images/books/norwegian wood.jpg"
    },
    {
      title: "Men Without Women",
      creator: "By Haruki Murakami",
      description: "A restrained and melancholic collection of stories about solitude, desire, loss, and the distances between people.",
      image: "images/books/men without women.jpg"
    },
    {
      title: "The Lord of the Rings Series",
      creator: "By J. R. R. Tolkien",
      description: "An epic fantasy of friendship, sacrifice, and endurance set against the overwhelming pull of power.",
      image: "images/books/the lord of the rings series.jpg"
    },
    {
      title: "The Witcher Series",
      creator: "By Andrzej Sapkowski",
      description: "A dark fantasy saga of monsters, fate, war, and moral ambiguity centered on the weary figure of Geralt of Rivia.",
      image: "images/books/the witcher series.jpg"
    },
    {
      title: "The Tragedy of Macbeth",
      creator: "By William Shakespeare",
      description: "A dark tragedy of ambition, guilt, prophecy, and the violent unraveling of a mind consumed by power.",
      image: "images/books/the tragedy of macbeth.jpg"
    },
    {
      title: "The Masque of the Red Death",
      creator: "By Edgar Allan Poe",
      description: "A gothic tale of decadence, plague, and the illusion that wealth can shield anyone from death.",
      image: "images/books/the masque of the red death.jpg"
    },
    {
      title: "Bill Hodges Trilogy",
      creator: "By Stephen King",
      description: "A tense crime trilogy that follows a retired detective through obsession, trauma, and escalating psychological menace.",
      image: "images/books/bill hodges trilogy.jpg"
    },
    {
      title: "Dracula",
      creator: "By Bram Stoker",
      description: "A foundational gothic horror novel of dread, seduction, and the uncanny invasion of modern life by ancient evil.",
      image: "images/books/dracula.jpg"
    },
    {
      title: "When Breath Becomes Air",
      creator: "By Paul Kalanithi",
      description: "A moving memoir about mortality, meaning, and what makes a life worth living when time grows short.",
      image: "images/books/when breathe becomes air.jpg"
    },
    {
      title: "The Metamorphosis",
      creator: "By Franz Kafka",
      description: "A surreal and quietly brutal story about alienation, shame, and the collapse of ordinary human bonds.",
      image: "images/books/the metamophosis.jpg"
    },
    {
      title: "The Death of Ivan Ilyich",
      creator: "By Leo Tolstoy",
      description: "A piercing novella about dying, spiritual reckoning, and the terrifying emptiness of a conventional life.",
      image: "images/books/death of ivan ilyich.jpg"
    },
    {
      title: "On the Shortness of Life",
      creator: "By Seneca",
      description: "A concise Stoic work arguing that life is long enough if we stop wasting it on distraction and vanity.",
      image: "images/books/on the shortness of life.jpg"
    },
    {
      title: "1984",
      creator: "By George Orwell",
      description: "A chilling dystopian novel about surveillance, propaganda, and the destruction of truth and inner freedom.",
      image: "images/books/1984.jpg"
    },
    {
      title: "Brave New World",
      creator: "By Aldous Huxley",
      description: "A sharp dystopian vision where comfort, conditioning, and pleasure become tools of social control.",
      image: "images/books/brave new world.jpg"
    }
  ],
  music: [
    {
      title: "Blonde",
      creator: "By Frank Ocean",
      description: "A hazy, emotionally rich album that feels intimate, fragmented, and quietly monumental.",
      image: "images/music/blonde.jpg"
    },
    {
      title: "The Dark Side of the Moon",
      creator: "By Pink Floyd",
      description: "A landmark psychedelic rock album of anxiety, time, and existential drift.",
      image: "images/music/dark side of the moon.jpg"
    },
    {
      title: "Days Before Rodeo",
      creator: "By Travis Scott",
      description: "A woozy, nocturnal mixtape full of menace, momentum, and restless ambition.",
      image: "images/music/days before redeo.jpg"
    },
    {
      title: "Disintegration",
      creator: "By The Cure",
      description: "A lush gothic record of longing, decay, and beautiful emotional ruin.",
      image: "images/music/disintegration.jpg"
    },
    {
      title: "Donuts",
      creator: "By J Dilla",
      description: "A miraculous beat tape that turns fragments, memory, and rhythm into something deeply human.",
      image: "images/music/donuts.jpg"
    },
    {
      title: "Doris",
      creator: "By Earl Sweatshirt",
      description: "A murky, self-aware rap album full of wit, withdrawal, and restless craft.",
      image: "images/music/doris.jpg"
    },
    {
      title: "Either/Or",
      creator: "By Elliott Smith",
      description: "A quietly devastating songwriter record of intimacy, ache, and precision.",
      image: "images/music/either or.jpg"
    },
    {
      title: "Fine Line",
      creator: "By Harry Styles",
      description: "A polished pop album that balances heartbreak, softness, and bright melodic confidence.",
      image: "images/music/fine line.jpg"
    },
    {
      title: "Folklore",
      creator: "By Taylor Swift",
      description: "A muted, story-driven album built from solitude, memory, and emotional weather.",
      image: "images/music/folklore.jpg"
    },
    {
      title: "Getting Killed",
      creator: "By Geese",
      description: "A wiry and unpredictable rock record full of tension, swagger, and strange emotional left turns.",
      image: "images/music/getting killed.jpg"
    },
    {
      title: "good kid, m.A.A.d city",
      creator: "By Kendrick Lamar",
      description: "A cinematic coming-of-age rap album driven by pressure, environment, and survival.",
      image: "images/music/good kid mad city.jpg"
    },
    {
      title: "Goodnight Summerland",
      creator: "By Helena Deland",
      description: "A dreamy indie record where grief and tenderness move through soft, reflective arrangements.",
      image: "images/music/goodnight summerland.jpg"
    },
    {
      title: "Grace",
      creator: "By Jeff Buckley",
      description: "A soaring rock album of romance, vulnerability, and ecstatic emotional intensity.",
      image: "images/music/grace.jpg"
    },
    {
      title: "Heaven or Las Vegas",
      creator: "By Cocteau Twins",
      description: "A shimmering dream-pop classic full of gloss, blur, and pure atmosphere.",
      image: "images/music/heaven or las vegas.jpg"
    },
    {
      title: "Heavy Metal",
      creator: "By Cameron Winter",
      description: "A raw and idiosyncratic record that leans into abrasion, personality, and restless emotional force.",
      image: "images/music/heavy metal.jpg"
    },
    {
      title: "Heroes & Villains",
      creator: "By Metro Boomin",
      description: "A sleek, blockbuster rap album built on menace, scale, and dark momentum.",
      image: "images/music/heroes and villains.jpg"
    },
    {
      title: "Heroes",
      creator: "By David Bowie",
      description: "A cold and triumphant art-rock album about damage, reinvention, and brief transcendence.",
      image: "images/music/heroes.jpg"
    },
    {
      title: "I Lay Down My Life for You",
      creator: "By JPEGMAFIA",
      description: "A volatile and inventive rap record full of abrasion, vulnerability, and total commitment.",
      image: "images/music/i lay down my life for you.jpg"
    },
    {
      title: "In Rainbows",
      creator: "By Radiohead",
      description: "A warm, intricate album where desire, anxiety, and beauty move in perfect tension.",
      image: "images/music/in rainbows.jpg"
    },
    {
      title: "Jar of Flies",
      creator: "By Alice in Chains",
      description: "A dark acoustic record of fatigue, grief, and bruised emotional honesty.",
      image: "images/music/jar of flies.jpg"
    },
    {
      title: "Mellon Collie and the Infinite Sadness",
      creator: "By The Smashing Pumpkins",
      description: "A huge alt-rock statement packed with grandeur, melancholy, and theatrical ambition.",
      image: "images/music/mellon collie and the infinite sadnesss.jpg"
    },
    {
      title: "Morningrise",
      creator: "By Opeth",
      description: "A long-form progressive metal album full of atmosphere, sorrow, and expansive darkness.",
      image: "images/music/morningrise.jpg"
    },
    {
      title: "My Beautiful Dark Twisted Fantasy",
      creator: "By Kanye West",
      description: "A maximalist rap album of ego, spectacle, excess, and emotional fracture.",
      image: "images/music/my beautiful dark twisted fantasy.jpg"
    },
    {
      title: "Nectar",
      creator: "By Joji",
      description: "A moody pop album where longing, detachment, and polish meet in wide emotional swings.",
      image: "images/music/nectar.jpg"
    },
    {
      title: "OK Computer",
      creator: "By Radiohead",
      description: "A paranoid and visionary rock album about alienation, systems, and modern unease.",
      image: "images/music/ok computer.jpg"
    },
    {
      title: "One More Light",
      creator: "By Linkin Park",
      description: "A vulnerable late-career pop-rock record centered on grief, care, and exhaustion.",
      image: "images/music/one moer light.jpg"
    },
    {
      title: "Power, Corruption & Lies",
      creator: "By New Order",
      description: "A cool, elegant synth-pop album built on tension, distance, and rhythmic clarity.",
      image: "images/music/ower corruption and lies.jpg"
    },
    {
      title: "Pray for the Wicked",
      creator: "By Panic! at the Disco",
      description: "A flashy pop record full of theatricality, confidence, and bright melodic drama.",
      image: "images/music/pray for the wicked.jpg"
    },
    {
      title: "Purpose",
      creator: "By Justin Bieber",
      description: "A polished pop album where vulnerability and radio-minded hooks work surprisingly well together.",
      image: "images/music/purpose.jpg"
    },
    {
      title: "Random Access Memories",
      creator: "By Daft Punk",
      description: "A lavish disco-pop album obsessed with memory, craft, and human feeling inside machine precision.",
      image: "images/music/random access memories.jpg"
    },
    {
      title: "Scaring the Hoes",
      creator: "By JPEGMAFIA and Danny Brown",
      description: "A chaotic, thrilling rap album built from abrasion, humor, and total refusal to smooth itself out.",
      image: "images/music/scaring the hoes.jpg"
    },
    {
      title: "Siamese Dream",
      creator: "By The Smashing Pumpkins",
      description: "A dense alt-rock classic full of distortion, yearning, and melodic overload.",
      image: "images/music/siamese dream.jpg"
    },
    {
      title: "Smithereens",
      creator: "By Joji",
      description: "A brief and fragile album built from soft edges, emotional drift, and understated ache.",
      image: "images/music/smithereens.jpg"
    },
    {
      title: "Souvlaki",
      creator: "By Slowdive",
      description: "A dream-pop landmark of blur, texture, and emotional suspension.",
      image: "images/music/souvlaki.jpg"
    },
    {
      title: "The New Abnormal",
      creator: "By The Strokes",
      description: "A mature rock comeback full of fatigue, cool restraint, and late-night clarity.",
      image: "images/music/the new abnormal.jpg"
    },
    {
      title: "The Outside Room",
      creator: "By Weyes Blood",
      description: "A dreamy and intimate record where melancholy, devotion, and atmosphere drift together beautifully.",
      image: "images/music/the outside room.jpg"
    },
    {
      title: "Turn On the Bright Lights",
      creator: "By Interpol",
      description: "A sleek post-punk debut of urban dread, elegance, and emotional distance.",
      image: "images/music/turn on the bright lights.jpg"
    },
    {
      title: "Ultraviolence",
      creator: "By Lana Del Rey",
      description: "A slow-burning noir-pop record full of glamour, damage, and dangerous romance.",
      image: "images/music/ultraviolence.jpg"
    },
    {
      title: "The Velvet Underground & Nico",
      creator: "By The Velvet Underground and Nico",
      description: "A foundational art-rock album of transgression, coolness, and strange enduring beauty.",
      image: "images/music/velvet underground and nico.jpg"
    },
    {
      title: "We Will Always Love You",
      creator: "By The Avalanches",
      description: "A lush, sample-heavy record about loss, transmission, and cosmic intimacy.",
      image: "images/music/we will always love you.jpg"
    },
    {
      title: "(What's the Story) Morning Glory?",
      creator: "By Oasis",
      description: "A swaggering Britpop classic made of scale, hooks, and emotional overstatement.",
      image: "images/music/whats the story morning glroy.jpg"
    },
    {
      title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
      creator: "By David Bowie",
      description: "A glam-rock classic of myth, performance, apocalypse, and star-making self-invention.",
      image: "images/music/ziggy stardust.jpg"
    }
  ]
};

const labels = {
  movies: "Movies",
  tvShows: "TV Shows",
  games: "Games",
  anime: "Anime",
  books: "Books",
  music: "Music"
};

let activeCategory = "movies";

const toggleButtons = document.querySelectorAll(".toggle-btn");
const shuffleButton = document.getElementById("shuffle-btn");
const categoryLabel = document.getElementById("item-category");
const title = document.getElementById("item-title");
const creator = document.getElementById("item-creator");
const description = document.getElementById("item-description");
const image = document.getElementById("item-image");

function getRandomItem(category) {
  const items = data[category];
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function updateCard(item) {
  categoryLabel.textContent = labels[activeCategory];
  title.textContent = item.title;
  creator.textContent = item.creator;
  description.textContent = item.description;
  image.src = item.image;
  image.alt = item.title;
}

function setActiveCategory(category) {
  activeCategory = category;

  toggleButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
}

function shuffleSelection() {
  const randomItem = getRandomItem(activeCategory);
  updateCard(randomItem);
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveCategory(button.dataset.category);
  });
});

shuffleButton.addEventListener("click", shuffleSelection);
