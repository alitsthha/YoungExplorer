import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Award, Baby, BookOpen, Brush, Check, CheckCircle2, ChevronLeft, ChevronRight, Clock, Download, GraduationCap, Heart, Lightbulb, Music2, Phone, Play, Plus, Puzzle, School, ShieldCheck, Smile, Sparkles, Star, Sun, Users } from 'lucide-react';
import { articles, assets, faqs, programs, schoolGallery, teachers, testimonials } from '../data/content';
import { Link } from '../lib/router';
import { ButtonLink, Doodles, Photo, SectionTitle } from './Shared';
import { Counter, Reveal } from './ui/Reveal';
import { Modal } from './ui/Modal';

export function Hero() {
  return <section className="hero navy"><Doodles light /><div className="container"><div className="hero-main">
    <div className="hero-copy"><span className="eyebrow hero-enter">Welcome to Young Explorers Academy</span><h1 tabIndex={-1} className="hero-enter">Inspiring Young<br /><span>Minds</span> to Explore<br />And Shine</h1><p className="hero-enter">A caring place for little discoveries, big imaginations, and the happy beginnings of a lifelong love of learning.</p><div className="hero-enter"><ButtonLink to="/admissions#enrollment">Enroll Your Child</ButtonLink></div></div>
    <div className="hero-visual"><img className="hero-child" src={assets.hero} alt="Two Young Explorers Academy learners proudly sharing their achievements" fetchPriority="high" /><div className="teacher-proof"><div className="avatar-stack">{teachers.slice(0, 3).map(t => <Photo key={t.name} src={t.image} alt="" eager />)}<span aria-hidden="true"><Plus size={19} /></span></div><strong>Little explorers</strong><p>Learning & Growing Together</p></div></div>
  </div><div className="hero-features">
    <div className="hero-feature"><h3>Learning Through<br />Everyday Play</h3><p>Room to explore, ask questions, and try something new.</p></div>
    <div className="hero-number"><div className="round-icon"><Users size={23} /></div><strong><Counter value={550} /></strong><p>Happy Little Learners</p></div>
    <div className="hero-highlight"><div><h3>Caring Teachers.<br />Happy Beginnings.</h3><p>Encouragement for every step of the journey.</p><Link to="/classes">Explore Programs <ArrowRight size={15} /></Link></div><Photo src={assets.reading} alt="Children learning together at the academy" eager /></div>
    <div className="hero-feature end"><h3>A Safe Place<br />to Be Themselves</h3><p>Little people feel at home in our welcoming spaces.</p></div>
  </div></div></section>;
}

export function Stats() {
  return <div className="stats-grid">{[[12, 'Years of Caring'], [850, 'Happy Graduates'], [650, 'Young Learners'], [99, 'Parent Satisfaction']].map(([number, label], index) => <Reveal key={label} delay={index * 80} className="stat"><strong><Counter value={Number(number)} suffix={index === 3 ? '%' : '+'} /></strong><p>{label}</p></Reveal>)}</div>;
}

export function AboutSection({ extended = false }: { extended?: boolean }) {
  return <section className="section about-section"><div className="container"><div className="two-column about-grid">
    <Reveal direction="left"><Photo src={assets.reading} alt="Children exploring a hands-on activity with their teachers" className="about-photo wavy-photo" /></Reveal>
    <Reveal direction="right" className="about-copy"><span className="eyebrow">A Little About Young Explorers Academy</span><h2>Growing Curious Minds Through Play & Discovery</h2><p>Childhood is a time for wonder. We give children the space, support, and encouragement to discover who they are and what they can do.</p>
      <div className="about-benefits"><div><School /><div><h3>A Safe & Welcoming Campus</h3><p>Thoughtful spaces made for little learners.</p></div></div><div><Award /><div><h3>A Partnership With Parents</h3><p>Growing together, every step of the way.</p></div></div></div>
      <div className="check-row"><span><CheckCircle2 /> Experienced Educators</span><span><CheckCircle2 /> Purposeful Play</span></div>
      <p>Stories, friendship, movement, and hands-on exploration turn everyday moments into opportunities to learn.</p>
      {extended ? <p>Our teachers get to know each child’s interests and strengths. We work closely with families to create a gentle, positive start and a sense of belonging that lasts.</p> : <ButtonLink to="/about">More About Our School</ButtonLink>}
    </Reveal>
  </div><Stats /></div></section>;
}

