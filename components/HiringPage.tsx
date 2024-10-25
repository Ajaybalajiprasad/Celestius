// "use client";

// import { useState } from 'react';
// import Link from "next/link";
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { X } from "lucide-react";  // Close icon
// import { db } from "@/lib/firebase"; // Ensure the path is correct
// import { collection, addDoc, Timestamp } from "firebase/firestore";

// interface Team {
//   id: number;
//   name: string;
//   description: string;
// }

// const teams: Team[] = [
//   { id: 1, name: "Media Team", description: "As a Photographer/Videographer, you will play a crucial role in making engaging content that reflects our club identity. Your responsibilities will include operating recording equipment, capturing high-quality footage, and collaborating with the creative team to develop compelling narratives. You will be responsible for creating video content to ensure it meets our standards and effectively communicates our message across various platforms. Please submit your work for review to demonstrate your skills and creativity." },
//   { id: 2, name: "Content Creation Team", description: "As a Content Creator for our club, your primary responsibility will be to develop engaging scripts and concepts for reels and other short-form content that aligns with our club's mission. You will work closely with the social media team to brainstorm ideas and ensure captivating storytelling. Your creativity will play a vital role in enhancing our online presence and community engagement. Please submit your work for review to showcase your creativity and writing skills." },
//   { id: 3, name: "Editing Team", description: "As a Video Editing Specialist for our club, you'll play a key role in bringing our video content to life. Your main responsibility will be to edit and enhance videos and work closely with both the media and social media teams to create engaging and visually appealing content that resonates with our audience. Your creativity and editing skills will be vital in boosting our online presence and fostering community engagement. Please submit your work for review by our team." },
//   { id: 4, name: "Marketing Team", description: "As a member of the PR Marketing Team for our club, your primary responsibility will be to develop strategies and engage with other clubs to foster collaboration and share ideas. You'll work on crafting initiatives that enhance our club's visibility and build positive relationships within the community. Your role will involve communicating our initiatives and promoting our events to a broader audience. If you're enthusiastic about networking and have a passion for innovative solutions, we'd love to have you on board! Please submit your application for review." },
//   { id: 5, name: "Poster and Logo Designer", description: "As a Poster and Logo Designer for our club, your main responsibility will be to create visually appealing posters and logos that effectively communicate our events and initiatives. Your artistic skills will play a crucial role in attracting attention and generating interest in our activities. If you have a passion for design and a flair for creativity, we'd love to see your work! Please submit your work for review." },
// ];

// export default function HiringPage() {
//   const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     number: '',
//     email: '',
//     dept: '',
//     sec: '',
//     gdrive: '',
//     marq1: '',
//     marq2: '',
//     marq3: '',
//     contq: '',
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [success, setSuccess] = useState<boolean>(false);

//   const openForm = (team: Team) => {
//     setSelectedTeam(team);
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//     setSelectedTeam(null);
//     setFormData({
//       name: '',
//       number: '',
//       email: '',
//       dept: '',
//       sec: '',
//       gdrive: '',
//       marq1: '',
//       marq2: '',
//       marq3: '',
//       contq: '',
//     });
//     setErrors({});
//     setSuccess(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     // Remove error message as user types
//     setErrors({
//       ...errors,
//       [e.target.name]: '',
//     });
//   };

//   const validate = (): boolean => {
//     const newErrors: { [key: string]: string } = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.number.trim()) {
//       newErrors.number = "Phone Number is required.";
//     } else if (!/^\d{10}$/.test(formData.number.trim())) {
//       newErrors.number = "Phone Number must be exactly 10 digits.";
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "College Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!formData.dept.trim()) newErrors.dept = "Department is required.";
//     if (!formData.sec.trim()) newErrors.sec = "Section is required.";

//     // Conditional validations
//     if (["Media Team", "Editing Team", "Poster and Logo Designer"].includes(selectedTeam?.name || "")) {
//       if (!formData.gdrive.trim()) {
//         newErrors.gdrive = "Google Drive link is required.";
//       } else if (!/^https?:\/\/.+/.test(formData.gdrive.trim())) {
//         newErrors.gdrive = "Invalid URL format.";
//       }
//     }

//     if (selectedTeam?.name === "Marketing Team") {
//       if (!formData.marq1.trim()) newErrors.marq1 = "This field is required.";
//       if (!formData.marq2.trim()) newErrors.marq2 = "This field is required.";
//       if (!formData.marq3.trim()) newErrors.marq3 = "This field is required.";
//     }

//     if (selectedTeam?.name === "Content Creation Team") {
//       if (!formData.contq.trim()) newErrors.contq = "This field is required.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission
//     if (!selectedTeam) return;

//     if (!validate()) {
//       return; // Stop submission if validation fails
//     }

//     try {
//       const teamCollectionRef = collection(db, selectedTeam.name.toString());

//       await addDoc(teamCollectionRef, {
//         teamId: selectedTeam.id,
//         teamName: selectedTeam.name,
//         ...formData,
//         submittedAt: Timestamp.now(),
//       });

