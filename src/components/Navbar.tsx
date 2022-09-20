import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="navbar-brand"
            >
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
