import BlogPagination from '@/src/components/blog/blog-pagination';
import LatestBlog from '@/src/components/blog/latest-blog';
import Sidebar from '@/src/components/blog/sidebar';
import type { BlogCategory, BlogDateRecord, BlogPost } from '@/src/interface';

interface BlogsWrapperProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
  totalPages: number;
  currentPage: number;
  categories: BlogCategory[];
  dateRecords: BlogDateRecord[];
  currentCategory: string | null;
  currentSearch: string | null;
  currentDate: string | null;
}

const BlogsWrapper = ({
  posts,
  allPosts,
  totalPages,
  currentPage,
  categories,
  dateRecords,
  currentCategory,
  currentSearch,
  currentDate,
}: BlogsWrapperProps) => {
  return (
    <section aria-label="Blog listing">
      <div className="main-container">
        <div className="flex flex-col-reverse items-start lg:flex-row lg:gap-x-10 xl:gap-x-14 2xl:gap-x-18">
          {/* sidebar  */}
          <Sidebar
            posts={allPosts}
            categories={categories}
            dateRecords={dateRecords}
            currentCategory={currentCategory}
            currentSearch={currentSearch}
            currentDate={currentDate}
          />

          {/* blog showcase  */}
          <div className="w-full flex-auto space-y-39 pb-28 lg:pb-39">
            {/* latest blog + pagination */}
            <div className="space-y-14">
              <LatestBlog posts={posts} />
              <BlogPagination
                totalPages={totalPages}
                currentPage={currentPage}
                currentCategory={currentCategory}
                currentSearch={currentSearch}
                currentDate={currentDate}
                pageParam="page"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsWrapper;
