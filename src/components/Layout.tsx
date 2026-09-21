import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowUp, ChevronDown, Camera, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, useRouter } from '../lib/router';
import { Doodles, Newsletter, ShapeMasks } from './Shared';
import { academy, academyMap, programs } from '../data/content';
import { Reveal } from './ui/Reveal';

const pages = [
  ['Activities', '/activities'], ['Admissions', '/admissions'], ['Our Community', '/teachers'], ['FAQs', '/faqs'], ['Blog', '/blog'],
];

export function Logo() {
  return <Link to="/" className="logo" aria-label="Young Explorers Academy home"><img src="/images/Logo/logo.png" alt="Young Explorers Academy" width={1648} height={579} /></Link>;
}

export function Header() {
  const { location } = useRouter();
  const path = location.split(/[?#]/)[0];
  const [mobile, setMobile] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => { setMobile(false); setDropdown(null); }, [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const outside = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) { setDropdown(null); setMobile(false); } };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setDropdown(null); setMobile(false); } };
    window.addEventListener('scroll', onScroll, { passive: true }); document.addEventListener('pointerdown', outside); document.addEventListener('keydown', escape);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, []);
  return <header ref={headerRef} className={`site-header ${scrolled ? 'scrolled' : ''}`}><div className="container header-inner">
    <Logo />
    <button className="mobile-toggle icon-button" aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-controls="main-navigation" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={`main-navigation ${mobile ? 'open' : ''}`} aria-label="Main navigation">
      <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
      <Link to="/about" className={path === '/about' ? 'active' : ''}>About Us</Link>
      <div className={`nav-group ${dropdown === 'classes' ? 'expanded' : ''}`}><button className={path.startsWith('/classes') ? 'active' : ''} aria-expanded={dropdown === 'classes'} aria-controls="classes-menu" onClick={() => setDropdown(dropdown === 'classes' ? null : 'classes')}>Programmes <ChevronDown size={14} /></button><div id="classes-menu" className="dropdown"><Link to="/classes">All programmes</Link>{programs.slice(0, 4).map(program => <Link key={program.slug} to={`/classes/${program.slug}`}>{program.title}</Link>)}</div></div>
      <div className={`nav-group ${dropdown === 'pages' ? 'expanded' : ''}`}><button className={pages.some(([, url]) => path.startsWith(url)) ? 'active' : ''} aria-expanded={dropdown === 'pages'} aria-controls="pages-menu" onClick={() => setDropdown(dropdown === 'pages' ? null : 'pages')}>Pages <ChevronDown size={14} /></button><div id="pages-menu" className="dropdown">{pages.map(([label, url]) => <Link to={url} key={url}>{label}</Link>)}</div></div>
      <Link to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</Link>
      <Link to="/admissions#enrollment" className="button mobile-cta">Get Started</Link>
    </nav>
    <Link to="/admissions#enrollment" className="button header-cta">Get Started</Link>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer navy"><Doodles light /><div className="container"><div className="footer-grid">
    <Reveal className="footer-about"><Logo /><p>A skill-based learning centre in Baluwatar, Kathmandu. Creating space for children to explore, express themselves, and connect.</p><Newsletter /></Reveal>
    <Reveal delay={100}><h3>Quick Links</h3><nav aria-label="Footer navigation">{[['Home', '/'], ['About Us', '/about'], ['Our Programmes', '/classes'], ['Activities', '/activities'], ['Our Community', '/teachers']].map(([label, url]) => <Link key={url} to={url}>{label}</Link>)}</nav></Reveal>
    <Reveal delay={200}><h3>Our Programs</h3><nav aria-label="Program links">{programs.slice(0, 5).map(p => <Link key={p.slug} to={`/classes/${p.slug}`}>{p.title.replace(' Program', '')}</Link>)}</nav></Reveal>
    <Reveal delay={300} className="footer-contact">
      <h3>Connect With Us</h3>
      {academy.phones.map(phone => <a key={phone.href} href={phone.href}><Phone size={18} aria-hidden="true" /><span>{phone.label}</span></a>)}
      <a href={`mailto:${academy.email}`}><Mail size={18} aria-hidden="true" /><span>{academy.email}</span></a>
      <a href={academy.instagram} target="_blank" rel="noopener noreferrer"><Camera size={18} aria-hidden="true" /><span>{academy.instagramHandle}</span></a>
      <p><MapPin size={18} aria-hidden="true" /><span>{academy.location}</span></p>
      <Link to="/contact" className="footer-tour">Programme enquiries <span aria-hidden="true">↗</span></Link>
    </Reveal>
  </div>
    <section className="footer-location" aria-labelledby="footer-location-title">
      <Reveal className="footer-location-copy">
        <span className="eyebrow">Come Say Hello</span>
        <h2 id="footer-location-title">Find Young Explorers Academy</h2>
        <p><MapPin size={20} aria-hidden="true" /><span>{academy.location}</span></p>
        <p>Plan a visit and discover a place for your child to explore, create, and grow.</p>
        <a className="button" href={academyMap.url} target="_blank" rel="noopener noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
      </Reveal>
      <Reveal direction="fade" className="footer-map">
        <iframe src={academyMap.embedUrl} title={`${academy.name} location — ${academy.location}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </Reveal>
    </section>
    <Reveal direction="fade" className="footer-bottom"><p>© {new Date().getFullYear()} Young Explorers Academy. All rights reserved.</p><div><Link to="/privacy">Privacy Policy</Link><span aria-hidden="true">|</span><Link to="/terms">Terms & Conditions</Link></div></Reveal></div></footer>;
}

export function Layout({ children }: { children: ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => { const scroll = () => setShowTop(window.scrollY > 800); window.addEventListener('scroll', scroll, { passive: true }); return () => window.removeEventListener('scroll', scroll); }, []);
  return <><a className="skip-link" href="#main-content">Skip to content</a><ShapeMasks /><Header /><main id="main-content">{children}</main><Footer />{showTop && <button className="back-to-top icon-button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><ArrowUp size={21} /></button>}</>;
}
