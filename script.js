const data = {
  movies: [
    {
      title: "In the Mood for Love",
      creator: "Directed by Wong Kar-wai",
      description: "A restrained, intimate romance wrapped in longing, color, and unforgettable atmosphere.",
      image: "https://i.pinimg.com/736x/6f/fc/56/6ffc56e797758be02d3ac43c41a421e8.jpg"
    },
    {
      title: "The Grand Budapest Hotel",
      creator: "Directed by Wes Anderson",
      description: "A stylish, sharply comic adventure with meticulous framing and a surprisingly heartfelt center.",
      image: "https://i.pinimg.com/1200x/51/df/be/51dfbea4cccb5bff193c22e4d6a5e421.jpg"
    },
    {
      title: "Spirited Away",
      creator: "Directed by Hayao Miyazaki",
      description: "A dreamlike coming-of-age journey filled with wonder, strangeness, and emotional clarity.",
      image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80"
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
      image: "https://i.pinimg.com/1200x/f3/40/f5/f340f56d0e1c57c948f4a2a07ac22d24.jpg"
    },
    {
      title: "Currents",
      creator: "By Tame Impala",
      description: "Psychedelic pop polished into something sleek, hypnotic, and endlessly replayable.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "To Pimp a Butterfly",
      creator: "By Kendrick Lamar",
      description: "A bold, layered record that fuses jazz, funk, politics, and autobiography into a singular statement.",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80"
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
