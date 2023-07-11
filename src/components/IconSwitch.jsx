import React, { useState } from 'react'

const IconSwitch = ({onSwitch}) => {
    const [state, setState] = useState(0)
    const [stateName, setStateName] = useState('Карточки')

    const handlerSwitch = () => {
      state == 0 ? setState(1) : setState(0);
      state == 0 ? setStateName('Карточки') : setStateName('Список')
      console.log(state);
      onSwitch(state);
      console.log('click IconSwitch')
    }
  return (
    <div className='icon-wrapper'>
        <button onClick={() => handlerSwitch()}>{stateName}</button>
    </div>
  )
}

export default IconSwitch