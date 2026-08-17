import Link from 'next/link';
import { personalInfo } from '@/data/personal-info';

const HeroSection = () => {
  return (
    <section className="max-w-2xl min-h-[100dvh] flex flex-col justify-center mx-auto space-y-4">
      <h1 className="text-3xl sm:text-4xl font-mono font-medium tracking-tight text-ink leading-tight">
        {personalInfo.name}
      </h1>
      <div className="flex gap-2 pt-2 font-mono text-sm flex-col">
        {' '}
        <Link href="/about-me" className="text-moss link-underline">
          {' '}
          About Me →{' '}
        </Link>{' '}
        <Link href="/achievements" className="text-moss link-underline">
          {' '}
          Achievements →{' '}
        </Link>{' '}
        <Link href="/work" className="text-moss link-underline">
          {' '}
          Projects →{' '}
        </Link>{' '}
        <Link href="/til" className="text-moss link-underline">
          {' '}
          Today I Learned →{' '}
        </Link>{' '}
        <Link href="/contact-me" className="text-moss link-underline">
          {' '}
          Contact Me →{' '}
        </Link>{' '}
      </div>
    </section>
  );
};

export default HeroSection;
