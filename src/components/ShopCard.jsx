import React from 'react'

const ShopCard = ({item}) => {
  return (
    <>
      <div className='item'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.color}</p>
          <img src={item.img} />
      </div>
    </>
  )
}

export default ShopCard