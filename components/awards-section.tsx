import Image from "next/image";

export function AwardsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/home_achievment.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
             Achieving Excellence In Workforce Solution
            </h2>
            <p className="text-lg text-muted-foreground">
            BAM hire’s commitment to delivering tailored, high-quality workforce solutions has earned it recognition as a leading innovator in the talent acquisition industry. Through strategic partnerships, cutting-edge technology, and a customer-first approach, BAM hire continues to drive growth and success for businesses and job seekers globally. This dedication to excellence has solidified its position as a top-tier player in the evolving world of recruitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
