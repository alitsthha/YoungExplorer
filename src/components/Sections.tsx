import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Award, Baby, BookOpen, Brush, Check, CheckCircle2, ChevronLeft, ChevronRight, Clock, Download, GraduationCap, Heart, Lightbulb, Music2, Phone, Play, Plus, Puzzle, School, ShieldCheck, Smile, Sparkles, Sun, Users } from 'lucide-react';
import { articles, assets, faqs, programs, schoolGallery, teachers, experienceHighlights, academy, formatNPR } from '../data/content';
import { Link } from '../lib/router';
import { ButtonLink, Doodles, Photo, SectionTitle } from './Shared';
import { Counter, Reveal } from './ui/Reveal';
import { Modal } from './ui/Modal';

export function Hero() {
  return <section className="hero navy"><Doodles light /><div className="container"><div className="hero-main">
    <div className="hero-copy"><span className="eyebrow hero-enter">Welcome to Young Explorers Academy</span><h1 tabIndex={-1} className="hero-enter">Inspiring Young<br /><span>Minds</span> to Explore<br />And Shine</h1><p className="hero-enter">Camps, creative experiences, and outdoor adventures that invite children to discover, express themselves, and connect in Nepal.</p><div className="hero-enter"><ButtonLink to="/admissions#enrollment">Explore Upcoming Programmes</ButtonLink></div></div>
    <div className="hero-visual"><img className="hero-child" src={assets.hero} alt="Two Young Explorers Academy learners proudly sharing their achievements" fetchPriority="high" /><div className="teacher-proof"><div className="avatar-stack">{teachers.slice(0, 3).map(t => <Photo key={t.name} src={t.image} alt="" eager />)}<span aria-hidden="true"><Plus size={19} /></span></div><strong>Little explorers</strong><p>Learning & Growing Together</p></div></div>
  </div><div className="hero-features">
    <Reveal className="hero-feature"><h3>Learning Through<br />Everyday Play</h3><p>Room to explore, ask questions, and try something new.</p></Reveal>
    <Reveal delay={100} className="hero-number"><div className="round-icon"><Users size={23} /></div><strong><Counter value={schoolGallery.length} suffix="" /></strong><p>Moments in Our Gallery</p></Reveal>
    <Reveal delay={200} className="hero-highlight"><div><h3>Caring Teachers.<br />Happy Beginnings.</h3><p>Encouragement for every step of the journey.</p><Link to="/classes">Explore Programs <ArrowRight size={15} /></Link></div><Photo src={assets.reading} alt="Children learning together at the academy" eager /></Reveal>
    <Reveal delay={300} className="hero-feature end"><h3>A Safe Place<br />to Be Themselves</h3><p>Little people feel at home in our welcoming spaces.</p></Reveal>
  </div></div></section>;
}

export function Stats() {
  return <div className="stats-grid">{[
    [Sun, 'Explore', 'Nature & outdoor discovery'], [Brush, 'Create', 'Art & hands-on experiences'],
    [BookOpen, 'Express', 'Stories & young voices'], [Heart, 'Connect', 'Family & community'],
  ].map(([Icon, title, label], index) => { const StatIcon = Icon as typeof Sun; return <Reveal key={String(title)} delay={index * 80} className="stat"><StatIcon aria-hidden="true" /><strong>{String(title)}</strong><p>{String(label)}</p></Reveal>; })}</div>;
}

export function AboutSection({ extended = false }: { extended?: boolean }) {
  return <section className="section about-section"><div className="container"><div className="two-column about-grid">
    <Reveal direction="left"><Photo src={assets.reading} alt="Children exploring a hands-on activity with their teachers" className="about-photo wavy-photo" /></Reveal>
    <Reveal direction="right" stagger delay={100} className="about-copy"><span className="eyebrow">A Little About Young Explorers Academy</span><h2>Learning Beyond the Classroom</h2><p>Young Explorers Academy is a skill-based learning centre for children in Baluwatar, Kathmandu. Creative experiences, outdoor discovery, and community events bring learning beyond the classroom.</p>
      <div className="about-benefits"><div><School /><div><h3>A World to Explore</h3><p>Discoveries in nature and the community.</p></div></div><div><Award /><div><h3>A Partnership With Parents</h3><p>Growing together, every step of the way.</p></div></div></div>
      <div className="check-row"><span><CheckCircle2 /> Shared Discoveries</span><span><CheckCircle2 /> Purposeful Play</span></div>
      <p>Stories, friendship, movement, and hands-on exploration turn everyday moments into opportunities to learn.</p>
      {extended ? <p>Our teachers get to know each child’s interests and strengths. We work closely with families to create a gentle, positive start and a sense of belonging that lasts.</p> : <ButtonLink to="/about">More About the Academy</ButtonLink>}
    </Reveal>
  </div><Stats /></div></section>;
}

