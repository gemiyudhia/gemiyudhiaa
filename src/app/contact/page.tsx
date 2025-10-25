import ContactForm from "@/components/ContactForm";
import Footer from "@/components/ui/Footer";
import React from "react";

const ContactMePage = () => {
  return (
    <>
      <div className="md:container md:mx-auto md:px-3">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default ContactMePage;
