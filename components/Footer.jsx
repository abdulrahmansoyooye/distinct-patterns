import React from "react";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="section-footer">
      <hr />
      <div className="footer">
        <div className="footer-1">
          <div className="logo-box">
            <img src="/assets/logo.png" alt="logo" width="200" height="20" />
          </div>
          <p className="footer-text-1">
            Explore our collection, where style meets comfort in trendy quality
            fabrics.
          </p>
          <div className="venue-icon">
            <img src="assets/venue.png" alt="venue" />
          </div>
          <p className="address">5th Floor, Banana Island, Lagos, Nigeria.</p>
        </div>
        <div className="footer-2">
          <h3 className="company">COMPANY</h3>
          <ul className="footer-links">
            <li>
              <Link className="footer-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-3">
          <h1 className="subscribe">Subscribe To Our Newsletter</h1>
          <form className="flex items-center border-b border-gray-400 focus-within:border-black transition">
            <input
              type="email"
              placeholder="Enter your email address"
              className="email  flex-1 bg-transparent outline-none text-base p-2"
              required
            />
            <button
              type="submit"
              className="text-lg p-2 text-black hover:text-gray-600 transition"
            >
              ➤
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>
          &copy; Copyright {date}
          <span>Distinct Patterns</span>
        </p>
        <p>
          Designed and developed by <strong>Nexatage</strong>
        </p>
        <ul>
          <li>
            <Link href="www.google.com" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
