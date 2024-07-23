import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaYoutube, FaDiscord, FaFacebookF } from 'react-icons/fa';
const links = [
  { href: "#", text: "About" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Licensing" },
  { href: "#", text: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-10 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <Link href="/" className="text-primary font-bold text-2xl flex items-center gap-2">
              <Image src="/Images/logo.png" alt="logo" width={80} height={80} />
              <h1 className="text-2xl text-primarxy">Media Bear</h1>
            </Link>
          </div>
          <ul className="flex flex-col space-y-10 md:space-y-0 md:space-x-0 md:flex-row items-start flex-wrap md:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mt-7 md:mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline me-4 md:me-6">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-between items-center gap-4">
          <span className="block text-[15px] text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              Media Bear, Inc.
            </a>
            . All rights reserved.
          </span>
          <div className="flex space-x-5 text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FaTwitter size={25} />
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FaYoutube size={25} />
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FaDiscord size={25} />
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              <FaFacebookF size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
