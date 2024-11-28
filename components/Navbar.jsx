"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/StateContext.js";

import { motion } from "framer-motion";
import Auth from "./auth.js";
const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },

  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Signup",
    href: "/signup",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathname === path;
  const { totalcartQuantity } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white  mb-[2rem] p-[1rem]">
      <nav className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo-box">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={130}
            height={30}
            className="w-auto h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navigation.map(({ name, href }, index) => (
            <li key={`${index}-${name}`}>
              <Link
                href={href}
                className={`${
                  isActive(href)
                    ? "text[#0000] bg-[#eaeaea] p-[0.5rem_1rem] rounded-lg"
                    : "text-[#97919a]"
                } hover:text-[#000] transition`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Authentication Component */}
        <div className="hidden md:block">
          <Auth />
          code code code
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 ">
          <a href="/cart" className="relative">
            {" "}
            <Image
              src="/assets/shopping-cart.png"
              alt="logo"
              width={18}
              height={18}
              className="w-auto h-auto"
            />
            {
              <span className="absolute -top-2 -right-2 bg-[#eaeaea] text-[#000] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalcartQuantity}
              </span>
            }
          </a>
          <div
            className="hamburger cursor-pointer md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              className="w-6 h-0.5 bg-gray-800"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-gray-800"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>
      </nav>
      {isOpen ? (
        <ul className={`mob-nav-links ${isOpen ? "isOpen" : ""}`}>
          <li className="mob-nav-list">
            <Link
              href="/"
              className={
                isActive("/") ? "activeMobNav mob-nav-link" : "mob-nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? "activeMobNav mob-nav-link"
                  : "mob-nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/products"
              className={
                isActive("/products")
                  ? "activeMobNav mob-nav-link"
                  : "mob-nav-link"
              }
            >
              Products
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/blog"
              className={
                isActive("/blog") ? "activeMobNav mob-nav-link" : "mob-nav-link"
              }
            >
              Blog
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/blog"
              className={
                isActive("/blog") ? "activeMobNav mob-nav-link" : "mob-nav-link"
              }
            >
              {/* Zubayr fucntionalizes this part */}
              Sign up
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;

// Create a mobile navBar with five nav links (the three original nav links and the auth links zubayr will work on) and set it to hide initially. Keep in mind that the add to cart logo has to be there too
// Set the hamburger icon such that when the icon is clicked, it switched to a close icon(animations) and the nav-links which contain the login / add to cart shows up
// When the icon switches to close, the nav-links should appear from beside and put a z-index so that the navBar can show over the nav-links. That way, we will need to add a padding to the nav-links
// Style the nav-links for when one of them is active except the authentication buttons
// When each of the link,  the navBar should disappear again.
// Have fun, bro

// I stopped at linking and creating the pages to one another, then the mobile nav
