import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#a1a484] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              News & Insights
            </h1>
            <p className="text-xl text-white/90">
              Stay informed with the latest workforce trends, industry insights,
              and company updates from BAM hire.
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="insights" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="press">Press Releases</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#82b8e2] text-white">
                    Insight
                  </Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    Navigating the Future of Talent Acquisition in a Digital
                    World
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    As the workforce landscape shifts, BAM hire continues to
                    lead the way in innovative talent acquisition strategies.
                    With the rapid advancement of AI and automation, businesses
                    face both challenges and opportunities in their recruitment
                    processes.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    In this latest insight, BAM hire delves into how technology
                    is reshaping hiring practices and explores the importance of
                    blending cutting-edge tools with a human touch to ensure
                    businesses find the right fit for their teams.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    By staying ahead of trends and adapting to changes, BAM hire
                    provides expert guidance on how organizations can thrive in
                    the evolving world of work.
                  </p>
                  <p className="text-[#a25f35] font-semibold">
                    Stay tuned to BAM hire&apos;s insights section for ongoing
                    analysis of industry trends, hiring best practices, and
                    expert advice on shaping the future of your workforce.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="press">
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#a25f35] text-white">
                    Press Release
                  </Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    BAM hire Revolutionizes Talent Acquisition Landscape
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire, a leading workforce solutions provider, is
                    revolutionizing the talent acquisition landscape by offering
                    businesses and professionals alike access to transformative
                    opportunities. With a focus on connecting companies with
                    top-tier talent and empowering individuals to find
                    fulfilling careers, BAM hire bridges the gap between skill
                    and demand.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    With a diverse range of services, BAM hire specializes in
                    both temporary and permanent staffing solutions, tailored to
                    meet the unique needs of businesses across multiple
                    industries. The company&apos;s global reach and advanced
                    technology allow them to tap into a wide pool of talent,
                    ensuring clients find candidates who are not only qualified
                    but also aligned with their organizational culture.
                  </p>
                  <blockquote className="border-l-4 border-[#a1a484] pl-4 italic mb-4">
                    &quot;We understand the ever-evolving dynamics of the
                    workforce,&quot; say Azam, Bogdan, and Mike, co-founders of
                    BAM hire. &quot;Our mission is to connect businesses with
                    the best talent, enabling growth and innovation while
                    providing job seekers with opportunities that truly enhance
                    their careers.&quot;
                  </blockquote>
                  <p className="mb-4 text-muted-foreground">
                    By leveraging innovative recruitment strategies, BAM hire
                    ensures a seamless hiring experience. Their team of
                    experienced professionals works closely with clients to
                    understand their specific needs, allowing them to provide
                    customized workforce solutions. Whether businesses are
                    looking for highly specialized professionals or need to fill
                    large-scale temporary roles, BAM hire has the expertise to
                    deliver.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    For job seekers, BAM hire offers a range of tools and
                    support to help them navigate the job market. From resume
                    building to interview preparation, the company is dedicated
                    to ensuring candidates are not just prepared but also
                    confident as they embark on their new career journeys.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire is committed to fostering an inclusive work
                    environment where diverse talent can thrive. The company
                    values innovation, collaboration, and personal growth,
                    striving to build long-term relationships with both clients
                    and candidates.
                  </p>
                  <p className="text-[#a25f35] font-semibold">
                    As the world of work continues to evolve, BAM hire remains
                    at the forefront, providing unparalleled workforce solutions
                    that drive success for both businesses and individuals. With
                    a focus on creating meaningful connections, BAM hire is
                    reshaping the future of work.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="news">
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#63a1c4] text-white">News</Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    BAM hire Expands Global Reach with Strategic Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire is thrilled to announce the expansion of its
                    international presence through new strategic partnerships
                    with leading recruitment agencies across key global markets.
                    This exciting development allows BAM hire to offer an even
                    broader array of staffing solutions tailored to meet the
                    unique needs of businesses and job seekers worldwide.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    These partnerships will strengthen BAM hire&apos;s ability
                    to connect businesses with top-tier talent and provide
                    professionals with life-changing career opportunities in
                    industries ranging from technology to healthcare and beyond.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    With a growing global footprint, BAM hire is positioning
                    itself to better serve clients and candidates, ensuring
                    companies have access to the skilled workforce they need to
                    drive innovation and growth. In addition, job seekers will
                    benefit from increased access to diverse roles in new
                    regions, furthering their career aspirations.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    As part of its commitment to fostering collaboration and
                    inclusivity in the workforce, BAM hire will continue to
                    innovate and refine its services, ensuring they meet the
                    demands of an ever-evolving job market.
                  </p>
                  <p className="text-[#a25f35] font-semibold">
                    Through these new partnerships, BAM hire is poised to
                    enhance its reputation as a forward-thinking leader in
                    workforce solutions, committed to creating meaningful
                    connections and empowering both businesses and individuals
                    to succeed on a global scale.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
