'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

export interface DetailsMarkdownDataProps {
  /** Markdown body content (e.g. from team member .md file) */
  content: string;
}

const DetailsMarkdownData = ({ content }: DetailsMarkdownDataProps) => {
  if (!content?.trim()) return null;

  return (
    <section>
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="team-details-markdown">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{content}</ReactMarkdown>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DetailsMarkdownData;
