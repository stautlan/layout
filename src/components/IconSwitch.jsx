import React from 'react'

const IconSwitch = ({icon, onSwitch}) => {
    const handlerSwitch = () => {
        onSwitch();
        console.log('click IconSwitch')
    }
  return (
    <div>
        <img src={icon.img} />
        <button onClick={() => handlerSwitch()}>Выбор</button>
    </div>
  )
}

export default IconSwitch