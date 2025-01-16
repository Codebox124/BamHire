import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 px-4 py-12 text-white lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-bold">
              Bamhire
            </Link>
            <p className="mt-4 max-w-md text-gray-400">
              We unlock endless possibilities by connecting individuals to meaningful work that enhances their lives and bringing people together to drive innovation and growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold uppercase">About Bamhire</h3>
            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="#" className="hover:text-white">
                  Bamhire Talent Promise
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  Careers at Bamhire
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
                <Link href="tel:7087901398" className="hover:text-white">
                  Call Us
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-12 border-t border-zinc-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-white">
                Tearms Of Services
              </Link>
              <Link href="#" className="hover:text-white">
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
            Copyright {currentYear} Bamhire Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
