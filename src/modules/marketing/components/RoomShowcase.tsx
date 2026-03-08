import { Button } from '../../../components/ui/Button';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { roomInventory, roomSectionContent } from '../data/content';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RoomShowcase = () => {
  const navigate = useNavigate();
  const featuredRooms = roomInventory.slice(0, 3);

  return (
    <section id="rooms" className="bg-white py-16 md:py-24" aria-labelledby="rooms-title">
      <div className="container mx-auto px-4 text-center sm:px-6">
        <SectionTitle
          id="rooms-title"
          title={roomSectionContent.title}
          subtitle={roomSectionContent.subtitle}
        />

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] md:gap-8">
          {featuredRooms.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 70, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 95, damping: 12, delay: index * 0.13 }}
              viewport={{ once: true, amount: 0.35 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-dark/10 bg-white text-left shadow-sm"
            >
              <div className="relative h-72 overflow-hidden sm:h-80 lg:h-96">
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* <div className="absolute left-3 top-3 rounded-full bg-brand-dark/90 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white sm:left-4 sm:top-4 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(room.pricePerNightInr)}{' '}
                  / Night
                </div> */}

                {/* {room.tags && room.tags.length > 0 ? (
                  <div className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[0.65rem] font-medium text-white backdrop-blur sm:right-4 sm:top-4 sm:text-xs">
                    {room.tags[0]}
                  </div>
                ) : null} */}
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <h3 className="font-serif text-xl text-brand-dark sm:text-2xl">{room.title}</h3>

                <div className="mt-4 flex-1">
                  <p className="text-sm text-brand-text">
                    {room.mainFeature ?? roomSectionContent.fallbackMainFeature}
                  </p>
                </div>

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
        { roomInventory.length > 3 ?
        <div className="mt-8 text-center">
          <Button variant="primary" className="px-6 py-3" onClick={() => navigate('/rooms')}>
            {roomSectionContent.viewAllRoomsLabel}
          </Button>
        </div>
          : <></>
        }
      </div>
    </section>
  );
};
