import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe2, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#a1a484] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Pioneering the Future of Work
              </h1>
              <p className="text-xl text-white">
                For over two decades, Bamhire has been at the forefront of
                workforce innovation, connecting talented individuals with
                opportunities that matter.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square">
              <Image
                src="/business3.jpg"
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
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Core Values
          </h2>
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
                  <value.icon className="mb-4 h-8 w-8 text-[#a1a484]" />
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Our History</h2>
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
                className="bg-[#a1a484] text-white hover:bg-[#a1a484] hover:text-white"
              >
                <Link href="/contact">Connect With Us</Link>
              </Button>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a1a484]">20+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a1a484]">50+</h3>
                  <p className="text-muted-foreground">Countries Worldwide</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a1a484]">1M+</h3>
                  <p className="text-muted-foreground">Lives Impacted</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#a1a484]">10K+</h3>
                  <p className="text-muted-foreground">Client Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Leadership Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/business1.jpg"
                      alt="Team member"
                      width={300}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Executive Name {i}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Executive Position
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    a excepturi ipsa laudantium ea expedita quod soluta iusto
                    sunt odio.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#a1a484] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Join Our Growing Team
          </h2>
          <p className="mb-8 text-lg text-white">
            Be part of a company that&apos;s shaping the future of work. Explore
            career opportunities at Bamhire.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white hover:text-[#a1a484]"
          >
            <Link href="/jobs">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
