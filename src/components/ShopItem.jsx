import React from 'react'

const ShopItem = ({item}) => {
    return (
        <>
        <div className='item-row'>
            <img src={item.img} />
            <span>{item.name}</span>
            <span>{item.color}</span>
            <span>${item.price}</span>
            <button>ADD TO CARD</button>
        </div>
        </>
      )
}

export default ShopItem