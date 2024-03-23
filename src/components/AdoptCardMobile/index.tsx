import React from 'react'
import Image from 'next/image'

const AdoptCardMobile = () => {
  return (
    <section className="flex flex-col-reverse lg:hidden mx-4 mt-8 z-10 relative rounded-lg bg-[#003459]">
    <Image src='/section_1.webp' alt="" height={342} width={513} />
    <Image className="absolute bottom-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_5.svg'/>
    <div className="w-full text-blue">
    <h1 className=" text-3xl font-bold mt-10 text-center">One More Friend</h1>
    <h2 className="text-2xl font-semibold text-center">Thousands More Fun!</h2>
    <p className="font-semibold text-xs text-center">Having a pet means you have more joy, a new friend,<br/> a happy person who will always be with you to have fun. <br /> We have 200+ different pets that can meet your needs!</p>
    <div className="flex space-x-2 justify-center my-4">
      <button className="rounded-full border text-blue border-blue flex items-center space-x-1 px-4 py-2"><p>View Intro</p><Image className="border border-blue rounded-full" alt="" src='/play_button.svg' width={24} height={24}/></button>
      <button className="rounded-full bg-blue text-white px-4 py-2"><p>Explore Now</p></button>
    </div>
    </div>
  <Image className="absolute h-auto top-0 right-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_1mobile.svg'/>
  </section>
  )
}

export default AdoptCardMobile