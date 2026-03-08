import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { bookingFormUrl, hallContent } from '../data/content';

export function HallSection() {
  return (
    <section id={hallContent.sectionId} className="bg-gradient-to-b from-brand-light via-white to-brand-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Decorative separator */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-brand-beige" />
          <div className="h-2 w-2 rotate-45 bg-brand-beige" />
          <div className="h-px w-16 bg-brand-beige" />
        </div>

        <SectionTitle
          title={hallContent.title}
          subtitle={hallContent.eyebrow}
          alignment="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-brand-text leading-relaxed">
              {hallContent.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={hallContent.ctaLink}
                className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:bg-brand-beige hover:text-brand-dark hover:shadow-xl"
              >
                {hallContent.ctaLabel}
                <ArrowRight size={16} />
              </Link>
              <a
                href={bookingFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border-2 border-brand-dark bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark transition-all hover:bg-brand-dark hover:text-white"
              >
                {hallContent.bookingCtaLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent z-10" />
            <img
              src={hallContent.imageUrl}
              alt={hallContent.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Bottom decorative separator */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-brand-beige" />
          <div className="h-2 w-2 rotate-45 bg-brand-beige" />
          <div className="h-px w-16 bg-brand-beige" />
        </div>
      </div>
    </section>
  );
}
