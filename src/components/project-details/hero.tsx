import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import type { ProjectPost } from '@/src/interface';
import Image from 'next/image';

interface ProjectDetailsHeroProps {
  project: ProjectPost;
}

const ProjectDetailsHero = ({ project }: ProjectDetailsHeroProps) => {
  return (
    <section className="bg-background-6 relative overflow-hidden pt-32 xl:pt-40 2xl:pt-50">
      <div className="main-container relative z-10">
        <div className="mb-20 text-center xl:mb-28">
          <TextReveal>
            <h1 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
              {project.title} <br className="block sm:hidden" />
              <span className="text-white/30">{project.titleItalic ?? ''}</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto mt-3 mb-14 max-w-xl font-normal text-white/60">
              {project.excerpt}
            </p>
          </TextReveal>
          <RevealAnimation delay={0.3}>
            <div className="text-center">
              <PrimaryLinkButton href="/pricing">Start your project</PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mt-24 h-[380px] overflow-hidden rounded-[10px] md:h-[450px] lg:h-[650px] 2xl:mt-39">
            <Image
              src={project.heroImage}
              alt="Project Details Hero"
              width={1200}
              height={600}
              className="size-full object-center"
            />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProjectDetailsHero;
