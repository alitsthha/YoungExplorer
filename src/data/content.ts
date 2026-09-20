// Public source links and confirmed details are documented in CONTENT_SOURCES.md.
export const academy = {
  name: 'Young Explorers Academy',
  location: 'Baluwatar, Kathmandu, Nepal',
  instagram: 'https://www.instagram.com/young.explorers.academy/',
  instagramHandle: '@young.explorers.academy',
  googleProfile: 'https://www.google.com/search?q=Young+Explorers+Academy+Kathmandu',
  feeNote: 'Contact us for current fees in Nepali rupees (Rs. / NPR).',
};

// Only add amounts here after the academy confirms its current NPR fee schedule.
export function formatNPR(amount: number | null): string {
  return amount === null ? 'Contact for fees' : `Rs. ${new Intl.NumberFormat('en-NP', { maximumFractionDigits: 0 }).format(amount)}`;
}

export type Program = {
  slug: string; title: string; image: string; age: string; category: string;
  priceNPR: number | null; description: string; detail: string; skills: string[];
};

export const assets = {
  hero: '/images/Gallery/758635989_17974083789087640_445313971566741991_n..jpg',
  reading: '/images/Gallery/775213420_17977997985087640_2461788668490017299_n..jpg',
  early: '/images/Gallery/778565198_17977997856087640_1968658231480188747_n..jpg',
  preschool: '/images/Gallery/780024071_17977999494087640_6892820437427729248_n..jpg',
  prek: '/images/Gallery/774833190_17976980247087640_4137250384706458054_n..jpg',
  art: '/images/Gallery/774596656_17976980373087640_3856239063817893836_n..jpg',
  child: '/images/Gallery/777982909_17977998930087640_2962719499811987181_n..jpg',
  outdoor: '/images/Gallery/753686117_17973304911087640_4456248461430302943_n..jpg',
  family: '/images/Gallery/766662154_17975864136087640_1016867383154150636_n..jpg',
  laptop: '/images/Gallery/775799150_17977999296087640_1406222141761297869_n..jpg',
  story: '/images/Gallery/777851459_17977998012087640_6601087737842884828_n..jpg',
  team: '/images/Gallery/711630946_17964808338087640_4186067007734961153_n..jpg',
  banner: '/images/Gallery/753933066_17973304881087640_7587009646347083425_n..jpg',
};

