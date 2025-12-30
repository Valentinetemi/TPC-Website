import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SchoolPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                Education Wing
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.95]">
                Kingdom <br />
                <span className="text-primary italic">Treasure</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                Where character meets academic excellence. Raising godly leaders equipped to impact the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-church h-20 px-12 rounded-full text-lg font-serif font-bold shadow-xl transition-all hover:scale-105"
              >
                Apply for Admission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-20 px-12 rounded-full text-lg font-serif font-bold bg-transparent border-border transition-all hover:scale-105"
              >
                Download Brochure
              </Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-border/20 animate-slide-in-right">
            <Image
              src="/nigerian-school-children-learning.jpg"
              alt="School Environment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-32 mb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Curriculum",
                desc: "Blending national standards with Christian values for holistic development.",
              },
              {
                icon: Users,
                title: "Small Class",
                desc: "Personalized attention ensuring every child thrives academically.",
              },
              {
                icon: GraduationCap,
                title: "Character",
                desc: "Total child development rooted in godly principles and excellence.",
              },
              {
                icon: Trophy,
                title: "Excellence",
                desc: "A proven track record of outstanding academic achievements.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background p-10 rounded-[2.5rem] border border-border/40 hover:border-primary/20 hover:shadow-xl transition-all group"
              >
                <feature.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={36} />
                <h3 className="font-serif font-bold text-2xl mb-4">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                    <Image src="/nigerian-school-student-studying.jpg" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <Image src="/school-classroom-library.jpg" alt="Library" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <Image src="/school-science-lab.jpg" alt="Science Lab" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                    <Image src="/nigerian-school-sports-activity.jpg" alt="Sports" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Our Holistic <br />
                <span className="text-secondary">Approach to Learning</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Spiritual Foundation</h4>
                    <p className="text-muted-foreground">
                      Daily chapel sessions and scriptural integration in all subjects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Academic Rigor</h4>
                    <p className="text-muted-foreground">
                      A robust curriculum that prepares students for global challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Leadership Development</h4>
                    <p className="text-muted-foreground">
                      Nurturing confidence and character through extracurricular activities.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-14">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-church py-32 px-4 md:px-8 text-white text-center rounded-[4rem] mx-4 md:mx-8 mb-20 overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--color-primary)_0%,transparent_50%)] opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[0.95]">
            Enroll Your
            <br />
            Child Today
          </h2>
          <p className="text-white/70 text-xl font-medium">
            Admissions are currently open for the 2024/2025 academic session. Secure a treasure-filled future.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-12 h-20 text-lg font-serif font-bold shadow-xl"
            >
              Start Application
            </Button>
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-full px-12 h-20 text-lg font-serif font-bold"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
