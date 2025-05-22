"use client";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"></path>
      </svg>
    ),
    text: `MTOAG delivered our project on time and exceeded our expectations. Their team was responsive and creative throughout the process.`,
    name: "Jane Dodson",
    title: "Marketing Director, Nike",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.12 11.084a.683.683 0 00-1.16.126L.075 22.974a.703.703 0 00.63 1.018h8.19a.678.678 0 00.63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 00-.906 15.317l3.95 7.9a.703.703 0 00.628.388h8.19a.703.703 0 00.63-1.017L12.63.38a.664.664 0 00-1.196.006z"></path>
      </svg>
    ),
    text: `The UX research and design from MTOAG helped us increase user engagement by 40%. Highly recommended!`,
    name: "Johnathan Rodriguez",
    title: "UX Research, Atlassian",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"></path>
      </svg>
    ),
    text: `We trusted MTOAG with our product launch and they delivered flawlessly. Their engineering team is top-notch!`,
    name: "Phil Heath",
    title: "Staff Engineer, Dribbble",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.708 9.556h-.84c-.048 0-.072.048-.072.072v1.828h-.84V9.628c0-.048-.048-.072-.072-.072h-.84c-.048 0-.072.048-.072.072v4.692c0 .048.048.072.072.072h.84c.048 0 .072-.048.072-.072v-1.876h.84v1.876c0 .048.048.072.072.072h.84c.048 0 .072-.048.072-.072V9.628c0-.024-.024-.072-.072-.072-.072m-7.08 0h-.84c-.048 0-.072.024-.072.072v3.324a.61.61 0 0 1-.12.384c-.072.096-.168.12-.288.12a.405.405 0 0 1-.288-.12.61.61 0 0 1-.12-.384V9.628c0-.048-.048-.072-.072-.072h-.84c-.048 0-.072.024-.072.072v3.348c0 .432.096.84.36 1.108.264.264.624.408 1.036.408.432 0 .796-.144 1.036-.408.264-.264.36-.648.36-1.108V9.628c-.004-.024-.028-.072-.08-.072m-8.232-.072c-.432 0-.796.144-1.036.408C.096 10.156 0 10.54 0 11v2c0 .432.096.84.36 1.108.264.264.624.408 1.036.408.432 0 .796-.144 1.036-.408.264-.264.36-.648.36-1.108v-1.104a.102.102 0 0 0-.096-.096H1.468a.102.102 0 0 0-.096.096v.82c0 .048.048.096.096.096h.316v.192a.676.676 0 0 1-.12.408c-.072.096-.168.12-.288.12a.405.405 0 0 1-.288-.12.69.69 0 0 1-.12-.408v-1.976c0-.168.048-.316.12-.408.072-.096.168-.12.288-.12.116 0 .216.048.288.12.072.096.12.24.12.408v.192c0 .048.048.072.072.072h.84c.048 0 .072-.024.072-.072v-.192c0-.432-.096-.84-.36-1.108-.216-.292-.604-.436-1.012-.436m10.832 3.828c-.072.096-.168.12-.316.12h-.48v-1.016h.48c.12 0 .216.048.288.12.079.104.121.23.12.36.008.2-.016.316-.092.416zm-.364-2.768c.12 0 .216.024.288.12.072.072.096.192.096.34s-.024.264-.096.36a.385.385 0 0 1-.264.12h-.432v-.94h.408zm.964 1.372c.144-.144.408-.48.408-.916 0-.508-.192-.82-.34-.988-.264-.288-.624-.432-1.036-.432h-1.316c-.048 0-.072.048-.072.072v4.696c0 .048.048.072.072.072.072h1.396c.432 0 .84-.168 1.108-.508.144-.192.316-.508.316-.988-.028-.576-.388-.916-.536-1.008zm-7.652-.46c-.072.096-.192.144-.34.144h-.408v-1.056h.408c.144 0 .264.048.34.144.096.096.12.216.12.384s-.02.288-.12.384zm.532.868c.096-.072.168-.12.24-.216.168-.192.384-.532.384-1.06 0-.508-.192-.84-.384-1.036-.24-.288-.6-.432-1.012-.456H3.54c-.048 0-.072.048-.072.072v4.692c0 .048.048.072.072.072h.84c.048 0 .072-.048.072-.072v-1.736h.288l.532 1.78c0 .024.048.048.072.048h.888c.024 0 .048-.024.072-.024s.024-.048.024-.072l-.62-1.992zm17.136.988c-.072.096-.168.12-.316.12h-.48v-1.016h.48c.12 0 .216.048.288.12.079.104.121.23.12.36.028.2-.016.316-.092.416zm-.34-2.768c.12 0 .216.024.288.12.072.072.096.192.096.34s-.024.264-.096.36a.385.385 0 0 1-.264.12h-.432v-.94h.408zm.964 1.372c.144-.144.408-.48.408-.916 0-.508-.192-.82-.34-.988-.264-.288-.624-.432-1.036-.432h-1.328c-.048 0-.072.048-.072.072v4.696c0 .048.048.072.072.072.072h1.404c.432 0 .84-.168 1.108-.508.144-.192.316-.508.316-.988a1.442 1.442 0 0 0-.532-1.008zm-3.224-2.36h-.84c-.048 0-.072.024-.072.072v3.324a.61.61 0 0 1-.12.384c-.072.096-.168.12-.288.12a.405.405 0 0 1-.288-.12.61.61 0 0 1-.12-.384V9.628c0-.048-.048-.072-.072-.072H17.6c-.048 0-.072.024-.072.072v3.348c0 .432.096.84.36 1.108.264.264.624.408 1.036.408.432 0 .796-.144 1.036-.408.264-.264.36-.648.36-1.108V9.628c.024-.024-.024-.072-.076-.072"></path>
      </svg>
    ),
    text: `MTOAG's marketing solutions helped us reach new customers and grow our brand online. Fantastic experience!`,
    name: "Andrea Beck",
    title: "Marketing Manager, GrubHub",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="text-7xl mx-auto"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
      </svg>
    ),
    text: `Their product management and support are outstanding. We look forward to working with MTOAG again!`,
    name: "Anderson Lima",
    title: "Product Manager, Slack",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 5000; // 5 seconds

  useEffect(() => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % testimonials.length);
          return 0;
        }
        return prev + 2;
      });
    }, duration / 50);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [current]);

  const handleNav = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
  };

  return (
    <div className="relative w-full bg-white">
      <section className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
            What our customers think
          </h2>
          <p className="text-slate-500 my-4">
            We value our clients&apos; feedback and strive to build lasting
            partnerships through exceptional service and results.
          </p>
          <div className="flex gap-1 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-1.5 w-full relative rounded transition-colors duration-300 ${
                  idx === current ? "bg-orange-200" : "bg-orange-100"
                }`}
                onClick={() => handleNav(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <span
                  className={`absolute top-0 left-0 bottom-0 rounded bg-orange-500 transition-all duration-300`}
                  style={{
                    width:
                      idx === current
                        ? `${progress}%`
                        : idx < current
                        ? "100%"
                        : "0%",
                  }}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 relative h-[450px] lg:h-[500px] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className={`w-full h-full rounded-3xl shadow-xl flex flex-col justify-between p-12 transition-all duration-500 ${"bg-orange-500 text-white"}`}
            >
              <div>{testimonials[current].icon}</div>
              <p className="text-lg lg:text-xl font-light italic my-8">
                &quot;{testimonials[current].text}&quot;
              </p>
              <div>
                <span className="block font-semibold text-lg">
                  {testimonials[current].name}
                </span>
                <span className="block text-sm">
                  {testimonials[current].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