export const programs: Program[] = [
  {
    "slug": "early-learners",
    "title": "Holiday Camps",
    "image": assets.hero,
    "age": "Ask about age groups",
    "category": "Camps",
    "priceNPR": null,
    "description": "Holidays full of friendship, creative projects, and discoveries beyond the classroom.",
    "detail": "Our academy gallery brings together camp moments, shared activities, and celebrations. Ask about the next camp, its age groups, dates, and what your child should bring.",
    "skills": [
      "Trying new activities",
      "Making friends",
      "Creative exploration",
      "Shared experiences"
    ]
  },
  {
    "slug": "preschool-foundations",
    "title": "Outdoor Discovery",
    "image": assets.preschool,
    "age": "Ask about age groups",
    "category": "Outdoor Learning",
    "priceNPR": null,
    "description": "Get curious about the natural world through hands-on outdoor experiences.",
    "detail": "From exploring green spaces to getting hands-on with nature, outdoor experiences invite children to notice, ask questions, and learn together. Contact the team for the next activity and its suitability for your child.",
    "skills": [
      "Observation and curiosity",
      "Connection with nature",
      "Working together",
      "Everyday discovery"
    ]
  },
  {
    "slug": "pre-k-preparation",
    "title": "Speaking & Self-Expression",
    "image": assets.prek,
    "age": "Ask about age groups",
    "category": "Creative Workshops",
    "priceNPR": null,
    "description": "A space for young voices, storytelling, and the courage to share an idea.",
    "detail": "The academy’s Mic Drop Mini-Star event brought young speakers to the stage at Kids Carnival 2025. Ask about future opportunities for children to practise self-expression and share their creativity.",
    "skills": [
      "Speaking with confidence",
      "Listening to others",
      "Sharing ideas",
      "Creative expression"
    ]
  },
  {
    "slug": "creative-arts",
    "title": "Creative Arts & Making",
    "image": assets.art,
    "age": "Ask about age groups",
    "category": "Creative Workshops",
    "priceNPR": null,
    "description": "Explore colour, texture, and imagination through projects children can make their own.",
    "detail": "Our gallery celebrates children making and sharing their work. Creative activities offer room to experiment, notice details, and enjoy the process of bringing an idea to life.",
    "skills": [
      "Exploring materials",
      "Imagination",
      "Hands-on making",
      "Sharing creative work"
    ]
  },
  {
    "slug": "music-movement",
    "title": "Stories & Performance",
    "image": assets.reading,
    "age": "Ask about age groups",
    "category": "Creative Workshops",
    "priceNPR": null,
    "description": "Bring stories to life through participation, imagination, and creative play.",
    "detail": "The Joy House Collective has shared a storytelling and art session at Young Explorers Academy featuring “Stuck”. Contact us about upcoming storytelling experiences and workshops.",
    "skills": [
      "Listening and imagination",
      "Responding to stories",
      "Creative participation",
      "Art and expression"
    ]
  },
  {
    "slug": "little-explorers",
    "title": "Family Events & Adventures",
    "image": assets.family,
    "age": "Ask about age groups",
    "category": "Family Events",
    "priceNPR": null,
    "description": "Shared experiences that bring children, families, and the wider community together.",
    "detail": "Our community activities include Kids Carnival and outdoor experiences. Follow our announcements for future events, venues, registration details, and age guidance.",
    "skills": [
      "Community connection",
      "Family time",
      "Exploring together",
      "New experiences"
    ]
  }
];

export const teachers = [
  { name: 'Learning Through Stories', role: 'Stories & connection', image: '/images/Gallery/775213420_17977997985087640_2461788668490017299_n..jpg', alt: 'Children exploring an activity with their teachers', bio: 'Shared stories and hands-on activities invite children to listen, imagine, and participate.' },
  { name: 'Creative Learning Team', role: 'Expression & imagination', image: '/images/Gallery/774596656_17976980373087640_3856239063817893836_n..jpg', alt: 'A learner proudly sharing a creative project', bio: 'Open-ended projects give children room to explore materials, share ideas, and find their own way to create.' },
  { name: 'Outdoor Learning Team', role: 'Nature & discovery', image: '/images/Gallery/753686117_17973304911087640_4456248461430302943_n..jpg', alt: 'Children and educators exploring the forest', bio: 'Shared outdoor adventures make space for questions, friendship, and a closer connection with nature.' },
  { name: 'Our Academy Community', role: 'Learning & belonging', image: '/images/Gallery/766662154_17975864136087640_1016867383154150636_n..jpg', alt: 'The academy community gathered together', bio: 'Every child belongs to a wider community. Shared experiences bring children, educators, and families together.' },
];

export const faqs = [
  {
    "question": "What does Young Explorers Academy offer?",
    "answer": "Explore camps, outdoor learning, creative activities, storytelling, and community events. Contact the academy for programmes currently open for registration."
  },
  {
    "question": "Which ages can participate?",
    "answer": "Age guidance depends on the activity. Share your child’s age and interests so the team can recommend a suitable upcoming programme."
  },
  {
    "question": "Where do activities take place?",
    "answer": "The academy’s activities are based in Nepal, with events in Kathmandu and experiences at other venues. Confirm the meeting point and transport arrangements for your chosen programme."
  },
  {
    "question": "How do we register?",
    "answer": "Message @young.explorers.academy on Instagram to ask about availability and registration. The enquiry form on this website also lets you prepare a request."
  },
  {
    "question": "What are the programme fees?",
    "answer": "Ask for the current fee in Nepali rupees (Rs. / NPR). Prices, duration, and inclusions vary by programme; confirm the total before registering."
  },
  {
    "question": "Are food and transport included?",
    "answer": "Inclusions depend on the programme. Ask about meals, drinking water, transport, equipment, and any additional costs before booking."
  },
  {
    "question": "What should my child bring?",
    "answer": "Ask for the activity’s packing list. Let the team know about allergies, accessibility needs, and anything that will help your child participate comfortably."
  },
  {
    "question": "Where can I see recent activities?",
    "answer": "Visit @young.explorers.academy on Instagram for academy updates, or browse the photo gallery on this website."
  },
  {
    "question": "How do I confirm dates and availability?",
    "answer": "Contact the academy for current dates, age groups, venue details, and available places. Past event stories on this website are highlights, not upcoming bookings."
  }
];

