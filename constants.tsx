
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'series',
    name: 'SERIES',
    slug: 'series',
    description: '',
    featuredImage: 'chiamountains.jpg',
    projects: [
      {
        id: 'women-of-the-earth',
        title: 'WOMEN OF THE EARTH',
        description: '**12 Episodes**\n\nA documentary series celebrating women who steward the land and cultivate climate solutions across the nation. Filmed in Montana, California, Maine, New York, Vermont, New Jersey, Texas, Arizona, and Oregon.',
        videoUrl: 'https://vimeo.com/1165723713/921b31ee6f?fl=tl&fe=ec',
        thumbnail: 'chiamountains.jpg',
        category: 'SERIES',
        director: 'CHIARA HOLLENDER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'SONY BURANO, AATON XTR, 7207 S16MM FILM, OLYMPUS REHOUSED, ZEISS LWZ.2, CANON 200 F1.8',
        titleLogo: 'PBS.png',
        gallery: [
          'chiamountains.jpg',
          'goats.jpg',
          'nicole.jpg',
          'bees.jpg',
          'abbywater.jpg',
          'oyster.jpg',
          'skull.jpg',
          'dusk.jpg',
          'horse.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      },
      {
        id: 'a-little-of-your-time',
        title: 'A LITTLE OF YOUR TIME',
        description: '**11 Episodes**\n\nA docu-comedy show in which host Quinn Marcus subjects comedians and entertainers to the whims of her ‘normal’ routine. Featuring Adam Pally, Terry Crews, Maria Bamford, Moby, Casey Wilson, Ben Schwartz, Andy Milonakis, Lamorne Morris, Jon Gabrus, Isaiah Mustafa, and June Diane Raphael.',
        videoUrl: 'https://vimeo.com/1162257542/7122e57d0d?share=copy&fl=sv&fe=ci',
        thumbnail: 'TERRY.jpg',
        category: 'SERIES',
        director: 'DREW VAN STEENBERGEN',
        cinematographer: 'MATTHEW FIGLER',
        format: 'CANON C300II, ZEISS LWZ.2, ANGENIEUX STYLE',
        titleLogo: 'Abc.png',
        gallery: [
          'AlOYT.jpg',
          'TERRY.jpg',
          'MARIA.jpg'
        ]
      },
      {
        id: 'barnwood-builders',
        title: 'BARNWOOD BUILDERS',
        description: '**15+ Episodes**\n\nFilmed across the southern and midwestern United States, this docu-series captures the grit and grace of Appalachian craftsmen as they breathe new life into 18th and 19th-century log cabins. It is an exploration of American history, an intimate character study, and the true meaning of sweat equity.',
        videoUrl: 'https://vimeo.com/910168325',
        thumbnail: 'flare.jpg',
        category: 'SERIES',
        director: 'RICK KAPLAN, MATTHEW BENNETT, FRANCO LOSAPIO',
        cinematographer: 'MATTHEW FIGLER (15+ EPISODES)',
        format: 'SONY VENICE, ANGENIEUX OPTIMO, ZEISS SUPER SPEEDS',
        titleLogo: ['Magnolia.png', 'DSC.png', 'Hbo.jpeg'],
        gallery: [
          'flare.jpg',
          'BWBposter.jpg'
        ]
      },
      {
        id: 'brooklyn-sound',
        title: 'BROOKLYN SOUND',
        description: '**6 Episodes**\n\nThis musical mocku-series follows Lucy, the second-generation owner of Brooklyn Sound, and Joel, the studio\'s head engineer, as they try to save their legendary recording studio and keep their struggling business afloat.\n\n**Webby Award Nominee // Best Comedy: Longform or Series**\n**Best Indie Series // Streamy Awards**\n**Comedy Central Development Deal // New York Television Festival**\n**Tubefilters Top Five Indie Series**',
        videoUrl: 'https://vimeo.com/199911030?fl=pl&fe=sh',
        thumbnail: 'Primal.jpg',
        category: 'SERIES',
        director: 'DREW VAN STEENBERGEN',
        cinematographer: 'MATTHEW FIGLER',
        format: 'CANON C300II, ANGENIEUX DP',
        titleLogo: ['bsweb.png'],
        gallery: [
          'Primal.jpg'
        ],
        episodes: [
          { title: 'EPISODE 1 // JOSIAH AND THE TEETH', videoUrl: 'https://vimeo.com/154654949' },
          { title: 'EPISODE 2 // KOOKIE AND MILANO', videoUrl: 'https://vimeo.com/154654229' },
          { title: 'EPISODE 3 // SHEE', videoUrl: 'https://vimeo.com/154653189' },
          { title: 'EPISODE 4 // YOLANDA AND DCMM', videoUrl: 'https://vimeo.com/154650539' },
          { title: 'EPISODE 5 // WHY THE LILACS?', videoUrl: 'https://vimeo.com/154647991' },
          { title: 'EPISODE 6 // SAVE THE SOUND', videoUrl: 'https://vimeo.com/154646412' }
        ]
      }
    ]
  },
  {
    id: 'doc',
    name: 'DOCUMENTARY',
    slug: 'documentary',
    description: '',
    featuredImage: 'horsered.jpg',
    projects: [
      {
        id: 'earthrise',
        title: 'EARTHRISE X OXFAM',
        description: 'Once nearly extinct across Turtle Island, the buffalo are sacred teachers to the Lipan Apache. Today, Lucille and the women of her community are restoring these herds to their ancestral lands—reviving traditions of leadership, reciprocity, and resilience.',
        videoUrl: 'https://vimeo.com/1133489984',
        thumbnail: 'buffalo.JPG',
        category: 'DOCUMENTARY',
        director: 'CHIARA HOLLENDER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'SONY BURANO, ZEISS SUPER SPEEDS',
        gallery: [
          'lcportrait.jpg',
          'buffalo.JPG',
          'lctruck.jpg'
        ]
      },
      {
        id: 'all-you-need',
        title: 'ALL WE NEED IS ANOTHER CHANCE',
        description: 'After cutting a hit record behind bars at an infamous maximum-security prison, a young man becomes a beacon of hope and a legend among inmates.',
        videoUrl: 'https://vimeo.com/686764376/4a6dcb9177?share=copy&fl=sv&fe=ci',
        thumbnail: 'tle.JPG',
        category: 'DOCUMENTARY',
        director: 'CORBETT JONES',
        cinematographer: 'MATTHEW FIGLER AND EVAN PRINCE',
        format: 'ARRI AMIRA, CANON C300, VHS, 8MM FILM',
        gallery: [
          'jail.jpg',
          'tle.JPG',
          'tv.jpg'
        ]
      },
      {
        id: 'blackout',
        title: 'BLACKOUT',
        description: 'Blackout is a 30-minute original THUMP movie that follows the dramatic highs and lows of partiers all over the world. It is an unadulterated and visceral tale of life from the pre-party to the after-hours. Filmed in Berlin, Santiago, Tokyo, Cancun, Paris, Brooklyn and Detroit.',
        videoUrl: 'https://www.youtube.com/watch?v=TNvDtuXAJdk',
        thumbnail: 'tents.jpg',
        category: 'DOCUMENTARY',
        director: 'DORI OSKOWITZ',
        cinematographer: 'JACKSON HUNT AND MATTHEW FIGLER',
        format: 'RED, ZEISS ZF',
        titleLogo: 'vice.png',
        logoBeforeTitle: true,
        gallery: [
          'tents.jpg'
        ]
      }
    ]
  },
  {
    id: 'films',
    name: 'NARRATIVE FILMS',
    slug: 'films',
    description: '',
    featuredImage: 'awpvimeo.png',
    projects: [
      {
        id: 'calliope',
        title: 'CALLIOPE',
        description: 'A kid-sized cinematic memoir.',
        videoUrl: 'https://vimeo.com/824537742',
        thumbnail: 'chair.jpg',
        category: 'FILMS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'KRASNOGORSK K3 PL, 7207 S16MM FILM, ZEISS SUPER SPEEDS',
        gallery: [
          'chair.jpg',
          'spin2.jpg',
          'bounce.jpg'
        ]
      },
      {
        id: 'sling',
        title: '{SLING}',
        description: 'New York City skate rats discover a magical slingshot and use it to warp reality. “{Sling}” is a playful variation on a skate video, elevated by low-key but convincing special effects and natural performances from its two leads.\n\n**Official Premiere // NoBudge**',
        videoUrl: 'https://vimeo.com/311803261?share=copy&fl=sv&fe=ci',
        thumbnail: 'yaz0.jpg',
        category: 'FILMS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'TRAVIS TIPS AND MATTHEW FIGLER',
        format: '4PERF 35MM 5207',
        gallery: [
          'skate0.jpg',
          'walk0.jpg',
          'Slingshot2.jpg'
        ]
      },
      {
        id: 'a-lack-of-dating-in-brooklyn',
        title: 'A LACK OF DATING IN BROOKLYN',
        description: 'An unromantic comedy. Languishing in an unfulfilling quasi-relationship, Sam begins to have a horrifying realization: her romantic discontent is due to her own laziness and not, as she had previously assumed, the fault of every other human being on the planet.\n\n**Official Selection // NewFest**\n**Official Selection // Lower East Side Film Festival**\n**Official Selection // Short-of-the-Week**\n**Vimeo Staff Pick**',
        videoUrl: 'https://vimeo.com/157471897',
        thumbnail: 'qmburritovimeo.jpg',
        category: 'FILMS',
        director: 'DREW VAN STEENBERGEN',
        cinematographer: 'MATTHEW FIGLER',
        format: 'RED, ZEISS LWZ.2, ANGENIEUX OPTIMO',
        gallery: [
          'qmburrito.jpg',
          'emily.jpg',
          'Andy1.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      },
      {
        id: 'subpar',
        title: 'SUBPAR',
        description: 'Austyn is a superhero in her mid-twenties. Aside from dealing with villains and helping the city avert disaster, Austyn\'s problems aren\'t all that unique. She\'s not very close with her family, has no idea how to date, and wonders why people don\'t appreciate her more. Despite her remarkable power, Austyn can\'t help but feel subpar.',
        videoUrl: 'https://vimeo.com/143180353/df459ec313?fl=pl&fe=sh',
        thumbnail: 'dad.jpg',
        category: 'FILMS',
        director: 'DREW VAN STEENBERGEN',
        cinematographer: 'MATTHEW FIGLER',
        format: 'RED, ZEISS SUPER SPEEDS',
        gallery: [
          'Family.jpg',
          'trains.jpg',
          'mom.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      },
      {
        id: 'alone-with-people',
        title: 'ALONE WITH PEOPLE',
        description: 'Growing up gay in the South, a high school girl seeks the help of a therapist to come out to her family and friends in this hilarious and touching coming-of-gay story.\n\n**Audience Award // Best Dramatic Short Film // OutFest LA**\n**Audience Award // Best Women\'s Short Film // Out on Film, Georgia**\n**Audience Award // Best Short Film // ImageOut: Rochester LGBT Film Festival**\n**Best Alumni Short Film // Emerson LA Film Festival**\n**Jury Award // Best Short Film // Out Film Connecticut**\n**Vimeo Staff Pick**',
        videoUrl: 'https://vimeo.com/136354421',
        thumbnail: 'awpvimeo.png',
        category: 'FILMS',
        director: 'DREW VAN STEENBERGEN',
        cinematographer: 'MATTHEW FIGLER',
        format: 'ARRI ALEXA, ZEISS SUPER SPEEDS',
        gallery: [
          'awpvimeo.png'
        ]
      }
    ]
  },
  {
    id: 'commercial',
    name: 'COMMERCIAL REEL',
    slug: 'commercial',
    description: '',
    featuredImage: 'mountain.jpg',
    projects: [
      {
        id: 'commercial-reel',
        title: 'COMMERCIAL REEL 2025',
        description: 'COMING SOON.',
        videoUrl: '',
        thumbnail: 'mountain.jpg',
        category: 'COMMERCIAL REEL',
        director: 'VARIOUS',
        cinematographer: 'MATTHEW FIGLER',
        format: 'VARIOUS',
        gallery: [
          'mountain.jpg'
        ]
      }
    ]
  },
  {
    id: 'music-video',
    name: 'MUSIC VIDEO',
    slug: 'music-video',
    description: '',
    featuredImage: 'tubes.jpg',
    projects: [
      {
        id: 'just-milk',
        title: 'JUST MILK - "CARRY YOUR WEIGHT"',
        description: '',
        videoUrl: 'https://vimeo.com/499295515',
        thumbnail: 'Mirror.jpg',
        category: 'MUSIC VIDEO',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'KRASNOGORSK K3 PL, 7207 S16MM FILM, ZEISS SUPER SPEEDS',
        gallery: [
          'Mirror.jpg',
          'Cab.jpg',
          'tubes.jpg'
        ]
      },
      {
        id: 'friendship',
        title: 'FRIENDSHIP - "IF YOU SEE MY BELOVED"',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=03L60WXhURA',
        thumbnail: 'DAN.jpg',
        category: 'MUSIC VIDEO',
        director: 'JOHN APPEL',
        cinematographer: 'MATTHEW FIGLER',
        format: 'ARRI 235, 4PERF 5207 35MM',
        gallery: [
          'DAN.jpg',
          'ACRO.jpg',
          'PARK.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'trace-mountains',
        title: 'TRACE MOUNTAINS - "UNTITLED NO.1"',
        description: '',
        videoUrl: 'https://vimeo.com/292953065',
        thumbnail: 'puddle.jpg',
        category: 'MUSIC VIDEO',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'KRASNOGORSK K3, 7207 S16MM FILM, PENTAX, 1.33X ANAMORPHIC',
        gallery: [
          'sun.jpg',
          'water.jpg',
          'bus.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      },
      {
        id: 'pleictoscene',
        title: 'PLEISTOCENE - "YOUR NEW LIFE"',
        description: '',
        videoUrl: 'https://vimeo.com/213706391?fl=pl&fe=sh',
        thumbnail: 'team.JPG',
        category: 'MUSIC VIDEO',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'ARRIFLEX 416, KRASNOGORSK K3, 7207, 7265, S16MM FILM, BLACK MAGIC POCKET',
        gallery: [
          'team.JPG',
          'down.jpg',
          'hair.jpg'
        ]
      }
    ]
  },
  {
    id: 'unit-work',
    name: '2ND UNIT AND OPERATOR WORK',
    slug: 'contributions',
    description: '',
    featuredImage: 'Lizzo1.png',
    isGalleryView: true,
    customProjectCountText: 'SELECTED PROJECTS',
    galleryAspectRatio: '2/3',
    projects: [
      {
        id: 'highlights',
        title: 'HIGHLIGHTS',
        description: '',
        videoUrl: '',
        thumbnail: 'hh.jpg',
        category: '2ND UNIT AND OPERATOR WORK',
        gallery: [
          'hh.jpg',
          'bettylg.jpg',
          'bwb.jpg',
          'Lizzotour.jpg:cm-pad_resize,bg-573746,ar-2-3'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2/3'
      }
    ]
  },
  {
    id: 'interview',
    name: 'INTERVIEW LOOKS',
    slug: 'interview-looks',
    description: '',
    featuredImage: 'Indust.jpg',
    isGalleryView: true,
    customProjectCountText: 'SELECTED PROJECTS',
    projects: [
      {
        id: 'highlights',
        title: 'HIGHLIGHTS',
        description: '',
        videoUrl: '',
        thumbnail: 'T+Day.jpg',
        category: 'INTERVIEW LOOKS',
        gallery: [
          'truck.jpg', '4.png', 'Indust.jpg', 'Seamless.jpg', 'abbycu.jpg:h-flip', 'WR2.jpg', 'Nicolelens.jpg', 'twoperson.jpg'
        ]
      }
    ]
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    slug: 'performance',
    description: '',
    featuredImage: 'T+Day.jpg',
    isGalleryView: true,
    customProjectCountText: 'SELECTED PROJECTS',
    projects: [
      {
        id: 'lizzo',
        title: 'LIZZO',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'Lizzo1.png',
        category: 'PERFORMANCE',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Lizzo1.png'
        ]
      },
      {
        id: 'loren-allred',
        title: 'LOREN ALLRED',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'LA.jpg',
        category: 'PERFORMANCE',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'LA.jpg',
          'LA2.jpg',
          'T+Day.jpg',
          'Phil_LowAngle.jpg'
        ]
      },
      {
        id: 'all-that-remains',
        title: 'ALL THAT REMAINS',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'Bass_Med.jpg',
        category: 'PERFORMANCE',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Bass_Med.jpg'
        ]
      }
    ]
  },
  {
    id: 'experiments',
    name: 'EXPERIMENTS',
    slug: 'experiments',
    description: '',
    featuredImage: 'cover.jpg',
    projects: [
      {
        id: 'film-test',
        title: 'WIDE TO SCOPE 35MM TEST',
        description: 'Testing transition from 16:9 to ultra-wide anamorphic on 35mm film. Test also includes a speed ramp from 24fps to 75fps.',
        videoUrl: 'https://vimeo.com/1163780871?share=copy&fl=sv&fe=ci',
        thumbnail: 'Wide2x.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: '3PERF 5219 35MM, COOKE 2X ANAMORPHIC',
        gallery: [
          'Wide2x.jpg',
          'Norm.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'red-scale',
        title: 'EMULSION OUT 35MM TEST',
        description: 'Testing 4perf 35mm film shot through the backing rather than through the emulsion side.',
        videoUrl: 'https://vimeo.com/1162256499/ff5bdf0601?share=copy&fl=sv&fe=ci',
        thumbnail: 'Wide.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: '4PERF 5207 35MM',
        gallery: [
          'Wide.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'party-ppl',
        title: '2 PERF PHOTO BOOTH',
        description: 'Triggering a film camera at 8 frames per second.',
        videoUrl: 'https://vimeo.com/352983473?share=copy&fl=sv&fe=ci',
        thumbnail: 'fam.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'ARRI 235, 2PERF 5207 35MM, ZEISS SUPER SPEED 18MM',
        gallery: [
          'jorge.jpg',
          'fam.jpg',
          'km.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      },
      {
        id: 'lens-test',
        title: 'UNCOATED 12MM LENS TEST',
        description: 'Testing flare and halation characteristics of a modern ultrawide lens that has been uncoated.',
        videoUrl: 'https://vimeo.com/1164111497?share=copy&fl=sv&fe=ci',
        thumbnail: 'Laowa.gif',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER AND RICK DZIEDZIC',
        cinematographer: 'MATTHEW FIGLER AND RICK DZIEDZIC',
        format: 'SONY BURANO, LAOWA 12MM ZERO-D UNCOATED OPTICS',
        gallery: [
          '12flare.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'push-process',
        title: '2 STOP PUSH PROCESS',
        description: 'Daylight 35mm film pushed two stops under available sodium vapor light.',
        videoUrl: 'https://vimeo.com/284443250?share=copy&fl=sv&fe=ci',
        thumbnail: 'Push.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: '4PERF 5207 35MM, PUSHED +2 STOPS',
        gallery: [
          'Push.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      }
    ]
  }
];
