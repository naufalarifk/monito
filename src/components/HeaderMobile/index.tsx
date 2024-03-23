import Image from 'next/image'
import React from 'react'

const HeaderMobile = () => {
  return (
    <nav className='justify-between relative z-10 flex lg:hidden bg-[#FBEED5] px-4 py-10'>
    <Image className="absolute top-0 left-0 -z-10" width={635} height={635} alt="" src='/shapes/rect_1.svg'/>
      <Image width={32} height={32} alt="search" src='/hamburger.svg'/>
      <Image alt="logo" width={115} height={40} src='/logo.svg'/>
      <Image width={32} height={32} alt="search" src='/u_search.svg'/>
    </nav>
  )
}

export default HeaderMobile