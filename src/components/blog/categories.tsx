import Link from 'next/link';

interface CategoryItem {
  label: string;
  count: number;
}

interface CategoriesProps {
  items: CategoryItem[];
  currentCategory: string | null;
  totalCount?: number;
}

const Categories = ({ items, currentCategory, totalCount = 0 }: CategoriesProps) => {
  return (
    <div>
      <p className="lg:text-sora-heading-5 text-sora-heading-6 mb-6 font-normal text-white/90">
        Categories
      </p>
      <ul>
        <li>
          <Link
            href="/blog"
            className="hover:bg-background-7 hover:text-background-13 flex items-center justify-between rounded-md p-2 text-white/60 transition-all duration-500 data-active:text-white/90"
            data-active={currentCategory === null ? '' : undefined}
          >
            <span>All</span>
            <span>({Number.isFinite(totalCount) ? totalCount : 0})</span>
          </Link>
        </li>
        {items.map(({ label, count }) => (
          <li key={label}>
            <Link
              href={currentCategory === label ? '/blog' : `/blog?category=${encodeURIComponent(label)}`}
              className="hover:bg-background-7 hover:text-background-13 flex items-center justify-between rounded-md p-2 text-white/60 transition-all duration-500"
            >
              <span>{label}</span>
              <span>({Number.isFinite(count) ? count : 0})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
