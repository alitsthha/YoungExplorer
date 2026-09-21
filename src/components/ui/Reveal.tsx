import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '', direction = 'up', stagger = false }: { children: ReactNode; delay?: number; className?: string; direction?: 'up' | 'left' | 'right' | 'scale' | 'fade'; stagger?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    // Only hide content once we know it can be observed. A zero threshold also
    // supports tall forms and text blocks on short mobile viewports.
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) show();
    }, { threshold: 0, rootMargin: '0px 0px -36px 0px' });
    const show = () => {
      node.classList.add('is-visible');
      observer.disconnect();
    };
    const onMotionChange = () => { if (motion.matches) show(); };
    node.classList.add('reveal-ready');
    observer.observe(node);
    node.addEventListener('focusin', show);
    motion.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      node.removeEventListener('focusin', show);
      motion.removeEventListener('change', onMotionChange);
      node.classList.remove('reveal-ready', 'is-visible');
    };
  }, []);
  return <div ref={ref} className={`reveal reveal-${direction}${stagger ? ' reveal-stagger' : ''} ${className}`} style={{ '--delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}

export function Counter({ value, suffix = '+' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.max(0, Math.min((now - start) / 1400, 1));
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref} aria-label={`${value}${suffix}`}><span aria-hidden="true">{display}{suffix}</span></span>;
}
