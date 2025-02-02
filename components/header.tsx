import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className=" fixed w-full z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-[#004589]">
          Bam Hire
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#004589] hover:text-[#004589]">About BAM Hire</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid   gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3 bg-[#004589] rounded-xl">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 text-lg font-medium text-white">
                          BAM Hire
                        </div>
                        <p className="text-sm leading-tight text-white">
                          Your Talent. Our Focus.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about" title="About Us">
                    Learn about our history and values
                  </ListItem>
                  <ListItem href="/advantage" title="The BAM Hire Magic">
                    Discover our unique solutions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/insights" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex text-[#004589] h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Press Releases
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex text-[#004589] h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Link className="hidden md:inline-flex" href={"/jobs"}>
            <Button
              variant="default"
              size="sm"
              className="hidden bg-[#004589] md:inline-flex hover:bg-[#004589] hover:bg-blue-300"
            >
              Find a Job
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

const ListItem = ({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li >
      <NavigationMenuLink asChild>
        <a
          className={`block select-none space-y-1 rounded-md text-[#004589] hover:text-[#004589] p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
