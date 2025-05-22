"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We help our clients present extraordinary apps to the world by providing your business a full-fledged identity and extending your brand.",
    icons: [
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/android.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg",
    ],
  },
  {
    title: "Website Development",
    description:
      "We produce responsive websites that help clients present amazing and informative content without any hassle.",
    icons: [
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
    ],
  },
  {
    title: "Open Source & E-Commerce",
    description:
      "We provide you the most specialized solutions, regardless of the scope and design of your online business.",
    icons: [
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/magento.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/drupal.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/joomla.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg",
    ],
  },
  {
    title: "Search Engine Optimization",
    description:
      "We help you to increase your leads and sales by providing you with site analysis, on-page SEO, and other strategies.",
    icons: [
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/seo.svg",
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
    ],
  },
];

export default function ServicesSpotlight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {services.map((service) => (
        <div
          key={service.title}
          className={cn(
            "bg-white border border-neutral-200 shadow-lg h-full flex flex-col"
          )}
          style={{ backgroundColor: "#f3f4f6" }}
        >
          <div className="flex-1 flex flex-col">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              {service.title}
            </p>
            <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
              {service.description}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              {service.icons.map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  alt=""
                  className="h-7 w-7"
                  width={28}
                  height={28}
                />
              ))}
            </div>
          </div>
          <button className="mt-8 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition w-fit">
            Explore
          </button>
        </div>
      ))}
    </div>
  );
}
