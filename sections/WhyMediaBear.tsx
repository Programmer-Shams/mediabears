import React from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { GrFormView } from "react-icons/gr";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { IoHeartDislikeCircle } from "react-icons/io5";
import { AiFillInteraction } from "react-icons/ai";
import { HoverEffect } from '@/components/ui/card-hover-effect';

const WhyMediaBear = () => {
  return (
    <section className="bg-bgColor px-5 py-10 md:px-32 md:py-20" id='features'>
      <div className="">
        <p className='text-center text-primary'>WHY MEDIA BEAR</p>
        <h1 className="text-center text-[20px] md:text-[40px] text-blue-950 font-semibold pt-5 md:pt-4">The Ultimate Solution for <span className="text-primary">Sustainable Growth</span></h1>
        <p className=' text-textColor text-center text-[16.5px] mt-4'>Achieve lasting success with innovative strategies designed to drive <br /> consistent, sustainable growth and propel your business forward.</p>
      </div>
      <HoverEffect items={projects} />
    </section>
  )
}
export const projects = [
    {
      title: "Banning is impossible",
      description:
        "You cannot be banned or shadowbanned because our personalized algorithm manages everything.",
      icon: <VscWorkspaceTrusted size={35}/>
    },
    {
      title: "Mass Story Views",
      description:
        "Discover a powerful tool that automates the viewing of your competitors' top subscribers' stories, giving you strategic insights and expanding your reach effortlessly.",
      icon: <GrFormView size={40}/>,
    },
    {
      title: "Welcome Direct Message",
      description:
        "Craft a personalized welcome experience for every new subscriber with our customizable welcome message feature.",
      icon: <BsFillChatTextFill size={30}/>,
    },
    {
      title: "Follow and Unsubscribe",
      description:
        "Daily engagement involves following approximately fifty accounts to encourage reciprocal follows, followed by unfollowing after a few days.",
      icon: <FaUserCheck size={35}/>
    },
    {
      title: " Mass Viewing of Feed Story",
      description:
        "Discover our powerful tool designed to automate the viewing of feed stories from your competitors' most engaged subscribers",
      icon: <IoHeartDislikeCircle size={35}/>,
    },
    {
      title: "nteraction With Stories",
      description:
        "Empower your strategy with our algorithm designed to interact with stories from your competitors' top subscribers",
      icon: <AiFillInteraction size={35} />,
    },
  ];
export default WhyMediaBear