export const experienceHighlights = [
  {
    "title": "Discover Together",
    "label": "Outdoor learning",
    "text": "A trail to follow, a garden to explore, and new questions to ask. Discover the outdoor moments in our academy gallery.",
    "image": assets.outdoor,
    "initials": "01"
  },
  {
    "title": "Make Something Yours",
    "label": "Creative experiences",
    "text": "Ideas take shape through colour, materials, and hands-on exploration. See children sharing their creations and celebrating what they have made.",
    "image": assets.art,
    "initials": "02"
  },
  {
    "title": "Share the Adventure",
    "label": "Our community",
    "text": "Friendships, celebrations, and time spent together are part of the academy story. Explore the moments that connect our community.",
    "image": assets.family,
    "initials": "03"
  }
];

export const articles = [
  {
    "slug": "kids-carnival-kathmandu",
    "title": "A Look Back at Kids Carnival 2025",
    "category": "Community Events",
    "image": assets.family,
    "date": "August 2, 2025 · Past event",
    "readTime": "2 min read",
    "intro": "Young Explorers Academy brought children and families together for Kids Carnival at Silver Oak, Gairidhara, Kathmandu.",
    "sections": [
      [
        "A day for the community",
        "The event featured games, creative activities, and a programme for children and families."
      ],
      [
        "A stage for young voices",
        "Mic Drop Mini-Star gave children an opportunity to express themselves through a public-speaking contest."
      ],
      [
        "Looking ahead",
        "This is a past event. Follow the academy on Instagram for future announcements and registration details."
      ]
    ],
    "source": "https://kathmandupost.com/art-culture/2025/08/02/events-august-2-to-august-8-2025",
    "sourceLabel": "Event coverage in The Kathmandu Post"
  },
  {
    "slug": "stories-and-art",
    "title": "When a Story Becomes a Creative Adventure",
    "category": "Storytelling & Art",
    "image": assets.reading,
    "date": "Academy highlights",
    "readTime": "2 min read",
    "intro": "The Joy House Collective shared a “Stuck” storytelling performance and art activity at Young Explorers Academy.",
    "sections": [
      [
        "Stories to take part in",
        "A shared story can become a starting point for imagination, conversation, and making."
      ],
      [
        "From listening to creating",
        "Connecting storytelling and art gives children different ways to respond to an idea."
      ],
      [
        "Explore upcoming sessions",
        "Contact the academy to learn about future storytelling and creative activities."
      ]
    ],
    "source": "https://thejoyhousecollective.com/tag/creative-learning-nepal/",
    "sourceLabel": "Session listing by The Joy House Collective"
  },
  {
    "slug": "outdoor-learning-moments",
    "title": "Little Discoveries Beyond the Classroom",
    "category": "From Our Gallery",
    "image": assets.outdoor,
    "date": "Academy photo journal",
    "readTime": "2 min read",
    "intro": "Our academy photographs capture outdoor exploration, shared discoveries, and children learning through experience.",
    "sections": [
      [
        "Notice the world around you",
        "A walk or a garden visit offers opportunities to look closely, ask questions, and share what catches your attention."
      ],
      [
        "Make room for curiosity",
        "Give children time to explore an idea, try an activity, and talk about what they notice."
      ],
      [
        "Plan the next adventure",
        "Ask about upcoming outdoor activities, the age guidance, meeting point, and what to bring."
      ]
    ],
    "source": "https://www.instagram.com/young.explorers.academy/",
    "sourceLabel": "Follow the academy on Instagram"
  }
];

