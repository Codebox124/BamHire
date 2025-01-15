"use client"

import React from 'react'
import { motion } from 'framer-motion'
function GeneralInfo() {
  return (
    <div className='text-center bg-[#4d758f] text-white p-[20px] md:p-[50px]'>
      <motion.h1
        initial={{
          x: 100,
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
        className='text-3xl'>General Information</motion.h1>
      <motion.p
        initial={{
          x: 100,
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
        className='text-xl my-[20px]'>Whether you're an employer seeking top talent or a professional looking for your next opportunity, we encourage you to reach out – we’re here to help you succeed!</motion.p>
      <motion.div
        initial={{
          y: 10,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        className='justify-center flex items-center'>
        <div className='mr-[20px]'>
          <p>Email</p>
          <p>recruiting@bamhire.com</p>
        </div>
        <div>
          <p>Phone:</p>
          <p>(708) 790-1398</p>
        </div>
      </motion.div>
    </div>
  )
}

export default GeneralInfo