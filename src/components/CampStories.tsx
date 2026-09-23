import { useId, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, Heart, Maximize2, Quote, Sparkles, Star, Sun } from 'lucide-react';
import { campJourneys, googleReviewSummary, parentTestimonials } from '../data/campStories';
import { ButtonLink, Photo } from './Shared';
import { Reveal } from './ui/Reveal';
import { Modal } from './ui/Modal';
import './CampStories.css';

export function CampGallerySection() {
  const [campIndex, setCampIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const uid = useId();
  const camp = campJourneys[campIndex];
  const step = camp.steps[stepIndex];
  const move = (offset: number) => setStepIndex(index => (index + offset + camp.steps.length) % camp.steps.length);

  return <section className="section camp-gallery" id="gallery" aria-labelledby={`${uid}-heading`}>
    <div className="container">
      <Reveal className="camp-heading" stagger>
        <div><span className="eyebrow"><Camera size={17} aria-hidden="true" /> The Camp Scrapbook</span><h2 id={`${uid}-heading`}>Little steps.<br /><span>Unforgettable journeys.</span></h2></div>
        <div className="camp-heading-aside"><p>Follow a student’s journey through friendship, creativity, and discovery. Every little moment is part of a bigger adventure.</p><div className="camp-switch" role="group" aria-label="Choose a camp journey">{campJourneys.map((item, index) => <button key={item.id} aria-pressed={campIndex === index} onClick={() => { setCampIndex(index); setStepIndex(0); }}>{index === 0 ? <Sparkles size={16} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}{item.label}</button>)}</div></div>
      </Reveal>
      <Reveal direction="scale">
        <div className="camp-story" id={`${uid}-story`}>
          <button className="camp-feature-photo" onClick={() => setExpanded(true)} aria-label={`Enlarge photo: ${step.alt}`}>
            <Photo key={`${camp.id}-${stepIndex}`} src={step.image} alt={step.alt} />
            <span className="camp-photo-label"><Camera size={16} aria-hidden="true" /> {camp.label} moments</span>
            <span className="camp-enlarge"><Maximize2 size={20} aria-hidden="true" /></span>
          </button>
          <div className="camp-story-copy">
            <span className="camp-chapter">THE JOURNEY <span>{String(stepIndex + 1).padStart(2, '0')} / 04</span></span>
            <div key={`${camp.id}-${stepIndex}`} className="camp-story-text" aria-live="polite" aria-atomic="true"><span className="eyebrow">{step.theme}</span><h3>{step.title}</h3><p>{step.text}</p></div>
            <div className="camp-story-note"><Heart size={19} aria-hidden="true" /><span>{camp.tagline}</span></div>
            <div className="camp-story-controls"><span>One moment at a time</span><button className="icon-button" aria-label="Previous journey moment" onClick={() => move(-1)}><ArrowLeft size={18} /></button><button className="icon-button" aria-label="Next journey moment" onClick={() => move(1)}><ArrowRight size={18} /></button></div>
          </div>
        </div>
      </Reveal>
      <div className="camp-milestones" role="group" aria-label={`${camp.label} journey moments`}>
        {camp.steps.map((item, index) => <Reveal key={`${camp.id}-${index}`} delay={index * 75}><button className={`camp-milestone ${stepIndex === index ? 'selected' : ''}`} aria-pressed={stepIndex === index} aria-controls={`${uid}-story`} onClick={() => setStepIndex(index)}><Photo src={item.image} alt="" /><span className="camp-milestone-number">0{index + 1}</span><span className="camp-milestone-copy"><small>{item.theme}</small><strong>{item.title}</strong></span></button></Reveal>)}
      </div>
      <p className="camp-gallery-note">An illustrative camp journey, told through photographs from our academy community.</p>
    </div>
    <Modal open={expanded} onClose={() => setExpanded(false)} title={`${camp.label}: ${step.title}`}>
      <div className="camp-lightbox" onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}><Photo src={step.image} alt={step.alt} /><div className="camp-lightbox-caption"><div><span className="eyebrow">{camp.label} · Moment {stepIndex + 1} of 4</span><h3>{step.title}</h3></div><div className="carousel-controls"><button className="icon-button" aria-label="Previous gallery photo" onClick={() => move(-1)}><ArrowLeft /></button><button className="icon-button" aria-label="Next gallery photo" onClick={() => move(1)}><ArrowRight /></button></div></div></div>
    </Modal>
  </section>;
}

