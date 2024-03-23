import Image from "next/image";
import { blogs, pet_list, product_list, seller_images } from "@/constants";
import { PetCard, BlogCard, ProductCard  } from "@/components";
import React from "react";
import dynamic from "next/dynamic";

const HeaderWeb = dynamic(() => import('@/components/HeaderWeb'))
const HeaderMobile = dynamic(() => import('@/components/HeaderMobile'))
const AdoptCardWeb = dynamic(() => import('@/components/AdoptCardWeb'))
const AdoptCardMobile = dynamic(() => import('@/components/AdoptCardMobile'))


export default function Home() {
  return (
    <main className="lg:max-w-7xl w-[100vw]">
      {/* Hero/Jumbotron */}
      <HeaderWeb/>
      <HeaderMobile/>
      <header className="pt-4 lg:pt-24 space-y-56 bg-[#FBEED5] px-4 lg:px-24 flex lg:flex-row flex-col">
        <section className="text-blue space-y-4 w-full lg:w-1/2">
        <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold mt-4">One More Friend</h1>
        <h2 className="text-1xl text-center lg:text-left font-semibold ">Thousands More Fun!</h2>
        <p className="font-semibold">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
        <div className="flex mb-10 space-x-4 lg:space-x-2 justify-center lg:justify-start">
          <button className="rounded-full border text-blue border-blue flex items-center space-x-1 px-4 py-2"><p>View Intro</p><Image className="border border-blue rounded-full" alt="" src='/play_button.svg' width={24} height={24}/></button>
          <button className="rounded-full bg-blue text-white px-4 py-2"><p>Explore Now</p></button>
        </div>
        <Image width={635} height={635} alt="" src='/shapes/rect_4.svg' className="lg:block hidden"/>
        </section>
        <section className="lg:w-1/2 w-full relative">
          <Image width={635} height={635} alt="" src='/shapes/rect_2.svg' className="absolute bottom-0"/>
          <Image width={635} height={635} alt="" src='/shapes/rect_3.svg' className="absolute bottom-0"/>
          <Image width={944} height={693} alt="" src='/hero_1.webp' className="absolute bottom-0"/>
        </section>
      </header>
      {/* Adoption List */}
      <section className=" px-4 lg:px-24 pt-8">
        <div className="flex justify-between items-end">
          <div>
        <h5 className="text-sm lg:text-base text-blue font-semibold">What&apos;s New?</h5>
        <h1 className="text-base lg:text-2xl text-blue font-bold">Take A Look At Some Of Our Pets</h1>
        </div>
        <button className="lg:block hidden rounded-full border-blue border px-4 py-2">View More</button>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-8">
          {
            pet_list.map((item, id) => <React.Fragment key={id}><PetCard id={id} item={item}/></React.Fragment>)
          }
        </div>
        <button className="lg:hidden block rounded-full border-blue border mt-8 w-full px-4 py-2">View More</button>
      </section>
      {/* Divider */}
        <AdoptCardWeb/>
        {/* <AdoptCardMobile/> */}
      {/* Item List */}
      <section className="lg:block hidden lg:px-24 pt-8">
        <div className="flex justify-between items-end">
          <div>
        <h5 className="text-blue font-semibold">Hard to choose right products for your pets?</h5>
        <h1 className="text-2xl text-blue font-bold">Our Products</h1>
        </div>
        <button className="rounded-full border-blue border px-4 py-2">View More</button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8"> 
          {
            product_list.map((item, id) => <React.Fragment key={id}><ProductCard id={id} item={item}/></React.Fragment>)
          }
        </div>
      </section>
      {/* Sellers */}
      <section className="px-24 mt-8">
      <div className="flex justify-between items-end">
        <h5 className="text-blue font-semibold">Proud to be part of <span className="text-lg font-bold">Pet Sellers</span></h5>
        <button className="rounded-full border-blue border px-4 py-2">View All Our Sellers</button>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          {
            seller_images.map((image, id) => <div key={id} className="w-auto h-auto p-4"><Image className="" alt="" src={image} height={48} width={80}/></div>)
          }
        </div>
      </section>
      {/* Divider */}
      <section className="lg:flex hidden mx-24 mt-8 z-10 relative rounded-lg bg-[#FFB775] px-16">
      <div className="w-1/2 text-blue">
        <div className=" text-5xl font-bold mt-10 flex space-x-2"><span>Adoption</span><Image alt="" height={42} width={38} src='/paw.svg'/></div>
        <h2 className="text-4xl font-semibold">We need help. so do they.</h2>
        <p className="font-semibold text-xs mt-2">Adopt a pet and give it a home, it will be love you back unconditionally.</p>
        <div className="flex space-x-2 mt-10">
          <button className="rounded-full border text-blue border-blue flex items-center space-x-1 px-4 py-2"><p>View Intro</p><Image className="border border-blue rounded-full" alt="" src='/play_button.svg' width={24} height={24}/></button>
          <button className="rounded-full bg-blue text-white px-4 py-2"><p>Explore Now</p></button>
        </div>
        </div>
        <Image className="absolute h-full left-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_8.svg'/>
        <Image src='/section_1.webp' alt="" height={342} width={513} />
      <Image className="absolute h-full top-0 right-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_7.svg'/>
      </section>
      {/* Blog */}
      <section className="px-4 lg:px-24 pt-8">
        <div className="flex justify-between items-end">
          <div>
        <h5 className="text-blue font-semibold">You already know?</h5>
        <h1 className="text-2xl text-blue font-bold">Useful pet knowledge</h1>
        </div>
        <button className="rounded-full border-blue border px-4 py-2">View More</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8"> 
          {
            blogs.map((item, id) => <React.Fragment key={id}><BlogCard id={id} item={item}/></React.Fragment>)
          }
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#FCEDD2] mt-12 px-4 lg:px-24 py-6 rounded-tr-lg rounded-tl-lg">
            <div className="bg-[#003459] flex lg:flex-row flex-col rounded-lg px-4 py-6 items-center justify-between space-y-2 lg:space-x-4">
              <h1 className="text-xl text-white font-bold w-full lg:w-1/3">Register now so you don&apos;t miss our programs</h1>
              <div className="bg-white rounded-lg p-2 space-y-2 lg:space-x-2 w-full lg:w-2/3 flex lg:flex-row flex-col justify-between">
                <input placeholder="Enter your email" className="border px-4 py-2 rounded-lg w-full lg:w-3/4"/>
                <button className="text-white font-semibold rounded-lg bg-[#003459] px-4 w-full lg:w-1/4 py-2">Subscribe Now</button>
              </div>
            </div>

            <div className="flex lg:flex-row space-y-4 lg:space-y-0 flex-col justify-between items-center my-6 lg:my-12">
              <ul className="flex space-x-8 font-semibold text-blue">
                <li>Home</li>
                <li>Category</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <ul className="flex space-x-4">
                <li><Image height={24} width={24} alt="" src='/icons/Facebook.svg'/></li>
                <li><Image height={24} width={24} alt="" src='/icons/Instagram.svg'/></li>
                <li><Image height={24} width={24} alt="" src='/icons/Twitter.svg'/></li>
                <li><Image height={24} width={24} alt="" src='/icons/YouTube.svg'/></li>
              </ul>
            </div>
            <hr  className="h-[0.5px] bg-gray border-none mb-12"/>
            <div className="lg:flex hidden lg:flex-row flex-col justify-between items-center">
              <p className="text-[#667479]">© 2022 Monito. All rights reserved.</p>
                <Image alt="logo" width={115} height={40} src='/logo.svg'/>
              <div className="flex space-x-4 text-gray"><p>Terms of Service</p><p>Privacy Policy</p></div>
            </div>
            <div className="flex lg:hidden lg:flex-row flex-col justify-between items-center space-y-2">
            <Image alt="logo" width={115} height={40} src='/logo.svg'/>
            <div className="flex space-x-4 text-gray"><p>Terms of Service</p><p>Privacy Policy</p></div>
              <p className="text-[#667479]">© 2022 Monito. All rights reserved.</p>
            </div>
      </footer>
    </main>
  );
}
