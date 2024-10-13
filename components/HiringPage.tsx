"use client"

import { useState } from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react'

interface Team {
  id: number;
  name: string;
  description: string;
}

const teams: Team[] = [
  { id: 1, name: "Media Team", description: "As a Photographer/Videographer, you will play a crucial role in making engaging content that reflects our club identity. Your responsibilities will include operating recording equipment, capturing high-quality footage, and collaborating with the creative team to develop compelling narratives. You will be responsible for creating video content to ensure it meets our standards and effectively communicates our message across various platforms. Please submit your work for review to demonstrate your skills and creativity." },
  { id: 2, name: "Content Creation Team", description: "As a Content Creator for our club, your primary responsibility will be to develop engaging scripts and concepts for reels and other short-form content that aligns with our club's mission. You will work closely with the social media team to brainstorm ideas and ensure captivating storytelling. Your creativity will play a vital role in enhancing our online presence and community engagement. Please submit your work for review to showcase your creativity and writing skills." },
  { id: 3, name: "Editing Team", description: "As a Video Editing Specialist for our club, you'll play a key role in bringing our video content to life. Your main responsibility will be to edit and enhance videos and work closely with both the media and social media teams to create engaging and visually appealing content that resonates with our audience. Your creativity and editing skills will be vital in boosting our online presence and fostering community engagement. Please submit your work for review by our team." },
  { id: 4, name: "Marketing Team", description: "As a member of the PR Marketing Team for our club, your primary responsibility will be to develop strategies and engage with other clubs to foster collaboration and share ideas. You'll work on crafting initiatives that enhance our club's visibility and build positive relationships within the community. Your role will involve communicating our initiatives and promoting our events to a broader audience. If you're enthusiastic about networking and have a passion for innovative solutions, we'd love to have you on board! Please submit your application for review." },
  { id: 5, name: "Poster and Logo Designer", description: "As a Poster and Logo Designer for our club, your main responsibility will be to create visually appealing posters and logos that effectively communicate our events and initiatives. Your artistic skills will play a crucial role in attracting attention and generating interest in our activities. If you have a passion for design and a flair for creativity, we'd love to see your work! Please submit your work for review." },
]

export default function HiringPage() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = (team: Team) => {
    setSelectedTeam(team)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setSelectedTeam(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Celestius</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">We're Hiring!</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">{team.name}</CardTitle> {/* Centered team name */}
              </CardHeader>
              <CardContent>
                <p className="mb-4">{team.description}</p>
                <br />
                <Button onClick={() => openForm(team)} className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>


      {isFormOpen && selectedTeam && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <form className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Apply for {selectedTeam.name}</h2>
                <Button variant="ghost" size="icon" onClick={closeForm}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="number">Phone Number</Label>
                <Input id="number" name="number" type="number" maxLength={10} minLength={10} required />
              </div>
              <div>
                <Label htmlFor="email">College Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="dept">Department</Label>
                <Input id="dept" name="dept" type="dept" required />
              </div>
              <div>
                <Label htmlFor="sec">Section</Label>
                <Input id="sec" name="sec" type="sec" required />
              </div>
              {(["Media Team", "Editing Team", "Poster and Logo Designer"].includes(selectedTeam.name)) && (
                <div>
                  <Label htmlFor="gdrive">Showcase Your Work</Label>
                  <Input
                    id="gdrive"
                    name="gdrive"
                    type="url"
                    placeholder="Upload Your Google Drive Link (Public View)"
                    required
                  />
                </div>
              )}
              {(["Marketing Team"].includes(selectedTeam.name)) && (
                <div>
                  <Label htmlFor="marq1">Have you previously been part of a marketing team? If so, what’s a marketing campaign you’ve been involved in and can you tell us what your role was and what you learned from the experience?</Label>
                  <Textarea
                    id="marq1"
                    name="marq1"
                    rows={5}
                    required
                  />
                  <Label htmlFor="marq2">When you think about connecting with an audience, what’s your go-to approach? How do you figure out what they really want or need?</Label>
                  <Textarea
                    id="marq2"
                    name="marq2"
                    rows={5}
                    required
                  />
                  <Label htmlFor="marq3">In your opinion, what’s the best way to get the word out about events in the tech community? Are there specific platforms or strategies you love to use, and why do you think they work?</Label>
                  <Textarea
                    id="marq3"
                    name="marq3"
                    rows={5}
                    required
                  />

                </div>
              )}
              {(["Content Creation Team"].includes(selectedTeam.name)) && (
                <div>
                  <Label htmlFor="contq">You are tasked with writing a script for the host of the inaugural event of our tech club, Celestius. The event will feature several key components that the host needs to cover. The audience will consist of students, faculty members,principal and chief guest(an industry professional), so the tone should be engaging yet professional.Note:As you write your script for the host during our club inauguration event, we want to emphasize the importance of authenticity. Your script should feel natural and engaging, reflecting a real conversation rather than a rehearsed or AI-generated speech. Aim for a warm and friendly tone that connects with the audience, making them feel included in the celebration of our club's launch.</Label>
                  <Textarea
                    id="contq"
                    name="contq"
                    rows={5}
                    required
                  />
                </div>
              )}
              <Button type="submit">Submit Application</Button>
            </form>
          </motion.div>
        </motion.div>
      )}

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}