import RevealAnimation from '@/src/components/animation/reveal-animation';
import { PaginationNextIcon, PaginationPrevIcon } from '@/src/components/shared/icon';
import { PaginationItem } from '@/src/components/shared/ui/pagination/pagination-item';
import { PaginationWrapper } from '@/src/components/shared/ui/pagination/pagination-wrapper';
import type { ProjectPost } from '@/src/interface';
import Image from 'next/image';
import Link from 'next/link';

function buildProjectPageUrl(page: number): string {
  if (page <= 1) return '/projects';
  return `/projects?page=${page}`;
}

interface ProjectsGridProps {
  projects: ProjectPost[];
  totalPages: number;
  currentPage: number;
}

const ProjectsGrid = ({ projects, totalPages, currentPage }: ProjectsGridProps) => {
  const prevUrl = currentPage > 1 ? buildProjectPageUrl(currentPage - 1) : undefined;
  const nextUrl = currentPage < totalPages ? buildProjectPageUrl(currentPage + 1) : undefined;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="overflow-hidden py-24 xl:py-32 2xl:py-39">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-8 *:col-span-12 md:gap-x-8 md:*:col-span-6 lg:[&>*:nth-child(4n+1)]:col-span-5 lg:[&>*:nth-child(4n+2)]:col-span-7 lg:[&>*:nth-child(4n+3)]:col-span-7 lg:[&>*:nth-child(4n+4)]:col-span-5">
          {projects.map((project, index) => (
            <RevealAnimation key={project.slug} delay={0.4 + index * 0.1}>
              <div className="w-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="border-stroke-1/11 group block overflow-hidden rounded-md border"
                >
                  <figure className="h-[350px] w-full overflow-hidden rounded-t-md transition-all duration-500 ease-in-out group-hover:scale-105 md:h-100 lg:h-125">
                    <Image
                      src={project.heroImage as string}
                      alt={project.title}
                      width={1260}
                      height={500}
                      className="size-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                    />
                  </figure>
                  <div className="space-y-1 px-10.5 py-8 text-center">
                    <h3 className="text-sora-heading-6 lg:text-sora-heading-5 line-clamp-1 font-normal text-white/90">
                      {project.title}
                    </h3>
                    <p className="text-tagline-2 mx-auto line-clamp-2 w-full max-w-[416px] font-normal text-white/50">
                      {project.excerpt}
                    </p>
                  </div>
                </Link>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {totalPages > 1 && (
          <RevealAnimation delay={0.1}>
            <div className="mt-14 flex justify-center">
              <PaginationWrapper>
                <PaginationItem href={prevUrl} disabled={currentPage <= 1}>
                  <PaginationPrevIcon />
                </PaginationItem>
                {pages.map((page) => (
                  <PaginationItem
                    key={page}
                    href={buildProjectPageUrl(page)}
                    active={page === currentPage}
                  >
                    {page}
                  </PaginationItem>
                ))}
                <PaginationItem href={nextUrl} disabled={currentPage >= totalPages}>
                  <PaginationNextIcon />
                </PaginationItem>
              </PaginationWrapper>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
