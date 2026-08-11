'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import BeforeAfter from '@/src/components/project-details/before-after';
import DetailsSidebar from '@/src/components/project-details/details-sidebar';
import TestimonialBlock from '@/src/components/project-details/testimonial-block';
import type { ProjectPost } from '@/src/interface';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface ProjectDetailsContentProps {
  project: ProjectPost;
}

const ProjectDetailsContent = ({ project }: ProjectDetailsContentProps) => {
  const content = project.content ?? '';
  const techHeading = '### Technologies Used';
  const techIndex = content.indexOf(techHeading);
  const contentBeforeTech = techIndex >= 0 ? content.slice(0, techIndex).trim() : content;
  const contentTechAndAfter = techIndex >= 0 ? content.slice(techIndex).trim() : '';

  return (
    <section className="overflow-hidden pt-[70px] pb-39">
      <div className="main-container">
        <div className="flex flex-col items-start justify-between gap-y-14 overflow-hidden xl:flex-row xl:gap-x-14 2xl:gap-x-25">
          <div className="flex-auto space-y-[70px]">
            <RevealAnimation delay={0.1}>
              <div className="text-tagline-2 project-details-markdown space-y-6 font-normal text-white/60">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{contentBeforeTech}</ReactMarkdown>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div>
                <BeforeAfter before={project.before} after={project.after} />
              </div>
            </RevealAnimation>

            {contentTechAndAfter ? (
              <RevealAnimation delay={0.3}>
                <div className="project-details-markdown text-tagline-2 font-normal text-white/60">
                  <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                    {contentTechAndAfter}
                  </ReactMarkdown>
                </div>
              </RevealAnimation>
            ) : null}

            <RevealAnimation delay={0.4}>
              <div>
                <TestimonialBlock testimonial={project.testimonial} />
              </div>
            </RevealAnimation>

            {project.closingParagraph ? (
              <RevealAnimation delay={0.5}>
                <p className="text-tagline-2 font-normal text-white/60">
                  {project.closingParagraph}
                </p>
              </RevealAnimation>
            ) : null}
          </div>

          <RevealAnimation delay={0.2} offset={100} direction="right">
            <div className="w-full max-w-full xl:max-w-[390px]">
              <DetailsSidebar details={project.details} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsContent;
