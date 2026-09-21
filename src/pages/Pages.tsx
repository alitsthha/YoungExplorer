import { Check, Heart, Camera, MapPin, School, Sparkles, Sun, Users } from 'lucide-react';
import { academy, articles, formatNPR, programs } from '../data/content';
import { Link, useRouter } from '../lib/router';
import { ButtonLink, Doodles, PageHero, Photo, SectionTitle } from '../components/Shared';
import { Reveal } from '../components/ui/Reveal';
import { ParentTestimonialsSection } from '../components/CampStories';
import { AboutSection, ActivitiesSection, AdmissionsSteps, BlogsSection, ClassesSection, DailySchedule, EnrollmentForm, EnrollmentSection, FAQSection, Hero, TeachersSection, TestimonialsSection, TourBanner, WhySection } from '../components/Sections';

export function HomePage() {
  return <><Hero /><AboutSection /><ClassesSection /><WhySection /><TourBanner /><ActivitiesSection /><TeachersSection /><ParentTestimonialsSection /><FAQSection /><EnrollmentSection /><BlogsSection /></>;
}
export function AboutPage() {
  return <><PageHero title="About Young Explorers Academy" description="A skill-based learning centre for children in Baluwatar, Kathmandu." /><AboutSection extended /><section className="section cream wave-section"><Doodles /><div className="container"><SectionTitle centered eyebrow="What Matters to Us" title="Small People. Big Possibilities." description="Our values shape the way we care, teach, and welcome every family." /><div className="values-grid">{[
    { Icon: Heart, title: 'Care Comes First', text: 'Children learn best when they feel safe, heard, and understood. We begin with warm relationships and take time to notice the little things.' },
    { Icon: Sparkles, title: 'Curiosity Leads the Way', text: 'Questions are the beginning of an adventure. We make room for imagination and help children discover answers through everyday experiences.' },
    { Icon: Users, title: 'We Grow Together', text: 'Families are an essential part of our school community. Open conversations and shared celebrations make the journey more meaningful.' },
  ].map(({ Icon, title, text }, i) => <Reveal className="value-card" delay={i * 90} key={title}><Icon /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section><WhySection /><TeachersSection /><TourBanner /><TestimonialsSection /></>;
}
export function ClassesPage() { return <><PageHero title="Our Programmes" description="Creative experiences, camps, and adventures beyond the classroom." /><ClassesSection all /><WhySection /><TourBanner /><FAQSection /></>; }

export function ClassDetailsPage({ slug }: { slug: string }) {
  const program = programs.find(p => p.slug === slug);
  if (!program) return <NotFoundPage />;
  return <><PageHero title={program.title} parent={{ title: 'Programmes', to: '/classes' }} description={program.description} /><section className="section"><div className="container detail-layout"><div className="detail-main"><Reveal><Photo className="detail-photo" src={program.image} alt={program.title} /><span className="eyebrow">Learning With a Little Wonder</span><h2>A Nurturing Space for Your Child to Grow</h2><p>{program.detail}</p><p>Every child brings their own interests, strengths, and pace. Our teachers observe, encourage, and adapt activities to make each day welcoming and meaningful.</p><h3>What We’ll Discover Together</h3><ul className="skills-list">{program.skills.map(skill => <li key={skill}><Check />{skill}</li>)}</ul><h3>Play With Purpose</h3><p>Experiences beyond the classroom can spark new interests and give children opportunities to create, collaborate, and express themselves. Ask the team how the upcoming programme is structured.</p><h3>Parents Are Part of the Journey</h3><p>We welcome your questions and insights. Everyday conversations help us understand your child and celebrate the progress you notice at home and in the classroom.</p></Reveal></div><aside className="detail-sidebar"><h3>Your Program at a Glance</h3><dl><div><dt>Age guidance</dt><dd>{program.age}</dd></div><div><dt>Program</dt><dd>{program.category}</dd></div><div><dt>Days</dt><dd>Confirm upcoming dates</dd></div><div><dt>Session</dt><dd>Varies by programme</dd></div></dl><p className="price fee-on-request">{formatNPR(program.priceNPR)}<small>Nepali rupees (Rs. / NPR)</small></p><ButtonLink to={`/admissions?program=${program.slug}#enrollment`}>Enquire About This Programme</ButtonLink><p>Talk to our team about availability and the best schedule for your family.</p></aside></div></section><DailySchedule /><TourBanner /><FAQSection /></>;
}
export function ActivitiesPage() { return <><PageHero title="Play, Create & Discover" description="A little imagination turns every day into an adventure." /><ActivitiesSection /><DailySchedule /><TourBanner /><EnrollmentSection /></>; }
export function AdmissionsPage() {
  const { location } = useRouter();
  const query = location.split('?')[1]?.split('#')[0] || '';
  const selected = new URLSearchParams(query).get('program') || '';
  const initialProgram = programs.some(p => p.slug === selected) ? selected : '';
  return <><PageHero title="Join the Young Explorers Academy Family" description="A warm welcome and a helping hand, from your first visit to the first day." /><AdmissionsSteps /><EnrollmentSection key={initialProgram} initialProgram={initialProgram} /><FAQSection /></>;
}
export function TeachersPage() { return <><PageHero title="Our Learning Community" description="Discover the experiences that bring our academy community together." /><TeachersSection page /><AboutSection /><TourBanner /></>; }
export function FAQsPage() { return <><PageHero title="Frequently Asked Questions" description="A little more about life, learning, and joining us at Young Explorers Academy." /><FAQSection full /><TourBanner /><EnrollmentSection /></>; }
export function BlogPage() { return <><PageHero title="Our Little Journal" description="Community events, storytelling, and discoveries from the academy." /><BlogsSection archive /><TourBanner /></>; }

export function PricingPage() {
  const plans = [programs[0], programs[3], programs[5]];
  return <><PageHero title="Programme Fees & Enquiries" description="Find the right experience for your child and request the current fee in Nepali rupees." /><section className="section"><div className="container"><SectionTitle centered eyebrow="Fees in Nepali Rupees" title="Plan Their Next Discovery" description="Fees depend on the programme, duration, and inclusions. Contact the academy for a current quote in Rs. (NPR)." /><div className="pricing-grid">{plans.map((program, i) => <Reveal key={program.slug} delay={i * 100}><article className={`pricing-card ${i === 1 ? 'featured' : ''}`}><Sun /><h3>{program.title}</h3><p>{program.description}</p><div className="plan-price fee-on-request"><strong>{formatNPR(program.priceNPR)}</strong><small>Nepali rupees (Rs. / NPR)</small></div><ul>{program.skills.map(skill => <li key={skill}><Check />{skill}</li>)}</ul><ButtonLink to={`/admissions?program=${program.slug}#enrollment`}>Request Programme Fees</ButtonLink></article></Reveal>)}</div><p className="pricing-footnote">Confirm the age group, dates, venue, meals, transport, and cancellation terms with the academy before registering.</p></div></section><FAQSection /><TourBanner /></>;
}

export function BlogPostPage({ slug }: { slug: string }) {
  const legacyArticles: Record<string, string> = {
    'building-your-childs-confidence': 'kids-carnival-kathmandu',
    'happy-daily-routines': 'stories-and-art',
    'playful-early-learning': 'outdoor-learning-moments',
  };
  const article = articles.find(a => a.slug === (legacyArticles[slug] || slug));
  if (!article) return <NotFoundPage />;
  return <><PageHero title={article.title} parent={{ title: 'Our Journal', to: '/blog' }} /><section className="section"><div className="container article-layout"><article className="article-body"><Photo className="article-hero-photo" src={article.image} alt={article.title} /><p className="article-meta">{article.category} · {article.date} · {article.readTime}</p><p className="intro">{article.intro}</p><a className="article-source text-link" href={article.source} target="_blank" rel="noopener noreferrer">{article.sourceLabel} ↗</a>{article.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="article-callout"><p>Every child’s journey is different. Follow their interests, make time to connect, and enjoy the small discoveries along the way.</p><ButtonLink to="/classes">Explore Our Learning Programs</ButtonLink></div><Link className="text-link" to="/blog">← Back to Our Journal</Link></article><aside className="article-sidebar"><h3>More Little Ideas</h3>{articles.filter(a => a.slug !== slug).map(a => <Link to={`/blog/${a.slug}`} key={a.slug}>{a.title}</Link>)}<h3 style={{ marginTop: 32 }}>Come Meet Us</h3><p>Discover a warm, playful start to your child’s learning journey.</p><ButtonLink className="sidebar-button" to="/admissions#enrollment">Book a Visit</ButtonLink></aside></div></section></>;
}

export function ContactPage() {
  return <><PageHero title="Let’s Plan an Adventure" description="Ask about programmes, upcoming dates, age groups, and fees in Nepali rupees." /><section className="section"><div className="container two-column contact-layout"><Reveal className="contact-copy"><span className="eyebrow">Get in Touch</span><h2>Every Discovery Starts With a Conversation</h2><p>Tell us what your child enjoys and we can help you explore the next opportunity to learn, create, and connect.</p><div className="contact-cards">
    <div className="contact-card"><span className="round-icon"><MapPin /></span><div><h3>Find the Academy</h3><p>{academy.location}</p><a className="text-link" href={academy.googleProfile} target="_blank" rel="noopener noreferrer">View Google listing ↗</a></div></div>
    <div className="contact-card"><span className="round-icon"><Camera /></span><div><h3>Message Us on Instagram</h3><a href={academy.instagram} target="_blank" rel="noopener noreferrer">{academy.instagramHandle}</a></div></div>
    <div className="contact-card"><span className="round-icon"><Sun /></span><div><h3>Programme Dates & Visiting</h3><p>Message the team to confirm upcoming sessions, visiting times, and the exact meeting point.</p></div></div>
    <div className="contact-card"><span className="round-icon"><School /></span><div><h3>Programme Fees</h3><p>{academy.feeNote}</p></div></div>
  </div><div className="contact-note">Please confirm your visit with the academy. Event venues and activity meeting points may differ from the learning centre.</div></Reveal><Reveal className="contact-form-surface"><EnrollmentForm contact /></Reveal></div></section><FAQSection /></>;
}

export function LegalPage({ privacy }: { privacy: boolean }) {
  return <><PageHero title={privacy ? 'Privacy Policy' : 'Terms & Conditions'} /><section className="section"><div className="container legal-content"><h2>About This Website Preview</h2><p>This Young Explorers Academy website is a design preview. Academy information references public profiles and event coverage. Upcoming dates, availability, and fees should be confirmed directly with the academy.</p><h2>{privacy ? 'Information You Enter' : 'Requests and Enrollment'}</h2><p>{privacy ? 'With the default project settings, form entries stay in your browser memory and are not sent to a server or saved in browser storage. If you choose to download a request, a text file is created on your device. Newsletter signup is also a preview and does not create a subscription.' : 'Completing a form in this preview does not book a visit, reserve a place, create a subscription, or enter into a contract. No payments are taken through this website.'}</p><h2>{privacy ? 'Website Assets' : 'Content and Availability'}</h2><p>{privacy ? 'Images and fonts are bundled with the project. The default site does not use analytics or advertising cookies. The embedded location map loads content from Google Maps. Other external links open Google, Instagram, or the source publication when you choose to follow them.' : 'The information shown here demonstrates the website design and should be replaced with the school’s confirmed details before use as a live service. Program availability and terms should be confirmed with the operating school.'}</p><h2>Questions</h2><p>For information about this project, consult its README. An operating school should publish its own reviewed privacy notice and terms when launching the site.</p><ButtonLink to="/" className="legal-home">Back to Young Explorers Academy</ButtonLink></div></section></>;
}
export function NotFoundPage() { return <section className="not-found"><Doodles /><div className="container"><p className="error-number" aria-hidden="true">404</p><span className="eyebrow">A Little Detour</span><h1 tabIndex={-1}>This Page Went Out to Play</h1><p>We couldn’t find that page. Let’s head back to a familiar place and try another adventure.</p><ButtonLink to="/">Back to Home</ButtonLink></div></section>; }
