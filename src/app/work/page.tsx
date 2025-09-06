import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import WorkCard from "@/components/WorkCard";

const WorkPage = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <WorkCard />
      </div>

      <Footer />
    </>
  );
};

export default WorkPage;
