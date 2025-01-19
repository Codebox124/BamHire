"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {fromBottomToTop, fromLeftToRight, fromRightToLeft} from "@/components/animations"
export function AwardsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">

          <motion.div
           initial={fromLeftToRight.initial}
           whileInView={fromLeftToRight.whileInView}
           transition={fromLeftToRight.transitition}
           viewport={fromLeftToRight.viewPort}
          className="space-y-4">
            <h2 className="text-4xl text-[#0080ff] font-bold leading-tight lg:text-5xl">
              Achieving Excellence In Workforce Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              BAM Hire's commitment to delivering tailored, high-quality workforce solutions has earned it recognition as a leading innovator in the talent acquisition industry. Through strategic partnerships, cutting-edge technology, and a customer-first approach, BAM Hire continues to drive growth and success for businesses and job seekers globally. This dedication to excellence has solidified its position as a top-tier player in the evolving world of recruitment.
            </p>
          </motion.div>
          <motion.div 
            initial={fromRightToLeft.initial}
            whileInView={fromRightToLeft.whileInView}
            transition={fromRightToLeft.transitition}
            viewport={fromRightToLeft.viewPort}
          className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/home_achievment.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <section className="bg-[#f5f5f5] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-4">
              <motion.div
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={{...fromBottomToTop.transitition}}
            viewport={fromBottomToTop.viewPort}
              className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-[#0080ff]">20+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </motion.div>
              <motion.div 
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={{...fromBottomToTop.transitition, delay:0.05}}
            viewport={fromBottomToTop.viewPort}
              className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-[#0080ff]">3</h3>
                <p className="text-muted-foreground">Continents Worldwide</p>
              </motion.div>
              <motion.div
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={{...fromBottomToTop.transitition, delay:0.05*2}}
            viewport={fromBottomToTop.viewPort}
              className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-[#0080ff]">50+</h3>
                <p className="text-muted-foreground">Engaged fortune 500 Companies</p>
              </motion.div>
              <motion.div
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={{...fromBottomToTop.transitition, delay:0.05*3}}
            viewport={fromBottomToTop.viewPort}
              className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-[#0080ff]">10+</h3>
                <p className="text-muted-foreground">Industries
                </p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
}
