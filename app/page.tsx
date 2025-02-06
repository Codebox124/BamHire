"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsSection } from "@/components/news-section";
import { AwardsSection } from "@/components/awards-section";
import { PartnerSection } from "@/components/partner-section";
import { JobSection } from "@/components/job-section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fromBottomToTop } from "@/components/animations"
export default function Home() {
  const firstpartofheader = ["Y", "o", "u", "r", " ", "T", "a", "l", "e", "n", "t", "."]
  const secondpartofheader = [" ", "O", "u", "r", " ", "F", "o", "c", "u", "s", "."]
  const [showSecondPart, setShowSecondPart] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowSecondPart(true)
    }, 2000)
  }, [])
  return (
    <main className="pt-20">
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#001e3b] h-96 px-4 py-20 text-white md:px-5 md:py-20">
          <div className="mx-auto max-w-xl lg:w-[90%]">
            <h1 className="mb-6 text-3xl font-medium leading-tight lg:text-4xl">
              {firstpartofheader.map((item, index) => {
                return <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                    delay: 0.09 * index
                  }}
                >{item}</motion.span>
              })}
              {showSecondPart && secondpartofheader.map((item, index) => {
                return <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                    delay: 0.09 * index
                  }}
                >{item}</motion.span>
              })}
            </h1>

            <motion.span
              initial={fromBottomToTop.initial}
              whileInView={fromBottomToTop.whileInView}
              transition={fromBottomToTop.transitition}
              viewport={fromBottomToTop.viewPort}
            >
              <Button
                asChild
                variant="outline"
                className="w-fit bg-transparent text-[#004589] bg-white  "
              >
                <Link href="/jobs" className="group">
                  Explore jobs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.span>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src="/business3.jpg"
            alt="Professional at work"
            fill
            className="object-cover bg-[#f4f4f4]"
            priority
          />
        </div>
      </section>


      {/* Other sections */}
      <NewsSection />
      <AwardsSection />
      {/* <TalentSection /> */}
      <PartnerSection />
      <JobSection />
    </main>
  );
}
