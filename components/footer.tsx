import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-church rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              <span className="font-serif">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight">Treasured People</span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                Church Worldwide
              </span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            "Raising Chosen Treasures" — A global mandate to transform lives through the power of the Word, Worship, and
            Warfare.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all border border-border/50 shadow-sm"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold text-xl mb-8">Ministry</h4>
          <ul className="space-y-4 text-sm font-medium">
            {[
              { name: "Our Vision", href: "/about" },
              { name: "Leadership", href: "/leadership" },
              { name: "Events", href: "/events" },
              { name: "Watch Live", href: "/live" },
              { name: "Give Online", href: "/give" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-xl mb-8">Worship</h4>
          <ul className="space-y-5 text-sm font-medium text-muted-foreground">
            <li className="flex flex-col gap-1">
              <span className="text-foreground font-bold">Sunday Service</span>
              <span className="text-xs uppercase tracking-wider text-primary">7:30 AM — 11:00 AM</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-foreground font-bold">Wednesday Service</span>
              <span className="text-xs uppercase tracking-wider text-primary">5:00 PM</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-foreground font-bold">Daily Prayer</span>
              <span className="text-xs uppercase tracking-wider text-primary">3:00 PM — 5:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-xl mb-8">Connect</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4 items-start text-muted-foreground">
              <MapPin size={20} className="text-primary shrink-0" />
              <span className="leading-relaxed">Kabba, Kogi State, Nigeria</span>
            </li>
            <li className="flex gap-4 items-center text-muted-foreground">
              <Phone size={20} className="text-primary shrink-0" />
              <span className="font-semibold">+234 800 000 0000</span>
            </li>
            <li className="flex gap-4 items-center text-muted-foreground">
              <Mail size={20} className="text-primary shrink-0" />
              <span className="font-semibold">info@treasuredpeople.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
        <p>© 2025 Treasured People Church Worldwide Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
