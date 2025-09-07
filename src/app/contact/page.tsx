import ContactForm from '@/components/ContactForm'
import Footer from '@/components/ui/Footer';
import React from 'react'

const ContactMePage = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default ContactMePage