
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
        description: '',
        videoUrl: 'https://vimeo.com/1165723713/921b31ee6f?fl=tl&fe=ec',
        thumbnail: 'chiamountains.jpg',
        category: 'SERIES',
        director: 'Chiara Hollender',
        cinematographer: 'MATTHEW FIGLER',
        format: 'Sony Burano, Aaton XTR, 7207 s16mm Film, Olympus Rehoused, Zeiss LWZ.2, Canon 200 f1.8',
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
        description: '',
        videoUrl: 'https://vimeo.com/1162257542/7122e57d0d?share=copy&fl=sv&fe=ci',
        thumbnail: 'TERRY.jpg',
        category: 'SERIES',
        director: 'Drew Van Steenbergen',
        cinematographer: 'MATTHEW FIGLER',
        format: 'Canon C300II, Zeiss LWZ.2, Angenieux Style',
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
        description: '',
        videoUrl: 'https://vimeo.com/910168325',
        thumbnail: 'flare.jpg',
        category: 'SERIES',
        director: 'Rick Kaplan, Franco Losapio',
        cinematographer: 'MATTHEW FIGLER (10 Episodes)',
        format: 'Sony Venice, Angenieux Optimo, Zeiss Super Speeds',
        titleLogo: ['Magnolia.png', 'DSC.png', 'Hbo.jpeg'],
        gallery: [
          'flare.jpg',
          'BWBposter.jpg'
        ]
      },
      {
        id: 'brooklyn-sound',
        title: 'BROOKLYN SOUND',
        description: '',
        videoUrl: 'https://vimeo.com/199911030?fl=pl&fe=sh',
        thumbnail: 'Primal.jpg',
        category: 'SERIES',
        director: 'Drew Van Steenbergen',
        cinematographer: 'MATTHEW FIGLER',
        format: 'Canon C300II, Angenieux DP',
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
        description: '',
        videoUrl: 'https://vimeo.com/1133489984',
        thumbnail: 'buffalo.JPG',
        category: 'DOCUMENTARY',
        director: 'Chiara Hollender',
        cinematographer: 'MATTHEW FIGLER',
        format: 'Sony Burano, Zeiss Super Speeds',
        gallery: [
          'lcportrait.jpg',
          'buffalo.JPG',
          'lctruck.jpg'
        ]
      },
      {
        id: 'all-you-need',
        title: 'ALL WE NEED IS ANOTHER CHANCE',
        description: '',
        videoUrl: 'https://vimeo.com/686764376/4a6dcb9177?share=copy&fl=sv&fe=ci',
        thumbnail: 'tle.JPG',
        category: 'DOCUMENTARY',
        director: 'Corbett Jones',
        cinematographer: 'MATTHEW FIGLER AND Evan Prince',
        format: 'Arri Amira, Canon C300, VHS, 8mm Film',
        gallery: [
          'jail.jpg',
          'tle.JPG',
          'tv.jpg'
        ]
      },
      {
        id: 'blackout',
        title: 'BLACKOUT',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=TNvDtuXAJdk',
        thumbnail: 'tents.jpg',
        category: 'DOCUMENTARY',
        director: 'Dori Oskowitz',
        cinematographer: 'Jackson Hunt and MATTHEW FIGLER',
        format: 'RED, Zeiss ZF',
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
        description: '',
        videoUrl: 'https://vimeo.com/824537742',
        thumbnail: 'chair.jpg',
        category: 'FILMS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'Krasnogorsk K3 PL, 7207 s16mm Film, Zeiss Super Speeds',
        gallery: [
          'chair.jpg',
          'spin2.jpg',
          'bounce.jpg'
        ]
      },
      {
        id: 'sling',
        title: '{SLING}',
        description: '',
        videoUrl: 'https://vimeo.com/311803261?share=copy&fl=sv&fe=ci',
        thumbnail: 'yaz0.jpg',
        category: 'FILMS',
        director: 'Matthew Figler',
        cinematographer: 'Travis Tips AND Matthew Figler',
        format: '4perf 35mm 5207',
        gallery: [
          'skate0.jpg',
          'walk0.jpg',
          'Slingshot2.jpg'
        ]
      },
      {
        id: 'a-lack-of-dating-in-brooklyn',
        title: 'A LACK OF DATING IN BROOKLYN',
        description: '',
        videoUrl: 'https://vimeo.com/157471897',
        thumbnail: 'qmburritovimeo.jpg',
        category: 'FILMS',
        director: 'Drew Van Steenbergen',
        cinematographer: 'MATTHEW FIGLER',
        format: 'RED, Zeiss LWZ.2, Angenieux Optimo',
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
        description: '',
        videoUrl: 'https://vimeo.com/143180353/df459ec313?fl=pl&fe=sh',
        thumbnail: 'dad.jpg',
        category: 'FILMS',
        director: 'Drew Van Steenbergen',
        cinematographer: 'MATTHEW FIGLER',
        format: 'RED, Zeiss Super Speeds',
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
        description: '',
        videoUrl: 'https://vimeo.com/136354421',
        thumbnail: 'awpvimeo.png',
        category: 'FILMS',
        director: 'Drew Van Steenbergen',
        cinematographer: 'MATTHEW FIGLER',
        format: 'Arri Alexa, Zeiss Super Speeds',
        gallery: [
          'awpvimeo.png'
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
        format: 'Krasnogorsk K3 PL, 7207 s16mm Film, Zeiss Super Speeds',
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
        director: 'John Appel',
        cinematographer: 'MATTHEW FIGLER',
        format: 'ARRI 235, 4perf 5207 35mm',
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
        format: 'Krasnogorsk K3, 7207 s16mm Film, Pentax, 1.33x Anamorphic',
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
        format: 'Arriflex 416, Krasnogorsk K3, 7207, 7265, s16mm Film, Black Magic Pocket',
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
    customProjectCountText: 'VARIOUS PROJECTS',
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
    featuredImage: 'T+Day.jpg',
    isGalleryView: true,
    customProjectCountText: 'VARIOUS PROJECTS',
    projects: [
      {
        id: 'highlights',
        title: 'HIGHLIGHTS',
        description: '',
        videoUrl: '',
        thumbnail: 'T+Day.jpg',
        category: 'INTERVIEW LOOKS',
        gallery: [
          'truck.jpg', '4.png', 'Indust.jpg', 'Seamless.jpg', 'abbycu.jpg:h-flip', 'twoperson.jpg', '10.png', 'Nicolelens.jpg'
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
    comingSoon: true,
    projects: [
      {
        id: 'patagonia',
        title: 'PATAGONIA',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&h=720&auto=format&fit=crop',
        category: 'COMMERCIAL REEL',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&h=720&auto=format&fit=crop'
        ]
      }
    ]
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    slug: 'performance',
    description: '',
    featuredImage: 'Phil_LowAngle.jpg',
    isGalleryView: true,
    customProjectCountText: 'VARIOUS PROJECTS',
    projects: [
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
      },
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
        description: '',
        videoUrl: 'https://vimeo.com/1163780871?share=copy&fl=sv&fe=ci',
        thumbnail: 'Wide2x.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: '3perf 5219 35mm, Cooke 2x Anamorphic',
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
        description: '',
        videoUrl: 'https://vimeo.com/1162256499/ff5bdf0601?share=copy&fl=sv&fe=ci',
        thumbnail: 'Wide.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: '4perf 5207 35mm',
        gallery: [
          'Wide.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'party-ppl',
        title: '2 PERF PHOTO BOOTH',
        description: '',
        videoUrl: 'https://vimeo.com/352983473?share=copy&fl=sv&fe=ci',
        thumbnail: 'fam.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: 'ARRI 235, 2perf 5207 35mm, Zeiss Super Speed 18mm',
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
        description: '',
        videoUrl: 'https://vimeo.com/1164111497?share=copy&fl=sv&fe=ci',
        thumbnail: 'Laowa.gif',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER AND Rick Dziedzic',
        cinematographer: 'MATTHEW FIGLER AND Rick Dziedzic',
        format: 'SONY BURANO, LAOWA 12mm Zero-D Uncoated Optics',
        gallery: [
          '12flare.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'push-process',
        title: '2 STOP PUSH PROCESS',
        description: '',
        videoUrl: 'https://vimeo.com/284443250?share=copy&fl=sv&fe=ci',
        thumbnail: 'Push.jpg',
        category: 'EXPERIMENTS',
        director: 'MATTHEW FIGLER',
        cinematographer: 'MATTHEW FIGLER',
        format: '4perf 5207 35mm, Pushed +2 Stops',
        gallery: [
          'Push.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      }
    ]
  }
];
