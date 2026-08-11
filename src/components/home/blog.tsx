import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import { BlogCard } from '@/src/components/shared/ui/card/blog-card';
import type { BlogPost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';

const Blog = () => {
  const posts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');
  const displayPosts = posts.slice(0, 3);

  if (displayPosts.length === 0) return null;

  return (
    <section className="bg-background-6 py-10 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-8 md:space-y-14">
        <div className="space-y-4 text-center max-md:pb-4">
          <TextReveal>
            <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal text-white/90 max-md:leading-[110%]">
              Insights, tips, and trends <span className="text-white/30">from Nexsas</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-xl text-white/60">
              Practical insights and real-world tips to help you make the most of AI in your
              business.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-12 gap-x-5 gap-y-[70px] 2xl:gap-x-8">
          {displayPosts.map((post, index) => (
            <RevealAnimation key={post.slug} delay={0.1 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <BlogCard
                  title={post.title}
                  href={`/blog/${post.slug}`}
                  imageSrc={post.thumbnail}
                  imageAlt={post.title}
                  date={post.publishDate}
                  readTime={post.readTime}
                  tags={post.tags ?? []}
                />
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.1}>
          <div className="flex justify-center max-md:mt-3">
            <PrimaryLinkButton href="/blog">View all articles</PrimaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
