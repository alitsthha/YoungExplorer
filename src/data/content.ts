export const assets = {
  hero: '/images/hero-schoolboy.png',
  reading: 'reading',
  early: 'early-learners',
  preschool: 'preschool',
  prek: 'pre-k',
  art: 'creative-art',
  child: 'child',
  outdoor: 'outdoor',
  family: 'family',
  laptop: 'laptop',
  story: 'story-time',
};

export const programs = [
  { slug: 'early-learners', title: 'Early Learners Program', image: assets.early, age: '2–3', students: 15, price: 150, category: 'Toddlers', description: 'Little discoveries, new friendships, and a gentle introduction to learning together.', detail: 'A reassuring first step into a wider world. Our early learners explore sensory play, songs, simple stories, and everyday routines with a familiar, caring teacher.', skills: ['Language and listening', 'Sharing and taking turns', 'Sensory exploration', 'Confidence away from home'] },
  { slug: 'preschool-foundations', title: 'Preschool Foundations', image: assets.preschool, age: '3–4', students: 18, price: 120, category: 'Preschool', description: 'Hands-on exploration that helps curious children make sense of the world.', detail: 'From building the tallest tower to retelling a favorite story, each day brings meaningful opportunities to practice communication, early number skills, and independence.', skills: ['Early numbers and patterns', 'Creative problem solving', 'Storytelling and vocabulary', 'Friendship and cooperation'] },
  { slug: 'pre-k-preparation', title: 'Pre-K Preparation', image: assets.prek, age: '4–6', students: 12, price: 180, category: 'Kindergarten', description: 'A happy, confident next step toward school, at a pace that feels right.', detail: 'Our pre-kindergarten program combines purposeful play with early literacy and numeracy. Children learn to ask questions, follow ideas, and feel proud of their progress.', skills: ['Early reading and writing', 'Number confidence', 'Independence and focus', 'Social and emotional readiness'] },
  { slug: 'creative-arts', title: 'Creative Arts & Crafts', image: assets.art, age: '5–6', students: 16, price: 140, category: 'Enrichment', description: 'A colorful space for imagination, messy making, and big little ideas.', detail: 'Paint, print, build, and imagine. Open-ended art experiences let children experiment with materials, develop fine motor skills, and discover their own way of expressing an idea.', skills: ['Fine motor development', 'Imagination and expression', 'Exploring color and texture', 'Confidence in creating'] },
  { slug: 'music-movement', title: 'Music & Movement', image: assets.story, age: '3–6', students: 14, price: 130, category: 'Enrichment', description: 'Rhythm, songs, and joyful movement that bring learning to life.', detail: 'Children discover rhythms with simple instruments, explore movement through games, and build listening skills while making music together.', skills: ['Rhythm and coordination', 'Listening and memory', 'Body awareness', 'Group participation'] },
  { slug: 'little-explorers', title: 'Little Outdoor Explorers', image: assets.outdoor, age: '3–6', students: 14, price: 160, category: 'Enrichment', description: 'Fresh air, nature discoveries, and adventures with friends.', detail: 'Our outdoor explorers look closely at nature, follow their questions, and work together through age-appropriate games and discoveries.', skills: ['Curiosity about nature', 'Balance and coordination', 'Teamwork and resilience', 'Observation and conversation'] },
];

export const teachers = [
  { name: 'Daniel Wilson', role: 'Lead Early Years Teacher', image: 'teacher-1', bio: 'Daniel brings stories, science, and a generous sense of humor to every learning day. He loves helping children discover what they can do.' },
  { name: 'James Parker', role: 'Preschool Teacher', image: 'teacher-2', bio: 'James creates a calm, encouraging space where each child can grow at their own pace. His favorite classroom moments begin with “What if?”' },
  { name: 'Aisha Ahmed', role: 'Creative Learning Teacher', image: 'teacher-3', bio: 'Aisha helps little artists express their ideas through color, movement, and music. She believes every child has a story worth sharing.' },
  { name: 'Oliver Bennett', role: 'Kindergarten Teacher', image: 'teacher-4', bio: 'Oliver turns everyday questions into playful investigations. He enjoys nature walks, building projects, and celebrating small achievements.' },
];

