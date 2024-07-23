"use client";
import { NavLinks, NavLinksSide } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { IoMenu } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="w-full transition-transform duration-300">
      {/* Desktop View */}
      <div className="hidden md:block border mx-32 mt-6 bg-primary rounded-[2rem]">
        <div className="">
          <nav className="w-full px-10 py-1 flex items-center justify-between bg-secondary">
            <Link href="/" className="text-primary flex items-center gap-2">
              <Image src="/Images/logo.png" alt="logo" width={70} height={70} />
              <h1 className="text-xl text-white">Media Bear</h1>
            </Link>

            <div className="flex gap-8">
              {NavLinks.map((link) => (
                <a
                  key={link.title}
                  href={`#${link.link}`}
                  className="px-5 py-1 rounded-[0.4rem] font-semibold text-white"
                >
                  {link.title}
                </a>
              ))}
            </div>

            <Link
              href="/"
              className="bg-white text-blue-950 px-5 py-2 rounded-[2rem] font-semibold"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden p-4 w-full flex items-center justify-between bg-secondary">
        <Link href="/" className="text-primary flex items-center">
          <Image src="/Images/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-xl text-primary font-semibold">Media Bear</h1>
        </Link>
        <Sheet>
          <SheetTrigger className="">
            <IoMenu size={30} className="" />
          </SheetTrigger>
          <SheetContent className="pt-14 bg-white">
            <SheetHeader>
              <SheetTitle className="flex">
                <Link href="/" className="text-primary flex items-center">
                  <Image
                    src="/Images/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  <h1 className="text-lg text-primary font-semibold">
                    Media Bear
                  </h1>
                </Link>
              </SheetTitle>
              <SheetDescription className="flex justify-start">
                <div className="mt-10">
                  <ul className="flex flex-col text-left gap-6">
                    {NavLinks.map((link) => (
                      <SheetClose asChild key={link.title}>
                        <Link
                          href={`#${link.link}`}
                          className="pr-5 py-1 rounded-xl text-blue-950 font-semibold hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
