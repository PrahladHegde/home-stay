import { Facebook, Instagram, Mail, MapPin, PhoneCall } from 'lucide-react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { contactContent } from '../data/content';

function ContactCard({
  icon,
  title,
  children,
  mobileTone,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  mobileTone?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 110, damping: 13 }}
      viewport={{ once: true, amount: 0.32 }}
      className={`min-w-[82vw] snap-center rounded-2xl border border-brand-dark/10 bg-gradient-to-br p-5 text-left shadow-sm sm:min-w-[70vw] md:min-w-0 md:bg-white md:p-6 ${mobileTone ?? 'from-white to-brand-light'}`}
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark text-white">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-brand-dark sm:text-2xl">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-brand-text">{children}</div>
    </motion.article>
  );
}

function contactIcon(type: string): ReactNode {
  switch (type) {
    case 'map':
      return <MapPin size={18} />;
    case 'phone':
      return <PhoneCall size={18} />;
    case 'email':
      return <Mail size={18} />;
    case 'social':
      return <Instagram size={18} />;
    default:
      return <MapPin size={18} />;
  }
}

export function ContactSection() {
  return (
    <section id="find-us" className="bg-brand-light py-16 md:py-24" aria-labelledby="find-us-title">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle
          id="find-us-title"
          title={contactContent.sectionTitle}
          subtitle={contactContent.sectionSubtitle}
        />

        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0">
          {contactContent.cards.map((card) => (
            <ContactCard
              key={card.title}
              icon={contactIcon(card.type)}
              title={card.title}
              mobileTone={card.mobileTone}
            >
              {card.lines?.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {card.link ? (
                <a
                  href={card.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-semibold text-brand-dark underline decoration-brand-beige decoration-2 underline-offset-4"
                >
                  {card.link.label}
                </a>
              ) : null}
              {card.socialLinks ? (
                <div className="flex flex-wrap gap-3">
                  {card.socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.label}
                      href={socialLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-white/85 px-4 py-2 font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
                    >
                      {socialLink.label === 'Instagram' ? <Instagram size={16} /> : <Facebook size={16} />}
                      {socialLink.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </ContactCard>
          ))}
        </div>
      </div>
    </section>
  );
}