export function ProgramCard({ program, index = 0 }: { program: typeof programs[number]; index?: number }) {
  return <Reveal delay={(index % 2) * 110} className="program-reveal"><article className="program-card"><Link to={`/classes/${program.slug}`} className="program-photo-link" aria-label={`Explore ${program.title}`}><Photo src={program.image} alt={program.title} /></Link><div className="program-info"><h3><Link to={`/classes/${program.slug}`}>{program.title}</Link></h3><p>{program.description}</p><div className="program-facts"><span><Baby /> {program.age} Years</span><span><Users /> {program.students} Students</span><span><span className="currency">$</span> {program.price} / Month</span></div><Link className="text-link" to={`/classes/${program.slug}`}>Learn More <ArrowRight size={15} /></Link></div></article></Reveal>;
}

export function ClassesSection({ all = false }: { all?: boolean }) {
  const [category, setCategory] = useState('All Classes');
  const items = all ? programs.filter(p => category === 'All Classes' || p.category === category) : programs.slice(0, 4);
  return <section className="section cream wave-section classes-section"><Doodles /><div className="container"><SectionTitle eyebrow="Our Classes" title="Happy Learning for Every Little Stage" description="Thoughtfully planned programs filled with new discoveries, shared adventures, and plenty of time to play." action={!all && <ButtonLink to="/classes">View All Classes</ButtonLink>} />
    {all && <div className="filter-tabs" aria-label="Filter classes">{['All Classes', 'Toddlers', 'Preschool', 'Kindergarten', 'Enrichment'].map(c => <button className={category === c ? 'selected' : ''} key={c} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>)}</div>}
    <div className="program-grid" key={category}>{items.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}</div>
  </div></section>;
}

