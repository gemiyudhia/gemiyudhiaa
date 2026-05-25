import ContactForm from "@/components/ContactForm";
import Footer from "@/components/ui/Footer";
import React from "react";

const ContactMePage = () => {
  return (
    <main className="w-full min-h-screen bg-[#F6F6EF] flex flex-col justify-between">
      <div className="w-full py-12 px-2 sm:px-4 lg:px-8">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
};

export default ContactMePage;
