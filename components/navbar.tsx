"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Watch Live", href: "/live" },
  { name: "Events", href: "/events" },
  { name: "School", href: "/school" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-6",
        // <CHANGE> Updated navbar styling for luxurious gold aesthetic with ivory background
        isScrolled ? "bg-card/95 backdrop-blur-xl border-b border-border/40 py-4 shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* <CHANGE> Updated logo to gold gradient circle */}
          <div className="w-12 h-12 bg-church rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform">
            <span className="font-serif">T</span>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-serif font-bold text-xl leading-none transition-colors",
                !isScrolled && pathname === "/" ? "text-white" : "text-foreground",
              )}
            >
              Treasured People
            </span>
            <span
              className={cn(
                "text-[9px] uppercase tracking-[0.2em] font-semibold transition-colors",
                !isScrolled && pathname === "/" ? "text-white/60" : "text-muted-foreground",
              )}
            >
              Church Worldwide
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full",
                pathname === item.href
                  ? "text-primary"
                  : !isScrolled && pathname === "/"
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/70 hover:text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          {/* <CHANGE> Updated button to gold gradient */}
          <Button asChild className="bg-church hover:opacity-90 transition-all shadow-md rounded-full px-6">
            <Link href="/live">Watch Live</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            !isScrolled && pathname === "/" ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // <CHANGE> Updated mobile menu styling
            className="absolute top-full left-0 w-full bg-card/98 backdrop-blur-xl border-b border-border/40 lg:hidden overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4 max-w-7xl mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold p-4 rounded-xl transition-colors",
                    pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full bg-church h-14 rounded-full text-base font-bold mt-2">
                <Link href="/give" onClick={() => setIsOpen(false)}>
                  Give Online
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
