'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { BriefcaseIcon, CalendarIcon, CodeIcon, CombineIcon, HandIcon, InfoIcon, MilestoneIcon, TrophyIcon } from '@/components/ui/svgs';
import { Textarea } from "@/components/ui/textarea"
import { Link as ScrollLink, Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { GitHubIds } from "./Github"

export function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-50">
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
          <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline underline-offset-4 cursor-pointer">
            Contact
          </ScrollLink>
        </nav>
        <Link href="https://chat.whatsapp.com/Fq7fVJvZjzZEnFgu8zi5hQ" target="_blank">
          <Button variant="secondary">Join Now</Button>
        </Link>
      </header>

      <section className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground py-12 md:py-24" data-aos="fade-up">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Explore, Learn, and Innovate</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Club Celestius is a student-run organization dedicated to fostering a community of computer programming and
            technology enthusiasts.
          </p>
          <Link href="https://chat.whatsapp.com/Fq7fVJvZjzZEnFgu8zi5hQ" target="_blank">
            <Button variant="secondary" className="mt-4">
              Join Now
            </Button>
          </Link>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-background text-foreground py-12 md:py-24">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-4" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">About Club Celestius</h2>
            <p className="text-center md:text-left">
              Club Celestius is a student-run organization that aims to provide a platform for competitive programming and
              technology enthusiasts to develop their skills, collaborate on innovative projects, and connect with
              industry professionals.
            </p>
            <p className="text-center md:text-left">
              Our mission is to create a vibrant community where members can explore new technologies, participate in
              coding challenges, and work on real-world industrial projects. We believe in the power of mentorship and
              strive to connect our members with experienced professionals who can guide them in their academic and
              professional journeys.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center md:text-left">To achieve these objectives, we will organize:</h3>
              <ul className="list-disc pl-6 space-y-2 text-center md:text-left">
                <li>Coding Workshops: Sessions on programming languages and technologies.</li>
                <li>Industry Expert Talks: Sessions with tech professionals sharing their experiences.</li>
                <li>Hackathons: Themed competitions to stimulate problem-solving skills.</li>
                <li>External Participation: Involvement in external coding contests and hackathons.</li>
                <li>Mentorship: Pairing experienced students with beginners for guidance.</li>
                <li>Skill Development Sessions: Training on soft skills like problem-solving and teamwork.</li>
                <li>Technical Presentations: Opportunities for students to present their projects and research.</li>
              </ul>
            </div>
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

      <section id="events" className="bg-muted text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12">
        <div className="container px-4 md:px-6 space-y-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-begin">Club Structure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Executive Committee</h3>
              <p className="text-muted-foreground">
                Student-led committee, selected by skill, managing club activities.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Membership</h3>
              <p className="text-muted-foreground">Open to all students, promoting inclusivity.</p>
            </div>
          </div>
        </div>

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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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

            <Card data-aos="fade-up" data-aos-delay="100">
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


      <section id="contact" className="bg-primary text-primary-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12">
        {/* GitHub Section */}
        <div className="container px-4 md:px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            GitHub Profiles
          </h2>
          <GitHubIds />
        </div>

        {/* Contact Us Section */}
        <div className="container px-4 md:px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-right" data-aos-delay="100">
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
                    href="https://www.linkedin.com"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                  {" | "}
                  <Link
                    href="https://www.twitter.com"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </Link>
                  {" | "}
                  <Link
                    href="https://www.instagram.com"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </p>
              </div>
            </div>
            <form className="space-y-4" data-aos="fade-left" data-aos-delay="300">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-foreground">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground">Email</label>
                <Input id="email" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground">Message</label>
                <Textarea id="message" placeholder="Your Message" />
              </div>
              <Button type="submit" variant="secondary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}
