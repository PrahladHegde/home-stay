import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Footer } from './components/Footer';
import { TopNav } from './components/TopNav';
import { roomInventory, roomSectionContent, roomsPageContent } from './data/content';

export function AllRoomsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <main className="min-h-screen bg-brand-light">
      <TopNav />

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 md:pb-16">
        <button
          type="button"
          onClick={() => navigate('/#rooms')}
          className="rounded-md border border-brand-dark/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
        >
          {roomsPageContent.backToHomeLabel}
        </button>

        <div className="mt-8">
          <SectionTitle
            title={roomsPageContent.title}
            subtitle={roomsPageContent.subtitle}
            alignment="left"
          />
          <p className="max-w-3xl text-brand-text">{roomsPageContent.description}</p>
        </div>

        <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {roomInventory.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 58, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 13, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.32 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm"
            >
              <div className="relative h-72">
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                {/* <div className="absolute left-3 top-3 rounded-full bg-brand-dark/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(room.pricePerNightInr)}{' '}
                  / Night
                </div> */}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl text-brand-dark">{room.title}</h3>
                <p className="mt-4 flex-1 text-sm text-brand-text">
                  {room.mainFeature ?? roomSectionContent.fallbackMainFeature}
                </p>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    className="px-4 py-2 text-xs"
                    onClick={() => navigate(`/rooms/${room.slug}`, { state: { fromRoomSection: true } })}
                  >
                    {roomSectionContent.viewDetailsLabel}
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
