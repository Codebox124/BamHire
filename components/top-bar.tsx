"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TopBar() {
  return (
    <div className="bg-gray-100 px-4 py-2 text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <Select defaultValue="us">
            <SelectTrigger className="h-auto border-0 bg-transparent p-0 hover:bg-transparent [&>span]:flex [&>span]:items-center [&>span]:gap-2">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Link
          href="#"
          className="hidden text-xs text-muted-foreground hover:text-foreground md:block"
        >
          LOOKING FOR ONE OF OUR SPECIALTY BRANDS?
        </Link>
      </div>
    </div>
  );
}
