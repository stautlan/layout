import React from 'react'
import ShopItem from './ShopItem'

const ListView = ({items}) => {
  return (
    <div className='main-row'>
        {items.map((item, index) => (<ShopItem item={item} key={index}/>))}
    </div>
  )
}

export default ListView