import Link from "next/link";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001e3b] px-4 py-12 text-white lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-bold">
              <Image width={200} height={200} className="w-40 " src="/BAMHire_logo_ts_white.png" alt="" />
            </Link>

          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">About Bam hire</h3>
            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/about" className="hover:text-white">
                  BAM Hire Talent Promise
                </Link>
              </li>

              <li>
                <Link href="/jobs" className="hover:text-white">
                  Careers at BAM Hire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="mailto:recruiting@bamhire.com" className="hover:text-white">
                  Email Us
                </Link>
              </li>
              <li>
                <Link href="tel:(708) 790-1398" className="hover:text-white">
                  Call Us
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-12 border-t border-zinc-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white">
                Terms Of Services
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>

            </div>
            <div className="flex gap-4">

              <Link href="https://www.linkedin.com/company/bam-hire/" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>

            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">
            Copyright {currentYear} BAM Hire LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
