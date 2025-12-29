import { Play, MessageCircle, Users, Share2, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function LivePage() {
  return (
    <div className="pt-32 pb-32 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Player Area */}
          <div className="flex-1 space-y-8">
            <div className="relative aspect-video bg-black rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border/20 group">
              <Image
                src="/nigerian-church-worship-hands-raised.jpg"
                alt="Live Stream"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="w-24 h-24 rounded-full bg-church hover:opacity-90 shadow-2xl transition-all hover:scale-110"
                >
                  <Play fill="white" size={40} className="ml-1" />
                </Button>
              </div>
              <div className="absolute top-8 left-8 flex gap-4">
                <div className="bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-2 animate-pulse shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  LIVE NOW
                </div>
                <div className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                  <Users size={14} /> 1,240 Watching
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Sunday Service: Walking in Divine Purpose</h1>
                <p className="text-muted-foreground flex items-center gap-3 text-lg font-medium">
                  <span className="font-bold text-primary">Pastor Joseph Praise Olumodeji</span>
                  <span>•</span>
                  <span>Treasured People Church HQ</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full gap-2 h-14 px-8 bg-transparent border-border font-semibold"
                >
                  <Share2 size={18} /> Share
                </Button>
                <Button size="lg" className="rounded-full gap-2 h-14 px-8 bg-church font-semibold">
                  <Calendar size={18} /> Remind Me
                </Button>
              </div>
            </div>

            <div className="p-10 bg-card rounded-[2.5rem] border border-border/40 space-y-6 shadow-sm">
              <h3 className="font-serif font-bold text-2xl">About this Session</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-medium">
                Join us for a life-transforming session as we dive deep into the Word of God. Today's message focuses on
                discovering the treasures within you and how to navigate life's challenges through spiritual warfare and
                unwavering faith.
              </p>
            </div>
          </div>

          {/* Chat / Sidebar area */}
          <aside className="w-full lg:w-96 flex flex-col gap-8">
            <div className="flex-1 bg-card rounded-[3rem] border border-border/40 flex flex-col overflow-hidden shadow-sm h-[600px] lg:h-auto">
              <div className="p-6 border-b bg-muted/30 flex items-center justify-between">
                <h3 className="font-serif font-bold text-xl flex items-center gap-3">
                  <MessageCircle size={20} className="text-primary" /> Live Chat
                </h3>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  248 Messages
                </span>
              </div>
              <div className="flex-1 p-6 space-y-6 overflow-y-auto font-sans">
                {[
                  { user: "Emmanuel K.", msg: "Amen! Power of God is here.", color: "text-blue-500" },
                  { user: "Blessing O.", msg: "Greetings from Lagos! 🙌", color: "text-purple-500" },
                  {
                    user: "Church Admin",
                    msg: "Welcome everyone! Feel free to share your prayer requests.",
                    color: "text-primary",
                    isAdmin: true,
                  },
                  { user: "Sister Ruth", msg: "This message is for me. Thank you Pastor!", color: "text-green-500" },
                ].map((chat, i) => (
                  <div key={i} className="flex gap-4 text-sm">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold">
                      {chat.user[0]}
                    </div>
                    <div>
                      <span className={cn("font-bold mr-2", chat.color)}>{chat.user}</span>
                      <span className="text-muted-foreground">{chat.msg}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t bg-muted/10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Say something..."
                    className="w-full bg-background border border-border rounded-full px-6 py-4 pr-14 text-base focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-2 h-10 w-10 rounded-full text-primary"
                  >
                    <Share2 size={18} className="rotate-45" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-10 bg-church rounded-[3rem] text-white space-y-6 shadow-2xl">
              <h4 className="font-serif font-bold text-2xl flex items-center gap-3">
                <Heart size={22} /> Support Ministry
              </h4>
              <p className="text-sm text-white/70 leading-relaxed font-medium">
                Your seeds and offerings help us reach more souls globally. Give securely online today.
              </p>
              <Button variant="secondary" className="w-full h-14 rounded-full font-bold text-base">
                Give Online Now
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
