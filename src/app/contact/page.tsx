import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/ui/Footer';
import React from 'react'

const ContactMePage = () => {
  return (
    <>
      <div className="px-3">
        <Navbar />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default ContactMePage