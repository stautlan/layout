import React from 'react'
import ShopCard from './ShopCard'

const CardsView = ({items}) => {
  return (
    <div className='cardsView'>
        {items.map((item, index) => (<ShopCard item={item} key={item.name+index} />))}
    </div>
  )
}

export default CardsView;