'use client'
import Link from "next/link"
import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link as ScrollLink, Element } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Briefcase, Calendar, Code, Users, Hand, Info, Milestone, Trophy, Handshake } from 'lucide-react'
import { GitHubIds } from "./Github"

export function LandingPage() {
  const [clickCount, setClickCount] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const handleProjectClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;

      if (isFlipped && newCount === 2) {
        setIsFlipped(false);
        return 0; // Reset count after 3 flips when flipping back
      } else if (!isFlipped && newCount === 2) {
        setIsFlipped(true);
        return 0; // Reset count after 3 flips when flipping forward
      }

      return newCount;
    });
  };

  const renderProjectCards = () => {
    const projects = isFlipped ? [
      { 
        title: "Unified information sharing platform", 
        description: "Unified Info Sharing Platform centralizes communication and collaboration into a single, streamlined hub. Offering secure file sharing, real-time data sync, team collaboration tools, and project management, it enhances productivity by simplifying task coordination and workflow management. Its versatile design supports diverse activities, making it ideal for both individuals and teams to collaborate efficiently in one seamless, easy-to-use interface.", 
        status: "Team up,Collaborate,Develop", 
        link: "#" 
      },
    ] : [
      { 
        title: "Bus Tracker", 
        description: "A collaborative project focused on developing a mobile application.", 
        status: "In Progress", 
        link: "https://github.com/Ajaybalajiprasad/BusTracker" 
      },
      { 
        title: "Prepex", 
        description: "A project focusing on student productivity.", 
        status: "Completed", 
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
        description: "An automated script which notifies of upcoming contests", 
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
        description: "A Convolutional Neural Network (CNN) for emotion detection", 
        status: "Completed", 
        link: "https://github.com/Chorko/Emotion-recognition-using-efficientnet" 
      },
    ];

    return (
      <div className={`grid ${isFlipped ? 'md:grid-cols-1 lg:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
        {projects.map((project, index) => (
          <Card key={index} className={isFlipped ? "flipped-card" : ""} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  {project.status === "In Progress" && <Briefcase className="w-5 h-5 mr-2 inline" />}
                  {project.status === "Open" && <Code className="w-5 h-5 mr-2 inline" />}
                  {project.status === "Completed" && <Trophy className="w-5 h-5 mr-2 inline" />}
                  {project.status === "Team up,Collaborate,Develop" && <Handshake className="w-5 h-5 mr-2 inline" />}
                  <span>{project.status}</span>
                </div>
                <Link href={project.link} target="_blank">
                  {!isFlipped && (
                    <Button variant="secondary" size="sm">
                      {project.status === "Completed" ? "View" : "Contribute"}
                    </Button>
                  )}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

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
        <Link href="https://chat.whatsapp.com/GmdMBVnnppv1TuMTbGgAKo" target="_blank">
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
          <Link href="https://chat.whatsapp.com/GmdMBVnnppv1TuMTbGgAKo" target="_blank">
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
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center md:text-left">To achieve these objectives, we will organize:</h3>
              <ul className="list-disc pl-6 space-y-2 text-justify md:text-left">
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
              <Hand className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-2 text-center">Skill Development</h3>
              <p className="text-muted-foreground text-center mt-1">
                Enhance your programming skills through workshops, coding challenges, and hands-on projects.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
              <Users className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-2 text-center">Collaboration</h3>
              <p className="text-muted-foreground text-center mt-1">
                Collaborate with fellow members on innovative projects and learn from each other's experiences.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
              <Info className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold mt-2 text-center">Innovation</h3>
              <p className="text-muted-foreground text-center mt-1">
                Explore new technologies and participate in coding competitions to showcase your innovative ideas.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
              <Milestone className="w-12 h-12 text-primary" />
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
                <CardTitle>Inauguration</CardTitle>
                <CardDescription>
                  Be part of a vibrant community shaping the future of technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    <span>October 9, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="100">
              <CardHeader>
                <CardTitle>Industry Expert Talk</CardTitle>
                <CardDescription>
                  Sessions with tech professional sharing their experiences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    <span>October 9, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-background text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center" onClick={handleProjectClick}>
        <div className="container px-4 md:px-6 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">
            Projects
          </h2>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div key="front">
              
              {renderProjectCards()}
            </div>
            <div key="back">
              {renderProjectCards()}
            </div>
          </ReactCardFlip>
        </div>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12">
        <div className="container px-4 md:px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            GitHub Profiles
          </h2>
          <GitHubIds />
        </div>

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
                    href="https://www.linkedin.com/company/club-celestius-cit/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                  {" | "}
                  <Link
                    href="https://x.com/celestius_cit"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </Link>
                  {" | "}
                  <Link
                    href="https://www.instagram.com/celestius.cit/"
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