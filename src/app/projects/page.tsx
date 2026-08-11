import ProjectsHero from '@/src/components/projects/hero';
import ProjectsGrid from '@/src/components/projects/projects-grid';
import CTA from '@/src/components/shared/cta';
import WhyChooseUs from '@/src/components/shared/why-choose-us';
import type { ProjectPost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

const PROJECTS_PER_PAGE = 8;

export const metadata: Metadata = {
  title: 'Projects - AI Solutions || Nexsas',
  description: 'See how our AI solutions have helped businesses succeed.',
};

interface ProjectsPageProps {
  searchParams: Promise<{ page?: string | string[] }>;
}

const page = async ({ searchParams }: ProjectsPageProps) => {
  const params = await searchParams;
  const allProjects = getMarkDownData<ProjectPost>('src/data/projects');
  const totalPages = Math.max(1, Math.ceil(allProjects.length / PROJECTS_PER_PAGE));
  const pageParam = params?.page;
  let pageNum = 1;
  if (typeof pageParam === 'string') {
    pageNum = Number.parseInt(pageParam, 10);
  } else if (Array.isArray(pageParam) && pageParam[0] !== undefined) {
    pageNum = Number.parseInt(String(pageParam[0]), 10);
  }
  const currentPage = Math.min(totalPages, Math.max(1, Number.isFinite(pageNum) ? pageNum : 1));
  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const projects = allProjects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={projects} totalPages={totalPages} currentPage={currentPage} />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default page;
