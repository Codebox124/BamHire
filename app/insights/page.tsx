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
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="press">Press Releases</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {/* Featured Article */}
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src="/business4.jpg"
                      alt="Featured article"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <Badge className="mb-4 bg-[#a1a484] text-white">
                      Featured
                    </Badge>
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                      The Future of Work: AI and Human Collaboration
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      Explore how artificial intelligence is transforming the
                      workplace and creating new opportunities for human-AI
                      collaboration.
                    </p>
                    <Button
                      asChild
                      className="bg-[#a1a484] text-white hover:bg-[#8b9467]"
                    >
                      <Link href="#">Read More</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Articles Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <div className="aspect-video">
                      <Image
                        src="/business3.jpg"
                        alt={`Article ${i}`}
                        width={400}
                        height={225}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Category</Badge>
                        <span className="text-sm text-muted-foreground">
                          5 min read
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">
                        Article Title Goes Here
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellat ipsam aut natus quaerat? Provident
                        blanditiis voluptas facere iusto odio explicabo!
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 text-[#a1a484] hover:text-[#8b9467]"
                      >
                        <Link href="#">Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#a1a484] text-[#a1a484] hover:bg-[#d3d2c8]"
                >
                  Load More Articles
                </Button>
              </div>
            </TabsContent>

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

      {/* Newsletter Section */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Stay Updated with Bamhire
          </h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to our newsletter for the latest insights, trends, and
            company updates delivered straight to your inbox.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button
              type="submit"
              className="bg-[#a1a484] text-white hover:bg-[#8b9467] sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
