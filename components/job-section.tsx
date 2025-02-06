"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { fromBottomToTop } from "@/components/animations"
export function JobSection() {
  return (
    <section className="bg-gray-50 py-16 text-center lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2

          className="mb-4 text-4xl text-[#004589] font-bold leading-tight lg:text-5xl">
          Looking for work? BAM!
          <br />
          The right job changes everything.
        </h2>
        <p

          className="mb-8 text-lg text-muted-foreground">
          Break down barriers and find your next opportunity with BAM Hire.
        </p>
        <span

        >
          <Button
            asChild
            className="w-fit bg-[#004589] text-white hover:bg-[#15293d]"
          >
            <Link href="/jobs">FIND A JOB</Link>
          </Button>
        </span>
      </div>
    </section>
  );
}
