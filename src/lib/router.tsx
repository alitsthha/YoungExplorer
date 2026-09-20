import { createContext, useContext, useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type RouterState = { location: string; navigate: (to: string) => void };
const RouterContext = createContext<RouterState | null>(null);
const getLocation = () => window.location.pathname + window.location.search + window.location.hash;

/** Small History API router. All links retain real hrefs and work in new tabs. */
export function Router({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(getLocation);
  useEffect(() => {
    const sync = () => setLocation(getLocation());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);
  const navigate = (to: string) => {
    if (to === getLocation()) {
      if (to.includes('#')) document.getElementById(to.split('#')[1])?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setLocation(getLocation());
  };
  return <RouterContext.Provider value={{ location, navigate }}>{children}</RouterContext.Provider>;
}
export function useRouter() {
  const state = useContext(RouterContext);
  if (!state) throw new Error('useRouter must be used inside Router');
  return state;
}
export function Link({ to, onClick, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const { navigate } = useRouter();
  return <a {...props} href={to} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || props.target === '_blank') return;
    event.preventDefault(); navigate(to);
  }}>{children}</a>;
}