//       setSuccess(true);
//       // Optionally, keep the modal open to show success message before closing
//       setTimeout(closeForm, 1500);
//     } catch (err) {
//       console.error("Error adding document: ", err);
//       setErrors({ submit: "There was an error submitting your application. Please try again." });
//     }
//   };

//   // Optional: Disable submit button if form is incomplete
//   const isFormValid = (): boolean => {
//     // Check required fields based on selected team
//     if (
//       !formData.name.trim() ||
//       !formData.number.trim() ||
//       !formData.email.trim() ||
//       !formData.dept.trim() ||
//       !formData.sec.trim()
//     ) {
//       return false;
//     }

//     if (["Media Team", "Editing Team", "Poster and Logo Designer"].includes(selectedTeam?.name || "")) {
//       if (!formData.gdrive.trim()) return false;
//     }

//     if (selectedTeam?.name === "Marketing Team") {
//       if (!formData.marq1.trim() || !formData.marq2.trim() || !formData.marq3.trim()) return false;
//     }

//     if (selectedTeam?.name === "Content Creation Team") {
//       if (!formData.contq.trim()) return false;
//     }

//     return true;
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !isFormValid()) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
//         <Link href="/" className="flex items-center gap-2" prefetch={false}>
//           <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
//           <span className="text-xl font-bold">Celestius</span>
//         </Link>
//         <nav className="flex items-center gap-6">
//           <Link href="/" className="hover:underline underline-offset-4">Home</Link>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">We're Hiring!</h1>
//         <div className="flex flex-wrap justify-center gap-6">
//           {teams.map((team) => (
//             <Card key={team.id} className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <CardTitle className="text-center">{team.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="mb-4">{team.description}</p>
//                 <Button onClick={() => openForm(team)} className="w-full">
//                   Apply Now
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </main>

//       {/* Form Modal */}
//       <AnimatePresence>
//         {isFormOpen && selectedTeam && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-background p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             >
//               <form className="space-y-4" onSubmit={handleSubmit} noValidate onKeyDown={handleKeyDown}>
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-2xl font-bold">Apply for {selectedTeam.name}</h2>
//                   <Button variant="ghost" size="icon" onClick={closeForm}>
//                     <X className="h-4 w-4" />
//                     <span className="sr-only">Close</span>
//                   </Button>
//                 </div>
                
//                 {/* Form Fields */}
//                 <div>
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                 </div>
//                 <div>
//                   <Label htmlFor="number">Phone Number</Label>
//                   <Input
//                     id="number"
//                     name="number"
//                     type="tel"
//                     pattern="\d{10}"
//                     value={formData.number}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
//                 </div>
//                 <div>
//                   <Label htmlFor="email">College Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                 </div>
//                 <div>
//                   <Label htmlFor="dept">Department</Label>
//                   <Input
//                     id="dept"
//                     name="dept"
//                     type="text"
//                     value={formData.dept}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.dept && <p className="text-red-500 text-sm">{errors.dept}</p>}
//                 </div>
//                 <div>
//                   <Label htmlFor="sec">Section</Label>
//                   <Input
//                     id="sec"
//                     name="sec"
//                     type="text"
//                     value={formData.sec}
//                     onChange={handleChange}
//                     required
//                   />
//                   {errors.sec && <p className="text-red-500 text-sm">{errors.sec}</p>}
//                 </div>

//                 {/* Conditional Fields */}
//                 {["Media Team", "Editing Team", "Poster and Logo Designer"].includes(selectedTeam.name) && (
//                   <div>
//                     <Label htmlFor="gdrive">Showcase Your Work</Label>
//                     <Input
//                       id="gdrive"
//                       name="gdrive"
//                       type="url"
//                       placeholder="Upload Your Google Drive Link (Public View)"
//                       value={formData.gdrive}
//                       onChange={handleChange}
//                       required
//                     />
//                     {errors.gdrive && <p className="text-red-500 text-sm">{errors.gdrive}</p>}
//                   </div>
//                 )}

//                 {selectedTeam.name === "Marketing Team" && (
//                   <div>
//                     <Label htmlFor="marq1">
//                       Have you previously been part of a marketing team? If so, what’s a marketing campaign you’ve been involved in and can you tell us what your role was and what you learned from the experience?
//                     </Label>
//                     <Textarea
//                       id="marq1"
//                       name="marq1"
//                       rows={5}
//                       value={formData.marq1}
//                       onChange={handleChange}
//                       required
//                     />
//                     {errors.marq1 && <p className="text-red-500 text-sm">{errors.marq1}</p>}

//                     <Label htmlFor="marq2">
//                       When you think about connecting with an audience, what’s your go-to approach? How do you figure out what they really want or need?
//                     </Label>
//                     <Textarea
//                       id="marq2"
//                       name="marq2"
//                       rows={5}
//                       value={formData.marq2}
//                       onChange={handleChange}
//                       required
//                     />
//                     {errors.marq2 && <p className="text-red-500 text-sm">{errors.marq2}</p>}

