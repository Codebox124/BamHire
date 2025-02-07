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
import Image from "next/image";

export function Header() {
  return (
    <header className=" fixed w-full z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-[#004589]">

          <Image width={200} height={200} className="w-40 " src="/BAMhire_logo.png" alt="" />
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#004589] hover:text-white hover:bg-[#15293d]">About BAM Hire</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid   gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3  rounded-xl">

                    <NavigationMenuLink asChild>

                      <Link
                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image src='/BAMhire_logo.png' alt="" height={200} width={200} />
                        {/* <div className="mt-4 text-lg font-medium ">
                          BAM Hire
                        </div> */}
                        <p className="text-[12px] leading-tight text-[#004589]">
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
                <NavigationMenuLink className="group inline-flex text-[#004589] hover:bg-[#15293d] hover:text-white h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium ">
                  Press Releases
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex hover:bg-[#15293d] hover:text-white text-[#004589] h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium ">
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
              className="hidden bg-[#004589] md:inline-flex hover:bg-[#15293d] "
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
          className={`block select-none space-y-1 rounded-md text-[#004589] hover:bg-[#15293d] hover:text-white p-3 leading-none no-underline outline-none transition-colors    `}
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 hover:text-white text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
