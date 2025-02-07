"use client";

import { useState } from "react";
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
import { JobApplicationModal } from "@/components/job-application-modal";
import { jobs } from "@/lib/data";


export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredJobs = jobs.filter((job) => job.featured);
  const regularJobs = jobs.filter((job) => !job.featured);
  const [expandedJobs, setExpandedJobs] = useState<{ [key: string]: boolean }>({});

  const handleApply = (jobTitle: string, jobId: string) => {
    setSelectedJob(jobTitle);
    setSelectedJobId(jobId);
  };
  const toggleJobDescription = (jobId: string) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };


  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const renderJobCard = (job: (typeof jobs)[0]) => (
    <Card key={job.id} className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#004589]">{job.title}</CardTitle>
          {job.featured && (
            <Badge className="bg-[#004589] text-white">Featured</Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {job.location}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge  className="bg-[#004589] text-white">
            {job.type}
          </Badge>
          <Badge className="bg-black text-white" variant="outline">{job.category}</Badge>
        </div>

        {/* Job Description */}
        <p className="mb-4 text-muted-foreground">
          {expandedJobs[job.id] ? job.description : `${job.description.slice(0, 200)}...`}
        </p>

        {/* Additional Info */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#004589]">Key Responsibilities:</h4>
            <ul className="ml-4 list-disc text-sm text-muted-foreground">
              {job.responsibilities.slice(0, 3).map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#004589]">Required Qualifications:</h4>
            <ul className="ml-4 list-disc text-sm text-muted-foreground">
              {job.qualifications.slice(0, 3).map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
          {job.compensation && (
            <div>
              <h4 className="font-semibold text-[#004589]">Compensation:</h4>
              <div className="text-sm text-muted-foreground">
                {job.compensation.salary && (
                  <p>Salary: {job.compensation.salary}</p>
                )}
                {job.compensation.dailyMinimum && (
                  <p>Daily Minimum: {job.compensation.dailyMinimum}</p>
                )}
                {job.compensation.relocationBonus && (
                  <p>Relocation Bonus: {job.compensation.relocationBonus}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1 border-[#001e3b] text-[#001e3b] hover:bg-[#001e3b] hover:text-white"
          onClick={() => setSelectedJob(job.title)}
        >
          Apply Now
        </Button>

        {/* Toggle Full Description */}
        <Button
          variant="outline"
          className="flex-1 border-[#001e3b] text-[#001e3b] hover:bg-[#001e3b] hover:text-white"
          onClick={() => toggleJobDescription(job.id)}
        >
          {expandedJobs[job.id] ? "Show Less" : "Learn More"}
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001e3b] px-4 py-16 text-white md:py-24">
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
                  className="h-12 w-full bg-white text-black"
                />
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="location" className="sr-only">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Location"
                  className="h-12 w-full bg-white text-black"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 bg-white text-black hover:bg-[#15293d] hover:text-white"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="px-4 text-[#004589]  py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Featured Job Openings
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredJobs.map(renderJobCard)}
          </div>
        </div>
      </section>

      {/* All Jobs Section */}
      <section className="bg-gray-50 text-[#004589] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            All Available Positions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regularJobs.map(renderJobCard)}
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-[#004589] text-center text-3xl font-bold md:text-4xl">
            Explore Job Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Technology",
              "Healthcare",
              "Finance",
              "Marketing",
              "Sales",
              "Customer Service",
              "Human Resources",
              "Administration",
            ].map((category, index) => (
              <Card
                key={index}
                className="text-center border-black hover:bg-[#82b8e2]/10 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <Briefcase className="mx-auto mb-4 h-12 w-12 text-black" />
                  <h3 className="text-lg font-semibold text-black">{category}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Explore jobs in {category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl text-[#004589] font-bold md:text-4xl">
                Why Work With BAM Hire?
              </h2>
              <p className="text-lg text-muted-foreground">
                At BAM Hire, we&apos;re committed to connecting talented
                individuals with opportunities that matter. Here&apos;s why you
                should choose us for your next career move:
              </p>
              <ul className="space-y-4 text-[#001e3b]">
                {[
                  "Access to exclusive job opportunities",
                  "Personalized career guidance",
                  "Skill development and training programs",
                  "Competitive compensation and benefits",
                  "Global network of top employers",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="rounded-full bg-[#82b8e2]/20 p-1">
                      <Check className="h-5 w-5 text-[#82b8e2]" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-[#001e3b] text-white hover:bg-[#9e7a52]"
              >
                <Link href="/about">Learn More About BAM Hire</Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto">
              <Image
                src="/home_achievment.jpg"
                alt="Happy professionals working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <JobApplicationModal
        isOpen={!!selectedJob}
        onClose={handleCloseModal}
        jobTitle={selectedJob || ""}
        jobId={selectedJobId || ""}
      />
    </main>
  );
}
