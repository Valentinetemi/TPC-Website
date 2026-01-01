import { Button } from "@/components/ui/button"
import {
  Play,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Trophy,
  Landmark,
  Smartphone,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/nigerian-church-worship-hands-raised.jpg"
          alt="Worship"
          fill
          className="object-cover brightness-[0.4] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Watch Us Live Now
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif font-bold text-white tracking-tight leading-[0.9] max-w-6xl mx-auto">
            A People <br />
            <span className="italic font-light text-primary">Helped by God</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Raising Chosen Treasures through the Word, Worship, and Warfare. Join our mandate to impact lives globally.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              size="lg"   
              className="w-full sm:w-auto bg-church hover:opacity-90 text-white rounded-full px-12 h-20 text-xl shadow-2xl transition-all hover:scale-105 font-serif font-bold"
            >
              <Play className="mr-3 h-6 w-6 fill-current" />
              Watch Live
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-white/20 hover:bg-white/5 rounded-full px-12 h-20 text-xl backdrop-blur-sm bg-transparent transition-all hover:scale-105 font-serif font-bold"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <ChevronRight size={32} className="rotate-90" />
        </div>
      </section>

      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="space-y-12 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                Since 2008
              </div>
              <h2 className="text-5xl sm:text-7xl font-serif font-bold leading-[1.1]">
                A Legacy of <br />
                <span className="text-primary italic">Transformation</span>
              </h2>
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
            Treasured People Church Worldwide Inc. has been a beacon of spiritual transformation for over 17 years, committed to raising treasures and rescuing lives and families that walk in their divine inheritance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border/40 pt-12">
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-2xl">The Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                To raise a generation of chosen treasures and to rescue families through the Word, Worship, and Warfare.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-2xl text-secondary">The Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                To impact nations with the tangible power of God through righteousness and prayer and to rescue the families of the earth
                </p>
              </div>
            </div>

            <Button
              asChild
              variant="link"
              className="group p-0 text-xl font-serif font-bold text-foreground hover:text-primary transition-all"
            >
              <Link href="/about" className="flex items-center gap-3">
                Read Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border/20">
              <Image
                src="/Image1.jpeg"
                alt="Church Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-16 -left-16 hidden xl:block w-64 aspect-square bg-card p-10 rounded-[2.5rem] shadow-2xl border border-border/40">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-6xl font-serif font-bold text-primary">17</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mt-2">
                  Years of Divine Grace
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto space-y-24">
          <header className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">
              The Leadership
            </div>
            <h2 className="text-5xl sm:text-7xl font-serif font-bold">Guided by Spirit</h2>
            <p className="text-xl text-muted-foreground font-medium">
              Providing spiritual fatherhood and sound doctrine to every member of the Kingdom.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {[
              {
                name: "Apostle Joseph Praise Olumodeji",
                role: "General Overseer/ President ",
                image: "/Image2.jpeg",
              },
              {
                name: "Prophetess Love Ibukun Olumodeji",
                role: "Assistant President/Mother in Isreal",
                image: "/"
              },
            ].map((leader, i) => (
              <Link key={i} href="/leadership" className="group block space-y-8">
                <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[0.98]">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                    <span className="text-white font-serif italic text-xl">View Biography</span>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">{leader.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-border/20">
                  <Image src="/nigerian-school-children-learning.jpg" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-border/20">
                  <Image src="/school-classroom-library.jpg" alt="Library" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-6 pt-16">
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-border/20">
                  <Image src="/school-science-lab.jpg" alt="Lab" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-border/20">
                  <Image src="/nigerian-school-student-studying.jpg" alt="Studying" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em]">
              KINGDOM TREASURES CITADEL OF LEARNING SCHOOL
              </div>
              <h2 className="text-5xl sm:text-7xl font-serif font-bold leading-[1.1]">
                Raising <br />
                <span className="text-secondary italic">Champions</span>
              </h2>
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
              A holistic Christ-centered education that blends academic rigor with uncompromising godly character.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">Curriculum</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    National standards with heavy Biblical integration.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Trophy size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">Character</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nurturing world-changers with divine values.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 h-20 px-12 rounded-full text-lg font-serif font-bold shadow-xl transition-all hover:scale-105"
              >
                <Link href="/school">Enroll Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-20 px-12 rounded-full text-lg font-serif font-bold border-border shadow-sm transition-all hover:scale-105 bg-transparent"
              >
                Visit Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,oklch(0.45_0.15_25)_0%,transparent_50%)] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          <div className="lg:col-span-3 space-y-16">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                Stewardship
              </div>
              <h2 className="text-5xl sm:text-8xl font-serif font-bold text-white leading-[0.9]">
                Fuel the <br />
                <span className="italic text-accent">Mission</span>
              </h2>
              <p className="text-xl text-white/60 max-w-xl font-medium">
                Your seeds enable us to impact lives globally and expand the Kingdom across nations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Landmark, label: "Transfer" },
                { icon: Smartphone, label: "USSD" },
                { icon: CreditCard, label: "Online" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] flex flex-col items-center gap-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <item.icon size={32} className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-background h-20 px-16 rounded-full text-xl font-serif font-bold shadow-2xl transition-all hover:scale-105"
            >
              <Link href="/give">Giving Options</Link>
            </Button>
          </div>

          <div className="lg:col-span-2 bg-card/10 backdrop-blur-xl p-12 sm:p-16 rounded-[4rem] border border-white/10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-12">
              <h3 className="text-4xl font-serif font-bold">Contact</h3>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-white/40">Call Us</span>
                    <span className="text-xl font-bold">+234 8060749165</span>
                    <span className="text-xl font-bold">+2348038454195</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-white/40">Email</span>
                    <span className="text-xl font-bold">info@treasuredpeople.org</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-white/40">Location</span>
                    <span className="text-xl font-bold leading-tight">Kabba, Kogi State, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              asChild
              variant="link"
              className="group p-0 text-xl font-serif font-bold text-white mt-16 self-start"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Send a Message <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="bg-muted/50 p-12 rounded-[3rem] space-y-8 border border-border/40 hover:bg-card transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <h3 className="text-3xl font-serif font-bold">Sundays</h3>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-widest text-xs">Divine Encounter</p>
                <p className="text-xl font-medium">7:30 AM — 11:00 AM</p>
              </div>
            </div>

            <div className="bg-church p-12 rounded-[3rem] space-y-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <h3 className="text-3xl font-serif font-bold">Wednesdays</h3>
              <div className="space-y-2">
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Mid-Week Service</p>
                <p className="text-xl font-medium">5:00 PM</p>
              </div>
            </div>

            <div className="bg-muted/50 p-12 rounded-[3rem] space-y-8 border border-border/40 hover:bg-card transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h3 className="text-3xl font-serif font-bold">Daily Prayer</h3>
              <div className="space-y-2">
                <p className="text-secondary font-bold uppercase tracking-widest text-xs">Intercession</p>
                <p className="text-xl font-medium">3:00 PM — 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
