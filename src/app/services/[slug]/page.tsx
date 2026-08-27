import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/services/ServicePage';
import { COMPANY } from '@/lib/data';
import { SERVICE_PAGES, getServiceBySlug } from '@/lib/services';

type ServiceParams = { slug: string };

export function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<ServiceParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Services | ${COMPANY.name}` };
  }

  return {
    title: `${service.title} | ${COMPANY.name}`,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<ServiceParams>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
