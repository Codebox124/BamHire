import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function NewsSection() {
  const news = [
    {
      category: "PRESS RELEASE",
      title: "Bamhire announces strategic leadership expansion",
      link: "#",
    },
    {
      category: "INSIGHTS",
      title: "Future of Work Report: Three pillars of workforce resilience",
      link: "#",
    },
    {
      category: "IN THE NEWS",
      title: "Workforce Innovation: Which AI tools work for job recruiters?",
      link: "#",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title} className="group relative">
              <CardHeader>
                <Badge
                  variant="secondary"
                  className="w-fit bg-[#a1a484] text-white"
                >
                  {item.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#82b8c2] hover:underline"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
