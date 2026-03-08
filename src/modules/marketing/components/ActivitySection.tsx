import { activityContent } from '../data/content';
import { motion } from 'framer-motion';

export function ActivitySection() {
  return (
    <section
      id="activities"
      className="relative py-20 md:py-28"
      aria-labelledby="activities-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${activityContent.backgroundImageUrl}')`,
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/65" />
      <motion.div
        initial={{ opacity: 0, y: 54, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 85, damping: 12 }}
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-beige/40 bg-brand-beige/15 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-beige" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-beige">
            Coming Soon
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          viewport={{ once: true }}
          id="activities-title"
          className="font-serif text-3xl sm:text-4xl md:text-5xl"
        >
          {activityContent.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 font-sans leading-relaxed text-white/85"
        >
          {activityContent.description}
        </motion.p>
      </motion.div>
    </section>
  );
}
