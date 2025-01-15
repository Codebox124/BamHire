"use client"
import ContactForm from '@/components/ContactForm'
import ContactHeader from '@/components/ContactHeader'
import GeneralInfo from '@/components/GeneralInfo'
import React from 'react'


function page() {
  return (
    <div>
        <ContactHeader />
        <GeneralInfo />
        <ContactForm />
    </div>
  )
}

export default page