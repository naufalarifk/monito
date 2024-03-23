import Image from "next/image";
import { blogs, pet_list, product_list, seller_images } from "@/constants";
import { PetCard, BlogCard, ProductCard  } from "@/components";
import React from "react";
export default function Home() {
  return (
    <main className="max-w-7xl">
      {/* Hero/Jumbotron */}
      <nav className='relative flex items-center justify-between w-full px-24 pt-8 z-10 bg-[#FBEED5]'>
      <Image className="absolute -top-10 -left-32 -z-10" width={635} height={635} alt="" src='/shapes/rect_1.svg'/>
        <Image alt="logo" width={115} height={40} src='/logo.svg'/>
        <ul className='flex text-blue font-semibold space-x-10'>
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <form className="flex space-x-2">
          <div className="flex bg-white rounded-full px-4 py-3 space-x-1">
            <Image width={20} height={20} alt="search" src='/u_search.svg'/>
        <input className="bg-transparent" type="text" name="search" id="input-search" placeholder="Search something here" />
        </div>
        <button className="rounded-full bg-blue px-4 py-2 font-semibold text-white">Join the community</button>
        <div className="flex items-center">
          <Image width={20} height={20} alt="flag" src='/viet_flag.svg'/>
          <p>VND</p>
          <Image width={20} height={20} alt="flag" src='/dropdown.svg'/>
          </div>
        </form>
      </nav>
      <header className="pt-24 bg-[#FBEED5] px-24 flex">
        <section className="text-blue space-y-4 w-1/2">
        <h1 className=" text-5xl font-bold mt-4">One More Friend</h1>
        <h2 className="text-4xl font-semibold ">Thousands More Fun!</h2>
        <p className="font-semibold">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
        <div className="flex mb-10 space-x-2">
          <button className="rounded-full border text-blue border-blue flex items-center space-x-1 px-4 py-2"><p>View Intro</p><Image className="border border-blue rounded-full" alt="" src='/play_button.svg' width={24} height={24}/></button>
          <button className="rounded-full bg-blue text-white px-4 py-2"><p>Explore Now</p></button>
        </div>
        <Image width={635} height={635} alt="" src='/shapes/rect_4.svg' className=""/>
        </section>
        <section className="w-1/2 relative">
          <Image width={635} height={635} alt="" src='/shapes/rect_2.svg' className="absolute bottom-0"/>
          <Image width={635} height={635} alt="" src='/shapes/rect_3.svg' className="absolute bottom-0"/>
          <Image width={944} height={693} alt="" src='/hero_1.webp' className="absolute bottom-0"/>
        </section>
      </header>
      {/* Adoption List */}
      <section className="px-24 pt-8">
        <div className="flex justify-between items-end">
          <div>
        <h5 className="text-blue font-semibold">What&apos;s New?</h5>
        <h1 className="text-2xl text-blue font-bold">Take A Look At Some Of Our Pets</h1>
        </div>
        <button className="rounded-full border-blue border px-4 py-2">View More</button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {
            pet_list.map((item, id) => <React.Fragment key={id}><PetCard id={id} item={item}/></React.Fragment>)
          }
        </div>
      </section>
      {/* Divider */}
      <section className="mx-24 mt-8 z-10 relative rounded-lg bg-[#003459] flex">
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
      <Image className="absolute h-full top-0 right-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_6.svg'/>
      </section>
      {/* Item List */}
      <section className="px-24 pt-8">
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
      <section className="mx-24 mt-8 z-10 relative rounded-lg bg-[#FFB775] flex px-16">
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
      <section className="px-24 pt-8">
        <div className="flex justify-between items-end">
          <div>
        <h5 className="text-blue font-semibold">You already know?</h5>
        <h1 className="text-2xl text-blue font-bold">Useful pet knowledge</h1>
        </div>
        <button className="rounded-full border-blue border px-4 py-2">View More</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8"> 
          {
            blogs.map((item, id) => <React.Fragment key={id}><BlogCard id={id} item={item}/></React.Fragment>)
          }
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#FCEDD2] mt-12 px-24 py-6 rounded-tr-lg rounded-tl-lg">
            <div className="bg-[#003459] flex rounded-lg px-4 py-6 items-center justify-between space-x-4">
              <h1 className="text-xl text-white font-bold w-1/3">Register now so you don't miss our programs</h1>
              <div className="bg-white rounded-lg p-2 space-x-2 w-2/3 flex justify-between">
                <input placeholder="Enter your email" className="border px-4 py-2 rounded-lg w-3/4"/>
                <button className="text-white font-semibold rounded-lg bg-[#003459] px-4 py-2">Subscribe Now</button>
              </div>
            </div>

            <div className="flex justify-between items-center my-12">
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
            <div className="flex justify-between items-center">
              <p className="text-[#667479]">© 2022 Monito. All rights reserved.</p>
        <Image alt="logo" width={115} height={40} src='/logo.svg'/>
              <div className="flex space-x-4 text-gray"><p>Terms of Service</p><p>Privacy Policy</p></div>
            </div>
      </footer>
    </main>
  );
}