export function ProgramCard({ program, index = 0 }: { program: typeof programs[number]; index?: number }) {
  return <Reveal delay={(index % 2) * 110} className="program-reveal"><article className="program-card"><Link to={`/classes/${program.slug}`} className="program-photo-link" aria-label={`Explore ${program.title}`}><Photo src={program.image} alt={program.title} /></Link><div className="program-info"><h3><Link to={`/classes/${program.slug}`}>{program.title}</Link></h3><p>{program.description}</p><div className="program-facts"><span><Baby /> {program.age}</span><span><Users /> {program.category}</span><span className="program-fee">{formatNPR(program.priceNPR)} · NPR</span></div><Link className="text-link" to={`/classes/${program.slug}`}>Learn More <ArrowRight size={15} /></Link></div></article></Reveal>;
}

export function ClassesSection({ all = false }: { all?: boolean }) {
  const [category, setCategory] = useState('All Programmes');
  const items = all ? programs.filter(p => category === 'All Programmes' || p.category === category) : programs.slice(0, 4);
  return <section className="section cream wave-section classes-section"><Doodles /><div className="container"><SectionTitle eyebrow="Our Programmes" title="Find Their Next Adventure" description="Discover the kinds of experiences in our academy community, then ask about upcoming dates and availability." action={!all && <ButtonLink to="/classes">View All Programmes</ButtonLink>} />
    {all && <div className="filter-tabs" aria-label="Filter programmes">{['All Programmes', ...new Set(programs.map(program => program.category))].map(c => <button className={category === c ? 'selected' : ''} key={c} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>)}</div>}
    <div className="program-grid" key={category}>{items.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}</div>
  </div></section>;
}

