import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="px-5 md:px-20 py-20 flex items-center justify-center bg-bgColor mt-10" id="faqs">
      <div className="w-full md:w-[70%]">
        <h1 className="text-blue-950 text-center text-[20px] md:text-[40px] font-bold">Frequently asked <span className="text-primary">Questions</span></h1>
        <Accordion type="single" collapsible className="flex flex-col gap-5 mt-5">
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:text-lg text-gray-600">
              How many subscribers can I earn ?
            </AccordionTrigger>
            <AccordionContent className=" text-textColor text-[15px] tracking-wide">
              The number of subscribers you can earn varies according to the
              quality and regularity of your content. We can't give precise
              figures (by the way, don't listen to those who promise you exact
              numbers, they lie) However, be aware that only real and qualified
              users will follow you. Your branding is essential to attract these
              followers. We do not use contests or paid subscribers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:text-lg text-gray-600">
              Are they qualified subscribers ?
            </AccordionTrigger>
            <AccordionContent className=" text-textColor text-[15px] tracking-wide">
              Yes, absolutely. Our AI analyzes and filters the followers of your
              competitors to interact only with the most active and committed.
              Since your targets are accounts similar to yours, this ensures
              that the subscribers you earn are not only real and active, but
              also highly qualified and interested in your domain.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:text-lg text-gray-600">
              Can I cancel my subscription ?
            </AccordionTrigger>
            <AccordionContent className=" text-textColor text-[15px] tracking-wide">
              Yes, our subscriptions operate by period (weekly, monthly, etc.)
              you can cancel at any time the time the period ends and you will
              not be charged for the next period.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:text-lg text-gray-600">
              Can I use MediaBear on multiple accounts ?
            </AccordionTrigger>
            <AccordionContent className=" text-textColor text-[15px] tracking-wide">
              Yes, all our offers are available for one or more accounts.
              Contact us to find out our low prices for multi-account
              subscriptions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="md:text-lg text-gray-600">
              How many subscribers can I earn ?
            </AccordionTrigger>
            <AccordionContent className=" text-textColor text-[15px] tracking-wide">
              The number of subscribers you can earn varies according to the
              quality and regularity of your content. We can't give precise
              figures (by the way, don't listen to those who promise you exact
              numbers, they lie) However, be aware that only real and qualified
              users will follow you. Your branding is essential to attract these
              followers. We do not use contests or paid subscribers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
