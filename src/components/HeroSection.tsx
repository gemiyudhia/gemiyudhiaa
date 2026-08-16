import Link from 'next/link';
import { personalInfo, focusAreas } from '@/data/personal-info';

const HeroSection = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-mono font-medium tracking-tight text-ink leading-tight space-y-6">
        {personalInfo.name}
      </h1>
    </section>
  );
};

export default HeroSection;
