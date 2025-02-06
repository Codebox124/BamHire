"use client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export function NewsSection() {
  const news = [
    {
      category: "PRESS RELEASES",
      title: "BAM Hire Recognized as Top Staffing Firm for 2024",
      link: "/insights?tab=press-releases",
    },
    {
      category: "INSIGHTS",
      title: "Navigating the Future of Talent Acquisition in a Digital World",
      link: "/insights?tab=insights",
    },
    {
      category: "COMMUNITY",
      title: "Giving Back: How BAM Hire Supports the Community",
      link: "/insights?tab=community",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div
              key={item.title}

            >
              <Card className="group border-black relative">
                <CardHeader>
                  <Badge
                    variant="default"
                    className="w-fit bg-[#004589] text-white"
                  >
                    {item.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl text-black font-semibold">{item.title}</h3>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[#004589] hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