const reasons = [
  { Icon: Users, title: 'Teachers Who Truly Care', text: 'Familiar faces, patient guidance, and a warm welcome.' },
  { Icon: ShieldCheck, title: 'Safe Spaces to Explore', text: 'Thoughtfully arranged spaces for confident discoveries.' },
  { Icon: Lightbulb, title: 'Learning Made Playful', text: 'Open-ended activities that follow a child’s curiosity.' },
  { Icon: Sparkles, title: 'A Thoughtful Curriculum', text: 'A balanced rhythm of discovery, creativity, and rest.' },
  { Icon: Heart, title: 'Growing Hearts & Minds', text: 'Kindness, friendship, and emotional understanding.' },
  { Icon: School, title: 'Something New Each Day', text: 'Stories, songs, art, and joyful little adventures.' },
];
export function WhySection() {
  return <section className="section why-section"><div className="container"><SectionTitle centered eyebrow="Why Families Choose Us" title="A Place Where Little Learners Belong" description="We care about the whole child, creating meaningful experiences that help confidence and curiosity grow together." /><div className="why-grid"><div>{reasons.slice(0, 3).map(({ Icon, title, text }, i) => <Reveal key={title} delay={i * 70} className="reason-card"><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div><Reveal direction="scale"><Photo src={assets.child} className="why-photo burst-photo" alt="A young explorer planting in the garden" /></Reveal><div>{reasons.slice(3).map(({ Icon, title, text }, i) => <Reveal key={title} delay={i * 70} className="reason-card"><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></div></section>;
}

export function TourBanner() {
  return <section className="tour-banner wave-section"><Photo className="tour-banner-image" src={assets.banner} alt="Young Explorers Academy children and educators gathered outdoors" /><div className="banner-shade" /><Reveal className="container tour-banner-content"><h2>A Happy First Chapter Starts Here</h2><p>Come meet our teachers, explore our spaces,<br />and imagine your child’s first day.</p><ButtonLink to="/admissions#enrollment">Book a School Visit</ButtonLink></Reveal></section>;
}

const activities = [
  { Icon: Sun, title: 'Outdoor Play & Games', text: 'Fresh air, friendly games, and room to run, climb, and explore.', className: 'activity-outdoor' },
  { Icon: Puzzle, title: 'Puzzles & Little Challenges', text: 'Building, sorting, and figuring things out together.', className: 'activity-puzzle' },
  { Icon: Brush, title: 'Creative Arts & Crafts', text: 'Colorful experiments for imaginative little makers.', className: 'activity-art' },
  { Icon: BookOpen, title: 'Stories & Reading', text: 'New worlds, favorite characters, and stories to share.', className: 'activity-story' },
  { Icon: Music2, title: 'Music & Movement', text: 'Sing, dance, and discover a rhythm of your own.', className: 'activity-music' },
];
export function ActivitiesSection() {
  return <section className="section activities-section"><div className="container"><SectionTitle eyebrow="Our Activities" title="Big Discoveries Through Little Adventures" description="There is a world of learning in the things children love to do. Every day brings something to make, share, and discover." action={<ButtonLink to="/activities">Explore Activities</ButtonLink>} /><div className="activity-grid"><Reveal className="activity-photo"><Photo src={assets.family} alt="The Young Explorers Academy community gathered together" /></Reveal>{activities.map(({ Icon, title, text, className }, i) => <Reveal key={title} delay={i * 55} className={`activity-card ${className}`}><Icon /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>;
}

export function TeachersSection({ page = false }: { page?: boolean }) {
  const [selected, setSelected] = useState<typeof teachers[number] | null>(null);
  return <section className="section cream wave-section teachers-section"><Doodles /><div className="container"><SectionTitle centered eyebrow="Meet Our Teachers" title="Big Hearts. Bright Ideas. Caring Teachers." description="Our team brings warmth, patience, and a love of learning to every child’s day." /><div className={`teachers-grid ${page ? 'teachers-page-grid' : ''}`}>{teachers.map((teacher, i) => <Reveal key={teacher.name} delay={i * 100} className="teacher-card"><button onClick={() => setSelected(teacher)} aria-label={`Meet ${teacher.name}`}><Photo src={teacher.image} alt={teacher.alt} className="teacher-photo" /><span className="teacher-overlay"><span>{teacher.name}</span><small>{teacher.role}</small><Plus size={18} /></span></button>{page && <><h3>{teacher.name}</h3><p>{teacher.role}</p><p className="teacher-bio">{teacher.bio}</p></>}</Reveal>)}</div></div><Modal open={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.name || 'Teacher profile'}>{selected && <div className="teacher-profile"><Photo src={selected.image} alt={selected.alt} /><span className="eyebrow">Meet Our Learning Community</span><h2>{selected.name}</h2><p className="teacher-role">{selected.role}</p><p>{selected.bio}</p><ButtonLink to="/admissions#enrollment">Meet the Team in Person</ButtonLink></div>}</Modal></section>;
}

export function TourModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [slide, setSlide] = useState(0);
  const gallery = schoolGallery;
  useEffect(() => { if (open) setSlide(0); }, [open]);
  const current = gallery[slide];
  return <Modal open={open} onClose={onClose} title="A look inside Young Explorers Academy"><div className="tour-gallery"><Photo src={current.src} alt={current.title} key={slide} /><div className="tour-gallery-copy"><span className="eyebrow">Our Academy Gallery · {slide + 1} of {gallery.length}</span><h2>{current.title}</h2><p>{current.text}</p><div className="carousel-controls"><button className="icon-button" aria-label="Previous tour photo" onClick={() => setSlide((slide + gallery.length - 1) % gallery.length)}><ChevronLeft /></button><div className="carousel-dots">{gallery.map((item, i) => <button aria-label={`Show ${item.title}`} aria-pressed={slide === i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} key={item.title} />)}</div><button className="icon-button" aria-label="Next tour photo" onClick={() => setSlide((slide + 1) % gallery.length)}><ChevronRight /></button></div></div></div></Modal>;
}

function Stars() { return <span className="stars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map(i => <Star key={i} size={17} fill="currentColor" />)}</span>; }
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [tour, setTour] = useState(false);
  const touchStart = useRef<number | null>(null);
  const quote = testimonials[index];
  return <section className="section testimonials-section"><div className="container testimonial-layout"><Reveal className="testimonial-intro"><span className="eyebrow">From Our Families</span><h2>Little Moments.<br />Lovely Words.</h2><p>There is no better feeling than seeing children happy, settled, and excited for a new day.</p><div className="rating-box"><Heart className="rating-mark" aria-hidden="true" /><div><div><Stars /><strong>4.9</strong></div><small>Family Happiness Rating</small></div></div><div className="carousel-controls"><button className="icon-button" aria-label="Previous parent story" onClick={() => setIndex((index + 2) % 3)}><ArrowLeft size={19} /></button><button className="icon-button" aria-label="Next parent story" onClick={() => setIndex((index + 1) % 3)}><ArrowRight size={19} /></button><span className="slide-count">0{index + 1} / 03</span></div></Reveal>
    <Reveal className="testimonial-media"><button className="tour-trigger" aria-label="View a photo tour of Young Explorers Academy" onClick={() => setTour(true)}><Photo src={assets.story} alt="Children celebrating together at the academy" /><span className="play-button"><Play size={25} fill="currentColor" /></span></button></Reveal>
    <Reveal className="quote-reveal"><div className="quote-card navy" onPointerDown={event => { touchStart.current = event.clientX; }} onPointerUp={event => { if (touchStart.current !== null && Math.abs(event.clientX - touchStart.current) > 45) setIndex((index + (event.clientX < touchStart.current ? 1 : 2)) % 3); touchStart.current = null; }}><div className="quote-top"><span className="quote-avatar" aria-hidden="true">{quote.initials}</span><span className="quote-mark" aria-hidden="true">”</span></div><Stars /><div key={index} className="quote-body" aria-live="polite"><blockquote>{quote.quote}</blockquote><h3>{quote.name}</h3><p>{quote.relation}</p></div></div></Reveal>
  </div><TourModal open={tour} onClose={() => setTour(false)} /></section>;
}

export function FAQSection({ full = false }: { full?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
  return <section className={`section faq-section ${full ? 'faq-full' : ''}`}><div className="container"><SectionTitle eyebrow="A Few Helpful Answers" title="Little Questions, Thoughtful Answers" description="Get to know our day-to-day routines, learning approach, and how to take the next step." action={<ButtonLink to="/contact">Ask Us a Question</ButtonLink>} /><div className="faq-grid">{[0, 1, 2].map(column => <div className={`faq-column ${column === 1 ? 'yellow' : ''}`} key={column}>{faqs.slice(column * 3, column * 3 + 3).map((faq, row) => {
    const index = column * 3 + row; const expanded = open === index;
    return <div className={`faq-item ${expanded ? 'expanded' : ''}`} key={faq.question}><h3><button id={`${uid}-q-${index}`} aria-expanded={expanded} aria-controls={`${uid}-a-${index}`} onClick={() => setOpen(expanded ? null : index)}>{faq.question}<Plus size={18} /></button></h3><div className="faq-answer" id={`${uid}-a-${index}`} role="region" aria-labelledby={`${uid}-q-${index}`} inert={!expanded}><div><p>{faq.answer}</p></div></div></div>;
  })}</div>)}</div><p className="faq-contact"><span className="round-icon"><Phone size={18} /></span> A real conversation is always welcome. <a href="tel:+12025550128">+1 (202) 555-0128</a></p></div></section>;
}

function FormField({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return <div className="form-field"><label htmlFor={id}>{label}</label>{children}</div>;
}

export function EnrollmentForm({ contact = false, initialProgram = '' }: { contact?: boolean; initialProgram?: string }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'preview' | 'success' | 'error'>('idle');
  const [summary, setSummary] = useState('');
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const text = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
    setSummary(text);
    if (!endpoint) { setStatus('preview'); return; }
    setStatus('sending');
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ form: contact ? 'contact' : 'enrollment', ...data }), signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success'); formRef.current?.reset();
    } catch { setStatus('error'); }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([`Young Explorers Academy ${contact ? 'Contact' : 'Visit'} Request\n\n${summary}`], { type: 'text/plain' }));
    const a = document.createElement('a'); a.href = url; a.download = 'young-explorers-academy-request.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  return <form className="enrollment-form" onSubmit={submit} ref={formRef}>
    <span className="eyebrow">{contact ? 'Say Hello' : 'A Happy Beginning'}</span><h2>{contact ? 'We’d Love to Hear From You' : 'Let’s Start Your Child’s Next Little Adventure'}</h2><p>{contact ? 'Have a question about our school? Tell us what is on your mind.' : 'Tell us a little about your family and the program you are interested in.'}</p>
    <FormField id={`${uid}-name`} label="Full Name"><input id={`${uid}-name`} name="Full name" required minLength={2} placeholder="Your full name" autoComplete="name" /></FormField>
    <div className="form-row"><FormField id={`${uid}-email`} label="Email Address"><input id={`${uid}-email`} name="Email" type="email" required placeholder="Email address" autoComplete="email" /></FormField><FormField id={`${uid}-phone`} label="Phone Number"><input id={`${uid}-phone`} name="Phone" type="tel" required minLength={6} placeholder="Phone number" autoComplete="tel" /></FormField></div>
    {!contact && <><span className="form-subtitle">About Your Child</span><div className="form-row"><FormField id={`${uid}-child`} label="Child’s Name"><input id={`${uid}-child`} name="Child name" required placeholder="Child’s first name" autoComplete="off" /></FormField><FormField id={`${uid}-age`} label="Child’s Age"><select id={`${uid}-age`} name="Child age" required defaultValue=""><option value="" disabled>Select age</option>{[2, 3, 4, 5, 6].map(age => <option key={age} value={age}>{age} years</option>)}</select></FormField></div><FormField id={`${uid}-program`} label="Interested Program"><select id={`${uid}-program`} name="Program" required defaultValue={initialProgram}><option value="" disabled>Choose a program</option>{programs.map(p => <option key={p.slug} value={p.slug}>{p.title}</option>)}</select></FormField></>}
    {contact && <FormField id={`${uid}-subject`} label="Subject"><input id={`${uid}-subject`} name="Subject" required placeholder="How can we help?" /></FormField>}
    <FormField id={`${uid}-message`} label="Your Message"><textarea id={`${uid}-message`} name="Message" rows={3} required={contact} placeholder={contact ? 'Write your message here…' : 'Anything you would like us to know?'} /></FormField>
    <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : contact ? 'Send Message' : 'Book a Free Visit'}</button>
    {!endpoint && <small className="form-note">Preview form. Your information is not sent or saved.</small>}
    {status === 'preview' && <div className="form-status" role="status"><CheckCircle2 /><div><strong>Your request is ready to review.</strong><p>This preview has not sent your details. You can download a copy below.</p><button className="text-link" type="button" onClick={download}><Download size={16} /> Download request</button></div></div>}
    {status === 'success' && <div className="form-status" role="status"><CheckCircle2 /><p>Your message has been sent. Thank you for getting in touch.</p></div>}
    {status === 'error' && <p className="form-error" role="alert">We couldn’t send your message. Please try again or use the contact details on this page.</p>}
  </form>;
}

export function EnrollmentSection({ initialProgram = '' }: { initialProgram?: string }) {
  const [tour, setTour] = useState(false);
  return <section className="section cream wave-section enrollment-section" id="enrollment"><div className="container two-column enrollment-grid"><Reveal direction="left" className="enrollment-visual"><div className="enrollment-photo"><Photo src={assets.laptop} alt="Two friends enjoying an outdoor learning experience" className="split-photo" /><button className="play-button" aria-label="View our school photo tour" onClick={() => setTour(true)}><Play fill="currentColor" /></button></div><div className="enrollment-promise"><span><ShieldCheck /> A warm welcome for every family</span><span><Smile /> Let’s find the right fit for your child</span></div></Reveal><Reveal direction="right"><EnrollmentForm initialProgram={initialProgram} /></Reveal></div><TourModal open={tour} onClose={() => setTour(false)} /></section>;
}

export function BlogsSection({ archive = false }: { archive?: boolean }) {
  return <section className="section blogs-section"><div className="container"><SectionTitle centered eyebrow="From Our Little Journal" title="Ideas for Happier Days & Curious Minds" description="A few helpful thoughts on play, parenting, and the wonderful early years." /><div className="blog-grid">{articles.map((article, index) => <Reveal delay={index * 90} key={article.slug}><article className="blog-card"><Link to={`/blog/${article.slug}`} aria-label={article.title}><Photo src={article.image} alt={article.title} /></Link><span className="eyebrow">{article.category}</span><h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>{archive && <><p>{article.intro}</p><p className="article-meta">{article.date} · {article.readTime}</p></>}<ButtonLink to={`/blog/${article.slug}`}>Read the Story</ButtonLink></article></Reveal>)}</div></div></section>;
}

export function DailySchedule() {
  return <section className="section"><div className="container"><SectionTitle centered eyebrow="A Day at Young Explorers Academy" title="A Gentle Rhythm. A World to Discover." description="Familiar routines give children the confidence to try new things." /><div className="schedule-grid">{[
    { time: '8:00 – 9:00', title: 'Hello, New Day', text: 'A warm welcome and time to settle into free play.', Icon: Sun },
    { time: '9:00 – 10:30', title: 'Explore & Create', text: 'Small-group discoveries, stories, and creative play.', Icon: Brush },
    { time: '10:30 – 12:00', title: 'Move & Discover', text: 'Snack time, outdoor adventures, and shared games.', Icon: Baby },
    { time: '12:00 – 2:00', title: 'Rest & Recharge', text: 'Lunch, quiet moments, and a chance to slow down.', Icon: Heart },
    { time: '2:00 – 3:30', title: 'Make & Imagine', text: 'Music, building, and following our big little ideas.', Icon: Music2 },
    { time: '3:30 – 5:00', title: 'One More Story', text: 'Relaxed play, favorite books, and happy goodbyes.', Icon: BookOpen },
  ].map(({ time, title, text, Icon }, i) => <Reveal className="schedule-card" key={time} delay={i * 50}><Icon /><span className="eyebrow">{time}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>;
}

export function AdmissionsSteps() {
  return <section className="section"><div className="container"><SectionTitle centered eyebrow="Joining Our Family" title="A Simple Start to Something Wonderful" description="We will help you feel comfortable, informed, and ready for your child’s first day." /><div className="steps-grid">{[
    ['01', 'Come for a Visit', 'Meet our teachers, explore the spaces, and tell us what matters to your family.', School],
    ['02', 'Find the Right Program', 'Together we will choose a learning group that suits your child’s age and stage.', BookOpen],
    ['03', 'Share the Little Details', 'Complete your application and help us learn about your child’s routines and interests.', Check],
    ['04', 'Let the Adventure Begin', 'Gentle settling-in visits help your child feel at home from the very beginning.', GraduationCap],
  ].map(([number, title, text, Icon]) => { const StepIcon = Icon as typeof School; return <Reveal className="step-card" key={String(number)}><span className="step-number">{String(number)}</span><StepIcon /><h3>{String(title)}</h3><p>{String(text)}</p></Reveal>; })}</div><div className="admissions-note"><Clock /><p>Before your visit, have your preferred start date and program in mind. We can talk through everything else together.</p><ButtonLink to="/admissions#enrollment">Arrange a Visit</ButtonLink></div></div></section>;
}
