import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Download,
  FileText,
  PieChart,
  TrendingUp,
} from "lucide-react";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#a1a484] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Investor Relations
            </h1>
            <p className="text-xl text-[#a1a484]">
              Access financial information, reports, and updates about
              Bamhire&apos;s performance and growth strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Financial Highlights
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Revenue Growth",
                value: "+15%",
                description: "Year over Year",
                icon: TrendingUp,
              },
              {
                title: "Market Cap",
                value: "$2.5B",
                description: "As of 2024",
                icon: BarChart,
              },
              {
                title: "Operating Margin",
                value: "22%",
                description: "Q4 2023",
                icon: PieChart,
              },
              {
                title: "Global Presence",
                value: "50+",
                description: "Countries",
                icon: FileText,
              },
            ].map((stat) => (
              <Card key={stat.title}>
                <CardContent className="pt-6">
                  <stat.icon className="mb-4 h-8 w-8 text-[#a1a484]" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="font-semibold">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Financial Reports
          </h2>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="text-right">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Annual Report 2023",
                    date: "Mar 15, 2024",
                    size: "5.2 MB",
                  },
                  {
                    name: "Q4 2023 Earnings",
                    date: "Jan 30, 2024",
                    size: "2.1 MB",
                  },
                  {
                    name: "Q3 2023 Earnings",
                    date: "Oct 30, 2023",
                    size: "2.3 MB",
                  },
                  {
                    name: "Q2 2023 Earnings",
                    date: "Jul 30, 2023",
                    size: "2.0 MB",
                  },
                ].map((report) => (
                  <TableRow key={report.name}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.size}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#a1a484] hover:text-[#a1a484]"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Stock Information */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Stock Information
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Stock Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[2/1] w-full bg-gray-100">
                  {/* Stock chart would go here */}
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    Stock Chart Graph (Placeholder)(for now)
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4">
                  {[
                    { label: "Market Cap", value: "$2.5B" },
                    { label: "52 Week High", value: "$75.20" },
                    { label: "52 Week Low", value: "$45.30" },
                    { label: "P/E Ratio", value: "22.5" },
                    { label: "Dividend Yield", value: "1.8%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex justify-between border-b pb-2 last:border-0"
                    >
                      <dt className="text-muted-foreground">{stat.label}</dt>
                      <dd className="font-semibold">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IR Contact */}
      <section className="bg-gray-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Investor Relations Contact
          </h2>
          <p className="mb-8 text-muted-foreground">
            For investor-related inquiries, please contact our IR team.
          </p>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">IR Department</div>
                  <div className="text-muted-foreground">
                    ir@bamhire.com
                    <br />
                    +1 (555) 123-4567
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-[#a1a484] text-white hover:bg-[#a1a484]"
                >
                  <Link href="/contact">Contact IR Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
