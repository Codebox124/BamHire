import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function AwardsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">

          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Achieving Excellence In Workforce Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              BAM Hire's commitment to delivering tailored, high-quality workforce solutions has earned it recognition as a leading innovator in the talent acquisition industry. Through strategic partnerships, cutting-edge technology, and a customer-first approach, BAM Hire continues to drive growth and success for businesses and job seekers globally. This dedication to excellence has solidified its position as a top-tier player in the evolving world of recruitment.
            </p>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/home_achievment.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#f5f5f5] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#a25f35] md:text-4xl">
                Our History
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  With over 20 years of experience, Bamhire has evolved from a local staffing agency into a global leader in workforce solutions. Our journey has been defined by constant innovation and adaptability to the ever-changing needs of the workforce.
                </p>
                <p className="text-muted-foreground">
                  Today, we operate in more than 50 countries, connecting millions of individuals with meaningful job opportunities while supporting organizations in shaping their future workforce.
                </p>
              </div>
              <Button
                asChild
                className="bg-[#a25f35] text-white hover:bg-[#9e7a52]"
              >
                <Link href="/contact">Connect With Us</Link>
              </Button>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a25f35]">20+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a25f35]">3+</h3>
                  <p className="text-muted-foreground">Continents Worldwide</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a25f35]">50+</h3>
                  <p className="text-muted-foreground">Engaged fortune 500 Companies</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a25f35]">10+</h3>
                  <p className="text-muted-foreground">Industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
