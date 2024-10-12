"use client"

import { useState } from 'react'
import Link from "next/link"
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
  { id: 1, name: "Frontend Development", description: "Build user interfaces with React and Next.js" },
  { id: 2, name: "Backend Development", description: "Develop server-side logic and APIs" },
  { id: 3, name: "DevOps", description: "Manage infrastructure and deployment pipelines" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{team.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{team.description}</p>
                <Button onClick={() => openForm(team)}>Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {isFormOpen && selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="resume">Resume</Label>
                <Input id="resume" name="resume" type="file" required />
              </div>
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea id="coverLetter" name="coverLetter" required />
              </div>
              <Button type="submit">Submit Application</Button>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}