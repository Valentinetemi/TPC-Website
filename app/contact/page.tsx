import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold">
            Get in <span className="text-primary italic">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Have a question, prayer request, or testimony? We'd love to hear from you. Our team is here to support you
            in any way we can.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-card rounded-3xl border border-primary/5 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">+234 (0) 803 123 4567</p>
                  <p className="text-muted-foreground text-sm">+234 (0) 805 987 6543</p>
                </div>
              </div>
              <div className="p-8 bg-card rounded-3xl border border-primary/5 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">info@treasuredpeople.org</p>
                  <p className="text-muted-foreground text-sm">prayer@treasuredpeople.org</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-church rounded-[2.5rem] text-white space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold">Visit Us</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium">Headquarters</p>
                <p className="text-white/80 leading-relaxed">
                  Opposite General Hospital, <br />
                  Kabba, Kogi State, <br />
                  Nigeria.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button size="icon" variant="secondary" className="rounded-xl">
                  <Facebook size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-xl">
                  <Twitter size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-xl">
                  <Instagram size={20} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-xl">
                  <Youtube size={20} />
                </Button>
              </div>
            </div>
          </div>

          <form className="bg-card p-10 rounded-[3rem] border border-primary/5 shadow-2xl space-y-8">
            <h3 className="text-3xl font-serif font-bold text-foreground">Send a Message</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    className="rounded-xl bg-muted/50 border-transparent focus:bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <Input
                    placeholder="john@example.com"
                    className="rounded-xl bg-muted/50 border-transparent focus:bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                <Input
                  placeholder="Prayer Request / General Inquiry"
                  className="rounded-xl bg-muted/50 border-transparent focus:bg-background"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  className="min-h-[150px] rounded-2xl bg-muted/50 border-transparent focus:bg-background"
                />
              </div>
            </div>
            <Button className="w-full bg-church h-14 rounded-full font-bold text-lg shadow-xl shadow-primary/20">
              <Send size={18} className="mr-2" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
