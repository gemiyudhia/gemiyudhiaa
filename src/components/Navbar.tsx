'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { href: '/about-me', label: 'About' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/work', label: 'Projects' },
  { href: '/til', label: 'TIL' },
];

const Navbar = () => {
  const pathname = usePathname();

  const isLinkActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="w-full bg-paper/95 backdrop-blur border-b border-hairline">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-center font-mono">
        <nav className="flex items-center gap-x-4 justify-center md:gap-x-10">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] md:text-sm link-underline pb-0.5 ${
                  active ? 'text-moss' : 'text-graphite hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

      </div>

    </header>
  );
};

export default Navbar;
