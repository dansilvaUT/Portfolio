"use client";

import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ROUTES, ROUTE_MAP } from "../constants";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = Object.entries(ROUTE_MAP);

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string): string => {
    return pathname === route ? "border-b border-white" : "";
  };

  const closeMenu = (): void => setIsOpen(false);

  return (
    <header className="relative z-50 border-b border-gray-200 flex flex-row items-center justify-between p-4 font-bold">
      <h2 className="text-2xl">
        <Link href={ROUTES.HOME}>Dan Silva | SWE</Link>
      </h2>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {navigation.map(([route, { label }]) => (
            <BreadcrumbItem key={route}>
              <BreadcrumbLink
                className={`${isActive(route)} text-white text-lg`}
                render={<Link href={route}>{label}</Link>}
              />
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </Button>
            }
          />
          <DropdownMenuContent className="bg-black text-white border-none">
            <DropdownMenuGroup>
              {navigation.map(([route, { label }]) => (
                <DropdownMenuItem
                  key={route}
                  onClick={closeMenu}
                  className="text-md"
                >
                  <Link href={route} className="w-full">
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