const reasons = [
  { Icon: Users, title: 'Teachers Who Truly Care', text: 'Familiar faces, patient guidance, and a warm welcome.' },
  { Icon: ShieldCheck, title: 'Safe Spaces to Explore', text: 'Thoughtfully arranged spaces for confident discoveries.' },
  { Icon: Lightbulb, title: 'Learning Made Playful', text: 'Open-ended activities that follow a child’s curiosity.' },
  { Icon: Sparkles, title: 'Experiences With Purpose', text: 'A balanced rhythm of discovery, creativity, and rest.' },
  { Icon: Heart, title: 'Growing Hearts & Minds', text: 'Kindness, friendship, and emotional understanding.' },
  { Icon: School, title: 'Something New Each Day', text: 'Stories, songs, art, and joyful little adventures.' },
];
export function WhySection() {
  return <section className="section why-section"><div className="container"><SectionTitle centered eyebrow="Why Families Choose Us" title="A Place Where Little Learners Belong" description="We care about the whole child, creating meaningful experiences that help confidence and curiosity grow together." /><div className="why-grid"><div>{reasons.slice(0, 3).map(({ Icon, title, text }, i) => <Reveal direction="left" key={title} delay={i * 100} className="reason-card"><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div><Reveal direction="scale"><Photo src={assets.child} className="why-photo burst-photo" alt="A young explorer planting in the garden" /></Reveal><div>{reasons.slice(3).map(({ Icon, title, text }, i) => <Reveal direction="right" key={title} delay={i * 100} className="reason-card"><Icon /><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></div></section>;
}

export function TourBanner() {
  return <section className="tour-banner wave-section adventure-banner navy"><Doodles light /><div className="container tour-banner-layout">
    <Reveal direction="left" stagger className="tour-banner-content"><span className="eyebrow">A World Beyond the Classroom</span><h2>Their Next Adventure Starts Here</h2><p>Discover our camps, creative activities, and experiences beyond the classroom.</p><ButtonLink to="/admissions#enrollment">Enquire About Programmes</ButtonLink></Reveal>
    <Reveal direction="scale" delay={150} className="tour-banner-visual"><Photo className="tour-banner-image" src={assets.banner} alt="Young Explorers Academy children walking together along a sunlit forest trail" /></Reveal>
  </div></section>;
}

const activities = [
  { Icon: Sun, title: 'Outdoor Play & Games', text: 'Fresh air, friendly games, and room to run, climb, and explore.', className: 'activity-outdoor' },
  { Icon: Puzzle, title: 'Puzzles & Little Challenges', text: 'Building, sorting, and figuring things out together.', className: 'activity-puzzle' },
  { Icon: Brush, title: 'Creative Arts & Crafts', text: 'Colorful experiments for imaginative little makers.', className: 'activity-art' },
  { Icon: BookOpen, title: 'Stories & Reading', text: 'New worlds, favorite characters, and stories to share.', className: 'activity-story' },
  { Icon: Music2, title: 'Music & Movement', text: 'Sing, dance, and discover a rhythm of your own.', className: 'activity-music' },
];
export function ActivitiesSection() {
  return <section className="section activities-section"><div className="container"><SectionTitle eyebrow="Our Activities" title="Big Discoveries Through Little Adventures" description="There is a world of learning in the things children love to do. Every day brings something to make, share, and discover." action={<ButtonLink to="/activities">Explore Activities</ButtonLink>} /><div className="activity-grid"><Reveal direction="scale" className="activity-photo"><Photo src={assets.family} alt="The Young Explorers Academy community gathered together" /></Reveal>{activities.map(({ Icon, title, text, className }, i) => <Reveal key={title} delay={(i % 3) * 100} className={`activity-card ${className}`}><Icon /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>;
}

export function TeachersSection({ page = false }: { page?: boolean }) {
  const [selected, setSelected] = useState<typeof teachers[number] | null>(null);
  return <section className="section cream wave-section teachers-section"><Doodles /><div className="container"><SectionTitle centered eyebrow="How We Learn" title="Curiosity, Creativity & Connection" description="Stories, creative projects, outdoor discovery, and community bring our approach to learning to life." /><div className={`teachers-grid ${page ? 'teachers-page-grid' : ''}`}>{teachers.map((teacher, i) => <Reveal direction="scale" key={teacher.name} delay={i * 100} className="teacher-card"><button onClick={() => setSelected(teacher)} aria-label={`Meet ${teacher.name}`}><Photo src={teacher.image} alt={teacher.alt} className="teacher-photo" /><span className="teacher-overlay"><span>{teacher.name}</span><small>{teacher.role}</small><Plus size={18} /></span></button>{page && <><h3>{teacher.name}</h3><p>{teacher.role}</p><p className="teacher-bio">{teacher.bio}</p></>}</Reveal>)}</div></div><Modal open={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.name || 'Teacher profile'}>{selected && <div className="teacher-profile"><Photo src={selected.image} alt={selected.alt} /><span className="eyebrow">Meet Our Learning Community</span><h2>{selected.name}</h2><p className="teacher-role">{selected.role}</p><p>{selected.bio}</p><ButtonLink to="/admissions#enrollment">Meet the Team in Person</ButtonLink></div>}</Modal></section>;
}

export function TourModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [slide, setSlide] = useState(0);
  const gallery = schoolGallery;
  useEffect(() => { if (open) setSlide(0); }, [open]);
  const current = gallery[slide];
  return <Modal open={open} onClose={onClose} title="A look inside Young Explorers Academy"><div className="tour-gallery"><Photo src={current.src} alt={current.title} key={slide} /><div className="tour-gallery-copy"><span className="eyebrow">Our Academy Gallery · {slide + 1} of {gallery.length}</span><h2>{current.title}</h2><p>{current.text}</p><div className="carousel-controls"><button className="icon-button" aria-label="Previous tour photo" onClick={() => setSlide((slide + gallery.length - 1) % gallery.length)}><ChevronLeft /></button><div className="carousel-dots">{gallery.map((item, i) => <button aria-label={`Show ${item.title}`} aria-pressed={slide === i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} key={item.title} />)}</div><button className="icon-button" aria-label="Next tour photo" onClick={() => setSlide((slide + 1) % gallery.length)}><ChevronRight /></button></div></div></div></Modal>;
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [tour, setTour] = useState(false);
  const touchStart = useRef<number | null>(null);
  const current = experienceHighlights[index];
  const count = experienceHighlights.length;
  const move = (step: number) => setIndex(value => (value + step + count) % count);
  return <section className="section testimonials-section"><div className="container testimonial-layout">
    <Reveal direction="left" stagger className="testimonial-intro"><span className="eyebrow">Life at the Academy</span><h2>Real Moments.<br />Shared Adventures.</h2><p>Explore our academy photographs and follow our Instagram for activity updates and upcoming announcements.</p><a className="rating-box" href={academy.instagram} target="_blank" rel="noopener noreferrer"><Heart className="rating-mark" aria-hidden="true" /><div><strong>Follow Our Adventures</strong><small>{academy.instagramHandle}</small></div></a><div className="carousel-controls"><button className="icon-button" aria-label="Previous academy highlight" onClick={() => move(-1)}><ArrowLeft size={19} /></button><button className="icon-button" aria-label="Next academy highlight" onClick={() => move(1)}><ArrowRight size={19} /></button><span className="slide-count">0{index + 1} / 0{count}</span></div></Reveal>
    <Reveal direction="scale" delay={100} className="testimonial-media"><button className="tour-trigger" aria-label="View a photo tour of Young Explorers Academy" onClick={() => setTour(true)}><Photo src={current.image} alt={current.label} /><span className="play-button"><Play size={25} fill="currentColor" /></span></button></Reveal>
    <Reveal direction="right" delay={200} className="quote-reveal"><div className="quote-card navy" onPointerDown={event => { touchStart.current = event.clientX; }} onPointerUp={event => { if (touchStart.current !== null && Math.abs(event.clientX - touchStart.current) > 45) move(event.clientX < touchStart.current ? 1 : -1); touchStart.current = null; }}><div className="quote-top"><span className="quote-avatar" aria-hidden="true">{current.initials}</span><Sparkles aria-hidden="true" /></div><div key={index} className="quote-body academy-highlight" aria-live="polite"><span className="eyebrow">{current.label}</span><h3>{current.title}</h3><p>{current.text}</p><a className="text-link" href={academy.instagram} target="_blank" rel="noopener noreferrer">Explore on Instagram <ArrowRight size={15} /></a></div></div></Reveal>
  </div><TourModal open={tour} onClose={() => setTour(false)} /></section>;
}

export function FAQSection({ full = false }: { full?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
  return <section className={`section faq-section ${full ? 'faq-full' : ''}`}><div className="container"><SectionTitle eyebrow="A Few Helpful Answers" title="Little Questions, Thoughtful Answers" description="Find out how to choose an activity, confirm fees, and plan your child’s next experience." action={<ButtonLink to="/contact">Ask Us a Question</ButtonLink>} /><div className="faq-grid">{[0, 1, 2].map(column => <Reveal stagger delay={column * 100} className={`faq-column ${column === 1 ? 'yellow' : ''}`} key={column}>{faqs.slice(column * 3, column * 3 + 3).map((faq, row) => {
    const index = column * 3 + row; const expanded = open === index;
    return <div className={`faq-item ${expanded ? 'expanded' : ''}`} key={faq.question}><h3><button id={`${uid}-q-${index}`} aria-expanded={expanded} aria-controls={`${uid}-a-${index}`} onClick={() => setOpen(expanded ? null : index)}>{faq.question}<Plus size={18} /></button></h3><div className="faq-answer" id={`${uid}-a-${index}`} role="region" aria-labelledby={`${uid}-q-${index}`} inert={!expanded}><div><p>{faq.answer}</p></div></div></div>;
  })}</Reveal>)}</div><Reveal direction="fade" delay={150}><p className="faq-contact"><span className="round-icon"><Phone size={18} /></span> Ask us about the next adventure. <a href={academy.instagram} target="_blank" rel="noopener noreferrer">Message the Academy</a></p></Reveal></div></section>;
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
    const url = URL.createObjectURL(new Blob([`Young Explorers Academy ${contact ? 'Contact' : 'Programme'} Request\n\n${summary}`], { type: 'text/plain' }));
    const a = document.createElement('a'); a.href = url; a.download = 'young-explorers-academy-request.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  return <form className="enrollment-form" onSubmit={submit} ref={formRef}>
    <span className="eyebrow">{contact ? 'Say Hello' : 'A Happy Beginning'}</span><h2>{contact ? 'We’d Love to Hear From You' : 'Let’s Start Your Child’s Next Little Adventure'}</h2><p>{contact ? 'Have a question about our school? Tell us what is on your mind.' : 'Tell us a little about your family and the program you are interested in.'}</p>
    <FormField id={`${uid}-name`} label="Full Name"><input id={`${uid}-name`} name="Full name" required minLength={2} placeholder="Your full name" autoComplete="name" /></FormField>
    <div className="form-row"><FormField id={`${uid}-email`} label="Email Address"><input id={`${uid}-email`} name="Email" type="email" required placeholder="Email address" autoComplete="email" /></FormField><FormField id={`${uid}-phone`} label="Phone Number"><input id={`${uid}-phone`} name="Phone" type="tel" required minLength={6} placeholder="Phone number" autoComplete="tel" /></FormField></div>
    {!contact && <><span className="form-subtitle">About Your Child</span><div className="form-row"><FormField id={`${uid}-child`} label="Child’s Name"><input id={`${uid}-child`} name="Child name" required placeholder="Child’s first name" autoComplete="off" /></FormField><FormField id={`${uid}-age`} label="Child’s Age"><select id={`${uid}-age`} name="Child age" required defaultValue=""><option value="" disabled>Select age</option>{Array.from({ length: 17 }, (_, index) => index + 2).map(age => <option key={age} value={age}>{age} years</option>)}</select></FormField></div><FormField id={`${uid}-program`} label="Interested Programme"><select id={`${uid}-program`} name="Program" required defaultValue={initialProgram}><option value="" disabled>Choose a program</option>{programs.map(p => <option key={p.slug} value={p.slug}>{p.title}</option>)}</select></FormField></>}
    {contact && <FormField id={`${uid}-subject`} label="Subject"><input id={`${uid}-subject`} name="Subject" required placeholder="How can we help?" /></FormField>}
    <FormField id={`${uid}-message`} label="Your Message"><textarea id={`${uid}-message`} name="Message" rows={3} required={contact} placeholder={contact ? 'Write your message here…' : 'Anything you would like us to know?'} /></FormField>
    <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : !endpoint ? 'Prepare Enquiry' : contact ? 'Send Message' : 'Send Programme Enquiry'}</button>
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
  return <section className="section blogs-section"><div className="container"><SectionTitle centered eyebrow="From Our Little Journal" title="Stories From Our Academy Community" description="Community events, creative encounters, and moments from our academy gallery." /><div className="blog-grid">{articles.map((article, index) => <Reveal delay={index * 90} key={article.slug}><article className="blog-card"><Link to={`/blog/${article.slug}`} aria-label={article.title}><Photo src={article.image} alt={article.title} /></Link><span className="eyebrow">{article.category}</span><h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>{archive && <><p>{article.intro}</p><p className="article-meta">{article.date} · {article.readTime}</p></>}<ButtonLink to={`/blog/${article.slug}`}>Read the Story</ButtonLink></article></Reveal>)}</div></div></section>;
}

export function DailySchedule() {
  return <section className="section"><div className="container"><SectionTitle centered eyebrow="Before You Join" title="Plan a Good Day of Discovery" description="Each camp, workshop, and event has its own arrangements. Confirm these details with the academy before registering." /><div className="schedule-grid">{[
    { time: 'Dates & duration', title: 'Find Your Programme', text: 'Ask about the next available session and how long it runs.', Icon: Sun },
    { time: 'Age guidance', title: 'Choose the Right Fit', text: 'Share your child’s age, interests, and any support needs.', Icon: Users },
    { time: 'Venue & travel', title: 'Know Where to Meet', text: 'Confirm the meeting point, collection time, and any transport arrangements.', Icon: School },
    { time: 'Meals & essentials', title: 'Pack for the Day', text: 'Ask what to bring and whether food, water, or equipment are included.', Icon: Heart },
    { time: 'Fees in NPR', title: 'Confirm the Total', text: 'Request the current fee in Nepali rupees and check all inclusions.', Icon: CheckCircle2 },
    { time: 'Latest announcements', title: 'Stay Connected', text: 'Follow @young.explorers.academy for academy updates.', Icon: BookOpen },
  ].map(({ time, title, text, Icon }, i) => <Reveal className="schedule-card" key={time} delay={i * 50}><Icon /><span className="eyebrow">{time}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>;
}

export function AdmissionsSteps() {
  return <section className="section"><div className="container"><SectionTitle centered eyebrow="Joining Our Family" title="A Simple Start to Something Wonderful" description="We will help you feel comfortable, informed, and ready for your child’s first day." /><div className="steps-grid">{[
    ['01', 'Start a Conversation', 'Contact the team and share your child’s age, interests, and preferred dates.', School],
    ['02', 'Find the Right Program', 'Together we will choose a learning group that suits your child’s age and stage.', BookOpen],
    ['03', 'Share the Little Details', 'Complete your application and help us learn about your child’s routines and interests.', Check],
    ['04', 'Let the Adventure Begin', 'Confirm the registration, venue, fee in Nepali rupees, and what to bring before the activity.', GraduationCap],
  ].map(([number, title, text, Icon]) => { const StepIcon = Icon as typeof School; return <Reveal className="step-card" key={String(number)}><span className="step-number">{String(number)}</span><StepIcon /><h3>{String(title)}</h3><p>{String(text)}</p></Reveal>; })}</div><div className="admissions-note"><Clock /><p>Before your visit, have your preferred start date and program in mind. We can talk through everything else together.</p><ButtonLink to="/admissions#enrollment">Arrange a Visit</ButtonLink></div></div></section>;
}
