"use client"

import { useEffect } from 'react'
import Link from "next/link"
import { Element, Link as ScrollLink } from 'react-scroll'
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
          <Link href="/hiringpage" target="_blank" className="hover:underline underline-offset-4">
            We're Hiring
          </Link>
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline underline-offset-4 cursor-pointer">
            Contact
          </ScrollLink>
        </nav>
        <Link href="https://chat.whatsapp.com/GmdMBVnnppv1TuMTbGgAKo" target="_blank">
          <Button variant="secondary">Join Now</Button>
        </Link>
      </header>

      <main>
        <section className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground py-12 md:py-24" data-aos="fade-up">
          <div className="container px-4 md:px-6 text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Explore, Learn, and Innovate</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Club Celestius is a student-run organization dedicated to fostering a community of computer programming and
              technology enthusiasts.
            </p>
            <Link href="https://chat.whatsapp.com/GmdMBVnnppv1TuMTbGgAKo" target="_blank">
              <Button variant="secondary" className="mt-4">
                Join Now
              </Button>
            </Link>
          </div>
        </section>

        <Element name="about">
          <section id="about" className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 md:py-24">
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
          </section>
        </Element>

        <Element name="events">
          <section id="events" className="bg-muted text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12">
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
          </section>
        </Element>

        <Element name="projects">
          <section id="projects" className="bg-background text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">
                Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card data-aos="fade-up" data-aos-delay="100">
                  <CardHeader>
                    <CardTitle>Bus Tracker</CardTitle>
                    <CardDescription>
                      A collaborative project focused on developing a mobile application.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <BriefcaseIcon className="w-5 h-5 mr-2 inline" />
                        <span>In Progress</span>
                      </div>
                      <Link href="https://github.com/Ajaybalajiprasad/BusTracker" target="_blank">
                        <Button variant="secondary" size="sm">
                          Contribute
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card data-aos="fade-up" data-aos-delay="200">
                  <CardHeader>
                    <CardTitle>Prepex</CardTitle>
                    <CardDescription>
                      An open-source contribution project focusing on web development.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <CodeIcon className="w-5 h-5 mr-2 inline" />
                        <span>Open</span>
                      </div>
                      <Link href="https://github.com/PrepExe/PrepEx-APP" target="_blank">
                        <Button variant="secondary" size="sm">
                          Contribute
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card data-aos="fade-up" data-aos-delay="300">
                  <CardHeader>
                    <CardTitle>Chat Bot</CardTitle>
                    <CardDescription>
                      A research-based project aimed at exploring AI technologies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <TrophyIcon className="w-5 h-5 mr-2 inline" />
                        <span>Completed</span>
                      </div>
                      <Link href="https://github.com/adithyaa-s/skill-up" target="_blank">
                        <Button variant="secondary" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section id="contact" className="bg-primary text-primary-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12">
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
          </section>
        </Element>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}