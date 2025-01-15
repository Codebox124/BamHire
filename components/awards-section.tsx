import Image from "next/image";

export function AwardsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/business4.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Named one of the world&apos;s best companies—with good reason.
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence and innovation has earned us
              recognition as a global leader in workforce solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
