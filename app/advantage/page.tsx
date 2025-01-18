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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                The BAM Hire Magic
              </h1>
              <p className="text-xl ">
                Learn what makes us experts in matching great opportunities with skilled professionals and companies.
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

      {/* Staffing & Recruiting Solutions Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Staffing & Recruiting Solutions
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Direct Placement",
                description: "Find the perfect match for your organization with our direct placement services, ensuring long-term success."
              },
              {
                title: "Staff Augmentation",
                description: "Scale your workforce with skilled professionals to meet your short-term or project-based needs."
              },
              {
                title: "Contract to Hire",
                description: "Evaluate potential hires through contract roles before making long-term commitments."
              },
            ].map((solution) => (
              <Card key={solution.title}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting and Advisory Services Section */}
      <section className="px-4  md:py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Consulting and Advisory Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Industry-Specific Consulting",
                description:
                  "Tailored solutions for industries like IT, healthcare, and more. This includes management consulting, strategy consulting, and specialized services to address unique business challenges."
              },
              {
                title: "Strategic Workforce Planning",
                description:
                  "Helping organizations optimize their workforce through talent acquisition strategies, workforce analytics, and future-ready planning to meet dynamic business needs."
              },
              {
                title: "Operational Excellence",
                description:
                  "Enhancing business efficiency through process redesign, technology integration, and operational excellence initiatives. This includes advisory on streamlining workflows, implementing new tools, and achieving measurable outcomes."
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
            Ready to Experience the BAM Hire Magic?
          </h2>
          <p className="mb-8 text-lg text-[#a1a484]">
            Let&apos;s discuss how our solutions can help you achieve your workforce goals.
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
