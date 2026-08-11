import ProjectDetailsContent from '@/src/components/project-details/content';
import ProjectDetailsHero from '@/src/components/project-details/hero';
import type { ProjectPost } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = getMarkDownData<ProjectPost>('src/data/projects');
  return projects?.map((p) => ({ slug: p?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const result = getMarkDownContent('src/data/projects', slug);
    const title = (result?.data?.title as string) ?? 'Project';
    const description = (result?.data?.excerpt as string) ?? undefined;
    return buildMetadata(`${title} - AI Solutions || Nexsas`, description, `/projects/${slug}`);
  } catch {
    return buildMetadata(
      'Project Details - AI Solutions || Nexsas',
      undefined,
      `/projects/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let result: { data: Record<string, unknown>; content: string } | null = null;
  try {
    const raw = getMarkDownContent('src/data/projects', slug);
    result = { data: raw.data as Record<string, unknown>, content: raw.content };
  } catch {
    notFound();
  }

  const project = {
    ...result.data,
    slug,
    content: result.content,
  } as ProjectPost;

  return (
    <>
      <ProjectDetailsHero project={project} />
      <ProjectDetailsContent project={project} />
    </>
  );
};

export default page;
