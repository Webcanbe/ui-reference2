import type { ProjectTestimonial } from '@/src/interface';
import Image from 'next/image';

interface TestimonialBlockProps {
  testimonial: ProjectTestimonial;
  gradientImage?: string;
}

const TestimonialBlock = ({
  testimonial,
  gradientImage = '/images/gradient/opai-34.png',
}: TestimonialBlockProps) => {
  return (
    <div>
      <h2 className="lg:text-sora-heading-5 text-sora-heading-6 mb-6 font-normal text-white">
        Client Feedback:
      </h2>
      <div className="relative min-h-[238px] overflow-hidden rounded-lg p-8">
        <figure className="absolute inset-0 size-full">
          <Image
            src={gradientImage}
            alt=""
            fill
            className="object-cover"
          />
        </figure>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <figure className="size-12 overflow-hidden rounded-full">
              <Image
                src={testimonial.avatar}
                alt={testimonial.authorName}
                width={48}
                height={48}
                className="size-full object-cover"
              />
            </figure>
            <div className="text-center">
              <p className="text-is-heading-6 font-normal text-white">{testimonial.authorName}</p>
              <p className="text-tagline-3 font-normal text-white/60">{testimonial.authorRole}</p>
            </div>
          </div>
          <blockquote className="text-tagline-2 mx-auto max-w-2xl text-center font-normal text-white/90">
            {testimonial.quote} -
            {testimonial.authorCompany && (
              <span className="text-it-heading-6 font-normal text-white/90">
                {' '}{testimonial.authorCompany}
              </span>
            )}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBlock;
