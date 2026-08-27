import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ServicesPreview from '@/components/home/ServicesPreview';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import InstagramCta from '@/components/home/InstagramCta';
import CtaStrip from '@/components/home/CtaStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServicesPreview />
      <GalleryTeaser />
      <TestimonialsSection limit={3} />
      <InstagramCta />
      <CtaStrip />
    </>
  );
}
