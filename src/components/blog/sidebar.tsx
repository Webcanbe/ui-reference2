import RevealAnimation from '@/src/components/animation/reveal-animation';
import Categories from '@/src/components/blog/categories';
import PastRecords from '@/src/components/blog/past-records';
import RecentArticles from '@/src/components/blog/recent-articles';
import SearchBox from '@/src/components/blog/search-box';
import TrendingLabels from '@/src/components/blog/trending-labels';
import { GradientSvg } from '@/src/components/shared/icon';
import type { BlogCategory, BlogDateRecord, BlogPost } from '@/src/interface';

interface SidebarProps {
  posts?: BlogPost[];
  categories: BlogCategory[];
  dateRecords: BlogDateRecord[];
  currentCategory: string | null;
  currentSearch: string | null;
  currentDate: string | null;
}

const Sidebar = ({
  posts = [],
  categories,
  dateRecords,
  currentCategory,
  currentSearch,
  currentDate,
}: SidebarProps) => {
  return (
    <RevealAnimation delay={0.1}>
      <aside
        className="border-stroke-1/11 bg-background-6 relative w-full max-w-full space-y-[70px] rounded-lg border px-8 py-10.5 lg:max-w-[370px]"
        aria-label="Blog filters and recent articles"
      >
        {/* top gradient  */}
        <GradientSvg className="absolute top-0 left-1/2 z-0 -translate-x-1/2" />

        {/* search bar */}
        <SearchBox defaultValue={currentSearch ?? ''} />

        {/* categories */}
        <Categories
          items={categories}
          currentCategory={currentCategory}
          totalCount={posts.length}
        />

        {/* recent articles/blogs  */}
        <RecentArticles posts={posts} limit={3} />

        {/* trending label  */}
        <TrendingLabels items={categories} currentCategory={currentCategory} />

        {/* past records  */}
        <PastRecords records={dateRecords} currentDate={currentDate} totalCount={posts.length} />
      </aside>
    </RevealAnimation>
  );
};

export default Sidebar;
