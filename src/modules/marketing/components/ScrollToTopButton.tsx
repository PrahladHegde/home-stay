import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SHOW_BUTTON_SCROLL_Y = 420;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_BUTTON_SCROLL_Y);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById('home');
    hero?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          onClick={scrollToHero}
          aria-label="Go to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.22 }}
          className="fixed bottom-6 right-6 z-[60] grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-brand-dark text-white shadow-lg transition-colors hover:bg-brand-beige"
        >
          <ChevronUp size={20} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
