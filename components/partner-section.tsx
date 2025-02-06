"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { fromBottomToTop, fromRightToLeft } from "@/components/animations"
export function PartnerSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2

              className="text-4xl text-[#004589] font-bold leading-tight lg:text-5xl">
              Together, we unlock endless potential.
            </h2>
            <p

              className="text-lg text-muted-foreground">
              At BAM Hire, we specialize in connecting employers with talented job-seekers by offering personalized solutions and global opportunities. Let us collaborate to help your business grow and thrive in today's dynamic workforce landscape. Reach out to us to see how we can assist you.
            </p>
            <span

            >
              <Button
                asChild
                className="w-fit bg-[#004589] text-white mt-5 hover:bg-[#15293d]"
              >
                <Link href="/contact">CONTACT US</Link>
              </Button>
            </span>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <span

            >
              <Image
                src="/business1.jpg"
                alt="Professional on phone"
                fill
                className="object-cover"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
