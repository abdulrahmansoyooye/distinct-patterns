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
    <div>
      <nav>
        {!isMobile ? (
          // for the desktop navBars, create a flex box of three items: one for the logo, two for the nav-links, third for the authentication bar
          // For the navbar bar should be a row
          <ul className="desktop-nav ">
            <div className="logo-box">
              {/* Import the logo normally */}
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={200}
                height={20}
              />
            </div>
            {/* the nav-links should also be a row. */}
            <ul className="nav-links">
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/"
                  // monitor the active link and change the color when the link is active
                  className={isActive("/") ? "activeNav nav-link" : ""}
                >
                  Home
                </Link>
              </li>
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/about"
                  className={isActive("/about") ? "activeNav nav-link" : ""}
                >
                  About
                </Link>
              </li>
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/products"
                  className={isActive("/products") ? "activeNav nav-link" : ""}
                >
                  Products
                </Link>
              </li>
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/blog"
                  className={isActive("/blog") ? "activeNav nav-link" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>
            {/* Zubayr should create a component to take care of the authentication buttons */}
            <Auth />
          </ul>
        ) : (
          <ul className="mobile-nav">
            {/* For the mobile navBars, create a flex box of two items: The logo and an hamburger icon */}
            <div className="logo-box">
              {/* Import the logo normally */}
              <Image
                className="log"
                src="/assets/logo.png"
                alt="logo"
                width={200}
                height={20}
              />
            </div>
            {/* Zubayr should edit the addToCart page and put it here */}
            <div className="ham-cart">
              <p>Cart</p>
              <div
                className="hamburger"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  className="bar"
                  animate={{
                    rotate: isOpen ? 45 : 0, // Rotate top line to 45 degrees when open
                    y: isOpen ? 10 : 0, // Move the top line down
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <motion.div
                  className="bar"
                  animate={{
                    rotate: isOpen ? -45 : 0, // Rotate bottom line to -45 degrees when open
                    y: isOpen ? -10 : 0, // Move bottom line up
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </ul>
        )}
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
