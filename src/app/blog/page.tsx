import BlogsWrapper from '@/src/components/blog/blogs-wrapper';
import Hero from '@/src/components/blog/hero';
import CTA from '@/src/components/shared/cta';
import type { BlogPost } from '@/src/interface';
import {
  filterPosts,
  getCategoriesFromPosts,
  getCurrentPage,
  getDateRecordsFromPosts,
  getFilterFromParams,
  getTotalPages,
  paginatePosts,
} from '@/src/utils/blogFilters';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - AI Solutions || Nexsas',
  description: 'Insights, tips, and trends from Nexsas on AI and business.',
};

interface BlogPageProps {
  searchParams: Promise<{
    category?: string | string[];
    search?: string | string[];
    date?: string | string[];
    page?: string | string[];
  }>;
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams;
  const allPosts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');
  const { type: filterType, value: filterValue } = getFilterFromParams(params);
  const filtered = filterPosts(allPosts, filterType, filterValue);
  const totalPages = getTotalPages(filtered.length);
  const currentPage = getCurrentPage(params.page);
  const pageToUse = Math.max(1, Math.min(currentPage, totalPages));
  const posts = paginatePosts(filtered, pageToUse);

  const categories = getCategoriesFromPosts(allPosts);
  const dateRecords = getDateRecordsFromPosts(allPosts);

  return (
    <>
      <Hero />
      <BlogsWrapper
        posts={posts}
        allPosts={allPosts}
        totalPages={totalPages}
        currentPage={pageToUse}
        categories={categories}
        dateRecords={dateRecords}
        currentCategory={filterType === 'category' ? filterValue : null}
        currentSearch={filterType === 'search' ? filterValue : null}
        currentDate={filterType === 'date' ? filterValue : null}
      />
      <CTA />
    </>
  );
};

export default BlogPage;
