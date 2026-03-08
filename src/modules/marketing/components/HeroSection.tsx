import { Button } from '../../../components/ui/Button';
import { motion } from 'framer-motion';
import { bookingFormUrl, heroContent } from '../data/content';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full bg-hero-pattern bg-cover bg-center bg-no-repeat"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pt-20 text-center text-white sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 rounded-md bg-black/30 px-4 py-2 font-serif text-sm italic tracking-[0.2em] text-white backdrop-blur-sm sm:mb-4 sm:text-base"
        >
          {heroContent.eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-7 font-serif text-[2.25rem] font-bold leading-tight sm:text-[2.875rem] md:mb-8 md:text-[4.375rem]"
        >
          {heroContent.title}
        </motion.h1>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          {/* <Button variant="outline">{heroContent.primaryCtaLabel}</Button> */}
          <a
            href="#rooms"
            className="rounded-md bg-brand-beige px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            {heroContent.bookingCtaLabel}
          </a>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-1/2 w-11/12 max-w-5xl -translate-x-1/2 translate-y-1/2 transform bg-white shadow-xl md:flex hidden">
        <div className="flex-1 border-r p-6">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Check In</label>
          <div className="flex items-center text-brand-dark"><Calendar className="mr-2 h-4 w-4" /> <span>Oct 12, 2026</span></div>
        </div>
        <div className="flex-1 border-r p-6">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Check Out</label>
          <div className="flex items-center text-brand-dark"><Calendar className="mr-2 h-4 w-4" /> <span>Oct 15, 2026</span></div>
        </div>
        <div className="flex-1 border-r p-6">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Guests</label>
          <div className="flex items-center text-brand-dark"><Users className="mr-2 h-4 w-4" /> <span>2 Adults, 1 Child</span></div>
        </div>
        <button type="button" className="flex-1 bg-brand-dark px-6 text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-beige transition-colors">
          Check Availability
        </button>
      </div> */}
    </section>
  );
};
