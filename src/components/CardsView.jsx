import React from 'react'
import ShopCard from './ShopCard'

const CardsView = ({items}) => {
  return (
    <div className='main'>
        {items.map((item, index) => (<ShopCard item={item} key={index} />))}
    </div>
  )
}

export default CardsView