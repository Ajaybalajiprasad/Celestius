"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import AboutSection from "./about";
import UpcomingEventsSection from "./Events";
import ProjectsSection from "./projects";
import ContactSection from "./contactus";
import { Menu, X } from "lucide-react"; // Import Menu and X icons for mobile

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Celestius</span>
        </Link>

        {/* Hamburger Menu Icon (for mobile screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary-foreground focus:outline-none">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <ScrollLink to="about" smooth={true} duration={500} className="hover:underline underline-offset-4 cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="events" smooth={true} duration={500} className="hover:underline underline-offset-4 cursor-pointer">
            Events
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="hover:underline underline-offset-4 cursor-pointer">
            Projects
          </ScrollLink>
          <Link href="/hiringpage" className="hover:underline underline-offset-4">
            We're Hiring
          </Link>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline underline-offset-4 cursor-pointer">
            Contact
          </ScrollLink>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary text-primary-foreground py-4 px-6 absolute top-16 left-0 right-0 z-40">
          <ul className="flex flex-col gap-4">
            <ScrollLink to="about" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>
              About
            </ScrollLink>
            <ScrollLink to="events" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>
              Events
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>
              Projects
            </ScrollLink>
            <Link href="/hiringpage" className="hover:underline" onClick={toggleMenu}>
              We're Hiring
            </Link>
            <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={toggleMenu}>
              Contact
            </ScrollLink>
          </ul>
        </nav>
      )}

      <main>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground py-12 md:py-24"
        >
          <div className="container px-4 md:px-6 text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Explore, Learn, and Innovate</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Club Celestius is a student-run organization dedicated to fostering a community of computer programming and
              technology enthusiasts.
            </p>
            <Link href="/hiringpage" target="_blank">
              <Button variant="secondary" className="mt-4">
                We're Hiring
              </Button>
            </Link>
          </div>
        </motion.section>

        <Element name="about">
          <AboutSection />
        </Element>

        <Element name="events">
          <UpcomingEventsSection />
        </Element>

        <Element name="projects">
          <ProjectsSection />
        </Element>

        <Element name="contact">
          <ContactSection />
        </Element>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  );
}