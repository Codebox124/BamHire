import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  ArrowRight,
  Search,
  Check,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JobsPage() {
  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "Technology",
    },
    {
      title: "Marketing Manager",
      location: "New York, NY",
      type: "Full-time",
      category: "Marketing",
    },
    {
      title: "Data Analyst",
      location: "Chicago, IL",
      type: "Contract",
      category: "Analytics",
    },
    {
      title: "UX Designer",
      location: "Remote",
      type: "Full-time",
      category: "Design",
    },
    {
      title: "Sales Representative",
      location: "Los Angeles, CA",
      type: "Full-time",
      category: "Sales",
    },
    {
      title: "Customer Support Specialist",
      location: "Austin, TX",
      type: "Part-time",
      category: "Customer Service",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#a25f35] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Find Your Next Career Opportunity
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white">
              Explore thousands of job openings with all the information you
              need. Its your future.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <form className="flex flex-col gap-4 md:flex-row">
              <div className="flex-grow">
                <Label htmlFor="search" className="sr-only">
                  Search jobs
                </Label>
                <Input
                  id="search"
                  placeholder="Job title, keywords, or company"
                  className="h-12 w-full bg-white/50 text-black"
                />
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="location" className="sr-only">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Location"
                  className="h-12 w-full bg-white/50 text-black"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 bg-white text-black hover:bg-[#a1a484]/90"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Featured Job Openings
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#a1a484] text-white"
                    >
                      {job.type}
                    </Badge>
                    <Badge variant="outline">{job.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Job
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/all-jobs">
                View All Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Explore Job Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["Technology", "Healthcare", "Finance", "Administration"].map(
              (category, index) => (
                <Card
                  key={index}
                  className="text-center hover:bg-[#82b8c2] hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <Briefcase className="mx-auto mb-4 h-12 w-12 text-[#63a1c4]" />
                    <h3 className="text-lg font-semibold">{category}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Explore jobs in {category}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Why Work With Bamhire?
              </h2>
              <p className="text-lg text-muted-foreground">
                At Bamhire, we&apos;re committed to connecting talented
                individuals with opportunities that matter. Here&apos;s why you
                should choose us for your next career move:
              </p>
              <ul className="space-y-4">
                {[
                  "Access to exclusive job opportunities",
                  "Personalized career guidance",
                  "Skill development and training programs",
                  "Competitive compensation and benefits",
                  "Global network of top employers",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link href="/about">Learn More About Bamhire</Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto">
              <Image
                src="/business2.jpg"
                alt="Happy professionals working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Seeker Resources Section */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Job Seeker Resources
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Resume Writing Tips",
                description:
                  "Learn how to craft a standout resume that gets you noticed by top employers.",
                icon: FileText,
              },
              {
                title: "Interview Preparation",
                description:
                  "Ace your interviews with our comprehensive guide to common questions and best practices.",
                icon: Users,
              },
              {
                title: "Career Development",
                description:
                  "Explore resources to help you grow your skills and advance your career.",
                icon: TrendingUp,
              },
            ].map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <resource.icon className="mb-4 h-12 w-12 text-[#63a1c4]" />
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {resource.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-[#63a1c4]">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#a25f35] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Take the Next Step in Your Career?
          </h2>
          <p className="mb-8 text-lg text-white">
            Join thousands of professionals who have found their dream jobs
            through Bamhire. Let&apos;s start your journey to a fulfilling
            career today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-[#a25f35] hover:bg-green-50"
            >
              <Link href="/register">Create an Account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#a1a484] hover:bg-[#ae7a52]"
            >
              <Link href="/all-jobs">Browse All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
