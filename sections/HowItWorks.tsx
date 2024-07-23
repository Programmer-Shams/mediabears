import WorkBox from '@/components/WorkBox'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className='px-6 py-10 md:px-32 md:py-20 bg-bgColor' id='workflow'>
        <div className="">
        <h1 className="text-center text-[20px] md:text-[40px] text-blue-950 font-semibold pt-4">
        How it  <span className="text-primary">works</span>
        </h1>
        <p className=" text-textColor text-center text-[16.5px]">
        Innovative and tailored solutions designed to meet your unique <br /> needs and drive your success.
        </p>
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-20">
        <WorkBox
            index={1}
            bgColor='#C8C8E9'
            textColor='#3B3A97'
            heading='Setting Up MediaBear'
            body='After paying for your subscription, all you have to do is connect your account to our algorithm and fill in the Instagram accounts of your competitors. Setting up an account takes less than five minutes.'
        />
        <WorkBox
            index={2}
            bgColor='#EDEBFE'
            textColor='#5850EC'
            heading='Automatic & natural interaction'
            body='Our algorithm will interact with the best subscribers of your competitors in order to let them discover your account. We perform these actions within the daily limits of Instagram, no worries about being banned.'
        />
        <WorkBox
            index={3}
            bgColor='#D5F5F6'
            textColor='#047481'
            heading='Watch your account grow'
            body='Surprise! Contrary to expectations You are left to observe your account growth, with a constant stream of notifications flooding your inbox. This measured approach keeps your account safe and avoids any risk of suspension.'
        />
      </div>
    </section>
  )
}

export default HowItWorks