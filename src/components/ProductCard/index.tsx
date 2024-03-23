import React from 'react'
import Image from 'next/image'


interface ItemProps {
        id: number;
        name: string;
        type: string;
        size: string;
        image: string;
        price: string;
        freebies: string;
}

export const ProductCard = ({item, id}: {item: ItemProps, id: number}) => {
  return (
    <div className='rounded-lg shadow-lg p-2 space-y-2 flex flex-col justify-between' key={id}>
              <Image className='rounded-lg' width={264} height={264} src={item.image} alt=""/>
              <p className='text-blue font-bold mt-4'>{item.name}</p>
              <p className='text-gray text-sm'>Product: <span className='font-semibold'>{item.type}</span> {item.size.length > 0 &&<span className='font-semibold'>• Size: {item.size}</span>}</p>
              <p className='text-blue font-bold'>{item.price}</p>
              <div className='flex bg-[#FCEED5] rounded-lg px-4 py-2 space-x-1'>
                  <Image width={20} height={20} alt='' src='/gift.svg'/>
                  <p className='font-semibold text-blue w-full text-sm'> • {item.freebies}</p>
              </div>
            </div>
  )
}