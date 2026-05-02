import { permanentRedirect } from 'next/navigation';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export default async function EngineeringCaseStudy({ params }: RouteParams) {
  const { slug } = await params;
  permanentRedirect(`/work/${slug}`);
}
