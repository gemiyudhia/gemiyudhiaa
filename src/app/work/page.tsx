import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import WorkCard from "@/components/WorkCard";

const WorkPage = () => {
  return (
    <>
      <div className="px-3">
        <Navbar />
       <WorkCard />
      </div>

      <Footer />
    </>
  );
};

export default WorkPage;
