"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    bg: "black",
    color: "white",
    icon: (
      <svg
        className="mb-4 text-4xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: "Discovery & Consultation",
    desc: "We start by understanding your business, goals, and challenges. Through in-depth consultation, we uncover your vision and define project objectives to ensure a tailored solution.",
    btn: "bg-orange-200 shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]",
  },
  {
    bg: "white",
    color: "black",
    icon: (
      <svg
        className="mb-4 text-4xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Strategy & Planning",
    desc: "Our team crafts a strategic roadmap, outlining timelines, deliverables, and success metrics. We align our approach with your business goals for maximum impact.",
    btn: "bg-blue-200 shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]",
  },
  {
    bg: "black",
    color: "white",
    icon: (
      <svg
        className="mb-4 text-4xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <path d="M12 20v-6M6 20v-4M18 20v-2" />
        <rect x="2" y="4" width="20" height="4" rx="2" />
      </svg>
    ),
    title: "Creative Design",
    desc: "We bring ideas to life with stunning visuals and intuitive user experiences. Our designers create prototypes and iterate based on your feedback, ensuring every detail is pixel-perfect.",
    btn: "bg-pink-200 shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]",
  },
  {
    bg: "white",
    color: "black",
    icon: (
      <svg
        className="mb-4 text-4xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4M8 3v4M2 11h20" />
      </svg>
    ),
    title: "Development & Testing",
    desc: "Our engineers build robust, scalable solutions using the latest technologies. Rigorous testing ensures flawless performance across all devices and platforms.",
    btn: "bg-green-200 shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]",
  },
  {
    bg: "black",
    color: "white",
    icon: (
      <svg
        className="mb-4 text-4xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
      >
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        <polyline points="7 9 12 4 17 9" />
        <line x1="12" y1="4" x2="12" y2="16" />
      </svg>
    ),
    title: "Launch & Ongoing Support",
    desc: "We launch your project with precision and provide ongoing support to help you grow. Our partnership doesn't end at launch—we're here to ensure your continued success.",
    btn: "bg-purple-200 shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]",
  },
];

export default function StickyProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    panelRefs.current = panelRefs.current.slice(0, steps.length);

    steps.forEach((_, i) => {
      const panel = panelRefs.current[i];
      if (!panel) return;

      gsap.to(panel, {
        y: () => -(panel.offsetHeight * i),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${panel.offsetHeight * steps.length}`,
          scrub: true,
          pin: false,
          onUpdate: (self) => {
            panel.style.visibility =
              self.progress * steps.length >= i ? "visible" : "hidden";
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-24 bg-white border-t" id="how-we-work">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-orange-500 text-center mb-16">
          How We Work
        </h2>
        <div
          className="relative"
          ref={containerRef}
          style={{ height: steps.length * 500 }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="sticky top-0 flex w-full flex-col items-center justify-center px-4"
              style={{
                height: 500,
                background: step.bg,
                color: step.color,
                zIndex: 10 - i,
              }}
            >
              {step.icon}
              <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
                {step.title}
              </h3>
              <p className="mb-8 max-w-lg text-center text-sm md:text-base">
                {step.desc}
              </p>
              <a
                href="#"
                className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${step.btn}`}
              >
                <span>Learn more</span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
