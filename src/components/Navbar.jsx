import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/logo-full.png';
import logoMark from '../assets/images/logo-mark.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      
      <header className="site-header">
        <div className="container navbar">
          {/* Brand Logo Link */}
          <Link className="brand" to="/" aria-label="Sanskriti Canvas home">
            <img
              className="brand-full"
              src={logo}
              alt="Sanskriti Canvas"
            />
            <img
              className="brand-mark"
              src={logoMark}
              alt="Sanskriti Canvas"
            />
          </Link>

          {/* Primary Navigation */}
          <nav className="nav-links" aria-label="Primary navigation">
            <NavLink to="/" data-page="home">
              Home
            </NavLink>
            <NavLink to="/explore" data-page="explore">
              Explore
            </NavLink>
            <NavLink to="/heritage" data-page="heritage">
              Heritage
            </NavLink>
            <NavLink to="/about" data-page="about">
              About
            </NavLink>
            <NavLink to="/contact" data-page="contact">
              Contact
            </NavLink>
            <NavLink to="/search" data-page="search">
              Search
            </NavLink>
            <NavLink to="/login" data-page="login">
              Login
            </NavLink>
          </nav>

          {/* Nav Actions / Search & Mobile Toggle */}
          <div className="nav-actions">
            <div className="search-wrap">
              <form
                className="search-box"
                role="search"
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="search"
                  aria-label="Search"
                  placeholder="Search heritage, places…"
                />
                <button aria-label="Search" type="submit">
                  ⌕
                </button>
              </form>
              <div className="search-results" aria-live="polite"></div>
            </div>

            <button className="icon-btn mobile-search" aria-label="Open search">
              ⌕
            </button>
            <button
              className="icon-btn mobile-menu"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}