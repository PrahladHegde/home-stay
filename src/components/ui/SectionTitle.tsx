interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  color?: 'dark' | 'light';
}

export function SectionTitle({
  id,
  title,
  subtitle,
  alignment = 'center',
  color = 'dark',
}: SectionTitleProps) {
  const alignClass = alignment === 'left' ? 'text-left' : 'text-center';
  const titleColor = color === 'light' ? 'text-white' : 'text-brand-dark';
  const subColor = 'text-brand-beige';

  return (
    <div className={`mb-9 md:mb-12 ${alignClass}`}>
      {subtitle && (
        <span className={`mb-3 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] sm:text-[0.8125rem] ${subColor}`}>
          {subtitle}
        </span>
      )}
      <h2 id={id} className={`font-serif text-3xl sm:text-4xl md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-16 bg-brand-beige ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
