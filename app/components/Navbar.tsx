"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ROUTES, ROUTE_MAP } from "../constants";

const navigation = Object.entries(ROUTE_MAP);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string) => (pathname === route ? "page" : undefined);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 border-b border-gray-200 bg-black">
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href={ROUTES.HOME}
            onClick={closeMenu}
            className="rounded text-xl font-bold md:text-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Dan Silva | Portfolio
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-6 md:flex">
            {navigation.map(([route, { label }]) => (
              <li key={route}>
                <Link
                  href={route}
                  aria-current={isActive(route)}
                  className="rounded hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:text-2xl"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-md p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
          >
            <span aria-hidden="true" className="text-2xl">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          inert={!isOpen}
          className={`absolute top-full right-0 left-0 overflow-hidden border-b border-gray-200 bg-black shadow-lg transition-[opacity,transform,visibility] duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }`}
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navigation.map(([route, { label }]) => (
              <li key={route}>
                <Link
                  href={route}
                  aria-current={isActive(route)}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
