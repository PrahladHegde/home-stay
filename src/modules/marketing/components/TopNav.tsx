import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { marketingNavLinks, siteConfig } from '../data/content';

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (href: string) => {
    closeMenu();
    if (location.pathname === '/') {
      navigate({ hash: href });
      return;
    }
    navigate({ pathname: '/', hash: href });
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const targetNode = event.target as Node | null;
      if (!targetNode) {
        return;
      }
      if (navRef.current && !navRef.current.contains(targetNode)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header ref={navRef} className="fixed top-0 z-50 w-full bg-brand-dark/92 text-white shadow-lg backdrop-blur-md">
      <nav className="w-full border-b border-white/10 px-4 py-3 sm:px-6 md:px-8" aria-label="Primary">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavClick('#home')}
            className="cursor-pointer bg-transparent p-0 font-serif text-left text-lg font-bold tracking-[0.08em] text-inherit sm:text-xl md:text-2xl"
          >
            {siteConfig.propertyName}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <ul className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] md:flex">
            {marketingNavLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="cursor-pointer bg-transparent p-0 text-inherit text-xs uppercase tracking-[0.2em] transition-colors hover:text-brand-beige"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="border-b border-white/10 bg-brand-dark/95 px-4 py-4 md:hidden">
          <ul className="mx-auto grid max-w-7xl gap-2">
            {marketingNavLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full cursor-pointer rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left text-sm uppercase tracking-[0.15em] text-inherit transition-colors hover:bg-white/10"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
