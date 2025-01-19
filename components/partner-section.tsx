"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {fromBottomToTop, fromRightToLeft} from "@/components/animations"
export function PartnerSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.h2 
                    initial={fromBottomToTop.initial}
                    whileInView={fromBottomToTop.whileInView}
                    transition={fromBottomToTop.transitition}
                    viewport={fromBottomToTop.viewPort}
            className="text-4xl text-[#0080ff] font-bold leading-tight lg:text-5xl">
            Together, we unlock endless potential.
            </motion.h2>
            <motion.p 
                    initial={fromBottomToTop.initial}
                    whileInView={fromBottomToTop.whileInView}
                    transition={fromBottomToTop.transitition}
                    viewport={fromBottomToTop.viewPort}
            className="text-lg text-muted-foreground">
            At BAM Hire, we specialize in connecting employers with talented job-seekers by offering personalized solutions and global opportunities. Let us collaborate to help your business grow and thrive in today's dynamic workforce landscape. Reach out to us to see how we can assist you.
            </motion.p>
           <motion.span
             initial={fromBottomToTop.initial}
             whileInView={fromBottomToTop.whileInView}
             transition={fromBottomToTop.transitition}
             viewport={fromBottomToTop.viewPort}
           >
           <Button
              asChild
              className="w-fit bg-[#0080ff] text-white  hover:bg-blue-500"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
           </motion.span>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
           <motion.span
           initial={fromRightToLeft.initial}
           whileInView={fromRightToLeft.whileInView}
           transition={fromRightToLeft.transitition}
           viewport={fromRightToLeft.viewPort}
           >
           <Image
              src="/business1.jpg"
              alt="Professional on phone"
              fill
              className="object-cover"
            />
           </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
