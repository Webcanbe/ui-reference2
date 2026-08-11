import type { BlogPost } from '@/src/interface';

const POSTS_PER_PAGE = 6;
const POPULAR_PER_PAGE = 4;

export type BlogFilterType = 'category' | 'search' | 'date' | null;

export function getCategoriesFromPosts(posts: BlogPost[]): { label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const tags = post.tags ?? [];
    for (const tag of tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

/** Unique months from publishDate (YYYY-MM) with post counts */
export function getDateRecordsFromPosts(
  posts: BlogPost[]
): { date: string; displayDate: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const month = post.publishDate?.slice(0, 7);
    if (!month) continue;
    counts.set(month, (counts.get(month) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([date, count]) => ({
      date,
      displayDate: new Date(date + '-01').toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      }),
      count,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function filterPosts(
  posts: BlogPost[],
  filterType: BlogFilterType,
  filterValue: string | null
): BlogPost[] {
  if (!filterValue?.trim()) return posts;
  switch (filterType) {
    case 'category':
      return posts.filter((p) => (p.tags ?? []).includes(filterValue.trim()));
    case 'search': {
      const q = filterValue.trim().toLowerCase();
      return posts.filter(
        (p) =>
          (p.title ?? '').toLowerCase().includes(q) ||
          (p.description ?? '').toLowerCase().includes(q) ||
          (typeof p.content === 'string' && p.content.toLowerCase().includes(q))
      );
    }
    case 'date':
      return posts.filter((p) => p.publishDate?.slice(0, 7) === filterValue.trim());
    default:
      return posts;
  }
}

export function getFilterFromParams(params: {
  category?: string | string[];
  search?: string | string[];
  date?: string | string[];
}): { type: BlogFilterType; value: string | null } {
  const category = typeof params.category === 'string' ? params.category : params.category?.[0];
  const search = typeof params.search === 'string' ? params.search : params.search?.[0];
  const date = typeof params.date === 'string' ? params.date : params.date?.[0];
  if (category?.trim()) return { type: 'category', value: category.trim() };
  if (search?.trim()) return { type: 'search', value: search.trim() };
  if (date?.trim()) return { type: 'date', value: date.trim() };
  return { type: null, value: null };
}

export function paginatePosts(posts: BlogPost[], page: number): BlogPost[] {
  const p = Math.max(1, Math.min(page, getTotalPages(posts.length)));
  const start = (p - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}

export function getTotalPages(totalCount: number): number {
  return Math.max(1, Math.ceil(totalCount / POSTS_PER_PAGE));
}

export function getCurrentPage(pageParam: string | string[] | undefined): number {
  const p = typeof pageParam === 'string' ? pageParam : pageParam?.[0];
  const n = Number.parseInt(p ?? '1', 10);
  return Number.isFinite(n) && n >= 1 ? n : 1;
}

export function getTotalPagesWithSize(totalCount: number, pageSize: number): number {
  return Math.max(1, Math.ceil(totalCount / pageSize));
}

export function paginateWithPageSize<T>(items: T[], page: number, pageSize: number): T[] {
  const totalPages = getTotalPagesWithSize(items.length, pageSize);
  const p = Math.max(1, Math.min(page, totalPages));
  const start = (p - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function getPopularPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((p) => p.popular === true);
}

export { POSTS_PER_PAGE, POPULAR_PER_PAGE };
