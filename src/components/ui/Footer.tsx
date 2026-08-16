"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "GitHub", href: "https://github.com/gemiyudhia" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gemiyudhia" },
  { label: "Instagram", href: "https://instagram.com/yuudhia" },
];

const Footer = () => {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-hairline">
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs text-graphite">
        <span>© {year} Gemi Yudhia</span>
        <div className="flex items-center gap-x-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
