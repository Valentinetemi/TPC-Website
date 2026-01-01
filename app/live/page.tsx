"use client"

import { Play, Bell, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function LivePage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the email to a backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setEmail("")
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-32 pb-32 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Coming Soon
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold leading-tight">
            Watch Live <br />
            <span className="text-primary italic">Coming Soon!</span>
            <span className="inline-block ml-4">🎥✨</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            We're excited to bring you live streaming of our services very soon! Stay connected and join us from
            anywhere for worship, teaching, and fellowship.
          </p>

          {/* Image placeholder */}
          <div className="relative w-full max-w-4xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border/20 group mt-8">
            <Image
              src="/nigerian-church-worship-hands-raised.jpg"
              alt="Worship Service"
              fill
              className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
              <div className="w-32 h-32 rounded-full bg-church/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play fill="white" size={48} className="ml-2" />
              </div>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="w-full max-w-md mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-card border-2 border-border rounded-full px-8 py-6 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-church hover:opacity-90 text-white rounded-full h-16 text-lg shadow-xl transition-all hover:scale-105 font-serif font-bold gap-3"
              >
                <Bell size={22} />
                {submitted ? "Thank You! 🎉" : "Notify Me When Live"}
              </Button>
            </form>
            {submitted && (
              <p className="mt-4 text-sm text-primary font-medium animate-fade-in">
                We'll notify you as soon as live streaming is available!
              </p>
            )}
          </div>

          {/* Additional info */}
          <div className="pt-12 border-t border-border/40 w-full max-w-2xl">
            <p className="text-muted-foreground leading-relaxed">
              Follow us on social media or visit us in person at{" "}
              <span className="font-semibold text-foreground">Treasured People Church HQ</span> in Kabba, Kogi State,
              Nigeria for our weekly services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
