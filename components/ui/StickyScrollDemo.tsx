"use client";

const steps = [
  {
    bg: "bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300",
    color: "text-orange-900",
    icon: (
      <svg
        className="mb-4 text-4xl text-orange-400"
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
  },
  {
    bg: "bg-white border-2 border-orange-200",
    color: "text-orange-700",
    icon: (
      <svg
        className="mb-4 text-4xl text-orange-400"
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
  },
  {
    bg: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
    color: "text-white",
    icon: (
      <svg
        className="mb-4 text-4xl text-white"
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
  },
  {
    bg: "bg-white border-2 border-orange-300",
    color: "text-orange-800",
    icon: (
      <svg
        className="mb-4 text-4xl text-orange-400"
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
  },
  {
    bg: "bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500",
    color: "text-white",
    icon: (
      <svg
        className="mb-4 text-4xl text-white"
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
  },
];

export default function StickyScrollDemo() {
  const cardHeight = 500;
  return (
    <section className="w-full py-24 bg-white border-t" id="sticky-demo">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
          How We Work
        </h2>
        <div
          className="relative"
          style={{ height: steps.length * cardHeight, marginTop: "120px" }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className={`sticky top-0 flex flex-col w-full items-center justify-center px-4 ${step.bg} ${step.color}`}
              style={{
                height: cardHeight,
                zIndex: i + 1,
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {step.icon}
              <h3 className="mb-6 text-3xl md:text-5xl font-semibold">
                {step.title}
              </h3>
              <p
                className="mb-8 max-w-lg mx-auto text-base md:text-lg font-normal"
                style={{ fontWeight: 400, fontSize: "1.1rem" }}
              >
                {step.desc}
              </p>
              <button className="relative z-0 flex items-center gap-2 overflow-hidden rounded-full border-[1px] border-orange-500 px-4 py-2 font-bold text-base capitalize text-white bg-orange-500 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-orange-600 before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:bg-orange-600 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
