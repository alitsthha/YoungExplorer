/// <reference types="vite/client" />
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Modal } from './ui/Modal';
import './HomeGallery.css';

const featured = [
  { src: '/images/Gallery/754046459_17973304836087640_1346310118343170192_n..jpg', title: 'A little courage, a big adventure', alt: 'Children helping each other across a woodland path' },
  { src: '/images/Gallery/758635989_17974083789087640_445313971566741991_n..jpg', title: 'Made with imagination', alt: 'Children proudly holding their colourful artwork' },
  { src: '/images/Gallery/774788182_17976980415087640_4974287569850087616_n..jpg', title: 'Up, up & away', alt: 'Young explorers on an indoor climbing wall' },
  { src: '/images/Gallery/775799150_17977999296087640_1406222141761297869_n..jpg', title: 'Small hands, new discoveries', alt: 'Children gathered around a hands-on outdoor activity' },
  { src: '/images/Gallery/757455184_17974084602087640_5682780202118846465_n..jpg', title: 'Better together', alt: 'Two children sharing a seat in a decorated rickshaw' },
  { src: '/images/Gallery/780024071_17977999494087640_6892820437427729248_n..jpg', title: 'Room to grow', alt: 'Children exploring and playing together outdoors' },
];

const memories: Record<string, [string, string]> = {
  '1.jpg': ['A day to remember', 'Children gathered together on a covered sports court'],
  '670236112': ['Learning beyond the classroom', 'Children sitting together in a leafy outdoor space'],
  '670802539': ['Proud little creators', 'A child displaying a handmade craft outdoors'],
  '711630946': ['Friends along the way', 'Children standing together outside a building'],
  '742111074': ['Our colourful community', 'A group of children and adults in front of a colourful wall'],
  '753686117': ['Into the green', 'Children and adults exploring a wooded trail'],
  '753933066': ['The path to discovery', 'Children walking along a forest path'],
  '758395820': ['A world of wonder', 'A child outdoors with hills in the distance'],
  '763811128': ['One step at a time', 'Children walking together on a green woodland trail'],
  '765175892': ['Outdoors, together', 'Children gathered on a lawn during an outdoor activity'],
  '766147205': ['A splash of happiness', 'Children and adults gathered beside a swimming pool'],
  '766544655': ['Joy in the everyday', 'Children enjoying an activity on the grass'],
  '766662154': ['Memories with friends', 'Children and adults posing together indoors'],
  '767243255': ['Making a splash', 'A group of young explorers beside a swimming pool'],
  '774596656': ['Look what I made', 'A child holding up colourful artwork outside'],
  '774833190': ['Little achievements, big smiles', 'A child proudly holding a certificate'],
  '775166889': ['All together now', 'Children gathered for an indoor activity'],
  '775213420': ['Curiosity at work', 'Children working together on a tabletop activity'],
  '775280571': ['Stories around every corner', 'A group visiting a historic brick building'],
  '776100985': ['A little imagination', 'A child playing dress-up on the lawn'],
  '777851459': ['Days worth celebrating', 'Children gathered in a room decorated with balloons'],
  '777851461': ['A seat for adventure', 'Children seated in a decorated rickshaw'],
  '777948242': ['A room full of joy', 'Children gathered at a colourful birthday celebration'],
  '777982909': ['Play comes naturally', 'A child playing outdoors on the grass'],
  '778565198': ['A special little day', 'A child at a birthday celebration'],
  '778794224': ['Together we celebrate', 'Children and an adult celebrating a birthday'],
  '780619802': ['Hands-on happiness', 'A child exploring an outdoor activity'],
  '780702175': ['Our world, a little wider', 'A group gathered outside a large building'],
  '780949610': ['Out and about', 'Children exploring a courtyard together'],
  '781163769': ['Every outing, a story', 'Children visiting a historic courtyard'],
  '781207533': ['Discovering together', 'A group of children and adults at a historic brick archway'],
};

// Discover the collection at build time; adding photos needs no component edits.
const collection = import.meta.glob('/public/images/Gallery/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' });
const photographs = [...featured, ...Object.keys(collection).sort()
  .filter(path => !/\(\d+\)/.test(path))
  .map(path => path.replace('/public', ''))
  .filter(src => !featured.some(photo => photo.src === src))
  .map((src, index) => {
    const filename = src.split('/').pop() || '';
    const memory = memories[filename.split('_')[0]];
    return { src, title: memory?.[0] || 'A moment from our world', alt: memory?.[1] || `Young Explorers Academy gallery moment ${index + 7}` };
  })];
const wrap = (index: number) => (index + photographs.length) % photographs.length;
const duration = 4500;

