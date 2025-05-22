import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconDeviceMobile,
  IconWorldWww,
  IconShoppingCart,
  IconChartBar,
} from "@tabler/icons-react";

export default function BentoGridSecondDemo() {
  return (
    <div className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Mobile App Development",
    description:
      "We help our clients present extraordinary apps to the world by providing your business a full-fledged identity and extending your brand.",
    header: (
      <div className="w-full max-h-48 md:max-h-60 overflow-hidden">
        <img
          src="https://buildfire.com/wp-content/uploads/2024/09/become-mobile-app-developer-1.jpg"
          className="w-full h-full object-cover rounded-xl"
          alt="Mobile App"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconDeviceMobile className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Website Development",
    description:
      "We produce responsive websites that help clients present amazing and informative content without any hassle.",
    header: (
      <div className="w-full max-h-48 md:max-h-60 overflow-hidden">
        <img
          src="https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png"
          className="w-full h-full object-cover rounded-xl"
          alt="Website Development"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconWorldWww className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Open Source & E-Commerce",
    description:
      "We provide you the most specialized solutions, regardless of the scope and design of your online business.",
    header: (
      <div className="w-full max-h-48 md:max-h-60 overflow-hidden">
        <img
          src="https://kinsta.com/wp-content/uploads/2022/06/open-source-ecommerce.jpg"
          className="w-full h-full object-cover rounded-xl"
          alt="E-Commerce"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconShoppingCart className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Search Engine Optimization",
    description:
      "We help you to increase your leads and sales by providing you with site analysis, on-page SEO, and other strategies.",
    header: (
      <div className="w-full max-h-48 md:max-h-60 overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPnBRSbrQWb6m0bwzTeoedSNacH9gQ1Z4Vg&s"
          className="w-full h-full object-cover rounded-xl"
          alt="SEO"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconChartBar className="h-6 w-6 text-orange-500" />,
  },
];
