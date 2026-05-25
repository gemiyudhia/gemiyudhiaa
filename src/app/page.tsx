import HeroSectionSection from "@/components/HeroSection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-neo-yellow flex flex-col justify-between">
      <HeroSectionSection />
      <Footer />
    </main>
  );
}
