import ServiceDetailsContent from '@/src/components/services-details/content';
import ServiceDetailsHero from '@/src/components/services-details/hero';
import CTA from '@/src/components/shared/cta';
import WhyChooseUs from '@/src/components/shared/why-choose-us';
import type { ServicePost } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const services = getMarkDownData<ServicePost>('src/data/services');
  return services?.map((s) => ({ slug: s?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const result = getMarkDownContent('src/data/services', slug);
    const title = (result?.data?.title as string) ?? 'Service';
    const description = (result?.data?.description as string) ?? undefined;
    return buildMetadata(`${title} - AI Solutions || Nexsas`, description, `/services/${slug}`);
  } catch {
    return buildMetadata('Service Details - AI Solutions | Nexsas', undefined, `/services/${slug}`);
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let result: { data: Record<string, unknown>; content: string } | null = null;
  try {
    const raw = getMarkDownContent('src/data/services', slug);
    result = { data: raw.data as Record<string, unknown>, content: raw.content };
  } catch {
    notFound();
  }

  const service = {
    ...result.data,
    slug,
    content: result.content,
  } as ServicePost;

  return (
    <>
      <ServiceDetailsHero service={service} />
      <ServiceDetailsContent service={service} />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default page;
