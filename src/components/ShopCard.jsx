import React from 'react'

const ShopCard = ({item}) => {
  const style = {
    header: {
      content: `${item.name}`,
      top: '200px',
      left: '50px',
      width: '100px',
    }
  }
  return (
    <>
      <div className='item'>
          <img src={item.img} />
          <p className='name'>{item.name}</p>
          <p className='color'>{item.color}</p>
          <p className='price'>${item.price}</p>
          <button>ADD TO CARD</button>
      </div>
    </>
  )
}

export default ShopCard