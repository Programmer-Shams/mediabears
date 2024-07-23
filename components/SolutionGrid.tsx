import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function SolutionGrid() {
  return (
    <BentoGrid className="md:auto-rows-[27rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={`${item.className} ${getClassNameForIndex(i)}`} // Combine the existing className with the one from getClassNameForIndex
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "More subscribers, more customers In automatic",
    description:
      "Are you looking to expand your reach and convert more leads into loyal customers? Look no further! Our service is designed to automatically show your account to individuals who are already interested in what you offer.",
    className: "",
    image: "/Images/subscribers.svg",
  },
  {
    title: "Fast Results Guaranteed",
    description:
      "Avoid Bots and Fake Subscribers with Mediabear, Mediabear helps you grow your account with real followers who are genuinely interested in your content. Say goodbye to fake subscribers and hello to meaningful engagement and authentic growth.",
    className: "",
    image: "/Images/fast.svg",
  },
  {
    title: "Get Ahead of Your Competition",
    description:
      "Mediabear empowers you to surpass your competitors by automating your interactions with prospects. Achieve greater visibility, increase your subscriber base, and convert more customers with minimal effort.",
    className: "",
    image: "/Images/competition.svg",
  },
  {
    title: "Real Followers, Real Interest",
    description:
      "Our cutting-edge algorithm engages with your competitors' subscribers, bringing them to your account faster than ever. Experience rapid growth as we help you capture the attention of a ready-made audience.",
    className: "",
    image: "/Images/followers.svg",
  },
];

const getClassNameForIndex = (index: number): string => {
  switch (index) {
    case 0:
      return "md:col-span-2"; // First item takes equal width
    case 1:
      return "md:col-span-1"; // Second item takes equal width
    case 2:
      return "md:col-span-1"; // Third item remains the same
    case 3:
      return "md:col-span-2"; // Fourth item remains the same
    default:
      return ""; // Default class for other items if any
  }
};
