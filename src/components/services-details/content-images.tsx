import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

interface ContentImagesProps {
  images: string[];
  alt?: string;
}

const ContentImages = ({ images, alt = 'Services details' }: ContentImagesProps) => {
  if (!images?.length) return null;
  const [img1, img2] = images;

  return (
    <div className="flex flex-col items-start gap-y-5 md:flex-row md:gap-x-8">
      {img1 && (
        <RevealAnimation delay={0.1} direction="left">
          <figure className="flex-1 overflow-hidden rounded-[10px]">
            <Image
              src={img1}
              alt={alt}
              width={600}
              height={400}
              className="size-full object-cover"
            />
          </figure>
        </RevealAnimation>
      )}
      {img2 && (
        <RevealAnimation delay={0.2} direction="right">
          <figure className="flex-1 overflow-hidden rounded-[10px]">
            <Image
              src={img2}
              alt={alt}
              width={600}
              height={400}
              className="size-full object-cover"
            />
          </figure>
        </RevealAnimation>
      )}
    </div>
  );
};

export default ContentImages;