export function HomeGallery() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const section = useRef<HTMLElement>(null);
  const thumbnails = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const running = playing && visible && pageVisible && !expanded;
  const current = photographs[active];
  // Manual navigation takes over until the visitor explicitly presses Play.
  const move = (step: number) => { setPlaying(false); setActive(index => wrap(index + step)); };
  const choose = (index: number) => { setPlaying(false); setActive(index); };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    if (section.current) observer.observe(section.current);
    const visibility = () => setPageVisible(!document.hidden);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduceMotion = () => { if (motion.matches) setPlaying(false); };
    document.addEventListener('visibilitychange', visibility);
    motion.addEventListener('change', reduceMotion);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); motion.removeEventListener('change', reduceMotion); };
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive(index => wrap(index + 1)), duration);
    return () => window.clearTimeout(timer);
  }, [active, running]);

  useEffect(() => {
    const strip = thumbnails.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (strip && thumb) strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: 'instant' });
  }, [active]);

  return <section ref={section} className="section home-gallery" id="gallery" aria-labelledby="home-gallery-title">
    <div className="container">
      <Reveal className="home-gallery-heading">
        <div><span className="eyebrow"><Sparkles size={17} aria-hidden="true" /> Through Their Eyes</span>
          <h2 id="home-gallery-title">Little moments.<br /><span>Wonderful memories.</span></h2></div>
        <p>A glimpse into our world of wonder, where everyday adventures become stories worth keeping.</p>
      </Reveal>
    </div>
    <div className="home-gallery-carousel" role="region" aria-roledescription="carousel" aria-label="Academy memories"
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      }}>
      <div className="home-gallery-stage"
        onTouchStart={event => { const touch = event.touches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; suppressClick.current = false; }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={event => {
          if (!touchStart.current) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - touchStart.current.x;
          const dy = touch.clientY - touchStart.current.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { suppressClick.current = true; move(dx < 0 ? 1 : -1); }
          touchStart.current = null;
        }} onClickCapture={event => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}>
        {photographs.map((photo, index) => {
          let offset = wrap(index - active);
          if (offset > photographs.length / 2) offset -= photographs.length;
          if (Math.abs(offset) > 2) return null;
          return <button key={photo.src} className={`home-gallery-slide ${offset === 0 ? 'is-active' : ''}`}
            style={{ '--offset': offset, '--distance': Math.abs(offset) } as CSSProperties}
            tabIndex={offset === 0 ? 0 : -1} aria-hidden={Math.abs(offset) > 1 || undefined}
            aria-label={offset === 0 ? `Enlarge photo ${index + 1}: ${photo.title}` : `View ${offset < 0 ? 'previous' : 'next'} photo`}
            onClick={() => { setPlaying(false); if (offset === 0) setExpanded(true); else choose(index); }}>
            <span className="home-gallery-photo-glow" aria-hidden="true" style={{ backgroundImage: `url("${photo.src}")` }} /><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" draggable={false} />
            {offset === 0 && <span className="home-gallery-enlarge"><ArrowUpRight size={19} /><span>Take a closer look</span></span>}
          </button>;
        })}
      </div>
      <div className="container home-gallery-console">
        <div className="home-gallery-caption" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
          <span className="home-gallery-count">{String(active + 1).padStart(2, '0')}<span> / {photographs.length}</span></span>
          <h3 key={active}>{current.title}</h3>
        </div>
        <div className="home-gallery-controls">
          <button className="icon-button" aria-label="Previous gallery photo" onClick={() => move(-1)}><ChevronLeft size={20} /></button>
          <button className="icon-button home-gallery-play" aria-label={playing ? 'Pause automatic slideshow' : 'Play automatic slideshow'} onClick={() => setPlaying(value => !value)}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
          <button className="icon-button" aria-label="Next gallery photo" onClick={() => move(1)}><ChevronRight size={20} /></button>
        </div>
        <div className="home-gallery-progress" aria-hidden="true"><span key={`${active}-${running}`} className={running ? 'is-running' : ''} style={{ animationDuration: `${duration}ms` }} /></div>
        <div className="home-gallery-thumbnails" ref={thumbnails} aria-label="Choose a gallery photo">
          {photographs.map((photo, index) => <button key={photo.src} className={index === active ? 'is-active' : ''} aria-label={`Show photo ${index + 1}: ${photo.title}`} aria-current={index === active ? 'true' : undefined} onClick={() => choose(index)}><img src={photo.src} alt="" loading="lazy" decoding="async" /></button>)}
        </div>
        <p className="home-gallery-footnote"><span className={`home-gallery-status ${playing ? 'is-playing' : ''}`}><span aria-hidden="true" />{playing ? 'Memories in motion' : 'Exploring at your pace'}</span><span>{playing ? 'Swipe or choose a photo to take over.' : 'Press play to let the memories roll.'}</span></p>
      </div>
    </div>
    <Modal open={expanded} onClose={() => setExpanded(false)} title="Young Explorers photo gallery">
      <div className="home-gallery-viewer" onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      }}>
        <img src={current.src} alt={current.alt} />
        <div className="home-gallery-viewer-footer">
          <div aria-live="polite" aria-atomic="true"><span className="eyebrow">{active + 1} / {photographs.length} · Our Gallery</span><h3>{current.title}</h3></div>
          <div className="home-gallery-controls"><button className="icon-button" aria-label="Previous enlarged photo" onClick={() => move(-1)}><ChevronLeft /></button><button className="icon-button" aria-label="Next enlarged photo" onClick={() => move(1)}><ChevronRight /></button></div>
        </div>
      </div>
    </Modal>
  </section>;
}
