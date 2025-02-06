"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe2, Target } from "lucide-react";
import { motion } from "framer-motion";
import { fromLeftToRight, fromRightToLeft, fromBottomToTop } from "@/components/animations"
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#001e3b] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={fromLeftToRight.initial}
              whileInView={fromLeftToRight.whileInView}
              transition={fromLeftToRight.transitition}
              viewport={fromLeftToRight.viewPort}
              className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Pioneering the Future of Work
              </h1>
              <p className="text-xl text-white/90">
                For over two decades, BAM Hire has been at the forefront of
                workforce innovation, connecting talented individuals with
                opportunities that matter.
              </p>
            </motion.div>
            <motion.div
              initial={fromRightToLeft.initial}
              whileInView={fromRightToLeft.whileInView}
              transition={fromRightToLeft.transitition}
              viewport={fromRightToLeft.viewPort}
              className="relative aspect-video lg:aspect-square">
              <Image
                src="/business1.jpg"
                alt="Office environment"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={fromBottomToTop.transitition}
            viewport={fromBottomToTop.viewPort}
            className="mb-12 text-center text-3xl font-bold text-[#004589] md:text-4xl">
            Our Core Values
          </motion.h2>
          <motion.div
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={fromBottomToTop.transitition}
            viewport={fromBottomToTop.viewPort}
            className="text-xl text-black text-center mb-20">
            <h1>
              At BAM Hire, we pride ourselves on delivering a superior level of service, drawing on extensive sales and recruiting expertise combined with real-world delivery experience.
              This powerful blend enables us to vet candidates more thoroughly than industry competitors, ensuring we address our clients' most pressing challenges with top talent.

            </h1>
            <p>
              We're dedicated to helping people achieve success every day, providing our clients with trusted solutions and our consultants with fulfilling career paths.
              Founded on the simple idea of serving friends, our tight-knit team operates with integrity, collaboration, and a passion for producing exceptional results that genuinely impact lives and careers.


            </p>
          </motion.div>

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
                title: "Transparency",
                description:
                  "We believe in open, honest communication, fostering trust with our clients and candidates through every step of the hiring process.",
              },
              {
                icon: Globe2,
                title: "Authenticity",
                description:
                  "Staying true to who we are, we build genuine relationships that reflect our commitment to serving others with integrity.",
              },
              {
                icon: Target,
                title: "Resilience",
                description:
                  "Driven by a passion to make a difference, we face challenges head-on, adapting and persevering to create lasting success for those we serve.",
              },
            ].map((value, index) => (
              <motion.div
                initial={fromBottomToTop.initial}
                whileInView={fromBottomToTop.whileInView}
                transition={{ ...fromBottomToTop.transitition, delay: 0.05 * index }}
                viewport={fromBottomToTop.viewPort}
                key={value.title}
                className="h-full"
              >
                <Card className="border-none bg-gray-50 h-full flex flex-col">
                  <CardContent className="pt-6 flex flex-col items-start h-full">
                    <value.icon className="mb-4 h-8 w-8 text-[#004589]" />
                    <h3 className="mb-2 text-xl font-semibold text-[#004589]">{value.title}</h3>
                    <p className="text-muted-foreground flex-grow">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* History Section */}
      <section className="bg-[#f5f5f5] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={fromLeftToRight.initial}
              whileInView={fromLeftToRight.whileInView}
              transition={fromLeftToRight.transitition}
              viewport={fromLeftToRight.viewPort}
              className="space-y-6">
              <h2 className="text-3xl font-bold text-[#004589] md:text-4xl">
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
                className="bg-[#004589] hover:bg-blue-500 text-white "
              >
                <Link href="/contact">Connect With Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={fromRightToLeft.initial}
              whileInView={fromRightToLeft.whileInView}
              transition={fromRightToLeft.transitition}
              viewport={fromRightToLeft.viewPort}
              className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#004589]">20+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#004589]">3</h3>
                  <p className="text-muted-foreground">Continents</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#004589]">50+</h3>
                  <p className="text-muted-foreground">Engaged fortune 500 Companies</p>
                </div>
                <div className="space-y-2 rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-4xl font-bold text-[#004589]">10+</h3>
                  <p className="text-muted-foreground">Industries
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#004589] md:text-4xl">
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
                  <h3 className="mb-1 text-lg font-semibold text-[#004589]">
                    Executive Name {i}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Executive Position
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Brief description of the executive&apos;s role and
                    experience at BAM Hire.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-[#004589] px-4 py-16 text-white md:py-24">
        <motion.div
          initial={fromBottomToTop.initial}
          whileInView={fromBottomToTop.whileInView}
          transition={fromBottomToTop.transitition}
          viewport={fromBottomToTop.viewPort}
          className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Join Our Growing Team
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Be part of a company that&apos;s shaping the future of work. Explore
            career opportunities at BAM Hire.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-white hover:bg-white hover:text-[#004589]"
          >
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
