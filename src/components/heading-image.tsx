interface HeadingImageProps {
  src: string;
  srcWebp?: string;
  alt: string;
  className?: string;
}

export default function HeadingImage({
  src,
  srcWebp,
  alt,
  className = 'w-full h-48 object-cover rounded-xl',
}: HeadingImageProps) {
  return (
    <picture>
      {srcWebp && <source srcSet={srcWebp} type="image/webp" />}
      <img src={src} alt={alt} className={className} loading="lazy" />
    </picture>
  );
}
