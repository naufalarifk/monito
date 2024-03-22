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

export const CardList = ({item, id}: {item: ItemProps, id: number}) => {
  return (
    <div className='rounded-lg shadow-lg' key={id}>
              <Image width={264} height={264} src={item.image} alt=""/>
              <p>{item.name}</p>
            </div>
  )
}