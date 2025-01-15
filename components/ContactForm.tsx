"use client"
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser';
function ContactForm() {
  const form = useRef<any>(null);
  const [contactForm, setContactForm] = useState({ name: "", industry: "", email: "", contact: "", notes: "" })
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_crul3od', 'template_125y7cp', form.current, {
        publicKey: 'OjP361NdTqPPOtTSa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='p-[20px] md:p-[50px] flex-col md:flex-row flex  justify-between  bg-white'>
      <AnimatePresence>
        {showSuccessMessage && <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          exit={{ x: "-100vw" }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
          }}
          className='emailsuccess'>
          <p>Email Sent!</p>
        </motion.div>}
      </AnimatePresence>
      <motion.img
        initial={{
          x: -50,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        src="/contactform.jpg" alt="contactform" className='w-full md:w-[45%] object-cover mb-[20px]' />
      <motion.div
        initial={{
          x: 50,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        className='w-full md:w-1/2'>
        <h1 className='text-3xl'>Leave us a Message</h1>
        <p className='text-xl my-[20px]'>The Bam-Hire team is dedicated to helping you achieve your goals through our expertise in consulting, direct placement, staff augmentation, and contract-to-hire services. Reach out today, and let’s create tailored solutions that propel your business forward.</p>
        <form ref={form} onSubmit={(e) => { e.preventDefault(); setShowSuccessMessage(true); sendEmail(e); setTimeout(() => { setShowSuccessMessage(false) }, 3000); setContactForm({ name: "", industry: "", email: "", contact: "", notes: "" }) }} className='flex flex-col items-start w-full'>
          <input value={contactForm.name} onChange={(e) => { setContactForm({ ...contactForm, name: e.target.value }) }} className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="text" placeholder='Company Name' name='company_name' />
          <input value={contactForm.industry} onChange={(e) => { setContactForm({ ...contactForm, industry: e.target.value }) }} className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="text" placeholder='Industry' name='industry' />
          <input value={contactForm.email} onChange={(e) => { setContactForm({ ...contactForm, email: e.target.value }) }} className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="email" placeholder='Email' name='email' />
          <input value={contactForm.contact} onChange={(e) => { setContactForm({ ...contactForm, contact: e.target.value }) }} className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="text" placeholder='HR Contact Info' name='hr_contact' />
          <textarea value={contactForm.notes} onChange={(e) => { setContactForm({ ...contactForm, notes: e.target.value }) }} className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' name="notes" id="notes" placeholder='Notes' />
          <button className='bg-[#00283c] text-white p-[15px] rounded-[5px]'>Submit</button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactForm