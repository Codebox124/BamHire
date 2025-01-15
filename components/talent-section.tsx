import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TalentSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src="/business3.jpg"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#a1a484] p-8 lg:p-16">
            <div className="mx-auto max-w-lg">
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-white">
                Transform your global talent strategy with BamOCG.
              </h2>
              <p className="mb-8 text-muted-foreground">
                Stay ahead of your most complex talent needs with BamOCG—a
                leading provider of global solutions for managed services,
                workforce outsourcing, and consulting.
              </p>
              <Button
                asChild
                className="w-fit bg-[#a25f35] text-white hover:bg-[#a25f35]"
              >
                <Link href="#">EXPLORE GLOBAL SOLUTIONS</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