export const faqs = [
  { question: 'Which ages can join Kidvero?', answer: 'Our programs cover ages 2 to 6, with small groups for toddlers, preschoolers, and children preparing for kindergarten. We help families choose a group that suits their child’s stage.' },
  { question: 'What does a typical day look like?', answer: 'A balanced day includes a warm welcome, free play, small-group learning, snacks, outdoor exploration, creative activities, and quiet time. Familiar routines help children feel comfortable.' },
  { question: 'How do you keep children safe?', answer: 'Our approach includes supervised play, age-appropriate spaces, clear collection procedures, and regular conversations with families. A tour is a good time to discuss your child’s individual needs.' },
  { question: 'Who will teach my child?', answer: 'Each group has a dedicated early-years educator who gets to know the children and their families. Meet the team on our Teachers page or arrange a visit to see a class in action.' },
  { question: 'Are meals and snacks provided?', answer: 'Our plans include a morning snack, with lunch available in full-day care. Please discuss allergies and dietary preferences with the team before enrollment.' },
  { question: 'How do I apply for a place?', answer: 'Choose a program, arrange a visit, and tell us about your child. The team will explain availability, settling-in visits, and the next steps before confirming a place.' },
  { question: 'How big are the learning groups?', answer: 'Group sizes depend on the program and the children’s ages. Our learning groups range from 12 to 18 children. Ask the center to confirm its current staffing and group arrangements.' },
  { question: 'Can we visit before enrolling?', answer: 'Of course. A visit gives you and your child time to explore the spaces, meet the teachers, and ask questions. Use the enrollment form to prepare a visit request.' },
  { question: 'How will I hear about progress?', answer: 'Teachers share everyday observations, celebrate new skills, and make time for family conversations. You can also ask for a more detailed discussion whenever you need one.' },
];

export const testimonials = [
  { name: 'Emma Thompson', relation: 'Mother of a preschool learner', quote: 'The little things make such a difference: a warm welcome, a teacher who listens, and a new story to tell at the end of every day. Our daughter has found her confidence here.', image: 'parent-1' },
  { name: 'David Morgan', relation: 'Father of a pre-K learner', quote: 'We wanted a place where our son could be himself. He comes home full of questions, new songs, and happy memories. Seeing him excited about learning has been wonderful.', image: 'teacher-2' },
  { name: 'Sofia Williams', relation: 'Mother of an early learner', quote: 'Starting preschool felt like a big step. The gentle settling-in routine helped all of us, and now our little one runs in to greet her friends every morning.', image: 'teacher-3' },
];

export const articles = [
  { slug: 'building-your-childs-confidence', title: 'Small Everyday Moments That Build a Child’s Confidence', category: 'Parenting Tips', image: assets.family, date: 'September 8, 2026', readTime: '4 min read', intro: 'Confidence grows through everyday moments: a patient conversation, a chance to try again, and the feeling that someone believes in you.', sections: [
    ['Make room for small choices', 'Choosing a story, picking a shirt, or deciding which blocks to use gives children a manageable way to practice independence. Offer two simple options and allow time for a decision.'],
    ['Notice the effort behind an achievement', 'Instead of focusing only on a finished picture or a correct answer, describe what you saw: “You kept trying different pieces until the puzzle fit.” Specific observations help children recognize their own progress.'],
    ['Let mistakes be part of learning', 'When something goes wrong, stay close and curious. Ask what they might try next. You do not have to fix every problem; sometimes encouragement and another chance are enough.'],
    ['Create a rhythm of connection', 'A few minutes of uninterrupted play or conversation can become a dependable part of the day. Follow your child’s interests, listen to their ideas, and enjoy what you discover together.'],
  ] },
  { slug: 'happy-daily-routines', title: 'Creating Gentle Routines for Happier Family Days', category: 'Parenting Tips', image: assets.reading, date: 'September 4, 2026', readTime: '5 min read', intro: 'A predictable rhythm helps young children know what comes next. The goal is a day that feels reassuring, with enough flexibility for real life.', sections: [
    ['Start with one familiar moment', 'Choose a small routine that happens every day, such as putting shoes by the door or reading after dinner. Keep the steps simple and practice together.'],
    ['Use pictures and friendly reminders', 'A few pictures can help children understand the order of a morning or bedtime routine. Describe the next step calmly and give time to move from one activity to another.'],
    ['Leave space for play and rest', 'An enjoyable routine balances activity with quieter moments. Children need time to explore their own ideas as well as time to slow down.'],
    ['Adjust together as your child grows', 'Check what is working and what feels difficult. Small changes can make a routine more comfortable for the whole family. Consistency matters more than perfection.'],
  ] },
  { slug: 'playful-early-learning', title: 'Five Playful Ways to Explore Early Learning at Home', category: 'Early Learning', image: assets.child, date: 'August 28, 2026', readTime: '4 min read', intro: 'Some of the best learning materials are already in your home. Everyday play offers plenty of chances to talk, count, imagine, and discover.', sections: [
    ['Turn a walk into a noticing game', 'Look for colors, shapes, and interesting sounds. Follow your child’s questions and describe what you both notice. There is no need to turn every observation into a lesson.'],
    ['Build and tell a story', 'Use blocks, cushions, or empty boxes to make a setting. Ask who might live there and what could happen next. Join the story while leaving your child room to lead.'],
    ['Count during everyday tasks', 'Set out cups, sort socks, or count the steps to the garden. Real objects help children connect number words with things they can touch and move.'],
    ['Make music and make a mess', 'Clap a rhythm, sing a familiar song, paint with water, or explore play dough. Choose safe materials and enjoy the process together, without needing a perfect result.'],
  ] },
];