export function ParentTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const uid = useId();
  const current = parentTestimonials[index];
  const move = (offset: number) => setIndex(value => (value + offset + parentTestimonials.length) % parentTestimonials.length);

  return <section className="section parent-stories" id="testimonials" aria-labelledby={`${uid}-heading`}>
    <div className="container">
      <div className="parent-stories-layout">
        <Reveal direction="left" className="parent-stories-intro" stagger>
          <span className="eyebrow"><Heart size={17} aria-hidden="true" /> The Parent Perspective</span>
          <h2 id={`${uid}-heading`}>Small moments.<br /><span>Big feelings.</span></h2>
          <p>Real experiences, shared by families on Google. Discover what they say about the people, activities, and little moments that make a difference.</p>
          <a className="parent-story-seal" href={googleReviewSummary.url} target="_blank" rel="noopener noreferrer"><span><Star size={24} aria-hidden="true" /></span><div><strong>{googleReviewSummary.rating} / 5 on Google</strong><small>{googleReviewSummary.count} reviews · Checked {googleReviewSummary.checkedOn}</small></div></a>
          <ButtonLink to="/admissions#enrollment">Find the Right Programme <ArrowRight size={17} aria-hidden="true" /></ButtonLink>
        </Reveal>
        <Reveal direction="up" delay={150} className="parent-quote-reveal">
          <div className="parent-quote-card" role="region" aria-roledescription="carousel" aria-label="Parent reviews from Google">
            <div className="parent-quote-top"><Quote size={49} aria-hidden="true" /><span>Google review</span></div>
            <div aria-live="polite" aria-atomic="true"><div className="parent-quote-content" key={index}>
              <span className="eyebrow">{current.theme}</span><blockquote cite={current.sourceUrl}>“{current.quote}”</blockquote>
              <p className="parent-review-context"><span>Review summary</span>{current.summary}</p>
              <div className="parent-quote-author"><span className="parent-avatar" aria-hidden="true">{current.initials}</span><div><strong>{current.label}</strong><a href={current.sourceUrl} target="_blank" rel="noopener noreferrer">Read full review on Google ↗</a></div></div>
            </div></div>
            <div className="parent-quote-controls"><div className="parent-story-dots" role="group" aria-label="Choose testimonial">{parentTestimonials.map((item, i) => <button key={item.theme} aria-label={`Show testimonial: ${item.theme}`} aria-pressed={index === i} onClick={() => setIndex(i)}><span /></button>)}</div><span className="parent-story-count">{String(index + 1).padStart(2, '0')} <span>/ {String(parentTestimonials.length).padStart(2, '0')}</span></span><button className="icon-button" aria-label="Previous parent testimonial" onClick={() => move(-1)}><ArrowLeft size={18} /></button><button className="icon-button" aria-label="Next parent testimonial" onClick={() => move(1)}><ArrowRight size={18} /></button></div>
          </div>
        </Reveal>
      </div>
      <div className="parent-story-themes" role="group" aria-label="Explore parent story themes">{parentTestimonials.map((item, i) => <Reveal key={item.theme} delay={i * 90}><button aria-pressed={index === i} onClick={() => setIndex(i)}><span>0{i + 1}</span><strong>{item.takeaway}</strong><ArrowRight size={18} aria-hidden="true" /></button></Reveal>)}</div>
      <p className="parent-review-note">Selected excerpts from public Google reviews, with summaries. <a href={googleReviewSummary.url} target="_blank" rel="noopener noreferrer">Read all reviews on Google ↗</a></p>
    </div>
  </section>;
}
