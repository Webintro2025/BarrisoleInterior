"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';
import Maps from '@/components/Maps';
import ContactBanner from '@/components/ContactBanner';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      
      <ContactBanner />
      <GetInTouch />
      <Maps />
     
    </div>
  );
};

export default ContactPage;
