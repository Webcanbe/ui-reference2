import { PaginationNextIcon, PaginationPrevIcon } from '@/src/components/shared/icon';
import { PaginationItem } from '@/src/components/shared/ui/pagination/pagination-item';
import { PaginationWrapper } from '@/src/components/shared/ui/pagination/pagination-wrapper';

export type BlogPaginationPageParam = 'page' | 'popularPage';

function buildPageUrl(
  page: number,
  currentCategory: string | null,
  currentSearch: string | null,
  currentDate: string | null,
  pageParam: BlogPaginationPageParam
): string {
  const params = new URLSearchParams();
  if (currentCategory) params.set('category', currentCategory);
  else if (currentSearch) params.set('search', currentSearch);
  else if (currentDate) params.set('date', currentDate);
  if (page > 1) params.set(pageParam, String(page));
  const q = params.toString();
  return q ? `/blog?${q}` : '/blog';
}

export interface BlogPaginationProps {
  totalPages: number;
  currentPage: number;
  currentCategory: string | null;
  currentSearch: string | null;
  currentDate: string | null;
  pageParam?: BlogPaginationPageParam;
}

const BlogPagination = ({
  totalPages,
  currentPage,
  currentCategory,
  currentSearch,
  currentDate,
  pageParam = 'page',
}: BlogPaginationProps) => {
  if (totalPages <= 1) return null;

  const prevUrl = buildPageUrl(
    currentPage - 1,
    currentCategory,
    currentSearch,
    currentDate,
    pageParam
  );
  const nextUrl = buildPageUrl(
    currentPage + 1,
    currentCategory,
    currentSearch,
    currentDate,
    pageParam
  );

  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const end = Math.min(totalPages, start + maxVisible - 1);
  if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <PaginationWrapper>
      <PaginationItem href={currentPage > 1 ? prevUrl : undefined} disabled={currentPage <= 1}>
        <PaginationPrevIcon />
      </PaginationItem>

      {pages.map((page) => (
        <PaginationItem
          key={page}
          href={buildPageUrl(page, currentCategory, currentSearch, currentDate, pageParam)}
          active={page === currentPage}
        >
          {page}
        </PaginationItem>
      ))}

      <PaginationItem
        href={currentPage < totalPages ? nextUrl : undefined}
        disabled={currentPage >= totalPages}
      >
        <PaginationNextIcon />
      </PaginationItem>
    </PaginationWrapper>
  );
};

export default BlogPagination;
