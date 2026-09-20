import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowUpRight, ChevronRight, PartyPopper, Rainbow, Sparkles, Star, Sun, Zap } from 'lucide-react';
import { Link } from '../lib/router';
import { Reveal } from './ui/Reveal';

// Use the supplied academy photographs consistently across all pages.
export function Photo({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <div className={`photo ${className}`}><img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" /></div>;
}

export function ButtonLink({ to, children, className = '', outline = false }: { to: string; children: ReactNode; className?: string; outline?: boolean }) {
  return <Link to={to} className={`button ${outline ? 'button-outline' : ''} ${className}`}>{children}</Link>;
}

export function Doodles({ light = false }: { light?: boolean }) {
  const doodles = [Sparkles, Sun, Rainbow, PartyPopper, Zap, Star];
  return <div className={`doodles ${light ? 'doodles-light' : ''}`} aria-hidden="true">{doodles.map((Icon, index) => <Icon key={index} className={`doodle doodle-${index}`} strokeWidth={1.1} />)}</div>;
}

export function SectionTitle({ eyebrow, title, description, centered = false, action, className = '' }: { eyebrow: string; title: string; description?: string; centered?: boolean; action?: ReactNode; className?: string }) {
  return <Reveal className={`section-heading ${centered ? 'centered' : ''} ${className}`}><div className="section-heading-main"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{centered && description && <p>{description}</p>}</div>{!centered && description && <p className="section-description">{description}</p>}{action}</Reveal>;
}

export function PageHero({ title, description, parent }: { title: string; description?: string; parent?: { title: string; to: string } }) {
  return <section className="page-hero navy"><Doodles light /><div className="container"><Reveal><h1 tabIndex={-1}>{title}</h1>{description && <p>{description}</p>}<nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><ChevronRight size={15} />{parent && <><Link to={parent.to}>{parent.title}</Link><ChevronRight size={15} /></>}<span aria-current="page">{title}</span></nav></Reveal></div></section>;
}

export function Tag({ children }: { children: ReactNode }) { return <span className="tag">{children}</span>; }

export function Newsletter() {
  const [message, setMessage] = useState('');
  return <form className="newsletter" onSubmit={event => { event.preventDefault(); setMessage('Thanks for your interest! Newsletter signup is not connected in this preview.'); }}>
    <label className="sr-only" htmlFor="newsletter-email">Email for school news</label><div className="newsletter-input"><input id="newsletter-email" name="email" type="email" required placeholder="Email address" autoComplete="email" /><button aria-label="Sign up for school news" type="submit"><ArrowUpRight size={20} /></button></div>
    {message && <p role="status" className="newsletter-status">{message}</p>}
  </form>;
}

export function ShapeMasks() {
  // Geometric clipping paths, used by photos; these are not raster illustrations.
  const burst = Array.from({ length: 80 }, (_, i) => {
    const angle = i * Math.PI * 2 / 80 - Math.PI / 2;
    const radius = i % 4 === 0 ? 0.50 : i % 4 === 2 ? 0.445 : 0.465;
    return `${0.5 + Math.cos(angle) * radius},${0.5 + Math.sin(angle) * radius}`;
  }).join(' ');
  return <svg width="0" height="0" className="shape-definitions" aria-hidden="true"><defs>
    <clipPath id="wavy-photo" clipPathUnits="objectBoundingBox"><path d="M.03,.16 C.02,.015,.13,0,.26,.055 C.35,.085,.43,.06,.5,0 C.57,.06,.65,.085,.74,.055 C.87,0,.98,.015,.97,.16 C.94,.29,.88,.36,1,.5 C.88,.64,.94,.71,.97,.84 C.98,.985,.87,1,.74,.945 C.65,.915,.57,.94,.5,1 C.43,.94,.35,.915,.26,.945 C.13,1,.02,.985,.03,.84 C.06,.71,.12,.64,0,.5 C.12,.36,.06,.29,.03,.16Z" /></clipPath>
    <clipPath id="burst-photo" clipPathUnits="objectBoundingBox"><polygon points={burst} /></clipPath>
    <clipPath id="split-photo" clipPathUnits="objectBoundingBox"><path d="M0,.07 Q0,0,.08,0 L.45,0 Q.55,0,.52,.07 L.19,.43 Q.16,.46,.13,.42 L.02,.3 Q0,.28,0,.23Z M.66,0 L.94,0 Q1,0,1,.07 L1,.62 Q1,.68,.95,.68 L.3,.78 Q.22,.79,.2,.72 L.2,.56 Q.2,.52,.25,.48 L.59,.06 Q.62,0,.66,0Z M.04,.46 Q.09,.43,.13,.49 L.58,.94 Q.63,1,.54,1 L.06,1 Q0,1,0,.94 L0,.54 Q0,.49,.04,.46Z M.76,.76 L.94,.72 Q1,.7,1,.79 L1,.94 Q1,1,.94,1 L.79,1 Q.76,1,.73,.97 L.62,.85 Q.58,.8,.66,.78Z" /></clipPath>
  </defs></svg>;
}

export const delayStyle = (delay: number) => ({ '--delay': `${delay}ms` } as CSSProperties);
