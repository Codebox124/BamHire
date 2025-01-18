"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function InsightsPage() {
  const TABS = ["press-releases", "insights", "community"]

  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("press-releases");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (TABS.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);
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

      <section className="px-4 py-16 md:py-24">
        <div className="flex justify-center  space-x-4 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border rounded ${activeTab === tab ? "bg-[#82b8c2] text-white" : "text-[#82b8c2]"
                }`}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-7xl ">
          {activeTab === "press-releases" && (

            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#a25f35] text-white">Press Release</Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    BAM Hire Recognized as Top Staffing Firm for 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    We are proud to share that BAM Hire has been recognized as one of the top staffing firms for 2024 by Workforce Excellence Magazine. This award highlights our dedication to providing outstanding recruitment solutions and exceptional service to our clients and candidates.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    This recognition is a testament to the hard work and expertise of our team and our unwavering focus on creating meaningful connections in the workforce.
                  </p>
                  <p className="text-[#a25f35] font-semibold">
                    We thank our clients and partners for their trust and support as we continue to innovate and lead in the staffing industry.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#a25f35] text-white">
                    Press Release
                  </Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    Redefining Workforce Solutions with Industry Expertise and a Tailored Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire, a leading workforce solutions provider, is revolutionizing the talent acquisition landscape by offering businesses and professionals alike access to transformative opportunities. With a focus on connecting companies with top-tier talent and empowering individuals to find fulfilling careers, BAM hire bridges the gap between skill and demand.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    With a diverse range of services, BAM hire specializes in both temporary and permanent staffing solutions, tailored to meet the unique needs of businesses across multiple industries. The company’s global reach and advanced technology allow them to tap into a wide pool of talent, ensuring clients find candidates who are not only qualified but also aligned with their organizational culture.
                  </p>
                  <blockquote className="border-l-4 border-[#a1a484] pl-4 italic mb-4">
                    &quot;We understand the ever-evolving dynamics of the workforce. Our mission is to connect businesses with the best talent, enabling growth and innovation while providing job seekers with opportunities that truly enhance their careers. Said Mike. &quot;
                  </blockquote>
                  <p className="mb-4 text-muted-foreground">
                    By leveraging innovative recruitment strategies, BAM hire ensures a seamless hiring experience. Their team of experienced professionals works closely with clients to understand their specific needs, allowing them to provide customized workforce solutions. Whether businesses are looking for highly specialized professionals or need to fill large-scale temporary roles, BAM hire has the expertise to deliver.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    For job seekers, BAM hire offers a range of tools and support to help them navigate the job market. From resume building to interview preparation, the company is dedicated to ensuring candidates are not just prepared but also confident as they embark on their new career journeys.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire is committed to fostering an inclusive work environment where diverse talent can thrive. The company values innovation, collaboration, and personal growth, striving to build long-term relationships with both clients and candidates.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    As the world of work continues to evolve, BAM hire remains at the forefront, providing unparalleled workforce solutions that drive success for both businesses and individuals. With a focus on creating meaningful connections, BAM hire is reshaping the future of work.
                  </p>

                </CardContent>
              </Card>
            </div>

          )}
          {activeTab === "insights" && (
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
          )}
          {activeTab === "community" && (
            <Card>
              <CardHeader>
                <Badge className="w-fit bg-[#63a1c4] text-white">Community</Badge>
                <CardTitle className="text-2xl text-[#a25f35]">
                  Giving Back: How BAM Hire Supports the Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  At BAM Hire, we believe that building a better community goes far beyond staffing and recruiting. While our primary mission is to connect talented individuals with meaningful opportunities, we’re also deeply committed to supporting those in need. Whether someone is searching for their next career step or facing challenges that require urgent help, we aim to make a difference.
                </p>
                <p className="mb-4 text-muted-foreground font-semibold text-[#a25f35]">
                  Our Commitment to Giving Back
                </p>
                <p className="mb-4 text-muted-foreground">
                  We actively support organizations that align with our values of compassion, resilience, and making a positive impact. Here are some of the causes we proudly contribute to:
                </p>
                <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                  <li>
                    <strong>Texas Food Bank:</strong> Hunger is an issue no one should face. That’s why we partner with the Texas Food Bank to help ensure families and individuals have access to nutritious meals. Every donation helps fill plates and provides hope for those experiencing food insecurity.
                  </li>
                  <li>
                    <strong>Leukemia and Lymphoma Society:</strong> We’re dedicated to advancing health and wellness, which is why we support the Leukemia and Lymphoma Society. Their work in funding groundbreaking research and providing support to patients and families battling blood cancers is close to our hearts.
                  </li>
                  <li>
                    <strong>Palisades Wildfire Relief Program:</strong> Natural disasters can devastate communities in an instant. Through our contributions to the Palisades Wildfire Relief Program, we help those affected by wildfires recover and rebuild. This program provides essential resources to families, firefighters, and local communities impacted by wildfires.
                  </li>
                </ul>
                <p className="mb-4 text-muted-foreground">
                  At BAM Hire, we’re passionate about more than just filling roles—we care about building stronger, more resilient communities. Every action we take, whether it’s helping someone find their dream job or supporting those in crisis, stems from our commitment to being a force for good.
                </p>
                <p className="text-[#a25f35] font-semibold">
                  Join Us in Making an Impact
                </p>
                <p className="text-muted-foreground">
                  We encourage you to join us in supporting these incredible organizations. Together, we can make a difference for those in need and help build a brighter future for everyone.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="flex mt-5 justify-center items-center">
          <button className="border rounded-lg py-2 px-6 hover:bg-black hover:text-white">View More</button>
        </div>
      </section>

      {/* Content Tabs */}
      {/* <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="press" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="press">Press Releases</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
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

            <TabsContent className="flex flex-col gap-4" value="press">
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#a25f35] text-white">
                    Press Release
                  </Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    Redefining Workforce Solutions with Industry Expertise and a Tailored Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire, a leading workforce solutions provider, is revolutionizing the talent acquisition landscape by offering businesses and professionals alike access to transformative opportunities. With a focus on connecting companies with top-tier talent and empowering individuals to find fulfilling careers, BAM hire bridges the gap between skill and demand.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    With a diverse range of services, BAM hire specializes in both temporary and permanent staffing solutions, tailored to meet the unique needs of businesses across multiple industries. The company’s global reach and advanced technology allow them to tap into a wide pool of talent, ensuring clients find candidates who are not only qualified but also aligned with their organizational culture.
                  </p>
                  <blockquote className="border-l-4 border-[#a1a484] pl-4 italic mb-4">
                    &quot;We understand the ever-evolving dynamics of the workforce. Our mission is to connect businesses with the best talent, enabling growth and innovation while providing job seekers with opportunities that truly enhance their careers. Said Mike. &quot;
                  </blockquote>
                  <p className="mb-4 text-muted-foreground">
                    By leveraging innovative recruitment strategies, BAM hire ensures a seamless hiring experience. Their team of experienced professionals works closely with clients to understand their specific needs, allowing them to provide customized workforce solutions. Whether businesses are looking for highly specialized professionals or need to fill large-scale temporary roles, BAM hire has the expertise to deliver.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    For job seekers, BAM hire offers a range of tools and support to help them navigate the job market. From resume building to interview preparation, the company is dedicated to ensuring candidates are not just prepared but also confident as they embark on their new career journeys.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    BAM hire is committed to fostering an inclusive work environment where diverse talent can thrive. The company values innovation, collaboration, and personal growth, striving to build long-term relationships with both clients and candidates.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    As the world of work continues to evolve, BAM hire remains at the forefront, providing unparalleled workforce solutions that drive success for both businesses and individuals. With a focus on creating meaningful connections, BAM hire is reshaping the future of work.
                  </p>

                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#a25f35] text-white">Press Release</Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    BAM Hire Recognized as Top Staffing Firm for 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    We are proud to share that BAM Hire has been recognized as one of the top staffing firms for 2024 by Workforce Excellence Magazine. This award highlights our dedication to providing outstanding recruitment solutions and exceptional service to our clients and candidates.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    This recognition is a testament to the hard work and expertise of our team and our unwavering focus on creating meaningful connections in the workforce.
                  </p>
                  <p className="text-[#a25f35] font-semibold">
                    We thank our clients and partners for their trust and support as we continue to innovate and lead in the staffing industry.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="community">
              <Card>
                <CardHeader>
                  <Badge className="w-fit bg-[#63a1c4] text-white">Community</Badge>
                  <CardTitle className="text-2xl text-[#a25f35]">
                    Giving Back: How BAM Hire Supports the Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    At BAM Hire, we believe that building a better community goes far beyond staffing and recruiting. While our primary mission is to connect talented individuals with meaningful opportunities, we’re also deeply committed to supporting those in need. Whether someone is searching for their next career step or facing challenges that require urgent help, we aim to make a difference.
                  </p>
                  <p className="mb-4 text-muted-foreground font-semibold text-[#a25f35]">
                    Our Commitment to Giving Back
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    We actively support organizations that align with our values of compassion, resilience, and making a positive impact. Here are some of the causes we proudly contribute to:
                  </p>
                  <ul className="list-disc ml-6 mb-4 text-muted-foreground">
                    <li>
                      <strong>Texas Food Bank:</strong> Hunger is an issue no one should face. That’s why we partner with the Texas Food Bank to help ensure families and individuals have access to nutritious meals. Every donation helps fill plates and provides hope for those experiencing food insecurity.
                    </li>
                    <li>
                      <strong>Leukemia and Lymphoma Society:</strong> We’re dedicated to advancing health and wellness, which is why we support the Leukemia and Lymphoma Society. Their work in funding groundbreaking research and providing support to patients and families battling blood cancers is close to our hearts.
                    </li>
                    <li>
                      <strong>Palisades Wildfire Relief Program:</strong> Natural disasters can devastate communities in an instant. Through our contributions to the Palisades Wildfire Relief Program, we help those affected by wildfires recover and rebuild. This program provides essential resources to families, firefighters, and local communities impacted by wildfires.
                    </li>
                  </ul>
                  <p className="mb-4 text-muted-foreground">
                    At BAM Hire, we’re passionate about more than just filling roles—we care about building stronger, more resilient communities. Every action we take, whether it’s helping someone find their dream job or supporting those in crisis, stems from our commitment to being a force for good.
                  </p>
                  <p className="text-[#a25f35] font-semibold">
                    Join Us in Making an Impact
                  </p>
                  <p className="text-muted-foreground">
                    We encourage you to join us in supporting these incredible organizations. Together, we can make a difference for those in need and help build a brighter future for everyone.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      
      </section> */}
    </main>
  );
}
