import { Calendar, MapPin, Clock, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const upcomingEvents = [
  {
    title: "12 Days Prayer & Fasting",
    date: "Jan 1 - Jan 12, 2025",
    time: "3:00 PM Daily",
    location: "Main Sanctuary & Online",
    category: "Special Program",
    image: "/nigerian-church-headquarters-modern.jpg",
  },
  {
    title: "Workers Retreat 2025",
    date: "Feb 15, 2025",
    time: "9:00 AM",
    location: "Church Hall",
    category: "Leadership",
    image: "/nigerian-pastor-preaching-sermon-.jpg",
  },
  {
    title: "Monthly Communion Service",
    date: "First Sunday Monthly",
    time: "7:30 AM",
    location: "Main Sanctuary",
    category: "Regular Service",
    image: "/nigerian-church-worship-hands-raised.jpg",
  },
]

export default function EventsPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 animate-fade-in">
          <div className="space-y-8 max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
              Calendar
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.95]">
              Upcoming <br />
              <span className="text-primary italic">Gatherings</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              Join us for special programs, retreats, and regular services that transform lives.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full gap-2 h-14 px-8 bg-transparent border-border text-base font-semibold"
          >
            <Filter size={18} /> Filter Events
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="group bg-card rounded-[3rem] overflow-hidden border border-border/40 hover:border-primary/20 transition-all shadow-sm hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-lg">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-10 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                      <Calendar size={18} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                      <Clock size={18} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                      <MapPin size={18} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-church hover:opacity-90 transition-all h-14 rounded-full font-bold group text-base">
                  RSVP & Details{" "}
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 bg-church rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-white text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--color-primary)_0%,transparent_50%)] opacity-30" />
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[0.95]">
              Have an Event
              <br />
              to Suggest?
            </h2>
            <p className="text-white/70 text-xl font-medium">
              Whether it's a community outreach or a special ministry meeting, we'd love to hear your ideas.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-12 h-20 font-serif font-bold text-lg shadow-xl"
            >
              Submit Proposal
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
