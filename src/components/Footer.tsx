import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const apiLink: string = "https://developers.themoviedb.org/3/getting-started/introduction";
  const githubLink: string = "";

  return (
    <footer className="bg-[#131213]">
      <section className="container flex items-center justify-between px-4 py-8">
        <Link to="/">REELSPARK</Link>
        <nav className="space-x-5">
          <a href={apiLink} className="text-sm transition hover:text-yellow-500" target="_blank">
            API
          </a>
          <a href={githubLink} className="text-sm transition hover:text-yellow-500" target="_blank">
            GitHub
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
