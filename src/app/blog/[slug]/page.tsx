import BlogDetailsContent from '@/src/components/blog-details/blog-details-content';
import RelatedBlog from '@/src/components/blog-details/related-blog';
import CTA from '@/src/components/shared/cta';
import type { BlogPost } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getMarkDownData<BlogPost>('src/data/blog');
  return posts?.map((post) => ({ slug: post?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = getMarkDownContent('src/data/blog', slug);
    const title = (blog?.data?.title as string) ?? 'Blog';
    const description = (blog?.data?.description as string) ?? undefined;
    return buildMetadata(`${title} - AI Solutions || Nexsas`, description, `/blog/${slug}`);
  } catch {
    return buildMetadata('Blog Details - AI Solutions || Nexsas', undefined, `/blog/${slug}`);
  }
}

const BlogSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let blog: { data: Record<string, unknown>; content: string } | null = null;
  try {
    const result = getMarkDownContent('src/data/blog', slug);
    blog = { data: result.data as Record<string, unknown>, content: result.content };
  } catch {
    notFound();
  }

  const allPosts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');

  return (
    <main className="bg-background-6">
      <BlogDetailsContent blog={blog} />
      <RelatedBlog posts={allPosts} currentSlug={slug} />
      <CTA />
    </main>
  );
};

export default BlogSlugPage;
