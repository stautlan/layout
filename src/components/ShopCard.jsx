import React from 'react'

const ShopCard = ({item}) => {
  /*const style = {
    header: {
      content: `${item.name}`,
      top: '200px',
      left: '50px',
      width: '100px',
    }
  }*/
  return (
    <div className="shopCard">
      <div className="shopCard__name">{(item.name).toUpperCase()}</div>
      <div className="shopCard__color">{item.color}</div>
      <img className="shopCard__img" src={item.img} alt={item.name}></img>
      <div className="shopCard__footer">
        <div className="shopCard__price">${item.price}</div>
        <button className="shopCard__button btn">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopCard