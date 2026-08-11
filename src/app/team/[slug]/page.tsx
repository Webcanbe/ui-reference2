import DetailsHero from '@/src/components/team-details/details-hero';
import DetailsMarkdownData from '@/src/components/team-details/details-markdown-data';
import type { TeamMemberHero } from '@/src/components/team-details/details-hero';
import CTA from '@/src/components/shared/cta';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

/** Shape returned by getMarkDownData for team .md files; satisfies MarkdownData. */
interface TeamMemberData {
  slug: string;
  content: string;
  imageSrc?: string;
  title?: string;
  [key: string]: unknown;
}

export async function generateStaticParams() {
  const data = getMarkDownData<TeamMemberData>('src/data/team');
  const members = data.filter((m) => m.imageSrc);
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const result = getMarkDownContent('src/data/team', slug);
    const title = (result?.data?.title as string) ?? 'Team member';
    const description = (result?.data?.description as string) ?? undefined;
    return buildMetadata(
      `${title} - Team || Nexsas`,
      description,
      `/team-details/${slug}`
    );
  } catch {
    return buildMetadata(
      'Team Details - AI Solutions || Nexsas',
      undefined,
      `/team-details/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let result: { data: Record<string, unknown>; content: string } | null = null;
  try {
    const raw = getMarkDownContent('src/data/team', slug);
    result = { data: raw.data as Record<string, unknown>, content: raw.content };
  } catch {
    notFound();
  }

  const member = { ...result.data } as unknown as TeamMemberHero;

  return (
    <>
      <DetailsHero member={member} />
      <DetailsMarkdownData content={result.content} />
      <CTA />
    </>
  );
};

export default page;
