import { academy, assets } from './content';

// Illustrative journeys assembled from academy photos, not a dated record of one child.
export const campJourneys = [
  {
    id: 'holiday', label: 'Holiday Camp', tagline: 'A little break. A world of discovery.',
    steps: [
      { title: 'Arrive & belong', theme: 'New friendships', text: 'Every journey begins with a hello. Shared games and friendly faces make room for children to find their feet, at their own pace.', image: assets.laptop, alt: 'Two children sitting together during an academy outdoor activity' },
      { title: 'Create & express', theme: 'Hands-on imagination', text: 'An idea becomes something to hold, share, and feel proud of. Making together gives little imaginations space to grow.', image: assets.reading, alt: 'Children making and exploring together around an activity table' },
      { title: 'Explore & discover', theme: 'Beyond the classroom', text: 'Step into the outdoors, notice something new, and ask another question. The adventure is in the little discoveries along the way.', image: assets.banner, alt: 'Academy children and adults walking along a green forest trail' },
      { title: 'Celebrate & shine', theme: 'Proud little moments', text: 'A creation to show, a story to tell, and a memory to take home. Celebrate the courage it takes to try something new.', image: assets.hero, alt: 'Two young learners proudly holding their colourful work and certificates' },
    ],
  },
  {
    id: 'summer', label: 'Summer Camp', tagline: 'Sunshine, muddy hands & happy memories.',
    steps: [
      { title: 'Get curious', theme: 'Nature is our classroom', text: 'Look closely, get hands-on, and discover how things grow. A little time in the garden can open up a whole world of questions.', image: assets.child, alt: 'A young learner planting in the academy garden' },
      { title: 'Make your mark', theme: 'Colourful little ideas', text: 'Gather inspiration from the world outside, then turn it into something personal. There is room for every child’s own way of creating.', image: assets.art, alt: 'A child outdoors proudly displaying a colourful piece of artwork' },
      { title: 'Adventure together', theme: 'Friendship in the fresh air', text: 'Follow a trail with friends, pause to look around, and enjoy the journey together. Small adventures become shared memories.', image: assets.outdoor, alt: 'An academy group gathered on a forest adventure' },
      { title: 'Carry it home', theme: 'Memories that stay', text: 'The best part of an adventure is having someone to share it with. Take home stories of new discoveries and the people who made them special.', image: assets.family, alt: 'Children and adults posing together during an academy community outing' },
    ],
  },
];

// Public Google reviews read on 22 September 2026. Quotes are brief verbatim
// excerpts; summaries are editorial paraphrases, not additional quoted words.
export const googleReviewSummary = {
  rating: '4.9', count: 14, checkedOn: '22 September 2026', url: academy.googleProfile,
};

export const parentTestimonials = [
  {
    theme: 'Happy holidays, growing confidence',
    quote: 'excited, energized, and happy to be at camp.',
    summary: 'Apekshya describes her twins enjoying their holiday visits and becoming more confident and curious through their camp experiences.',
    label: 'Apekshya Pradhan', initials: 'AP',
    takeaway: 'Excitement for every camp day.',
    sourceUrl: academy.googleProfile,
  },
  {
    theme: 'A summer full of variety',
    quote: 'amazed by the creativity',
    summary: 'Veronica’s two sons attended for four summer weeks. She highlights the varied activities, time with other children, and flexible arrangements.',
    label: "Veronica O'Sullivan Freltoft", initials: 'VF',
    takeaway: 'Fresh discoveries all summer.',
    sourceUrl: academy.googleProfile,
  },
  {
    theme: 'Care that families appreciate',
    quote: 'The teachers are very caring and the environment feels safe.',
    summary: 'Smriti shares that her daughter enjoys attending and has developed through the experience. She also appreciates the flexibility around timings.',
    label: 'Smriti Maharjan', initials: 'SM',
    takeaway: 'Caring teachers. Happy children.',
    sourceUrl: academy.googleProfile,
  },
];
