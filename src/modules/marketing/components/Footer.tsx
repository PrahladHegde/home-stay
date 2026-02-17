import { siteConfig } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-center text-white">
      <p className="font-serif italic text-brand-beige">{siteConfig.footerTagline}</p>
      <p className="mt-4 text-xs text-white/60">{siteConfig.copyrightText}</p>
    </footer>
  );
}
