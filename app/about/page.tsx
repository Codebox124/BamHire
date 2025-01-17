import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe2, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-earth-to-sky px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Pioneering the Future of Work
              </h1>
              <p className="text-xl text-white/90">
                For over two decades, Bamhire has been at the forefront of
                workforce innovation, connecting talented individuals with
                opportunities that matter.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square">
              <Image
                src="/business1.jpg"
                alt="Office environment"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#a25f35] md:text-4xl">
            Our Core Values
          </h2>
          <div className="text-xl text-center mb-5">
            <h1>
              At BAM Hire, we pride ourselves on delivering a superior level of service, drawing on extensive sales and recruiting expertise combined with real-world delivery experience.
              This powerful blend enables us to vet candidates more thoroughly than industry competitors, ensuring we address our clients' most pressing challenges with top talent.

            </h1>
            <p>
              We're dedicated to helping people achieve success every day, providing our clients with trusted solutions and our consultants with fulfilling career paths.
              Founded on the simple idea of serving friends, our tight-knit team operates with integrity, collaboration, and a passion for producing exceptional results that genuinely impact lives and careers.


            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, setting the highest standards in the industry.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We believe in the power of working together to achieve extraordinary results.",
              },
              {
                icon: Globe2,
                title: "Global Reach",
                description:
                  "Our worldwide presence enables us to connect talent across borders.",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "We continuously evolve and adapt to meet the changing needs of the workforce.",
              },
            ].map((value) => (
              <Card key={value.title} className="border-none bg-gray-50">
                <CardContent className="pt-6">
                  <value.icon className="mb-4 h-8 w-8 text-[#a25f35]" />
                  <h3 className="mb-2 text-xl font-semibold text-[#a25f35]">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-[#f5f5f5] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#a25f35] md:text-4xl">
                Our History
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Founded in 2000, Bamhire has grown from a local staffing
                  agency to a global workforce solutions provider. Our journey
                  has been marked by continuous innovation and adaptation to
                  changing workforce needs.
                </p>
                <p className="text-muted-foreground">
                  Today, we operate in over 50 countries, connecting millions of
                  people to meaningful work opportunities while helping
                  organizations build their future workforce.
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
                  <h3 className="text-4xl font-bold text-[#a25f35]">50+</h3>
                  <p className="text-muted-foreground">Countries Worldwide</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a25f35]">1M+</h3>
                  <p className="text-muted-foreground">Lives Impacted</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a25f35]">10K+</h3>
                  <p className="text-muted-foreground">Client Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#a25f35] md:text-4xl">
            Our Leadership Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={`/business${i}.jpg`}
                      alt="Team member"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-[#a25f35]">
                    Executive Name {i}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Executive Position
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Brief description of the executive&apos;s role and
                    experience at Bamhire.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-earth-to-sky px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Join Our Growing Team
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Be part of a company that&apos;s shaping the future of work. Explore
            career opportunities at Bamhire.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white hover:text-[#a25f35]"
          >
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
