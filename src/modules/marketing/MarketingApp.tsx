import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ActivitySection } from './components/ActivitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HallSection } from './components/HallSection';
import { HeroSection } from './components/HeroSection';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { TopNav } from './components/TopNav';

const AboutSection = lazy(() =>
  import('./components/AboutSection').then((module) => ({
    default: module.AboutSection,
  })),
);

const RoomShowcase = lazy(() =>
  import('./components/RoomShowcase').then((module) => ({
    default: module.RoomShowcase,
  })),
);

function SectionLoader() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="h-32 animate-pulse rounded-xl bg-brand-light/80" />
    </div>
  );
}

export function MarketingApp() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) {
      return;
    }

    const id = hash.replace('#', '');
    let retries = 0;
    const maxRetries = 20;

    const scrollToHashTarget = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (retries < maxRetries) {
        retries += 1;
        window.setTimeout(scrollToHashTarget, 60);
      }
    };

    scrollToHashTarget();
  }, [location.hash]);

  return (
    <main className="w-full overflow-x-hidden">
      <TopNav />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <RoomShowcase />
      </Suspense>
      <HallSection />
      <ActivitySection />
      <ContactSection />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
