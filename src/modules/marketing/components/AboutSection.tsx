import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { aboutContent } from '../data/content';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-brand-light" aria-labelledby="about-title">
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 110, damping: 14 }}
        viewport={{ once: true, amount: 0.24 }}
        className="container mx-auto mt-12 px-6"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <SectionTitle
              id="about-title"
              title={aboutContent.sectionTitle}
              subtitle={aboutContent.sectionSubtitle}
              alignment="left"
            />
            <p className="text-brand-text leading-relaxed mb-6 font-sans">
              {aboutContent.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutContent.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 130, damping: 12 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-brand-dark font-serif text-xl"
                >
                  <span className="text-brand-beige text-4xl mr-2">{stat.value}</span>
                  <br />
                  <span className="text-sm uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 42, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 13 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 relative"
          >
            <img 
              src={aboutContent.imageUrl}
              alt={aboutContent.imageAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto shadow-lg"
            />
            <div className="absolute -top-10 -right-10 bg-brand-beige p-8 text-white text-center shadow-lg hidden md:block">
              <span className="text-5xl font-serif font-bold">{aboutContent.userRating.value}</span>
              <div className="flex justify-center my-2">
                {Array.from({ length: aboutContent.userRating.stars }).map((_, index) => (
                  <Star key={index} size={14} fill="white" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest">{aboutContent.userRating.label}</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
