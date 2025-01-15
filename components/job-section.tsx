import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JobSection() {
  return (
    <section className="bg-gray-50 py-16 text-center lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl">
          Looking for work? Boom.
          <br />
          The right job changes everything.
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Break down barriers and find your next opportunity with Bamhire.
        </p>
        <Button
          asChild
          className="w-fit bg-[#a25f35] text-white hover:bg-[#ae7a52]"
        >
          <Link href="/jobs">FIND A JOB</Link>
        </Button>
      </div>
    </section>
  );
}
