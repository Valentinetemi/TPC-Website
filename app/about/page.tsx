"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import * as React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const sidebarRef = useRef(null);
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-50px" });
  const [activeSection, setActiveSection] = React.useState("our-story");

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const coreValueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };

  const coreValuesRef = useRef(null);
  const coreValuesInView = useInView(coreValuesRef, {
    once: true,
    margin: "-50px",
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["our-story", "vision-mission", "our-beliefs"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "our-story", label: "Our Story" },
    { id: "vision-mission", label: "Vision & Mission" },
    { id: "our-beliefs", label: "Our Beliefs" },
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.aside
            ref={sidebarRef}
            initial="hidden"
            animate={sidebarInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full lg:w-1/4 lg:sticky lg:top-32 space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              Our Foundation
            </motion.div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    custom={i}
                    variants={navItemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-serif text-3xl cursor-pointer transition-all duration-300 text-left ${
                      isActive
                        ? "text-primary underline decoration-primary/30 decoration-2 underline-offset-8"
                        : "text-muted-foreground/50 hover:text-primary"
                    }`}
                    whileHover={!isActive ? { x: 5 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.aside>

          <main className="flex-1 space-y-16">
            <motion.header
              id="our-story"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-8xl font-serif font-bold leading-[0.95]"
              >
                A People <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-primary italic"
                >
                  Helped by God
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium"
              >
                Treasured People Church Worldwide Inc. was birthed through
                divine mandate to raise chosen treasures through the Word,
                Worship, and Warfare.
              </motion.p>
            </motion.header>

            <AnimatedSection>
              <motion.div
                variants={imageVariants}
                className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-border/20 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/nigerian-church-headquarters-modern.jpg"
                    alt="Church Headquarters"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </motion.div>
            </AnimatedSection>

            <motion.div
              id="vision-mission"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg leading-relaxed text-muted-foreground"
            >
              <motion.div variants={itemVariants} className="space-y-8">
                <motion.p
                  variants={textVariants}
                  className="font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Founded on October 19, 2008, in Kabba, Kogi State, Nigeria,
                  our journey began with a clear vision from the Lord to Pastor
                  Joseph Praise Olumodeji. What started as a small gathering has
                  grown into a global ministry impacting thousands of lives.
                </motion.p>
                <motion.p
                  variants={textVariants}
                  className="font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Our mandate is anchored on 1 Peter 2:9, believing that every
                  individual is a "Chosen Generation" and a "Royal Priesthood"
                  destined to show forth the praises of Him who called us out of
                  darkness.
                </motion.p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-8">
                <motion.p
                  variants={textVariants}
                  className="font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  We believe in the transformative power of the Holy Spirit and
                  the unadulterated Word of God. Through vibrant worship and
                  strategic spiritual warfare, we see captives set free and
                  destinies recovered.
                </motion.p>
                <motion.div
                  id="our-beliefs"
                  ref={coreValuesRef}
                  initial="hidden"
                  animate={coreValuesInView ? "visible" : "hidden"}
                  className="pt-8 border-t border-border/40"
                >
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      coreValuesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-serif font-bold text-foreground text-3xl mb-6"
                  >
                    Core Values
                  </motion.h4>
                  <ul className="space-y-4 text-base uppercase tracking-wide font-semibold">
                    {[
                      "Integrity in Ministry",
                      "Passion for Souls",
                      "Spiritual Excellence",
                    ].map((value, i) => (
                      <motion.li
                        key={value}
                        custom={i}
                        variants={coreValueVariants}
                        className="flex items-center gap-3 group cursor-default"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={
                            coreValuesInView
                              ? { scale: 1, rotate: 0 }
                              : { scale: 0, rotate: -180 }
                          }
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                        >
                          <ChevronRight
                            size={20}
                            className="text-primary group-hover:translate-x-1 transition-transform"
                          />
                        </motion.div>
                        <span>{value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
