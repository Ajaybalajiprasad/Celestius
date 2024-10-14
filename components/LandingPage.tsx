"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Element, Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BriefcaseIcon, CalendarIcon, CodeIcon, CombineIcon, HandIcon, InfoIcon, MilestoneIcon, TrophyIcon } from 'lucide-react'

export default function LandingPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const projects = [
    { 
      title: "Bus Tracker", 
      description: "A collaborative project focused on developing a mobile application.", 
      status: "In Progress", 
      link: "https://github.com/Ajaybalajiprasad/BusTracker" 
    },
    { 
      title: "Prepex", 
      description: "An open-source contribution project focusing on web development.", 
      status: "Open", 
      link: "https://prepex.vercel.app/"  
    },
    { 
      title: "Chat Bot", 
      description: "A research-based project aimed at exploring AI technologies.", 
      status: "Completed", 
      link: "https://github.com/KRISHNASAKTHIESWAR/Interactive-Chatbot" 
    },
    { 
      title: "Force++", 
      description: "An automated script which notifies of upcoming contests.", 
      status: "In Progress", 
      link: "https://github.com/adithyagenie/forceplusplus" 
    },
    { 
      title: "Skillrack Captcha Solver", 
      description: "Automatic CAPTCHA solver extension for Skillrack using Tesseract.", 
      status: "Completed", 
      link: "https://github.com/adithyagenie/skillrack-captcha-solver" 
    },
    { 
      title: "Emotion Detector", 
      description: "A Convolutional Neural Network (CNN) for emotion detection.", 
      status: "Completed", 
      link: "https://github.com/Chorko/Emotion-recognition-using-efficientnet" 
    },
  ]

  return (
    <div className="relative">

      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Celestius</span>
        </Link>
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
        {/* Rerouting to Hiring */}
        <Link href="https://cit-celestius.vercel.app/hiringpage" target="_blank">
          <Button variant="secondary">Join Now</Button>
        </Link>
      </header>

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
            {/* Rerouting to Hiring */}
            <Link href="https://cit-celestius.vercel.app/hiringpage" target="_blank">
              <Button variant="secondary" className="mt-4">
                Join Now
              </Button>
            </Link>
          </div>
        </motion.section>

        <Element name="about">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="about"
            className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 md:py-24"
          >
            <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
              <div className="space-y-4" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">About Club Celestius</h2>
                <p className="text-justify md:text-left max-w-lg mx-auto md:mx-0">
                  Club Celestius is a student-run organization that aims to provide a platform for competitive programming and
                  technology enthusiasts to develop their skills, collaborate on innovative projects, and connect with
                  industry professionals.
                </p>
                <p className="text-justify md:text-left">
                  Our mission is to create a vibrant community where members can explore new technologies, participate in
                  coding challenges, and work on real-world industrial projects. We believe in the power of mentorship and
                  strive to connect our members with experienced professionals who can guide them in their academic and
                  professional journeys.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
                <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <HandIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold mt-2 text-center">Skill Development</h3>
                  <p className="text-muted-foreground text-center mt-1">
                    Enhance your programming skills through workshops, coding challenges, and hands-on projects.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <CombineIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold mt-2 text-center">Collaboration</h3>
                  <p className="text-muted-foreground text-center mt-1">
                    Collaborate with fellow members on innovative projects and learn from each other's experiences.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <InfoIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold mt-2 text-center">Innovation</h3>
                  <p className="text-muted-foreground text-center mt-1">
                    Explore new technologies and participate in coding competitions to showcase your innovative ideas.
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <MilestoneIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold mt-2 text-center">Mentorship</h3>
                  <p className="text-muted-foreground text-center mt-1">
                    Benefit from the guidance and expertise of our senior members, alumni, and industry professionals.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </Element>

        <Element name="events">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="events"
            className="bg-muted text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12"
          >
            <div className="container px-4 md:px-6 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">Upcoming Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card data-aos="fade-up" data-aos-delay="100">
                  <CardHeader>
                    <CardTitle>Workshops</CardTitle>
                    <CardDescription>
                      Sessions on programming languages and technologies to enhance your skills.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <CalendarIcon className="w-5 h-5 mr-2 inline" />
                        <span>September 16, 2024</span>
                      </div>
                      <Button variant="secondary" size="sm">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card data-aos="fade-up" data-aos-delay="200">
                  <CardHeader>
                    <CardTitle>Industry Expert Talks</CardTitle>
                    <CardDescription>
                      Sessions with tech professionals sharing their experiences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <CalendarIcon className="w-5 h-5 mr-2 inline" />
                        <span>October 1, 2024</span>
                      </div>
                      <Button variant="secondary" size="sm">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card data-aos="fade-up" data-aos-delay="300">
                  <CardHeader>
                    <CardTitle>Hackathon</CardTitle>
                    <CardDescription>
                      A 24-hour coding challenge to solve real-world problems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <CalendarIcon className="w-5 h-5 mr-2 inline" />
                        <span>November 12, 2024</span>
                      </div>
                      <Button variant="secondary" size="sm">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>
        </Element>

        <Element name="projects">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="projects"
            className="bg-background text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center"
          >
            <div className="container px-4 md:px-6 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">
                Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div>
                            {project.status === "In Progress" && <BriefcaseIcon className="w-5 h-5 mr-2 inline" />}
                            {project.status === "Open" && <CodeIcon className="w-5 h-5 mr-2 inline" />}
                            {project.status === "Completed" &&   <TrophyIcon className="w-5 h-5 mr-2 inline" />}
                            <span>{project.status}</span>
                          </div>
                          <Link href={project.link} target="_blank">
                            <Button variant="secondary" size="sm">
                              {project.status === "Completed" ? "View" : "Contribute"}
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </Element>

        <Element name="contact">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="contact"
            className="bg-primary text-primary-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12"
          >
            <div className="container px-4 md:px-6 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
                Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center md:text-left">Get in Touch</h3>
                  <p className="text-center md:text-left">
                    Whether you have a question, want to join the club, or collaborate on a project, feel free to reach out to us!
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Email:</h4>
                    <p>info@clubcelestius.com</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Follow Us:</h4>
                    <p>
                      <Link
                        href="https://www.linkedin.com/company/club-celestius-cit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        LinkedIn
                      </Link>
                      {" | "}
                      <Link
                        href="https://x.com/celestius_cit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Twitter
                      </Link>
                      {" | "}
                      <Link
                        href="https://www.instagram.com/celestius.cit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Instagram
                      </Link>
                    </p>
                  </div>
                </div>
                <form className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                  <div>
                    <Label htmlFor="name" className="text-primary-foreground">Name</Label>
                    <Input id="name" placeholder="Your Name" className="bg-primary-foreground text-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-primary-foreground">Email</Label>
                    <Input id="email" placeholder="Your Email" type="email" className="bg-primary-foreground text-primary" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-primary-foreground">Message</Label>
                    <Textarea id="message" placeholder="Your Message" className="bg-primary-foreground text-primary" />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.section>
        </Element>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}