import { Heart, Landmark, Smartphone, CreditCard, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const givingMethods = [
  {
    title: "Bank Transfer",
    icon: Landmark,
    details: [
      { label: "Bank Name", value: "Access Bank" },
      { label: "Account Name", value: "Treasured People Church Worldwide" },
      { label: "Account Number", value: "0012345678" },
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "USSD Code",
    icon: Smartphone,
    details: [
      { label: "Access Bank", value: "*901*000*0012345678*Amount#" },
      { label: "GTBank", value: "*737*32*Amount*6543#" },
    ],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Online / Card",
    icon: CreditCard,
    details: [
      { label: "Platform", value: "Paystack / Flutterwave" },
      { label: "Availability", value: "Instant Receipt" },
    ],
    color: "bg-primary/10 text-primary",
  },
]

export default function GivePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-16 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            Stewardship
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Partner with <span className="text-primary italic">Our Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your generous seeds and offerings help us impact lives globally through the Word, Worship, and Warfare.
            Together, we are raising treasures for the Kingdom.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {givingMethods.map((method, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col group"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                  method.color,
                )}
              >
                <method.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6">{method.title}</h3>
              <div className="space-y-4 flex-1">
                {method.details.map((detail, j) => (
                  <div key={j} className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="font-mono text-sm break-all font-bold text-foreground">{detail.value}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-8 rounded-full bg-church font-bold">
                {method.title.includes("Online") ? "Give Online" : "Copy Details"}
              </Button>
            </div>
          ))}
        </div>

        <section className="bg-muted/30 p-10 md:p-16 rounded-[3rem] border border-primary/5">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-church flex items-center justify-center text-white shadow-lg">
                <Info size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Why We Give</h2>
              <p className="text-muted-foreground leading-relaxed">
                Giving is an act of worship and a recognition of God's sovereignty over our lives and resources. At
                Treasured People Church, we believe that when we give, we are positioning ourselves for divine
                multiplication and ensuring the work of the ministry continues unhindered.
              </p>
              <div className="italic text-primary font-medium">"Honor the LORD with your wealth..." — Proverbs 3:9</div>
            </div>
            <div className="flex-1 bg-card p-8 rounded-3xl border shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Heart size={20} className="text-primary animate-pulse" /> Areas of Impact
              </h3>
              <ul className="space-y-4">
                {[
                  "Global Evangelism & Outreaches",
                  "Kingdom Treasure People School Development",
                  "Media & Digital Ministry Expansion",
                  "Community Welfare & Support Programs",
                  "Church Building & Infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground group/item">
                    <ChevronRight
                      size={16}
                      className="text-primary group-hover/item:translate-x-1 transition-transform"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
