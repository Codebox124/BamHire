import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Globe, BarChart, Shield, Clock } from "lucide-react";

export default function AdvantagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#a1a484] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                The Bamhire Advantage
              </h1>
              <p className="text-xl text-[#a1a484]">
                Discover why leading companies choose Bamhire for their
                workforce solutions. Our innovative approach and global reach
                set us apart.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square">
              <Image
                src="/business4.jpg"
                alt="Professional team meeting"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Our Solutions
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Strategic Workforce Planning",
                description:
                  "Develop comprehensive workforce strategies aligned with your business objectives.",
              },
              {
                icon: Users,
                title: "Talent Acquisition",
                description:
                  "Access top talent through our advanced recruitment processes and global network.",
              },
              {
                icon: Globe,
                title: "Global Mobility",
                description:
                  "Seamlessly manage international workforce deployment and compliance.",
              },
              {
                icon: BarChart,
                title: "Workforce Analytics",
                description:
                  "Make data-driven decisions with our advanced analytics and insights.",
              },
              {
                icon: Shield,
                title: "Compliance Management",
                description:
                  "Stay compliant with local and international workforce regulations.",
              },
              {
                icon: Clock,
                title: "Flexible Staffing",
                description:
                  "Adapt your workforce to changing business needs with our flexible solutions.",
              },
            ].map((solution) => (
              <Card key={solution.title}>
                <CardContent className="pt-6">
                  <solution.icon className="mb-4 h-8 w-8 text-[#a1a484]" />
                  <h3 className="mb-2 text-xl font-semibold">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video">
                  <Image
                    src="/business2.jpg"
                    alt={`Case study ${i}`}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Client Success Story {i}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    How we helped our client overcome their workforce challenges
                    and achieve their business goals.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-[#a1a484] hover:text-[#a1a484]"
                  >
                    <Link href="#">Read Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Client Testimonials
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-gray-50">
                <CardContent className="p-8">
                  <blockquote className="space-y-4">
                    <p className="text-lg text-muted-foreground">
                      &quot;Bamhire has transformed how we approach talent
                      acquisition. Their innovative solutions and global reach
                      have helped us build high-performing teams across multiple
                      regions.&quot;
                    </p>
                    <footer>
                      <div className="font-semibold">Client Name</div>
                      <div className="text-sm text-muted-foreground">
                        Position, Company
                      </div>
                    </footer>
                  </blockquote>
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
            Ready to Experience the Bamhire Advantage?
          </h2>
          <p className="mb-8 text-lg text-[#a1a484]">
            Let&apos;s discuss how our solutions can help you achieve your
            workforce goals.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white hover:text-[#a1a484]"
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
