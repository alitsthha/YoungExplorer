import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Router, useRouter } from './lib/router';
import { AboutPage, ActivitiesPage, AdmissionsPage, BlogPage, BlogPostPage, ClassDetailsPage, ClassesPage, ContactPage, FAQsPage, HomePage, LegalPage, NotFoundPage, TeachersPage } from './pages/Pages';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/kids-activities-kathmandu': {
    title: 'Best Kids Activities & Holiday Camps in Kathmandu | Young Explorers Academy',
    description: 'Looking for engaging kids activities in Kathmandu? Young Explorers Academy in Baluwatar offers holiday camps, outdoor discovery, creative arts, and public speaking. Enquire today!',
  },
};

function Routes() {
  const { location } = useRouter();
  const path = location.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const hash = location.split('#')[1];
      if (hash) document.getElementById(hash)?.scrollIntoView({ block: 'start', behavior: 'instant' });
      else { window.scrollTo({ top: 0, behavior: 'instant' }); document.querySelector<HTMLHeadingElement>('h1')?.focus({ preventScroll: true }); }
      const title = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim();
      const metadata = pageMeta[path];
      document.title = metadata?.title || (path === '/' ? 'Kids Activities in Kathmandu | Young Explorers Academy' : `${title || 'Page Not Found'} | Young Explorers Academy`);
      const description = metadata?.description;
      if (description) {
        let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag); }
        tag.content = description;
      }
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = `https://www.youngexplorernepal.com${path === '/' ? '/' : path}`;
    });
    return () => cancelAnimationFrame(frame);
  }, [location, path]);
  let page;
  if (path === '/') page = <HomePage />;
  else if (path === '/about') page = <AboutPage />;
  else if (path === '/classes') page = <ClassesPage />;
  else if (path.startsWith('/classes/')) page = <ClassDetailsPage slug={path.split('/')[2]} />;
  else if (path === '/activities') page = <ActivitiesPage />;
  else if (path === '/kids-activities-kathmandu') page = <KidsActivitiesPage />;
  else if (path === '/admissions') page = <AdmissionsPage />;
  else if (path === '/teachers') page = <TeachersPage />;
  else if (path === '/faqs') page = <FAQsPage />;
  else if (path === '/blog') page = <BlogPage />;
  else if (path.startsWith('/blog/')) page = <BlogPostPage slug={path.split('/')[2]} />;
  else if (path === '/contact') page = <ContactPage />;
  else if (path === '/privacy') page = <LegalPage privacy />;
  else if (path === '/terms') page = <LegalPage privacy={false} />;
  else page = <NotFoundPage />;
  return <Layout><div key={path}>{page}</div></Layout>;
}

export default function App() { return <Router><Routes /></Router>; }
