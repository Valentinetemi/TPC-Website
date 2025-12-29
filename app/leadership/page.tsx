import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

const leaders = [
  {
    name: "Pastor Joseph Praise Olumodeji",
    role: "General Overseer",
    bio: "A visionary leader with a heart for spiritual transformation and kingdom advancement, leading the mandate to raise chosen treasures since 2008.",
    image: "/nigerian-pastor-preaching-sermon-.jpg",
  },
  {
    name: "Pastor (Mrs) Olumodeji",
    role: "Co-Pastor",
    bio: "Dedicated to building strong families and nurturing the next generation of treasures through grace-filled leadership and spiritual mentorship.",
    image: "/nigerian-pastor-woman.jpg",
  },
]

export default function LeadershipPage() {
  return (
    <div className="pt-32 pb-32 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        <header className="max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            The Shepherds
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight leading-none">
            Guided by <span className="text-primary italic">Divine</span> Spirit
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            The leadership of Treasured People Church is committed to your spiritual growth and total well-being through
            spiritual fatherhood.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-10 bg-card p-8 sm:p-10 md:p-12 rounded-[3rem] border border-border/40 hover:border-primary/20 transition-all shadow-sm animate-fade-in h-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-border/20">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">{leader.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-medium">{leader.bio}</p>
                <div className="flex gap-4 md:gap-6 pt-4">
                  {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm"
                    >
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
