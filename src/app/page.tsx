import HeroSection from "@/components/HeroSection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <HeroSection />
      <Footer />
    </main>
  );
}
