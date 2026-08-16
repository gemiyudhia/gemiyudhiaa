import Footer from "@/components/ui/Footer";
import WorkCard from "@/components/WorkCard";

const WorkPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <WorkCard />
      <Footer />
    </main>
  );
};

export default WorkPage;
