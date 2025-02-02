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
              className="text-2xl font-bold text-[#004589]"
              onClick={() => setOpen(false)}
            >
              BAM Hire
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="about">
              <AccordionTrigger className="text-[#004589]">About BAM Hire</AccordionTrigger>
              <AccordionContent>
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="block text-[#004589] py-2"
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advantage"
                      className="block text-[#004589] py-2"
                      onClick={() => setOpen(false)}
                    >
                      The BAM Hire Magic
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
                className="block py-2 text-[#004589]"
                onClick={() => setOpen(false)}
              >
                Press Releases
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 text-[#004589]"
                onClick={() => setOpen(false)}
              >
              Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <Button asChild className="w-full bg-[#004589] hover:bg-[#004589] ">
            <Link href="/jobs" onClick={() => setOpen(false)}>
              Find a Job
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
