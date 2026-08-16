import Footer from "@/components/ui/Footer";
import { achievementsData } from "@/data/achievements";

const AchievementsPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        <h1 className="font-mono text-sm uppercase tracking-wider text-graphite mb-10">
          Achievements
        </h1>

        <ul className="divide-y divide-hairline border-t border-b border-hairline">
          {achievementsData.map((item) => (
            <li
              key={item.title}
              className="py-5 flex items-baseline justify-between gap-x-6"
            >
              <div>
                <p className="text-sm sm:text-base text-ink">{item.title}</p>
                <p className="text-sm text-graphite mt-0.5">{item.issuer}</p>
              </div>
              <span className="font-mono text-xs text-graphite shrink-0">
                {item.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
};

export default AchievementsPage;
