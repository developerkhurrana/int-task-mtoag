"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // width of one blog card
      const newScroll =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  const blogs = [
    {
      author: "John Anderson",
      title: "We built an AI chess bot with ChatGPT",
      description:
        "Discover how we leveraged OpenAI's ChatGPT to create a smart chess bot that adapts to your play style.",
      image:
        "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1000",
    },
    {
      author: "Kyle Parsons",
      title: "How to grow your personal brand as a web designer",
      description:
        "Tips and strategies for web designers to build a strong personal brand and attract more clients.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    },
    {
      author: "Andrea Bates",
      title: "Calm down, monoliths are totally fine",
      description:
        "A deep dive into the pros and cons of monolithic architectures and why they still matter in 2024.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    },
    {
      author: "Jess Drum",
      title: "A quick guide to Framer Motion (for dummies)",
      description:
        "Learn how to add beautiful animations to your React apps using Framer Motion, with simple code examples.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000",
    },
    {
      author: "Phil White",
      title: "You probably don't need kubernetes",
      description:
        "Why Kubernetes isn't always the answer for every project, and when to consider simpler alternatives.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000",
    },
    {
      author: "Karen Peabody",
      title: "State of JavaScript in 2024",
      description:
        "An overview of the latest trends, frameworks, and features in the JavaScript ecosystem this year.",
      image:
        "https://images.unsplash.com/photo-1555066931-bf19f8fd80f5?q=80&w=1000",
    },
    {
      author: "Dante Gordon",
      title: "What's new in Python?",
      description:
        "Explore the newest features and updates in Python, and how they can benefit your next project.",
      image:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaecb?q=80&w=1000",
    },
  ];

  return (
    <div className="relative overflow-hidden p-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
            Latest News & Blogs
          </h2>
        </div>
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-8 z-10 rounded-full border-2 border-orange-500 bg-white p-2 text-orange-500 shadow transition-all hover:bg-orange-500 hover:text-white"
            aria-label="Scroll left"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-8 z-10 rounded-full border-2 border-orange-500 bg-white p-2 text-orange-500 shadow transition-all hover:bg-orange-500 hover:text-white"
            aria-label="Scroll right"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 gap-5 scrollbar-hide px-8"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
                style={{ width: "350px" }}
              >
                <img
                  src={blog.image}
                  className="mb-3 h-[200px] w-full rounded-lg object-cover"
                  alt={`An image for a blog post titled ${blog.title}`}
                />
                <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
                  {blog.author}
                </span>
                <p className="mt-1.5 text-lg font-medium">{blog.title}</p>
                <p className="text-sm text-neutral-500">{blog.description}</p>
              </div>
            ))}
          </div>
          <div className="block md:hidden text-center text-xs text-gray-400 mt-2 select-none">
            Swipe to scroll
          </div>
        </div>
      </div>
    </div>
  );
}