//                     <Label htmlFor="marq3">
//                       In your opinion, what’s the best way to get the word out about events in the tech community? Are there specific platforms or strategies you love to use, and why do you think they work?
//                     </Label>
//                     <Textarea
//                       id="marq3"
//                       name="marq3"
//                       rows={5}
//                       value={formData.marq3}
//                       onChange={handleChange}
//                       required
//                     />
//                     {errors.marq3 && <p className="text-red-500 text-sm">{errors.marq3}</p>}
//                   </div>
//                 )}

//                 {selectedTeam.name === "Content Creation Team" && (
//                   <div>
//                     <Label htmlFor="contq">
//                       You are tasked with writing a script for the host of the inaugural event of our tech club, Celestius. The event will feature several key components that the host needs to cover. The audience will consist of students, faculty members, principal and chief guest (an industry professional), so the tone should be engaging yet professional. **Note:** As you write your script for the host during our club inauguration event, we want to emphasize the importance of authenticity. Your script should feel natural and engaging, reflecting a real conversation rather than a rehearsed or AI-generated speech. Aim for a warm and friendly tone that connects with the audience, making them feel included in the celebration of our club's launch.
//                     </Label>
//                     <Textarea
//                       id="contq"
//                       name="contq"
//                       rows={5}
//                       value={formData.contq}
//                       onChange={handleChange}
//                       required
//                     />
//                     {errors.contq && <p className="text-red-500 text-sm">{errors.contq}</p>}
//                   </div>
//                 )}

//                 {errors.submit && <p className="text-red-500">{errors.submit}</p>}
//                 {success && <p className="text-green-500">Your application has been submitted successfully!</p>}

//                 <Button type="submit" disabled={!isFormValid()}>
//                   Submit Application
//                 </Button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
//         <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
//       </footer>
//     </div>
//   );
//  }

// "use client"

// import { useEffect, useState, useRef } from 'react'
// import Link from "next/link"
// import { motion, useMotionValue, useTransform } from 'framer-motion'
// import { Card, CardContent } from "@/components/ui/card"

// export default function HiringPage() {
//   const [isLoading, setIsLoading] = useState(true)
//   const constraintsRef = useRef(null)

//   const x = useMotionValue(0)
//   const y = useMotionValue(0)
//   const rotateX = useTransform(y, [-100, 100], [30, -30])
//   const rotateY = useTransform(x, [-100, 100], [-30, 30])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 2000) // Simulating a 2-second loading time

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Header */}
//       <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
//         <Link href="/" className="flex items-center gap-2" prefetch={false}>
//           <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
//           <span className="text-xl font-bold">Celestius</span>
//         </Link>
//         <nav className="flex items-center gap-6">
//           <Link href="/" className="hover:underline underline-offset-4">Home</Link>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center p-4" ref={constraintsRef}>
//         <motion.div
//           drag
//           dragConstraints={constraintsRef}
//           style={{
//             x,
//             y,
//             rotateX,
//             rotateY,
//             z: 100,
//           }}
//           className="w-full max-w-md mx-auto perspective-1000"
//         >
//           <Card className="w-full">
//             <CardContent className="p-6 text-center">
//               {isLoading ? (
//                 <motion.div
//                   className="flex justify-center items-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 >
//                   <motion.div
//                     className="w-16 h-16 border-t-4 border-primary rounded-full"
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                   />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <h1 className="text-3xl font-bold mb-4">Hiring Currently Closed</h1>
//                   <p className="text-muted-foreground mb-4">
//                     Thank you for your interest in joining Celestius. We are not accepting applications at this time. Please check back later for future opportunities. 
//                   </p>
//                   <p>
//                   (P.S.  Feel free to drag this box around)
//                   </p>
//                   <Link href="/" className="inline-block mt-6 font-bold text-primary-foreground hover:underline">
//                     Return to Home
//                   </Link>
//                 </motion.div>
//               )}
//             </CardContent>
//           </Card>
//         </motion.div>
//       </main>

//       <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
//         <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

"use client"

import { useEffect, useState, useRef } from 'react'
import Link from "next/link"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

export default function HiringPage() {
  const [isLoading, setIsLoading] = useState(true)
  const constraintsRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // Loading duration in milliseconds (currently set to 2 seconds)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <img src="/icon.jpg" alt="Celestius Icon" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Celestius</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4" ref={constraintsRef}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
          }}
          className="w-full max-w-md mx-auto perspective-1000"
        >
          <Card className="w-full">
            <CardContent className="p-6 text-center">
              {isLoading ? (
                <motion.div
                  className="flex flex-col justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-16 h-16 border-t-4 border-primary rounded-full mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg font-semibold text-primary-foreground  "
                  >
                    Irunga Bhaii ..
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold mb-4">Hiring Currently Closed</h1>
                  <p className="text-muted-foreground mb-4">
                    Thank you for your interest in joining Celestius. We are not accepting applications at this time. Please check back later for future opportunities.
                  </p>
                  <Link href="/" className="inline-block mt-6 font-bold text-primary-foreground hover:underline">
                    Return to Home
                  </Link>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6 text-center">
        <p className="text-sm">&copy; 2024 Club Celestius. All rights reserved.</p>
      </footer>
    </div>
  )
}