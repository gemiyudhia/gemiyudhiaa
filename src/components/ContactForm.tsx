'use client';

import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/personal-info';

const socials = [
  { label: 'GitHub', href: personalInfo.github },
  { label: 'LinkedIn', href: personalInfo.linkedin },
  { label: 'Instagram', href: personalInfo.instagram },
];

const ContactForm = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="font-mono text-sm uppercase tracking-wider text-graphite mb-6">
        Contact
      </h1>
      <p className="text-base text-ink/90 leading-relaxed max-w-xl mb-10">
        Ada project, kolaborasi, atau sekadar mau ngobrol?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="order-1 sm:order-2 flex sm:flex-col gap-x-6 gap-y-3 font-mono text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-graphite hover:text-ink flex items-center gap-x-1 w-fit"
            >
              {s.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