// Original academy photographs, served locally without third-party requests.
export const schoolGallery = [
  { src: '/images/Gallery/1.jpg', title: 'Outdoor play and games', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/670236112_17958748455087640_8986407078884567280_n..jpg', title: 'Learning in the garden', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/670802539_17958750093087640_8010737360905292500_n..jpg', title: 'A hands-on discovery', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/711630946_17964808338087640_4186067007734961153_n..jpg', title: 'Our academy team', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/742111074_17971381986087640_6969529160507688559_n..jpg', title: 'Growing together', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/753686117_17973304911087640_4456248461430302943_n..jpg', title: 'A forest adventure', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/753933066_17973304881087640_7587009646347083425_n..jpg', title: 'Exploring the trail', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/754046459_17973304836087640_1346310118343170192_n..jpg', title: 'Little steps in nature', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/757455184_17974084602087640_5682780202118846465_n..jpg', title: 'Discovering our community', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/758395820_17974084767087640_955724701434215274_n..jpg', title: 'A moment in the outdoors', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/758635989_17974083789087640_445313971566741991_n..jpg', title: 'Proud little learners', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/763811128_1683035660497514_8167762015243196576_n..jpg', title: 'A walk on the wild side', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/765175892_17975568603087640_6075638116201135413_n..jpg', title: 'Learning beyond the classroom', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/766147205_17975863917087640_3616330027367717205_n..jpg', title: 'A day of water play', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/766544655_17975568642087640_8159387216552451540_n..jpg', title: 'A little rainy-day adventure', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/766662154_17975864136087640_1016867383154150636_n..jpg', title: 'Our academy community', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/767243255_17976388917087640_6077361798674705621_n..jpg', title: 'A splash of happiness', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/774596656_17976980373087640_3856239063817893836_n..jpg', title: 'Made with imagination', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/774788182_17976980415087640_4974287569850087616_n..jpg', title: 'Reaching new heights', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/774833190_17976980247087640_4137250384706458054_n..jpg', title: 'Celebrating every achievement', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/775166889_17977999374087640_2099899758233093129_n..jpg', title: 'Discovering local traditions', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/775213420_17977997985087640_2461788668490017299_n..jpg', title: 'Making and learning together', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/775280571_17978001051087640_3443872459565289741_n..jpg', title: 'Exploring our heritage', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/775799150_17977999296087640_1406222141761297869_n..jpg', title: 'Friendship and discovery', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/776100985_17977999314087640_4310472790016784753_n..jpg', title: 'An everyday adventure', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/777851459_17977998012087640_6601087737842884828_n..jpg', title: 'Celebrating together', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/777851461_17978000754087640_8914441800792142805_n..jpg', title: 'A new way to explore', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/777948242_17977997826087640_9067701903931635830_n..jpg', title: 'Happy moments with friends', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/777982909_17977998930087640_2962719499811987181_n..jpg', title: 'Growing with nature', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/778565198_17977997856087640_1968658231480188747_n..jpg', title: 'A very special day', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/778794224_17977998066087640_8387950399133694154_n..jpg', title: 'Time to celebrate', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/780024071_17977999494087640_6892820437427729248_n..jpg', title: 'Hands-on outdoor learning', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/780619802_17977999278087640_552755670126777521_n..jpg', title: 'Curiosity in action', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/780702175_17978000982087640_7661009874535361218_n..jpg', title: 'A world beyond the classroom', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/780949610_17977999329087640_5652128031770456245_n..jpg', title: 'Learning through experience', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/781163769_17977999359087640_2746452966096676493_n..jpg', title: 'Little explorers, big adventures', text: 'A moment from life at Young Explorers Academy.' },
  { src: '/images/Gallery/781207533_17978001009087640_2180159510811775563_n..jpg', title: 'Shared adventures and memories', text: 'A moment from life at Young Explorers Academy.' },
];
