"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className="text-2xl font-bold text-[#a25f35]"
              onClick={() => setOpen(false)}
            >
              Bamhire
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="about">
              <AccordionTrigger>About Bamhire</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="block py-2"
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advantage"
                      className="block py-2"
                      onClick={() => setOpen(false)}
                    >
                      The Bamhire Advantage
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/insights"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                News & Insights
              </Link>
            </li>
            <li>
              <Link
                href="/investors"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Investors
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <Button asChild className="w-full">
            <Link href="/jobs" onClick={() => setOpen(false)}>
              Find a Job
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
