import React from 'react'
import Image from 'next/image'


interface ItemProps {
        id: number;
        image: string;
        title: string;
        tags: string;
        subtitle: string
}

export const BlogCard = ({item, id}: {item: ItemProps, id: number}) => {
  return (
    <div className='rounded-lg shadow-lg p-2 flex flex-col space-y-2' key={id}>
        <Image className='rounded-lg w-full' width={264} height={264} src={item.image} alt=""/>
        <span className='rounded-full mt-4 px-2 py-1 text-white bg-[#00A7E7] w-fit'>{item.tags}</span>
        <h1 className='font-bold text-lg'>{item.title}</h1>
        <p className='text-sm'>{item.subtitle}</p>
    </div>
  )
}