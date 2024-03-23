import React from 'react'
import Image from 'next/image'


 const HeaderWeb = () => {
  return (
    <nav className='relative items-center justify-between w-full px-24 pt-8 z-10 bg-[#FBEED5] lg:flex hidden'>
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
  )
}

export default HeaderWeb