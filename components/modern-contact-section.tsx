import React from "react";
import Image from "next/image";

export default function ModernContactSection() {
  return (
    <section className="w-full py-24 bg-white flex justify-center items-center">
      <div className="rounded-[48px] bg-neutral-50 shadow-xl max-w-7xl w-full mx-auto px-6 py-16 flex flex-col items-center">
        {/* Status badge */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs tracking-widest">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2 inline-block"></span>
            AVAILABLE NOW
          </span>
        </div>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Interested in{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-2 rounded">
              working together?
            </span>
          </span>
        </h2>
        {/* Subheading */}
        <p className="text-lg text-gray-600 text-center mb-10 max-w-xl">
          Let&apos;s talk and explore the endless possibilities for your
          business success.
          <br />
          Book a call today for a free consultation.
        </p>
        {/* Circular Button with Logo and Rotating Text */}
        <div className="flex flex-col items-center mb-10">
          <button className="group relative grid h-[220px] w-[220px] place-content-center rounded-full border-2 border-orange-500 transition-colors duration-700 ease-out bg-white shadow-lg overflow-hidden">
            {/* Rotating Circular text - perfectly centered and in front of hover effect */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                className="animate-spin-slow"
              >
                <path
                  id="circlePath"
                  d="M90,90 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0"
                  fill="none"
                ></path>
                <text>
                  <textPath
                    href="#circlePath"
                    startOffset="0"
                    className="fill-orange-500 text-base font-semibold uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                  >
                    Get a Free Quote - Get in Touch • Get a Free Quote - Get in
                    Touch
                  </textPath>
                </text>
              </svg>
            </span>
            {/* Company Logo in center */}
            <span className="relative z-30 flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="Company Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </span>
            {/* Expanding white background on hover */}
            <div className="pointer-events-none absolute inset-0 z-10 scale-0 rounded-full bg-orange-100 transition-transform duration-700 ease-out group-hover:scale-100"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS or Tailwind config:
// .animate-spin-slow { animation: spin 8s linear infinite; }
// @keyframes spin { 100% { transform: rotate(360deg); } }
