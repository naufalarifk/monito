import Image from "next/image";
import { pet_list } from "@/constants";
import { CardList  } from "@/components";
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
        <h5 className="text-blue font-semibold">What's New?</h5>
        <h1 className="text-2xl text-blue font-bold">Take A Look At Some Of Our Pets</h1>
        </div>
        <button className="rounded-full border-blue border px-4 py-2">View More</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {
            pet_list.map((item, id) => <CardList id={id} item={item}/>)
          }
        </div>
      </section>
    </main>
  );
}
