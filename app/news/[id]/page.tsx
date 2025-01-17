import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { newsItems } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const newsId = (await params).id;
  const newsToDisplay = newsItems.find((item) => item.id === newsId);

  if (!newsToDisplay) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <Link
          href="/news"
          className="inline-flex items-center text-[#a25f35] hover:text-[#9e7a52] mb-8"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={newsToDisplay.image || "/placeholder.svg"}
              alt={newsToDisplay.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-[#a1a484] text-white">
                {newsToDisplay.category}
              </Badge>
              <time className="text-sm text-gray-500">
                {format(new Date(newsToDisplay.date), "MMMM d, yyyy")}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#a25f35] mb-6">
              {newsToDisplay.title}
            </h1>
            <div className="prose max-w-none">
              {newsToDisplay.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#a25f35] mb-6">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems
              .filter((item) => item.id !== newsId)
              .slice(0, 3)
              .map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-md transition-shadow h-[450px] flex flex-col"
                >
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-[#a1a484] text-white mb-2 w-fit"
                    >
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-[#a25f35] mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <time className="text-sm text-gray-500 block mb-4">
                      {format(new Date(item.date), "MMMM d, yyyy")}
                    </time>
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                      {item.content.split("\n\n")[0]}
                    </p>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href={`/news/${item.id}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
