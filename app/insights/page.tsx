import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#a1a484] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Press Release
            </h1>
            <p className="text-xl text-[#a1a484]">
              Stay informed with the latest workforce trends, industry insights,
              and company updates from Bamhire.
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="press">Press Releases</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>

            </TabsList>



            <TabsContent value="news">
              {/* Similar structure as "all" but with news-specific content */}
            </TabsContent>

            <TabsContent value="insights">
              {/* Similar structure as "all" but with insights-specific content */}
            </TabsContent>

            <TabsContent value="press">
              {/* Similar structure as "all" but with press releases-specific content */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

     
    </main>
  );
}
