import { ImageOff } from 'lucide-react';
import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import type { ImageAsset } from '../../modules/marketing/types';

interface ResponsiveImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
  /** Missing or failing images render a placeholder instead of breaking the page. */
  image?: ImageAsset;
  alt: string;
  sizes: string;
  priority?: boolean;
}

export function ResponsiveImage({
  image,
  alt,
  sizes,
  priority = false,
  className = '',
  style,
  ...rest
}: ResponsiveImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (!image || failedSrc === image.src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden bg-brand-dark/10 text-brand-text/60`}
      >
        <ImageOff size={24} aria-hidden="true" />
        <span className="text-xs">Photo unavailable</span>
      </div>
    );
  }

  const srcSet = image.widths.map((w) => `${image.src}-${w}.webp ${w}w`).join(', ');
  const fallbackWidth = image.widths.includes(1024) ? 1024 : image.width;

  return (
    <img
      {...rest}
      className={className}
      src={`${image.src}-${fallbackWidth}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setFailedSrc(image.src)}
      style={{
        backgroundImage: `url(${image.blur})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    />
  );
}
