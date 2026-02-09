
import { Category } from './types';

export const CATEGORIES: Category[] = [
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
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'tents.jpg'
        ]
      }
    ]
  },
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
        videoUrl: 'https://vimeo.com/1013212196/66ecf11a6f',
        thumbnail: 'chiamountains.jpg',
        category: 'SERIES',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'AlOYT.jpg',
          'TERRY.jpg',
          'MARIA.jpg'
        ]
      },
      {
        id: 'brooklyn-sound',
        title: 'BROOKLYN SOUND',
        description: '',
        videoUrl: '',
        thumbnail: 'Primal.jpg',
        category: 'SERIES',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Primal.jpg'
        ],
        episodes: [
          { title: 'EPISODE 1 // JOSIAH AND THE TEETH', videoUrl: 'https://vimeo.com/154654949' },
          { title: 'EPISODE 2 // KOOKIE & MILANO', videoUrl: 'https://vimeo.com/154654229' },
          { title: 'EPISODE 3 // SHEE', videoUrl: 'https://vimeo.com/154653189' },
          { title: 'EPISODE 4 // YOLANDA & DCMM', videoUrl: 'https://vimeo.com/154650539' },
          { title: 'EPISODE 5 // WHY THE LILACS?', videoUrl: 'https://vimeo.com/154647991' },
          { title: 'EPISODE 6 // SAVE THE SOUND', videoUrl: 'https://vimeo.com/154646412' }
        ]
      },
      {
        id: 'barnwood-builders',
        title: 'BARNWOOD BUILDERS',
        description: '',
        videoUrl: 'https://vimeo.com/910168325',
        thumbnail: 'flare.jpg',
        category: 'SERIES',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'flare.jpg',
          'BWBposter.jpg'
        ]
      }
    ]
  },
  {
    id: 'films',
    name: 'FILMS',
    slug: 'films',
    description: '',
    featuredImage: 'AWP.jpg',
    projects: [
      {
        id: 'calliope',
        title: 'CALLIOPE',
        description: '',
        videoUrl: 'https://vimeo.com/824537742',
        thumbnail: 'chair.jpg',
        category: 'FILMS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        thumbnail: 'qmburrito.jpg',
        category: 'FILMS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        thumbnail: 'Family.jpg',
        category: 'FILMS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Family.jpg',
          'trains.jpg',
          'dad.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      },
      {
        id: 'alone-with-people',
        title: 'ALONE WITH PEOPLE',
        description: '',
        videoUrl: 'https://vimeo.com/136354421',
        thumbnail: 'AWP.jpg',
        category: 'FILMS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'AWP.jpg'
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
        title: 'JUST MILK',
        description: '',
        videoUrl: 'https://vimeo.com/499295515',
        thumbnail: 'Mirror.jpg',
        category: 'MUSIC VIDEO',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Mirror.jpg',
          'tubes.jpg',
          'Cab.jpg'
        ]
      },
      {
        id: 'friendship',
        title: 'FRIENDSHIP',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=03L60WXhURA',
        thumbnail: 'DAN.jpg',
        category: 'MUSIC VIDEO',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        title: 'TRACE MOUNTAINS',
        description: '',
        videoUrl: 'https://vimeo.com/292953065',
        thumbnail: 'puddle.jpg',
        category: 'MUSIC VIDEO',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
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
        title: 'PLEICTOSCENE',
        description: '',
        videoUrl: 'https://vimeo.com/213706391?fl=pl&fe=sh',
        thumbnail: 'team.JPG',
        category: 'MUSIC VIDEO',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'team.JPG',
          'down.jpg',
          'hair.jpg'
        ]
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
          'truck.jpg', '4.png', '6.png', '8.png', 'twoperson.jpg', 'abbycu.jpg:h-flip', '10.png', 'Nicolelens.jpg'
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
    id: 'unit-work',
    name: '2ND UNIT & OPERATOR WORK',
    slug: 'contributions',
    description: '',
    comingSoon: true,
    featuredImage: 'Lizzo1.png',
    projects: [
      {
        id: 'betty',
        title: 'BETTY',
        description: '',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1280&h=720&auto=format&fit=crop',
        category: 'CONTRIBUTIONS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1280&h=720&auto=format&fit=crop'
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
        id: 'red-scale',
        title: 'RED SCALE',
        description: '',
        videoUrl: 'https://vimeo.com/1162256499/ff5bdf0601?share=copy&fl=sv&fe=ci',
        thumbnail: 'Wide.jpg',
        category: 'EXPERIMENTS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Wide.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'push-process',
        title: 'PUSH PROCESS',
        description: '',
        videoUrl: 'https://vimeo.com/284443250?share=copy&fl=sv&fe=ci',
        thumbnail: 'Push.jpg',
        category: 'EXPERIMENTS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'Push.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '4/3'
      },
      {
        id: 'party-ppl',
        title: 'PARTY PPL',
        description: '',
        videoUrl: 'https://vimeo.com/352983473?share=copy&fl=sv&fe=ci',
        thumbnail: 'jorge.jpg',
        category: 'EXPERIMENTS',
        director: 'TBD',
        cinematographer: 'MATTHEW FIGLER',
        format: 'TBD',
        gallery: [
          'jorge.jpg',
          'fam.jpg',
          'km.jpg'
        ],
        aspectRatio: '16/9',
        galleryAspectRatio: '2.39/1'
      }
    ]
  }
];
