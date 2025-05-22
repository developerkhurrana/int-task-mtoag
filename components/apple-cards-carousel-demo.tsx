"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="relative w-full">
          <Carousel items={cards} />
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    category: "Construction Project Management Software",
    title: "PlanTech",
    src: "https://www.mtoag.com/wp-content/themes/mtoag/assets/images/plantech-mobile-cash-study.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            PlanTech, a well-established US based construction company with huge
            projects.
          </span>
        </p>
        <img
          src="https://www.mtoag.com/wp-content/themes/mtoag/assets/images/plantech-mobile-cash-study.png"
          alt="PlanTech"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Betfair Automated Betting Bot",
    title: "Betfair Bot",
    src: "https://www.mtoag.com/wp-content/themes/mtoag/assets/images/betfaircaseimg.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            An app that makes your betting experience more automated and
            interesting.
          </span>
        </p>
        <img
          src="https://www.mtoag.com/wp-content/themes/mtoag/assets/images/betfaircaseimg.jpg"
          alt="Betfair Bot"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "On-Demand Delivery App",
    title: "Construction Delivery",
    src: "https://www.mtoag.com/wp-content/themes/mtoag/assets/images/getitcaseimg.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            An app that provides construction workers, vendors, and drivers to
            provide construction material at one go.
          </span>
        </p>
        <img
          src="https://www.mtoag.com/wp-content/themes/mtoag/assets/images/getitcaseimg.jpg"
          alt="Construction Delivery"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Loan Lending App",
    title: "Lebanon Insurance",
    src: "https://www.mtoag.com/wp-content/themes/mtoag/assets/images/money-mobile-cash-study_full.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The oldest insurance company of Lebanon reached out to us.
          </span>
        </p>
        <img
          src="https://www.mtoag.com/wp-content/themes/mtoag/assets/images/money-mobile-cash-study_full.png"
          alt="Lebanon Insurance"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
];
