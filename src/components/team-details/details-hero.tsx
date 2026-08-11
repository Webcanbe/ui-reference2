'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons, type SocialLink } from '@/src/components/shared/social-icons';
import Image from 'next/image';

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
];

/** Matches team member frontmatter from src/data/team/*.md */
export interface TeamMemberHero {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
  href?: string;
  /** Optional extended bio (defaults to description) */
  bio?: string;
  /** Optional role/tagline (defaults to description) */
  role?: string;
  contactPhones?: string[];
  email?: string;
  videoUrl?: string;
  socialLinks?: SocialLink[];
}

export interface DetailsHeroProps {
  member: TeamMemberHero;
}

const DetailsHero = ({ member }: DetailsHeroProps) => {
  const name = member.title;
  const role = member.role ?? member.description;
  const bio = member.bio ?? member.description;
  const contactPhones = member.contactPhones ?? [];
  const email = member.email;
  const socialLinks = member.socialLinks ?? DEFAULT_SOCIAL_LINKS;
  const hasContact = contactPhones.length > 0 || !!email || (socialLinks?.length ?? 0) > 0;

  return (
    <section className="pt-28 md:pt-39">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[850px] space-y-4">
          {/* hero img */}
          <RevealAnimation delay={0.1} instant>
            <div className="relative mx-auto flex h-[360px] w-full items-end overflow-hidden rounded-xl px-8 py-[42px] md:h-[500px] xl:h-[750px]">
              <Image
                src={member.imageSrc}
                alt={member.imageAlt ?? name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 850px"
                priority
              />
            </div>
          </RevealAnimation>

          {/* content */}
          <RevealAnimation delay={0.2}>
            <div
              className="border-stroke-3/18 relative w-full max-w-full overflow-hidden rounded-xl border p-6 lg:p-[42px]"
              aria-labelledby="details-hero-name"
            >
              {/* bottom gradient */}
              <RevealAnimation delay={0.6}>
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[250px] w-[120%] -translate-x-1/2 select-none sm:w-[90%]"
                  style={{
                    background:
                      'radial-gradient(40.06% 40% at 50% 100%, rgba(255, 89, 252, 0.28) 0%, rgba(141, 89, 255, 0) 100%)',
                  }}
                />
              </RevealAnimation>

              {/* bottom line */}
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-px w-[70%] -translate-x-1/2 select-none"
                style={{
                  background:
                    'radial-gradient(circle at center, white 0%, rgba(255,255,255,0) 100%)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center justify-between gap-x-4 gap-y-6 md:flex-row md:gap-y-0">
                <div
                  className={`border-stroke-3/18 space-y-4 border-b pb-4 md:border-r md:border-b-0 md:pb-0 ${hasContact ? 'md:basis-1/2' : 'w-full'}`}
                >
                  <div className="space-y-1">
                    <RevealAnimation delay={0.3}>
                      <p className="font-inter-tight text-tagline-3 font-normal text-white/50">
                        {role}
                      </p>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">
                        {name}
                      </h2>
                    </RevealAnimation>
                  </div>
                  <RevealAnimation delay={0.5}>
                    <p className="font-inter-tight text-tagline-3 mr-5 font-normal text-white/60 lg:mr-0">
                      {bio}
                    </p>
                  </RevealAnimation>
                </div>

                {hasContact && (
                  <div className="w-full space-y-5.5 md:basis-1/2">
                    <div className="space-y-2">
                      <RevealAnimation delay={0.4}>
                        <h2 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">
                          Contact information
                        </h2>
                      </RevealAnimation>
                      <RevealAnimation delay={0.5}>
                        <div className="font-inter-tight text-tagline-3 space-y-1 font-normal text-white/60">
                          {contactPhones.length > 0 &&
                            contactPhones.map((phone) => (
                              <span key={phone} className="block">
                                {phone}
                              </span>
                            ))}
                          {email && (
                            <a
                              href={`mailto:${email}`}
                              className="block transition-colors hover:text-white/90"
                            >
                              {email}
                            </a>
                          )}
                        </div>
                      </RevealAnimation>
                    </div>
                    {socialLinks.length > 0 && (
                      <RevealAnimation delay={0.6}>
                        <SocialIcons links={socialLinks} iconClassName="text-white/60" />
                      </RevealAnimation>
                    )}
                  </div>
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DetailsHero;
