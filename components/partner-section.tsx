import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PartnerSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Looking for a reliable partner to drive success? Together, we unlock endless potential. 
            </h2>
            <p className="text-lg text-muted-foreground">
            At BAM hire, we specialize in connecting job seekers with employers by offering personalized solutions and global opportunities. Let us collaborate to help your business grow and thrive in todays dynamic workforce landscape. Reach out to see how we can assist you.
            </p>
            <Button
              asChild
              className="w-fit bg-[#a25f35] text-white hover:bg-[#ae7a52]"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/business1.jpg"
              alt="Professional on phone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
