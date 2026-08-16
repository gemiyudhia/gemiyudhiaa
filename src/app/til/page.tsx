import Footer from '@/components/ui/Footer';
import { tilData } from '@/data/til';

const TilPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <h1 className="font-mono text-sm uppercase tracking-wider text-graphite mb-3">
          TIL
        </h1>
        <p className="text-sm text-graphite mb-10 max-w-xl">
          Today I Learned — catatan singkat setiap kali nemu hal baru soal
          coding, tools, atau apa pun yang worth diingat.
        </p>

        <ul className="divide-y divide-hairline border-t border-b border-hairline">
          {tilData.map((entry) => (
            <li key={entry.title} className="py-6">
              <div className="flex items-center gap-x-3 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-wide text-moss bg-moss-soft px-2 py-0.5">
                  {entry.tag}
                </span>
              </div>
              <h2 className="text-base sm:text-lg text-ink mb-1">
                {entry.title}
              </h2>
              <p className="text-sm text-graphite leading-relaxed max-w-xl">
                {entry.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
};

export default TilPage;
