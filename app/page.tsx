"use client";
import Image from "next/image";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { FlipWords } from "@/components/ui/flip-words";
import TrustedCompanies from "@/components/ui/TrustedCompanies";
import StickyScrollDemo from "@/components/ui/StickyScrollDemo";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import BentoGridSecondDemo from "@/components/bento-grid-demo-2";
import BlogSection from "@/components/blog-section";
import ModernContactSection from "@/components/modern-contact-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Modern Navbar */}
      <NavbarDemo />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white">
        <div className="px-4 flex flex-col items-center gap-4 w-full text-center relative z-10 pb-32">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight max-w-4xl mx-auto text-gray-900">
            We Believe In{" "}
            <FlipWords
              words={[
                "Success",
                "Growth",
                "Results",
                "Quality",
                "Trust",
                "Reliability",
              ]}
              className="text-orange-500"
            />{" "}
            With Every Step We Take
          </h1>
          <h2 className="text-xl sm:text-2xl font-light leading-tight max-w-3xl mx-auto text-gray-400">
            Transforming ideas into digital excellence through innovation and
            expertise
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <button className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-orange-500 hover:pl-2 hover:text-white active:bg-orange-600">
              <span className="rounded-full bg-orange-500 p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-orange-500 group-active:-rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span>Get a Free Quote</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <TrustedCompanies />
        </div>
      </section>

      {/* About section removed */}

      {/* Services Section */}
      <section className="w-full py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
            Maximize Your Potential with Our Online Solutions
          </h2>
          <BentoGridSecondDemo />
        </div>
      </section>

      <StickyScrollDemo />

      {/* Project Previews */}
      <section className="w-full py-20 bg-white" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <AppleCardsCarouselDemo />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Awards Section - improved and moved below testimonials */}
      <section className="w-full py-16 bg-gradient-to-b from-orange-50 to-white border-t shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">
            Awards and Accolades
          </h3>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <Image
              src="/award1.png"
              alt="Award 1"
              width={120}
              height={120}
              className="object-contain drop-shadow-lg"
            />
            <Image
              src="/award2.png"
              alt="Award 2"
              width={120}
              height={120}
              className="object-contain drop-shadow-lg"
            />
            <Image
              src="/award3.png"
              alt="Award 3"
              width={120}
              height={120}
              className="object-contain drop-shadow-lg"
            />
            <Image
              src="/award4.png"
              alt="Award 4"
              width={120}
              height={120}
              className="object-contain drop-shadow-lg"
            />
            <Image
              src="/award5.png"
              alt="Award 5"
              width={120}
              height={120}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="w-full py-16 bg-gray-50 border-t">
        <BlogSection />
      </section>

      {/* Contact Info Section */}
      <ModernContactSection />
    </main>
  );
}
