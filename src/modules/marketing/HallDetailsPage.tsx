import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { bookingFormUrl, hallDetailsContent } from './data/content';
import { Footer } from './components/Footer';
import { TopNav } from './components/TopNav';

export function HallDetailsPage() {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const gallery = hallDetailsContent.galleryImages;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const activeImage = gallery[activeImageIndex];
  const nextImage = () =>
    setActiveImageIndex((current) => (current + 1) % gallery.length);
  const prevImage = () =>
    setActiveImageIndex((current) => (current - 1 + gallery.length) % gallery.length);

  const handleBackToHome = () => {
    navigate('/#hall-showcase');
  };

  return (
    <main className="min-h-screen bg-brand-light">
      <TopNav />
      <section className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={activeImage}
          alt={hallDetailsContent.hero.title}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-dark/55" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 text-white sm:px-6 md:pb-10">
          <button
            type="button"
            onClick={handleBackToHome}
            className="rounded-md border border-white/40 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-beige hover:text-brand-dark"
          >
            {hallDetailsContent.backToHomeLabel}
          </button>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">
            {hallDetailsContent.hero.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
            {hallDetailsContent.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.9fr] md:py-16">
        <div className="space-y-10">
          <section aria-labelledby="overview-title">
            <SectionTitle
              id="overview-title"
              title={hallDetailsContent.overview.title}
              subtitle={hallDetailsContent.overview.sectionLabel}
              alignment="left"
            />
            <p className="text-brand-text leading-relaxed">
              {hallDetailsContent.overview.text}
            </p>

            <h3 className="mt-6 font-serif text-2xl text-brand-dark">
              {hallDetailsContent.mainFeaturesTitle}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {hallDetailsContent.mainFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl bg-white px-4 py-3 text-sm text-brand-text shadow-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="gallery-title">
            <SectionTitle
              id="gallery-title"
              title={hallDetailsContent.galleryTitle}
              subtitle={hallDetailsContent.gallerySubtitle}
              alignment="left"
            />
            <div className="relative overflow-hidden rounded-2xl bg-brand-dark">
              <img
                src={activeImage}
                alt={`${hallDetailsContent.hero.title} gallery`}
                className="h-[290px] w-full object-cover sm:h-[420px]"
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/65"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/65"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-dark"
              >
                Expand
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`overflow-hidden rounded-lg border-2 ${index === activeImageIndex ? 'border-brand-beige' : 'border-transparent'}`}
                >
                  <img
                    src={image}
                    alt={`${hallDetailsContent.hero.title} thumbnail ${index + 1}`}
                    className="h-20 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <article className="rounded-2xl border border-brand-dark/10 bg-white p-5 shadow-sm md:p-6">
            <h3 className="font-serif text-2xl text-brand-dark">
              {hallDetailsContent.cta.title}
            </h3>
            <p className="mt-3 text-sm text-brand-text">
              {hallDetailsContent.cta.text}
            </p>
            <a
              href={bookingFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-md bg-brand-dark px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-beige"
            >
              {hallDetailsContent.cta.buttonLabel}
            </a>
          </article>

          <article className="rounded-2xl border border-brand-dark/10 bg-white p-5 shadow-sm md:p-6">
            <h3 className="font-serif text-2xl text-brand-dark">
              {hallDetailsContent.suitableForTitle}
            </h3>
            <ul className="mt-4 grid gap-2">
              {hallDetailsContent.suitableFor.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-brand-light px-3 py-2 text-sm text-brand-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-brand-dark/10 bg-white p-5 shadow-sm md:p-6">
            <h3 className="font-serif text-2xl text-brand-dark">
              {hallDetailsContent.amenitiesTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {hallDetailsContent.amenities.map((amenity) => (
                <li key={amenity} className="rounded-lg bg-brand-light px-3 py-2">
                  {amenity}
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </section>

      {isExpanded ? (
        <div className="fixed inset-0 z-[100] bg-black/90 p-4">
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close expanded gallery"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          <div className="grid h-full place-items-center">
            <img
              src={activeImage}
              alt={`${hallDetailsContent.hero.title} expanded`}
              className="max-h-[88vh] max-w-[92vw] object-contain"
            />
          </div>
        </div>
      ) : null}
      <Footer />
    </main>
  );
}
