import React from 'react'
import Image from 'next/image'


interface ItemProps {
        id: number;
        image: string;
        code: string;
        name: string;
        gene: string;
        age: string;
        price: string;
}

export const PetCard = ({item, id}: {item: ItemProps, id: number}) => {
  return (
    <div className='rounded-lg shadow-lg p-2 space-y-2' key={id}>
              <Image className='rounded-lg' width={264} height={264} src={item.image} alt=""/>
              <p className='text-blue font-bold mt-4'>{item.code} - {item.name}</p>
              <p className='text-gray text-sm'>Gene: <span className='font-semibold'>{item.gene}</span> • Age: <span className='font-semibold'>{item.age}</span></p>
              <p className='text-blue font-bold'>{item.price} VND</p>
            </div>
  )
}