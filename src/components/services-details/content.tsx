'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import ContentImages from '@/src/components/services-details/content-images';
import Tool from '@/src/components/services-details/tool';
import type { ServicePost } from '@/src/interface';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface ServiceDetailsContentProps {
  service: ServicePost;
}

const ServiceDetailsContent = ({ service }: ServiceDetailsContentProps) => {
  const content = service.content ?? '';
  const whoHeading = "### Who it's for";
  const whoIndex = content.indexOf(whoHeading);
  const contentBeforeWho = whoIndex >= 0 ? content.slice(0, whoIndex).trim() : content;
  const contentWho = whoIndex >= 0 ? content.slice(whoIndex).trim() : '';

  return (
    <section className="overflow-hidden">
      <div className="main-container">
        <div className="flex items-start xl:flex-row xl:gap-x-14 2xl:gap-x-25">
          <RevealAnimation delay={0.1}>
            <div className="flex-auto">
              <div className="space-y-18">
                <div className="text-tagline-2 service-details-markdown space-y-8 font-normal text-white/60">
                  <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{contentBeforeWho}</ReactMarkdown>
                </div>

                {service.contentImages?.length ? (
                  <ContentImages images={service.contentImages} alt={`${service.title} details`} />
                ) : null}

                {contentWho ? (
                  <div className="service-details-markdown text-tagline-2 font-normal text-white/60">
                    <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{contentWho}</ReactMarkdown>
                  </div>
                ) : null}
              </div>
            </div>
          </RevealAnimation>
          {/*  aside sidebar */}
          <Tool />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;
