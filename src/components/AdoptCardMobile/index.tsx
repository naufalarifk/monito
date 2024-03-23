import React from 'react'
import Image from 'next/image'

const AdoptCardMobile = () => {
  return (
    <section className="hidden lg:flex-row flex-col-reverse mx-24 mt-8 z-10 relative rounded-lg bg-[#003459]">
    <Image src='/section_1.webp' alt="" height={342} width={513} />
    <Image className="absolute bottom-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_5.svg'/>
    <div className="w-1/2 text-blue">
    <h1 className=" text-5xl font-bold mt-10 text-right">One More Friend</h1>
    <h2 className="text-4xl font-semibold text-right">Thousands More Fun!</h2>
    <p className="font-semibold text-right">Having a pet means you have more joy, a new friend,<br/> a happy person who will always be with you to have fun. <br /> We have 200+ different pets that can meet your needs!</p>
    <div className="flex space-x-2 justify-end mt-10">
      <button className="rounded-full border text-blue border-blue flex items-center space-x-1 px-4 py-2"><p>View Intro</p><Image className="border border-blue rounded-full" alt="" src='/play_button.svg' width={24} height={24}/></button>
      <button className="rounded-full bg-blue text-white px-4 py-2"><p>Explore Now</p></button>
    </div>
    </div>
  <Image className="absolute h-auto top-0 right-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_6.svg'/>
  </section>
  )
}

export default AdoptCardMobile