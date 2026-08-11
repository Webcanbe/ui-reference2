import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/src/interface';

interface RecentArticlesProps {
  posts?: BlogPost[];
  limit?: number;
}

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

const RecentArticles = ({ posts = [], limit = 3 }: RecentArticlesProps) => {
  const recent = posts.slice(0, limit);
  if (recent.length === 0) return null;

  return (
    <div>
      <p className="lg:text-sora-heading-5 text-sora-heading-6 mb-6 font-normal text-white/90">
        Recent articles
      </p>
      <div className="space-y-4">
        {recent.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="border-stroke-3/25 group flex items-center gap-x-3.5 rounded-md border pr-0.5"
            >
              <figure className="h-[90px] w-[110px] shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={110}
                  height={90}
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
              </figure>
              <div className="space-y-1">
                <p className="text-tagline-3 line-clamp-2 font-normal text-white/80">
                  {post.title}
                </p>
                <p className="text-tagline-4 font-normal text-white/50">
                  {formatDate(post.publishDate)}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
